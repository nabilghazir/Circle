import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormInput, RegisterSchema } from "../schemas/register-schema";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { RegisterResponseDTO } from "../types/register-dto";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../store/auth-slice";
import { apiV1 } from "../../../libs/api";
import { useAppDispatch } from "../../../store/hooks/use-store";

export function useRegisterForm() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors } } = useForm<RegisterFormInput>({
            resolver: zodResolver(RegisterSchema)
        });

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    async function onSubmit(data: RegisterFormInput) {
        try {
            const FetchAPI = await apiV1.post<RegisterResponseDTO>("/auth/register", data);
            const { User, token } = FetchAPI.data;

            dispatch(setUser(User));
            Cookies.set("token", token, { expires: 1 });
            navigate("/login");

            console.log(data);
            console.log(FetchAPI.data);
        } catch (error) {
            console.log("Error : ", error);

            if (axios.isAxiosError(error) && error.response) {
                const CustomMessage = error.response?.data?.stack ?? "";

                if (CustomMessage.include('"fullname"')) {
                    setError("fullname", {
                        message: "Fullname must be atleast 5 characters long !!!"
                    });
                }

                if (CustomMessage.include('"email"')) {
                    setError("email", {
                        message: "Email must be valid !!!"
                    });
                }

                if (CustomMessage.include('"password"')) {
                    setError("password", {
                        message: "Password must be atleast 5 characters long !!!"
                    });
                }
            } else {
                console.log("Other Error : ", error);
            }
        }
    }
    return {
        register,
        handleSubmit,
        errors,
        onSubmit
    }
}