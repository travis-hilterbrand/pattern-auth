import { useGetUser } from "../hooks/useGetUser";
import { UserCard } from "./UserCard";

export const Users = () => {
  useGetUser("1");
  useGetUser("2");
  useGetUser("3");

  return (
    <>
      <UserCard id={"1"} />
      <UserCard id={"2"} />
      <UserCard id={"3"} />
    </>
  );
};
