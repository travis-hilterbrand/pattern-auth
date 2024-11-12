import { useGetUser } from "../hooks/useGetUser";
import { UserCard } from "./UserCard";

export const Users = () => {
  const { refetch: refetch1 } = useGetUser("1");
  const { refetch: refetch2 } = useGetUser("2");
  const { refetch: refetch3 } = useGetUser("3");

  const refetchAll = () => {
    refetch1();
    refetch2();
    refetch3();
  };

  return (
    <div>
      <button onClick={() => refetchAll()}>Refetch</button>
      <hr />
      <div>
        <UserCard id={"1"} />
        <UserCard id={"2"} />
        <UserCard id={"3"} />
      </div>
    </div>
  );
};
