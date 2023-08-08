import { useSelector } from "react-redux";

function Username() {
  const currentUserName = useSelector((store) => store.user.userName);

  if (!currentUserName) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">
      {currentUserName}
    </div>
  );
}

export default Username;
