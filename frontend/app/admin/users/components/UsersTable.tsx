"use client";

import Button from "@/components/Button";
import { banUser } from "../actions";
import Link from "next/link";
import TableHeader from "../../components/TableHeader";
import TableData from "../../components/TableData";

const UsersTable = ({ data = [] }) => {
  const handleBanUser = async (id) => {
    await banUser(id);
  };

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <TableHeader>ID</TableHeader>
                  <TableHeader>Username</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>Action</TableHeader>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {data &&
                  data?.length > 0 &&
                  data?.map((u) => {
                    const { id, username, email, active } = u;
                    return (
                      <tr key={id}>
                        <TableData>{id}</TableData>
                        <TableData>
                          <Link href={`/profile/${username}`} target="_blank">
                            {username}
                          </Link>
                        </TableData>
                        <TableData>{email}</TableData>
                        <TableData>
                          <Button
                            size="small"
                            onClick={() => handleBanUser(id)}
                            className="w-24"
                          >
                            {active ? "Ban" : "Unban"}
                          </Button>
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

export default UsersTable;
