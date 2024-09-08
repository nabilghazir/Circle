import { useState } from "react";
import { resetPassData } from "../types/auth";

export function resetHooks() {
  const [formData, setFormData] = useState<resetPassData>({
    newPassword: "",
    comfirmPassword: "",
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
