"use client";
import { Key, useEffect } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../actions/auth";

// Components
import Input from "@/components/Input";
import Button from "@/components/Button";

const LoginForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm();

  const submitLoginForm = async (data: object) => {
    const response = await auth(data, "login");
    if (response?.success === false) {
      const errorMessage: string = response?.message;
      setError("username", {
        type: "custom",
        message: errorMessage,
      });
    }
  };

  return (
    <form
      action=""
      className="flex flex-col w-full gap-4"
      onSubmit={handleSubmit(submitLoginForm)}
    >
      <Input
        placeholder="username123"
        label="Username"
        error={errors?.username?.message}
        {...register("username", {
          required: "A username is required",
        })}
      />
      <Input
        type="password"
        placeholder="***********"
        label="Password"
        error={errors?.password?.message}
        {...register("password", {
          required: "Please enter a password",
        })}
      />
      <Button className="mx-auto" disabled={isSubmitting}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
