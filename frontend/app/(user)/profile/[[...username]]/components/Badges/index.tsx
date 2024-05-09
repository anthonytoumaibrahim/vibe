import Image from "next/image";

const Badges = ({ badgesData }) => {
  return (
    <div className="p-4 rounded-lg bg-slate-100 dark:bg-black space-y-2">
      <h3 className="text-center">Badges</h3>
      {badgesData?.length > 0 ? (
        <div className="grid grid-cols-3 gap-6">
          {badgesData.map((badge) => {
            const { id, details } = badge;

            return (
              <div
                key={id}
                className="transition-transform duration-150 hover:scale-110 flex items-center justify-center group relative hover:z-10"
              >
                <Image
                  src={`/images/badges/${details?.slug}.svg`}
                  width={64}
                  height={64}
                  alt={details?.name}
                  className="w-auto"
                />
                <div className="absolute translate-y-3 top-full left-1/2 -translate-x-1/2 w-max max-w-[320px] bg-gradient-to-t from-primary-100 via-primary-50 to-white dark:from-gray-950 dark:to-slate-800 p-4 rounded-lg shadow-lg flex-col gap-2 before:w-0 before:h-0 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-l-[8px] before:border-l-transparent before:border-b-[10px] before:border-b-white dark:before:border-b-slate-800 before:border-r-[8px] before:border-r-transparent hidden group-hover:flex text-center">
                  <h4>{details?.name}</h4>
                  <p>{details?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-slate-400 text-center">No badges yet.</p>
      )}
    </div>
  );
};

export default Badges;
