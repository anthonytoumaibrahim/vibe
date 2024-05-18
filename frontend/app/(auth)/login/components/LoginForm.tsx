"use client";
import { useForm } from "react-hook-form";
import { auth } from "../../actions/auth";
import { toast } from "react-hot-toast";

// Components
import Input from "@/components/Input";
import Button from "@/components/Button";
import GLoginButton from "../../components/GLoginButton";

const LoginForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm();

  const submitLoginForm = async (data: object) => {
    try {
      const response = await auth({ data, type: "login" });
      if (response?.success === false) {
        const errorMessage: string = response?.message;
        setError("username", {
          type: "custom",
          message: errorMessage,
        });
      }
    } catch (error) {
      toast.error("Sorry, something went wrong.");
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex w-full items-center justify-center">
        <GLoginButton type="login" />
      </div>
      <form
        action=""
        className="flex flex-col w-full gap-4"
        onSubmit={handleSubmit(submitLoginForm)}
        data-testid="login_form"
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
    </div>
  );
};

export default LoginForm;
