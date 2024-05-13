const TableData = ({ children }: { children: React.ReactNode }) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-300">
      {children}
    </td>
  );
};

export default TableData;
