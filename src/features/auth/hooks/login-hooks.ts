import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { setUser } from "../../../store/auth-slice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks/use-store";
import { LoginFormInput, LoginSchema } from "../schemas/login-schema";
import { LoginRequestDTO, LoginResponseDTO } from "../types/login-dto";
import { apiV1 } from "../../../libs/api";

export function UseLoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors } } = useForm<LoginFormInput>({
      resolver: zodResolver(LoginSchema)
    })

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function onSubmit(data: LoginFormInput) {
    try {
      const FetchAPI = await apiV1.post<null, { data: LoginResponseDTO }, LoginRequestDTO>("/auth/login", data);

      const { User, token } = FetchAPI.data;

      dispatch(setUser(User));
      Cookies.set("token", token, { expires: 1 });

      navigate("/");

    } catch (error) {
      console.log("Error : ", error);

      if (axios.isAxiosError(error) && error.response) {
        const CustomMessage = error.response.data.message;

        if (CustomMessage.includes("username")) {
          setError("username", {
            message: error.response.data.message
          });
        }

        if (CustomMessage.includes("password")) {
          setError("password", {
            message: error.response.data.message
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
    onSubmit,
    errors
  }
}