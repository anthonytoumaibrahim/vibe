"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { createComment } from "../../profile/[[...username]]/actions";
import { useAppDispatch } from "@/app/lib/hooks";
import Button from "@/components/Button";
import Input from "@/components/Input";
import toast from "react-hot-toast";

interface CommentFormProps {
  post_id: number;
}

const CommentForm = ({ post_id }: CommentFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const addComment = async (data) => {
    setIsLoading(true);
    const res = await createComment(post_id, data.comment);
    if (res) {
      toast.success("Your comment has been added!");
      setValue("comment", "");
      console.log(res);

      dispatch({
        type: "postsSlice/addComment",
        payload: {
          post_id: post_id,
          comment: res,
        },
      });
    } else {
      toast.error("Sorry, your comment couldn't be added.");
    }
    setIsLoading(false);
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
      <Button type="submit" className="ml-auto" loading={isLoading}>
        Post
      </Button>
    </form>
  );
};

export default CommentForm;
