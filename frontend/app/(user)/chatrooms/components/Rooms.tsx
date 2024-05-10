import Room from "./Room";

const Rooms = ({ rooms }) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {rooms?.map((room) => {
        const { id, name, host, participants_count } = room;
        return (
          <Room
            key={id}
            name={name}
            id={id}
            username={host?.username}
            participants_count={participants_count}
          />
        );
      })}
    </div>
  );
};

export default Rooms;
