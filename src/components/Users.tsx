import { useGetUser } from "../hooks/useGetUser";
import { UserCard } from "./UserCard";

export const Users = () => {
  const { isFetching: isFetching1, refetch: refetch1 } = useGetUser("1");
  const { isFetching: isFetching2, refetch: refetch2 } = useGetUser("2");
  const { isFetching: isFetching3, refetch: refetch3 } = useGetUser("3");
  const isFetching = isFetching1 || isFetching2 || isFetching3;

  const refetchAll = () => {
    refetch1();
    refetch2();
    refetch3();
  };

  return (
    <div>
      <button disabled={isFetching} onClick={() => refetchAll()}>
        Refetch
      </button>
      <hr />
      <div>
        <UserCard id={"1"} />
        <UserCard id={"2"} />
        <UserCard id={"3"} />
      </div>
    </div>
  );
};
