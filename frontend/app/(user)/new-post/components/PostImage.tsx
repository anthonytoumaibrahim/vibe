import Image from "next/image";

interface PostImageProps {
  src?: any;
  handleDelete?: () => void;
}

const PostImage = ({ src, handleDelete }: PostImageProps) => {
  return (
    <button
      className="size-40 border border-slate-300 rounded-lg overflow-hidden relative group"
      onClick={handleDelete}
    >
      <Image src={src} fill alt="Uploaded Image" className="object-cover" />
      <span className="z-10 relative bg-black p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-100">
        Click to remove
      </span>
    </button>
  );
};

export default PostImage;
