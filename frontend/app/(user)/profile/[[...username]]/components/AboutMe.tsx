"use client";

// tiptap
import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
// tiptap extensions
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";

import { saveBio } from "../actions";

// Icons
import {
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsTypeH4,
  BsTypeItalic,
  BsTypeBold,
  BsTypeUnderline,
  BsListUl,
} from "react-icons/bs";
import Button from "@/components/Button";

const extensions = [StarterKit, Underline, Link, ListItem];

const AboutMe = ({ bio = "" }: { bio: string | undefined }) => {
  const content = bio;
  const editor = useEditor({
    extensions,
    content,
  });

  const save = async () => {
    const response = await saveBio({
      bio: editor?.getHTML(),
    });
  };

  return (
    <>
      <EditorContent editor={editor} className="p-2 bg-white rounded-lg" />
      {/* {editor && (
        <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      )} */}
      {editor && (
        <BubbleMenu
          editor={editor}
          className="bg-black rounded text-white flex gap-2 items-center px-2 py-1"
        >
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={`${
              editor.isActive("heading", { level: 1 })
                ? "text-primary-main"
                : "hover:text-primary-400"
            }`}
          >
            <BsTypeH1 size={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`${
              editor.isActive("bold")
                ? "text-primary-main"
                : "hover:text-primary-400"
            }`}
          >
            <BsTypeBold size={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`${
              editor.isActive("italic")
                ? "text-primary-main"
                : "hover:text-primary-400"
            }`}
          >
            <BsTypeItalic size={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`${
              editor.isActive("underline")
                ? "text-primary-main"
                : "hover:text-primary-400"
            }`}
          >
            <BsTypeUnderline size={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`${
              editor.isActive("bulletList")
                ? "text-primary-main"
                : "hover:text-primary-400"
            }`}
          >
            <BsListUl size={20} />
          </button>
        </BubbleMenu>
      )}
      <Button onClick={save}>Save</Button>
    </>
  );
};

export default AboutMe;
