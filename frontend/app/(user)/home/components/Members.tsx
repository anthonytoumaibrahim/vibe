interface MembersProps {
  data: Array<any>;
}

const Members = ({ data = [] }: MembersProps) => {
  return <div className="w-1/4 shrink-0">Members</div>;
};

export default Members;
