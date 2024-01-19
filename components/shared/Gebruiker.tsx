import DeleteGebruiker from "./DeleteGebruiker";
import { GebruikerType } from "@/types/GebruikerType";
import EditGebruiker from "./EditGebruiker";

const Gebruiker = ({ gebruiker }: { gebruiker: GebruikerType }) => {
  return (
    <div className="w-full flex items-center justify-between bg-white py-3 px-20 rounded-xl">
      <span className="text-center font-bold uppercase">{gebruiker.name}</span>
      <span className="text-center font-bold uppercase">{gebruiker.email}</span>
      <div className="flex items-center gap-5">
        <EditGebruiker gebruiker={gebruiker} />
        <DeleteGebruiker gebruiker={gebruiker} />
      </div>
    </div>
  );
};

export default Gebruiker;
