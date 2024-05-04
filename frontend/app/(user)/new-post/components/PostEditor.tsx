"use client";

import { useState } from "react";
import MDEditor from "../../components/MDEditor";
import PostImage from "./PostImage";
import Button from "@/components/Button";
import ImageUpload from "./ImageUpload";
import { FaImage, FaTrash } from "react-icons/fa6";

const PostEditor = () => {
  const [images, setImages] = useState([]);
  const [imageModal, showImageModal] = useState(false);

  return (
    <>
      <div className="flex gap-2">
        <Button
          icon={FaImage}
          onClick={() => showImageModal(true)}
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
      {imageModal && (
        <ImageUpload
          handleClose={() => showImageModal(false)}
          handleConfirm={(images) => setImages(images)}
        />
      )}
      {images?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {images?.map((image, index) => {
            const blobUrl = URL.createObjectURL(image);
            return <PostImage key={index} src={blobUrl} />;
          })}
        </div>
      )}
      <MDEditor content="" />
    </>
  );
};

export default PostEditor;
