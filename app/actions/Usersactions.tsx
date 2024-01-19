"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/Prisma";

export async function create(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  if (!name.trim() || !email.trim()) {
    return;
  }
  await prisma.gebruikers.create({
    data: {
      name: name,
      email: email,
    },
  });
  revalidatePath("/");
}

export async function deleteUser(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const remove = await prisma.gebruikers.delete({
    where: {
      id: inputId,
    },
  });

  if (!remove) {
    return;
  }

  revalidatePath("/");
}

export async function editUserName(formData: FormData) {
  const name = formData.get("name") as string;
  const inputId = formData.get("inputId") as string;

  if (!name.trim() || !inputId.trim()) {
    return;
  }
  await prisma.gebruikers.update({
    where: {
      id: inputId,
    },
    data: {
      name: name,
    },
  });
  revalidatePath("/");
}
