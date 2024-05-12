const UsersTable = ({ data = [] }) => {
  return (
    <table className="table-auto w-full border-collapse border border-slate-400">
      <thead className="bg-slate-400">
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Join Date</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data?.map((u) => {
          const { id, username, email, created_at } = u;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>{created_at}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UsersTable;
