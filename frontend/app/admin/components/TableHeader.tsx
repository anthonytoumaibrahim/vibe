const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-200 uppercase"
    >
      {children}
    </th>
  );
};

export default TableHeader;
