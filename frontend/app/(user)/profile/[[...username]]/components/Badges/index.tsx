import Image from "next/image";

const Badges = ({ badgesData }) => {
  return (
    <div className="p-4 rounded-lg bg-slate-100 dark:bg-black">
      <h3 className="text-center">Badges</h3>
      <div className="grid grid-cols-3">
        {badgesData.map((badge) => {
          const { id, details } = badge;

          return (
            <div key={id} className="">
              <Image
                src={`/images/badges/${details?.slug}.svg`}
                width={70}
                height={70}
                alt={details?.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Badges;
