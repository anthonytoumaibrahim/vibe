"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import { createComment } from "../../actions";
import toast from "react-hot-toast";

interface CommentFormProps {
  post_id: number;
}

const CommentForm = ({ post_id }: CommentFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addComment = async (data) => {
    const res = await createComment(post_id, data.comment);
    if (res?.success === true) {
      toast.success("Your comment has been added!");
    } else {
      toast.error("Sorry, your comment couldn't be added.");
    }
  };

  return (
    <form onSubmit={handleSubmit(addComment)} className="space-y-2">
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
