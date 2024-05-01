"use client";

interface AboutMeEditorProps {
  bio: string | undefined;
  isOwner?: boolean;
}

// tiptap
import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
const extensions = [
  StarterKit,
  Underline,
  Link.configure({
    openOnClick: false,
    HTMLAttributes: {
      class: "unstyled-link",
    },
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
];

// Actions & Components
import { saveBio } from "../../actions";
import Button from "@/components/Button";
import EditorButton from "./EditorButton";

// Icons
import {
  PiTextBBold,
  PiTextItalicBold,
  PiTextAlignCenterBold,
  PiTextAlignLeftBold,
  PiTextAlignRightBold,
  PiTextHOneBold,
  PiTextHTwoBold,
  PiTextHThreeBold,
  PiTextHFourBold,
  PiListBulletsBold,
  PiListNumbersBold,
  PiArrowArcLeftBold,
  PiArrowArcRightBold,
  PiTextUnderlineBold,
} from "react-icons/pi";
import { toast } from "react-toastify";

const AboutMeEditor = ({ bio = "", isOwner = false }: AboutMeEditorProps) => {
  const content = bio;
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-base p-5 focus:outline-none max-w-none",
      },
    },
  });

  const save = async () => {
    const response = await saveBio({
      bio: editor?.getHTML(),
    });
    toast.success("Saved");
  };

  return (
    <div key="editor">
      {editor && (
        <div className="bg-slate-300 p-2 w-full rounded-t-lg flex items-center gap-2">
          <div className="flex items-center gap-1 pr-2 border-r-2 border-slate-500">
            <EditorButton
              icon={PiArrowArcLeftBold}
              onClick={() => editor.chain().focus().undo().run()}
            />
            <EditorButton
              icon={PiArrowArcRightBold}
              onClick={() => editor.chain().focus().redo().run()}
            />
          </div>
          <div className="flex items-center gap-1 pr-2 border-r-2 border-slate-500">
            <EditorButton
              isActive={editor.isActive("heading", { level: 1 })}
              icon={PiTextHOneBold}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
            />
            <EditorButton
              isActive={editor.isActive("heading", { level: 2 })}
              icon={PiTextHTwoBold}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
            />
            <EditorButton
              isActive={editor.isActive("heading", { level: 3 })}
              icon={PiTextHThreeBold}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
            />
            <EditorButton
              isActive={editor.isActive("heading", { level: 4 })}
              icon={PiTextHFourBold}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 4 }).run()
              }
            />
          </div>
          <div className="flex items-center gap-1 pr-2 border-r-2 border-slate-500">
            <EditorButton
              isActive={editor.isActive({ textAlign: "left" })}
              icon={PiTextAlignLeftBold}
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
            />
            <EditorButton
              isActive={editor.isActive({ textAlign: "center" })}
              icon={PiTextAlignCenterBold}
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
            />
            <EditorButton
              isActive={editor.isActive({ textAlign: "right" })}
              icon={PiTextAlignRightBold}
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
            />
          </div>
          <div className="flex items-center gap-1 pr-2 border-r-2 border-slate-500">
            <EditorButton
              isActive={editor.isActive("bulletList")}
              icon={PiListBulletsBold}
              onClick={() => editor.chain().focus().toggleBulletList().run()}
            />
            <EditorButton
              isActive={editor.isActive("orderedList")}
              icon={PiListNumbersBold}
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
            />
          </div>
        </div>
      )}
      <EditorContent
        editor={editor}
        className="bg-slate-100 rounded-b-lg p-2"
        width="100%"
      />
      {editor && (
        <BubbleMenu
          editor={editor}
          className="bg-black rounded text-white flex gap-2 items-center px-2 py-1"
        >
          <div>
            <EditorButton
              isActive={editor.isActive("bold")}
              icon={PiTextBBold}
              onClick={() => editor.chain().focus().toggleBold().run()}
            />
            <EditorButton
              isActive={editor.isActive("italic")}
              icon={PiTextItalicBold}
              onClick={() => editor.chain().focus().toggleItalic().run()}
            />
            <EditorButton
              isActive={editor.isActive("underline")}
              icon={PiTextUnderlineBold}
              onClick={() => editor.chain().focus().toggleUnderline().run()}
            />
          </div>
        </BubbleMenu>
      )}
      <Button onClick={save}>Save</Button>
    </div>
  );
};

export default AboutMeEditor;
