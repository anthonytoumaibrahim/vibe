import { Fragment, useState } from "react";
import { sendReport } from "../../actions";
import Modal from "@/components/Modal";
import { Radio, RadioGroup } from "@headlessui/react";
import Button from "@/components/Button";
import { FaCircleCheck } from "react-icons/fa6";
import toast from "react-hot-toast";

interface ReportModalProps {
  isOpen: boolean;
  type: string;
  id: number;
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

const ReportModal = ({
  isOpen,
  handleClose,
  type = "Post",
  id,
}: ReportModalProps) => {
  const [selected, setSelected] = useState(reportReasons[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleReport = async () => {
    setIsLoading(true);
    const res = await sendReport(id, selected);
    if (res?.success === true) {
      setSuccess(true);
    } else {
      toast.error("Sorry, your report couldn't be sent.");
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} className="space-y-2">
      {success ? (
        <div className="text-center flex flex-col items-center gap-4">
          <FaCircleCheck size={128} className="text-emerald-600" />
          <h2 className="text-emerald-600">Thank you for your report!</h2>
          <p>
            Thank you for making Vibe a better place! We will handle your report
            within the next 24 business hours.
          </p>
          <Button color="success" onClick={handleClose}>
            OK
          </Button>
        </div>
      ) : (
        <>
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
          <Button
            className="mx-auto"
            onClick={() => handleReport()}
            loading={isLoading}
          >
            Report
          </Button>
        </>
      )}
    </Modal>
  );
};

export default ReportModal;
