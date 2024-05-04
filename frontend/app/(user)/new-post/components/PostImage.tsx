import Image from "next/image";

interface PostImageProps {
  src?: any;
}

const PostImage = ({ src }: PostImageProps) => {
  return (
    <div className="size-40 border border-slate-300 rounded-lg overflow-hidden relative">
      <Image src={src} fill alt="Uploaded Image" className="object-cover" />
    </div>
  );
};

export default PostImage;
