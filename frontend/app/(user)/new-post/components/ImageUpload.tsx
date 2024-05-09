"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploadProps {
  handleConfirm: (images: any) => void;
}

const ImageUpload = ({ handleConfirm }: ImageUploadProps) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    handleConfirm(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: { "image/*": [], "video/*": [] },
      maxFiles: 4,
      maxSize: 6291456,
    });

  return (
    <div
      className={`px-4 py-6 mb-4 border-2 border-dashed rounded-lg dark:bg-slate-950 flex flex-col gap-2 text-center items-center hover:border-primary-main ${
        isDragActive
          ? "border-primary-main bg-primary-50 dark:bg-primary-950"
          : "border-slate-300 bg-slate-50 dark:border-slate-700"
      } hover:bg-primary-50 dark:hover:bg-primary-950 hover:cursor-pointer`}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <h3>Drop images & videos here</h3>
      <p>Or click here to upload</p>
      <small className="text-slate-400">
        Upload only up to 4 image and/or video files. Max file size is 6MB
      </small>
      {isDragReject && (
        <p className="text-red-600 font-bold">Only image files are accepted.</p>
      )}
    </div>
  );
};

export default ImageUpload;
