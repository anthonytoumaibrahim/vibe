import Link from "next/link";
import TableData from "../../components/TableData";
import TableHeader from "../../components/TableHeader";
import Button from "@/components/Button";

const ReportsTable = ({ data = [] }) => {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <TableHeader>ID</TableHeader>
                  <TableHeader>Reported Player</TableHeader>
                  <TableHeader>Reported By</TableHeader>
                  <TableHeader>Reason</TableHeader>
                  <TableHeader>Status</TableHeader>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {data?.map((u) => {
                  const { id, reason, handled, user, reportable }: any = u;
                  return (
                    <tr key={id}>
                      <TableData>{id}</TableData>
                      <TableData>
                        <Link
                          href={`/profile/${reportable?.user?.username}`}
                          target="_blank"
                        >
                          {reportable?.user?.username}
                        </Link>
                      </TableData>
                      <TableData>
                        <Link
                          href={`/profile/${user?.username}`}
                          target="_blank"
                        >
                          {user?.username}
                        </Link>
                      </TableData>
                      <TableData>{reason}</TableData>
                      <TableData>
                        {handled ? (
                          <div className="text-emerald-600">
                            Report handled.
                          </div>
                        ) : (
                          <Button
                            href={`/admin/reports/${id}`}
                            className="inline-flex"
                          >
                            Handle
                          </Button>
                        )}
                      </TableData>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsTable;
