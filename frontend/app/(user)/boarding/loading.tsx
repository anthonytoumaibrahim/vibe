import Logo from "@/components/Logo";

const BoardingLoading = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <Logo width={256} />
      <h1>Please wait, loading...</h1>
    </div>
  );
};

export default BoardingLoading;
