"use client";
import { useForm } from "react-hook-form";
import { auth } from "../../actions/auth";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";

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

  const gLogin = useGoogleLogin({
    onSuccess: async (tokenResponse: {
      access_token: string;
      expires_in: number;
      scope: string;
    }) => {
      try {
        const response = await auth({
          token: tokenResponse.access_token,
          type: "oauth",
        });
        if (response?.success === false) {
          const errorMessage: string = response?.message;
          toast.error(
            errorMessage ??
              "We can't sign you in with Google. Please sign in using your username instead."
          );
        }
      } catch (error: any) {
        const errorMessage: any = error?.message;
        toast.error(
          errorMessage ??
            "Sorry, couldn't sign in with Google. Please try again later."
        );
      }
    },
  });

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex w-full items-center justify-center">
        <button onClick={() => gLogin()} className="p-2 border rounded-lg">
          sign in with google
        </button>
      </div>
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
    </div>
  );
};

export default LoginForm;
