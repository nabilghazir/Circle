import { useQuery } from "@tanstack/react-query";
import { PostEntity } from "../../../entities/post-entity";
import { apiV1 } from "../../../libs/api";

export function UsePostDetail(postID: number) {
    async function GetPostByID() {
        const FetchPost = await apiV1.get<{ data: PostEntity }>(
            `/post/status/${postID}`
        )

        return FetchPost.data.data
    }

    const { data: PostDetail, isLoading, error } = useQuery<PostEntity, Error>({
        queryKey: ["post", postID],
        queryFn: GetPostByID,
        enabled: postID > 0
    });

    return {
        PostDetail,
        isLoading,
        error
    }
}


