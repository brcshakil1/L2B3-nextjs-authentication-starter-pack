import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session?.user ? (
        <div className="grid place-items-center">
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Login user email: {session?.user?.email}
          </h1>
          <Image
            src={session?.user?.image}
            alt="user image"
            width={100}
            height={100}
            className=" rounded-full mt-5 border-4 border-gray-200 shadow-md"
          />
        </div>
      ) : (
        <h1 className="text-4xl text-center mt-10">Welcome to dashboard</h1>
      )}
    </div>
  );
};

export default DashboardPage;
