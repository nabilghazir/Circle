import React, { useState } from "react";
import { loginData } from "../types/auth";

export function loginHooks() {
  const [formData, setFormData] = useState<loginData>({
    usernameOrEmail: "",
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
