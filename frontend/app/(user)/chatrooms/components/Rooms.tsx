import Room from "./Room";

const Rooms = ({ rooms }) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {rooms?.map((room) => {
        const { id, name, host } = room;
        return <Room key={id} name={name} id={id} username={host?.username} />;
      })}
    </div>
  );
};

export default Rooms;
