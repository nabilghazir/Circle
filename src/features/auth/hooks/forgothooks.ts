import { forgotData } from "../types/auth";
import { useState } from "react";

export function forgotHooks() {
  const [formData, setFormData] = useState<forgotData>({
    email: "",
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
