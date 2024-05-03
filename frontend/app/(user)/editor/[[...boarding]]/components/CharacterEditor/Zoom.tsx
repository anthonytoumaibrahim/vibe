import { FaPlus, FaMinus } from "react-icons/fa6";

interface ZoomProps {
  handleZoom: (type: string) => void;
  zoom: number;
}

const Zoom = ({ handleZoom, zoom = 1 }: ZoomProps) => {
  return (
    <div className="absolute top-4 left-4 text-white z-10 flex flex-col">
      <button
        className="bg-slate-300 rounded-t border-b-2 border-slate-400 p-2 disabled:opacity-50 hover:bg-primary-main"
        onClick={() => handleZoom("+")}
        disabled={zoom >= 2}
      >
        <FaPlus size={24} />
      </button>
      <button
        className="bg-slate-300 rounded-b p-2 disabled:opacity-50 hover:bg-primary-main"
        onClick={() => handleZoom("-")}
        disabled={zoom <= 0.85}
      >
        <FaMinus size={24} />
      </button>
    </div>
  );
};

export default Zoom;
