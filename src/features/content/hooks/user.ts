import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { UserEntity } from "../../../entities/user-entity";
import { apiV1 } from "../../../libs/api";
import { UpdateUserFormInput, UpdateUserSchema } from "../../../schemas/user-schema";
import { UpdateUserDTO } from "../types/user";
import { useForm } from "react-hook-form";

export function UseUser() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<UpdateUserFormInput>({
        resolver: zodResolver(UpdateUserSchema)
    });

    const queryClient = useQueryClient();

    async function GetUser() {
        const FetchUser = await apiV1.get<null, { data: UserEntity }>("/get-user", {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return FetchUser.data;
    }

    const { data, isLoading } = useQuery<UserEntity, Error>({
        queryKey: ["user"],
        queryFn: GetUser
    });

    async function UpdateUser(data: UpdateUserDTO) {
        const UpdateUser = await apiV1.put("/user", data, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });

        queryClient.invalidateQueries({
            queryKey: ["user"]
        });

        return UpdateUser.data;
    }

    const { mutateAsync: CreatePostAsync } = useMutation<UserEntity, Error, UpdateUserDTO>({
        mutationKey: ["UpdateUser"],
        mutationFn: UpdateUser,
        onSuccess: (data) => {
            console.log("User updated successfully:", data);
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: (error) => {
            console.error("Error updating user:", error);
        },
        onSettled: () => {
            console.log("Mutation settled");
        }
    });

    async function onSubmit(data: UpdateUserFormInput) {
        const updateUserDTO: UpdateUserDTO = {
            fullname: data.fullname,
            username: data.username,
            bio: data.bio,
        };

        try {
            await CreatePostAsync(updateUserDTO);
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile!");
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
        data,
        isLoading
    };
}
