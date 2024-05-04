import Button from "@/components/Button";
import Modal from "@/components/Modal";

import { FaUpload } from "react-icons/fa6";

interface ImageUploadProps {
  handleClose: () => void;
}

const ImageUpload = ({ handleClose }: ImageUploadProps) => {
  return (
    <Modal
      isOpen={true}
      handleClose={handleClose}
      title="Add an Image"
      description="Add up to 4 images to your post"
    >
      <div className="px-4 py-6 border-2 border-dashed border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-950 flex flex-col gap-2 text-center items-center">
        <h3>Drag images here</h3>
        <p>Or click the button below to upload</p>
        <Button variant="outlined" icon={FaUpload}>
          Upload from your device
        </Button>
      </div>
    </Modal>
  );
};

export default ImageUpload;
