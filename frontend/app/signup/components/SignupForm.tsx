"use client";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";

const SignupForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form action="" className="flex flex-col w-full gap-4">
      <Input
        placeholder="Between 4-20 characters"
        label="Choose a username"
        {...register("username", {
          required: true,
          min: 4,
          max: 20,
        })}
      />
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
