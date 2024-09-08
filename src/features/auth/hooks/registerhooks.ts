import { useState } from "react";
import { registerData } from "../types/auth";

export function registerHooks() {
  const [formData, setFormData] = useState<registerData>({
    username: "",
    email: "",
    password: "",
  });

  function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
  }

  return { handleChanges, handleSubmit, formData };
}
