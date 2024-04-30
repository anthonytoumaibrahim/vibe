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
import TextAlign from "@tiptap/extension-text-align";

// Actions & Components
import { saveBio } from "../../actions";
import Button from "@/components/Button";
import EditorButton from "./EditorButton";

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
  BsListOl,
} from "react-icons/bs";
import { CgUndo, CgRedo } from "react-icons/cg";
import {
  GrTextAlignCenter,
  GrTextAlignLeft,
  GrTextAlignRight,
} from "react-icons/gr";

const extensions = [StarterKit, Underline, Link, TextAlign];

const AboutMe = ({ bio = "" }: { bio: string | undefined }) => {
  const content = bio;
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: "prose dark:prose-invert prose-base m-5 focus:outline-none",
      },
    },
  });

  const save = async () => {
    const response = await saveBio({
      bio: editor?.getHTML(),
    });
  };

  return (
    <>
      {editor && (
        <div className="bg-slate-300 p-2 w-full rounded-t-lg flex items-center gap-2">
          <div>
            <EditorButton
              icon={CgUndo}
              onClick={() => editor.chain().focus().undo().run()}
            />
            <EditorButton
              icon={CgRedo}
              onClick={() => editor.chain().focus().redo().run()}
            />
          </div>
          <div>
            <EditorButton
              isActive={editor.isActive("heading", { level: 1 })}
              icon={BsTypeH1}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
            />
            <EditorButton
              isActive={editor.isActive("heading", { level: 2 })}
              icon={BsTypeH2}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
            />
            <EditorButton
              isActive={editor.isActive("heading", { level: 3 })}
              icon={BsTypeH3}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
            />
            <EditorButton
              isActive={editor.isActive("heading", { level: 4 })}
              icon={BsTypeH4}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 4 }).run()
              }
            />
          </div>
          <div>
            <EditorButton
              isActive={editor.isActive({ textAlign: "left" })}
              icon={GrTextAlignLeft}
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
            />
            <EditorButton
              isActive={editor.isActive({ textAlign: "center" })}
              icon={GrTextAlignCenter}
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
            />
            <EditorButton
              isActive={editor.isActive({ textAlign: "right" })}
              icon={GrTextAlignRight}
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
            />
          </div>
          <div>
            <EditorButton
              isActive={editor.isActive("bulletList")}
              icon={BsListUl}
              onClick={() => editor.chain().focus().toggleBulletList().run()}
            />
            <EditorButton
              isActive={editor.isActive("orderedList")}
              icon={BsListOl}
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
            />
          </div>
        </div>
      )}
      <EditorContent
        editor={editor}
        className="bg-slate-100 rounded-b-lg p-2"
      />
      {/* {editor && (
        <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      )} */}
      {editor && (
        <BubbleMenu
          editor={editor}
          className="bg-black rounded text-white flex gap-2 items-center px-2 py-1"
        >
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
        </BubbleMenu>
      )}
      <Button onClick={save}>Save</Button>
    </>
  );
};

export default AboutMe;
