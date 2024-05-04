import { saveBio } from "../actions";
import { useAppDispatch, useAppSelector } from "@/app/lib/store";
import toast from "react-hot-toast";
import MDEditor from "@/app/(user)/components/MDEditor";

const AboutMeEditor = () => {
  const dispatch = useAppDispatch();
  const bioSelector: any = useAppSelector((state) => state.aboutMeEditorSlice);

  const save = async (html: string | undefined) => {
    const response = await saveBio({
      bio: html,
    });
    dispatch({
      type: "aboutMeEditorSlice/updateData",
      payload: html,
    });
    toast.success("Saved");
  };

  return (
    <MDEditor content={bioSelector?.content} onSave={(html) => save(html)} />
  );
};

export default AboutMeEditor;
