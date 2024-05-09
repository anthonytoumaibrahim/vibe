import Modal from "@/components/Modal";
import Post from "./Post";

interface PostModalProps {
  handleClose: () => void;
}

const PostModal = ({ handleClose }: PostModalProps) => {
  return (
    <Modal isOpen={true} handleClose={handleClose}>
      <Post id={1} />
    </Modal>
  );
};

export default PostModal;
