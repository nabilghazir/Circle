import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { apiV1 } from "../../../libs/api";
import { CreateRepliesFormInput, RepliesSchema } from "../../../schemas/replies-schema";
import { CreateRepliesDTO } from "../types/replies";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { UseAllReplies } from "./all-post";

export function useRepliesForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CreateRepliesFormInput>({
        resolver: zodResolver(RepliesSchema)
    });
    const { postID } = useParams<{ postID: string }>();
    const queryClient = useQueryClient();

    async function CreateReplies(data: CreateRepliesDTO) {
        const RepliesData = { ...data, postID };

        const CreateReply = await apiV1.post(`/post/${postID}/replies`, RepliesData, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
                "Content-Type": "multipart/form-data"
            }
        });

        UseAllReplies();
        queryClient.invalidateQueries({
            queryKey: ["replies-post", postID]
        });

        return CreateReply.data;
    }

    const { mutateAsync: CreateRepliesAsync } = useMutation<CreateRepliesDTO, Error, CreateRepliesDTO>({
        mutationKey: ["CreateReplies"],
        mutationFn: CreateReplies
    });

    async function onSubmit(data: CreateRepliesFormInput) {
        try {
            await CreateRepliesAsync(data);
        } catch (error) {
            console.error("Error Creating Reply: ", error);
        }
    }

    return { register, handleSubmit: handleSubmit(onSubmit), errors, isSubmitting };
}