import UserCard from "../../components/UserCard";

interface MembersProps {
  data: Array<any>;
}

const Members = ({ data = [] }: MembersProps) => {
  return (
    <div className="w-full lg:w-1/4 shrink-0 p-4 rounded-lg bg-slate-100 dark:bg-black space-y-2">
      <h3 className="text-center">Latest Members</h3>
      {data?.map((user) => {
        const {
          id,
          username,
          avatar_full,
          is_premium,
          is_friend,
          is_owner,
          is_admin,
        } = user;
        return (
          <UserCard
            key={id}
            id={id}
            username={username}
            avatar={avatar_full}
            isPremium={is_premium}
            isFriend={is_friend}
            isOwner={is_owner}
            isAdmin={is_admin}
          />
        );
      })}
    </div>
  );
};

export default Members;
