"use client";
import { GebruikerType } from "@/types/GebruikerType";
import { editUserName } from "@/app/actions/Usersactions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
const EditGebruiker = ({ gebruiker }: { gebruiker: GebruikerType }) => {
  const [editGebruiker, setEditGebruiker] = useState(false);

  const handleEdit = () => {
    setEditGebruiker(!editGebruiker);
  };
  const handleSubmit = () => {
    setEditGebruiker(false);
  };
  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<BiEdit />} actionButton />
      {editGebruiker ? (
        <Form action={editUserName} onSubmit={handleSubmit}>
          <Input name="inputId" value={gebruiker.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="name" placeholder="Nieuwe Naam...." />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditGebruiker;
