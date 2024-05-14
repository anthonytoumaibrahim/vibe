"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const Post = ({
  children,
  images = [],
}: {
  children: string | TrustedHTML;
  images: Array<{ id: number; src: string }>;
}) => {
  return (
    <div className="p-2 bg-white dark:bg-black rounded-lg shadow-sm max-w-2xl">
      <Carousel showStatus={false} showThumbs={false}>
        {images?.map((image) => {
          const { id, src } = image;
          const extension: string = src.split(".").pop() ?? "";
          return (
            <div key={id} className="w-full h-80 relative">
              {["mp4", "ogg", "mpeg"].includes(extension) ? (
                <video className="w-full h-full" controls>
                  <source src={src} type={`video/${extension}`} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={src}
                  sizes="760px"
                  fill
                  className="object-cover"
                  alt="Post Image"
                />
              )}
            </div>
          );
        })}
      </Carousel>
      <div dangerouslySetInnerHTML={{ __html: children }}></div>
    </div>
  );
};

export default Post;
