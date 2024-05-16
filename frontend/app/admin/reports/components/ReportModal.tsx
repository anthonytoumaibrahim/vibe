"use client";

import { useState } from "react";
import { handleReport } from "../actions";
import Modal, { ModalSize } from "@/components/Modal";
import Button from "@/components/Button";
import toast from "react-hot-toast";

interface ReportProps {
  id: number;
  reportable: {};
}

const ReportModal = ({ id, reportable }: ReportProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = async (
    type: "delete_post" | "delete_and_ban" | "nothing"
  ) => {
    const res = await handleReport(id, type);
    if (res?.success === false) {
      toast.error("Sorry, the report could not be handled.");
    } else {
      toast.success("Report handled successfully.");
    }
  };

  return (
    <>
      <Button className="inline-flex" onClick={() => setIsOpen(true)}>
        Handle
      </Button>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        size={ModalSize.xl}
      >
        <h3 className="mb-4">Handle Report</h3>

        <div className="flex items-center gap-2 justify-center">
          <Button onClick={() => handleAction("delete_post")} size="small">
            Delete Post
          </Button>
          <Button
            onClick={() => handleAction("delete_and_ban")}
            size="small"
            color="error"
          >
            Delete Post & Ban User
          </Button>
          <Button
            onClick={() => handleAction("nothing")}
            size="small"
            color="muted"
          >
            Do Nothing
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ReportModal;
