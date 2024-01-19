import Form from "../ui/Form";
import Button from "../ui/Button";
import { BsFillTrashFill } from "react-icons/bs";
import Input from "../ui/Input";
import { deleteUser } from "@/app/actions/Usersactions";
import { GebruikerType } from "@/types/GebruikerType";
const DeleteGebruiker = ({ gebruiker }: { gebruiker: GebruikerType }) => {
  return (
    <Form action={deleteUser}>
      <Input name="inputId" value={gebruiker.id} type="hidden" />
      <Button actionButton type="submit" text={<BsFillTrashFill />} />
    </Form>
  );
};

export default DeleteGebruiker;
