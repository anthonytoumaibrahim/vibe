"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";

interface CommentFormProps {
  post_id: number;
}

const CommentForm = ({ post_id }: CommentFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addComment = (data) => {};

  return (
    <form onSubmit={handleSubmit(addComment)}>
      <Input
        textarea={true}
        placeholder="Write your comment..."
        error={errors?.comment?.message}
        {...register("comment", {
          required: true,
          maxLength: {
            value: 200,
            message: "Your comment can't be longer than 200 characters.",
          },
        })}
      />
      <Button type="submit">Post</Button>
    </form>
  );
};

export default CommentForm;
