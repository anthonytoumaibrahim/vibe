"use client";

import { useState } from "react";
import { handleReport } from "../actions";
import Modal, { ModalSize } from "@/components/Modal";
import Button from "@/components/Button";
import toast from "react-hot-toast";
import Post from "@/app/(user)/components/Posts/Post";
import Link from "next/link";

interface ReportProps {
  id: number;
  reason: string;
  reportable: {
    id: number;
    content: string;
    user_id: number;
    time_ago: string;
    user: {
      id: number;
      username: string;
      is_premium: boolean;
    };
    images: Array<{ id: number; src: string }>;
  };
  user: {
    id: number;
    username: string;
    is_premium: boolean;
  };
}

const ReportModal = ({ id, reportable, user, reason }: ReportProps) => {
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
        className="space-y-4"
      >
        <Post
          id={id}
          post_data={reportable}
          reportable={false}
          footer={false}
        />

        <p>
          <Link
            href={`/profile/${user?.username}`}
            target="_blank"
            className={`unstyled-link font-bold ${
              user?.is_premium ? "premium-text" : ""
            }`}
          >
            {user?.username}
          </Link>{" "}
          reported this post, with stated reason: <strong>{reason}</strong>
        </p>

        <h4>How would you like to handle the report?</h4>

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
