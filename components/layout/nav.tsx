import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "lib/configs/authOptions";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return <Navbar session={session} />;
}
