import { Fragment, useState } from "react";
import Modal from "@/components/Modal";
import { Radio, RadioGroup } from "@headlessui/react";
import Button from "@/components/Button";

interface ReportModalProps {
  isOpen: boolean;
  type: string;
  handleClose: () => void;
}

const reportReasons = [
  "Harassment",
  "Threatening violence",
  "Hate",
  "Sharing personal information",
  "Impersonation",
  "Copyright violation",
  "Spam",
];

const ReportModal = ({ isOpen, handleClose, type }: ReportModalProps) => {
  const [selected, setSelected] = useState(reportReasons[0]);
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} className="space-y-2">
      <h2>Report {type}</h2>
      <p>Please select a reason for reporting:</p>
      <RadioGroup
        value={selected}
        onChange={setSelected}
        aria-label="Report reason"
        className="space-y-2"
      >
        {reportReasons.map((reason) => (
          <Radio key={reason} value={reason} as={Fragment}>
            {({ checked }) => (
              <div className="flex items-center gap-2 cursor-pointer">
                <span
                  className={`w-4 h-4 rounded-full border-2 ${
                    checked
                      ? "bg-primary-main border-primary-950"
                      : "bg-slate-100 dark:bg-black border-slate-500"
                  }`}
                ></span>
                <p>{reason}</p>
              </div>
            )}
          </Radio>
        ))}
      </RadioGroup>

      <Button className="mx-auto">Report</Button>
    </Modal>
  );
};

export default ReportModal;
