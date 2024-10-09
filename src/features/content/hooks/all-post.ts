import { useQuery } from "@tanstack/react-query"
import Cookies from "js-cookie"
import { useParams } from "react-router-dom"
import { PostEntity } from "../../../entities/post-entity"
import { RepliesEntity } from "../../../entities/replies-entity"
import { UserEntity } from "../../../entities/user-entity"
import { apiV1 } from "../../../libs/api"

export function useAllPost() {
    async function getAllPost() {
        const FetchData = await apiV1.get<null, { data: PostEntity[] }>(
            `/get-all-post`, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return FetchData.data;
    }

    const { data, isLoading } = useQuery<PostEntity[], Error, PostEntity[]>({
        queryKey: ["post"],
        queryFn: getAllPost
    });

    return {
        data,
        isLoading,
        getAllPost
    }
}

export function useAllReplies() {
    const { postID } = useParams<{ postID: string }>()

    async function getAllReplies() {
        const FetchData = await apiV1.get<null, { data: RepliesEntity[] }>(
            `/get-all-replies/${postID}`, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return FetchData.data;
    }

    const { data, isLoading } = useQuery<RepliesEntity[], Error>({
        queryKey: ["replies", postID],
        queryFn: getAllReplies,
        enabled: !!postID
    });
    return {
        data,
        isLoading
    }
}

export function useAllUser() {
    async function getAllUser() {
        const FetchData = await apiV1.get<null, { data: UserEntity[] }>('/get-all-user', {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return FetchData.data;
    }

    const { data, isLoading } = useQuery<UserEntity[], Error, UserEntity[]>({
        queryKey: ["users"],
        queryFn: getAllUser
    });

    return {
        data,
        isLoading
    };
}

export function useAllUserById() {
    const { userID } = useParams<{ userID: string }>()

    async function getUserUnique() {
        const FetchData = await apiV1.get<null, { data: UserEntity }>(`/get-user-by-id/${userID}`)

        return FetchData.data
    }

    const { data, isLoading } = useQuery<UserEntity, Error, UserEntity>({
        queryKey: ["user", userID],
        queryFn: getUserUnique,
        enabled: !!userID
    });

    return {
        data,
        isLoading
    }
}