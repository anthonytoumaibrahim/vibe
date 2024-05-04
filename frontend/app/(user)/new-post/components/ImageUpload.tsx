"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import PostImage from "./PostImage";

interface ImageUploadProps {
  handleClose: () => void;
  handleConfirm: (images: any) => void;
}

const ImageUpload = ({ handleClose, handleConfirm }: ImageUploadProps) => {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    setImages(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: { "image/*": [] },
      maxFiles: 4,
      maxSize: 6291456,
    });

  const confirm = () => {
    handleConfirm(images);
    handleClose();
  };

  return (
    <Modal
      isOpen={true}
      handleClose={handleClose}
      title="Add Images"
      description="Add up to 4 images to your post"
    >
      {images.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {images?.map((image, index) => {
            const blobUrl = URL.createObjectURL(image);
            return <PostImage key={index} src={blobUrl} />;
          })}
        </div>
      )}
      <div
        className={`px-4 py-6 border-2 border-dashed rounded-lg dark:bg-slate-950 flex flex-col gap-2 text-center items-center hover:border-primary-main ${
          isDragActive
            ? "border-primary-main bg-primary-50 dark:bg-primary-950"
            : "border-slate-300 bg-slate-50 dark:border-slate-700"
        } hover:bg-primary-50 dark:hover:bg-primary-950 hover:cursor-pointer`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <h3>Drop images here</h3>
        <p>Or click here to upload</p>
        <small className="text-slate-400">
          Upload only up to 4 image files. Max file size is 6MB
        </small>
        {isDragReject && (
          <p className="text-red-600 font-bold">
            Only image files are accepted.
          </p>
        )}
      </div>
      <div className="flex mt-4 gap-4 justify-center">
        <Button color="muted" onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button onClick={() => confirm()}>Confirm</Button>
      </div>
    </Modal>
  );
};

export default ImageUpload;
