"use client";

import { useState } from "react";
import MDEditor from "../../components/MDEditor";

const PostEditor = () => {
  const [images, setImages] = useState([]);

  return (
    <div>
      <MDEditor content="" />
    </div>
  );
};

export default PostEditor;
