import Image from "next/image";

const PremiumItems = ({ items = [] }) => {
  return items?.map((item) => {
    const { id, server_id, type } = item;
    return (
      <div
        key={server_id}
        className="group size-32 z-0 rounded-lg relative overflow-hidden transition-colors duration-200 before:w-1/2 before:h-1/2 before:absolute before:-right-6 before:-top-6 before:rounded-full before:filter before:blur-lg after:w-full after:h-full after:rounded-full after:absolute after:top-0 after:left-0 after:transition after:filter after:blur-xl before:-z-[1] after:-z-[2] bg-premium-500 hover:bg-premium-700 before:bg-premium-200 after:bg-premium-400 before:opacity-100 after:opacity-100"
      >
        <Image
          src={`/images/2d_thumbs/${type}/${id}.svg`}
          fill
          sizes="100%"
          className="object-contain"
          alt=""
        />
      </div>
    );
  });
};

export default PremiumItems;
