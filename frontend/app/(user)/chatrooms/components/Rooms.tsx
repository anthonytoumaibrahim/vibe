import Room from "./Room";

const Rooms = ({ rooms }) => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
      {rooms?.map((room) => {
        const {
          id,
          name,
          host,
          participants_count,
          background,
          expires_in,
          is_host,
        } = room;
        return (
          <Room
            key={id}
            name={name}
            id={id}
            username={host?.username}
            participants_count={participants_count}
            background={background?.image_url}
            is_private={room?.private}
            is_friend={host?.is_friend}
            is_host={is_host}
          />
        );
      })}
    </div>
  );
};

export default Rooms;
