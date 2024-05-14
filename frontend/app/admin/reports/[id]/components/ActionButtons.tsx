"use client";

import Button from "@/components/Button";
import { handleReport } from "../../actions";
import toast from "react-hot-toast";

const ActionButtons = ({ id }: { id: number }) => {
  const handleAction = async (
    type: "delete_post" | "delete_and_ban" | "nothing"
  ) => {
    const res = await handleReport(id, type);
    if (res?.success === true) {
      toast.success("Report handled successfully");
    } else {
      toast.error("Sorry, something went wrong.");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button onClick={() => handleAction("delete_post")}>Delete Post</Button>
      <Button onClick={() => handleAction("delete_and_ban")}>
        Delete Post & Ban User
      </Button>
      <Button onClick={() => handleAction("nothing")}>Do Nothing</Button>
    </div>
  );
};

export default ActionButtons;
