"use client";
import { Key, useEffect } from "react";
import { useForm } from "react-hook-form";
import { checkUsername, auth } from "../../actions/auth";

// Components
import Input from "@/components/Input";
import Button from "@/components/Button";
import AuthFormTooltip from "../../components/AuthFormTooltip";

export default function SignupForm() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm();

  const submitSignupForm = async (data: object) => {
    const response = await auth(data, "signup");
    if (response?.success === false) {
      const errors: Record<string, string> = response?.errors;

      Object.keys(errors)?.forEach((errKey) => {
        const errorMessage = errors[errKey];
        setError(errKey, {
          type: "custom",
          message: errorMessage,
        });
      });
    }
  };

  return (
    <form
      action=""
      className="flex flex-col w-full gap-4"
      onSubmit={handleSubmit(submitSignupForm)}
    >
      <div className="relative">
        <Input
          placeholder="Between 3-16 characters"
          label="Choose a username"
          error={
            errors?.username?.type === "pattern"
              ? "Your username must start with a letter and can only consist of letters, numbers, hyphens (-), dots (.) and underscores (_)."
              : errors?.username?.message
          }
          {...register("username", {
            required: "A username is required",
            minLength: {
              value: 3,
              message: "Your username must be at least 3 characters long",
            },
            maxLength: {
              value: 16,
              message:
                "Sorry, your username cannot be longer than 16 characters",
            },
            pattern: /^[a-zA-Z][a-zA-Z0-9\._-]+$/g,
          })}
        />
        {/* {errors.username && (
          <AuthFormTooltip>{errors.username.message}</AuthFormTooltip>
        )} */}
      </div>
      <Input
        placeholder="your@email.com"
        label="Enter your email address"
        error={
          errors?.email?.type === "pattern"
            ? "That email address doesn't look quite right"
            : errors?.email?.message
        }
        {...register("email", {
          required: "Please enter your email address",
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        })}
      />
      <Input
        type="password"
        placeholder="***********"
        label="Create a password"
        error={
          errors?.password?.type === "pattern"
            ? "Your password must contain at least one letter, one number, and one special character (~!@#$%^&*())."
            : errors?.password?.message
        }
        {...register("password", {
          required: "Please enter a password",
          minLength: {
            value: 6,
            message: "Your password must be at least 6 characters long",
          },
        })}
      />
      <Button className="mx-auto" disabled={isSubmitting}>
        Sign Up
      </Button>
    </form>
  );
}
