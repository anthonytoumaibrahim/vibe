"use client";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import AuthFormTooltip from "../../components/AuthFormTooltip";
import { useEffect } from "react";

const SignupForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const watchUsername = watch("username");

  const submitSignupForm = () => {};

  useEffect(() => {}, []);

  return (
    <form
      action=""
      className="flex flex-col w-full gap-4"
      onSubmit={handleSubmit(submitSignupForm)}
    >
      <div className="relative">
        <Input
          placeholder="Between 4-20 characters"
          label="Choose a username"
          error={errors.username ? true : false}
          {...register("username", {
            required: "A username is required",
            minLength: {
              value: 4,
              message: "Your username must be at least 4 characters long.",
            },
            maxLength: {
              value: 20,
              message:
                "Sorry, your username cannot be longer than 20 characters.",
            },
          })}
        />
        {errors.username && (
          <AuthFormTooltip>{errors.username.message}</AuthFormTooltip>
        )}
      </div>
      <Input
        name="email"
        placeholder="your@email.com"
        label="Enter your email address"
      />
      <Input
        name="password"
        type="password"
        placeholder="your@email.com"
        label="Create a password"
      />
      <Button className="mx-auto">Sign Up</Button>
    </form>
  );
};

export default SignupForm;
