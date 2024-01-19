import { create } from "@/app/actions/Usersactions";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";

const AddUser = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="flex">
        <Input name="name" type="text" placeholder="Naam" />
        <Input name="email" type="email" placeholder="Email" />
        <Button type="submit" text="Add User..." />
      </div>
    </Form>
  );
};

export default AddUser;
