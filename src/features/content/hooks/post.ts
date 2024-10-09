import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { PostEntity } from "../../../entities/post-entity";
import { apiV1 } from "../../../libs/api";
import { useAppSelector } from "../../../store/hooks/use-store";
import { CreatePostFormInput, PostSchema } from "../../../schemas/post-schema";
import { CreatePostDTO } from "../types/post-dto";

export function usePost() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors,
            isSubmitting } } =
        useForm<CreatePostFormInput>({
            resolver: zodResolver(PostSchema)
        })

    const QueryClient = useQueryClient();
    const { id: authorID } = useAppSelector((state) => state.auth);

    async function GetPost() {
        const FetchPost = await apiV1.get<null, { data: PostEntity[] }>(`/post/${authorID}`);

        return FetchPost.data;
    }

    const { data, isLoading } = useQuery<PostEntity[], Error, PostEntity[]>({
        queryKey: ["post", authorID],
        queryFn: GetPost
    });

    async function CreatePost(data: CreatePostDTO) {
        const formData = new FormData();
        formData.append("content", data.content?.toString() ?? "");
        console.log(data.content);
        formData.append("authorID", authorID.toString());
        console.log(authorID);


        if (data.image) {
            formData.append("image", data.image[0])
        }

        console.log(formData.get("content"));
        console.log(formData.get("authorID"));



        const PostData = await apiV1.post(
            `/post`, formData, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`, "Content-Type": "multipart/form-data"
            }
        });
        console.log(PostData);
        QueryClient.invalidateQueries({
            queryKey: ["post", authorID]
        });

        return PostData.data
    }
    const { mutateAsync: createPostAsync } = useMutation<
        PostEntity,
        Error,
        CreatePostDTO>({
            mutationKey: ["CreatePost"],
            mutationFn: CreatePost
        });

    async function onSubmit(data: CreatePostFormInput) {
        const PostData: CreatePostDTO = {
            content: data.content,
            image: data.image,
            authorID
        }
        try {
            await createPostAsync(PostData);
            QueryClient.invalidateQueries({
                queryKey: ["post"]
            });
            reset();
            alert("Post Created Successfully !!!");
        } catch (error) {
            console.log("Error creating post : ", error);
            alert("Failed to create post.")
        }
    }

    return {
        register,
        handleSubmit,
        reset,
        errors,
        isSubmitting,
        onSubmit,
        data,
        isLoading
    }
}
