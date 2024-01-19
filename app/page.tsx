import AddUser from "@/components/shared/AddUser";
import Gebruiker from "@/components/shared/Gebruiker";
import { prisma } from "@/utils/Prisma";

async function getData() {
  const data = await prisma.gebruikers.findMany({
    select: {
      name: true,
      email: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

const Home = async () => {
  const data = await getData();
  return (
    <div className=" w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase">
        Zeer epische nosql mongodb CRUD app
      </span>
      <div className="fle justify-center flex-col items-center w-[1000px]">
        <AddUser />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {data.map((gebruiker, id) => (
            <div className="w-full" key={id}>
              <Gebruiker gebruiker={gebruiker} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
