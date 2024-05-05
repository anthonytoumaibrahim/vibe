"use client";

import { useState } from "react";
import { savePost } from "../actions";
import MDEditor from "../../components/MDEditor";
import PostImage from "./PostImage";
import Button from "@/components/Button";
import ImageUpload from "./ImageUpload";
import { FaImage, FaTrash } from "react-icons/fa6";
import toast from "react-hot-toast";

const PostEditor = () => {
  const [content, setContent] = useState("");
  const [images, setImages] = useState<any>([]);
  const [imageUpload, showImageUpload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const save = async (content, truncated) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("content", content);
    formData.append("truncated", truncated);
    images?.forEach((img) => formData.append("images[]", img));
    const response = await savePost(formData);
    if (response?.success) {
      setImages([]);
      setContent("");
      toast.success(response?.message);
    } else {
      toast.error(response?.message ?? "Sorry, something went wrong!");
    }
    setIsLoading(false);
  };

  const deleteImage = (index: number) => {
    setImages(images.filter((image, imageIndex) => imageIndex !== index));
  };

  return (
    <>
      <div className="flex gap-2">
        <Button
          icon={FaImage}
          onClick={() => showImageUpload(!imageUpload)}
          variant="link"
          className="mb-4"
        >
          Add images to your Post
        </Button>
        {images?.length > 0 && (
          <Button
            icon={FaTrash}
            onClick={() => setImages([])}
            variant="link"
            color="error"
            className="mb-4"
          >
            Remove Images
          </Button>
        )}
      </div>
      {imageUpload && (
        <ImageUpload handleConfirm={(images) => setImages(images)} />
      )}
      {images?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {images?.map((image, index) => {
            const blobUrl = URL.createObjectURL(image);
            return (
              <PostImage
                key={index}
                src={blobUrl}
                handleDelete={() => deleteImage(index)}
              />
            );
          })}
        </div>
      )}
      <MDEditor
        content={content}
        onSave={(content, truncated) => save(content, truncated)}
        loading={isLoading}
      />
    </>
  );
};

export default PostEditor;
