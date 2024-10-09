import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { PostEntity } from "../../../entities/post-entity";
import { apiV1 } from "../../../libs/api";

export function UsePostProfile() {
    const { userID } = useParams<{ userID: string }>();

    async function GetAllPost() {
        const FetchPost = await apiV1.get<null, { data: PostEntity[] }>(`/profile/post/${userID}`
        );
        return FetchPost.data;
    }
    const { data, isLoading } = useQuery<PostEntity[], Error, PostEntity[]>({
        queryKey: ["post", userID],
        queryFn: GetAllPost,
        enabled: !!userID
    })

    return {
        data,
        isLoading
    }
}