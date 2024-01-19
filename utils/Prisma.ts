import { PrismaClient } from "@prisma/client";

const globalPrima = globalThis as unknown as{
    prisma: PrismaClient | undefined
}

export const prisma = globalPrima.prisma ?? new PrismaClient();

if(process.env.NODE_ENV === "development"){
    globalPrima.prisma = prisma;
}