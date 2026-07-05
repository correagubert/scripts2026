import { prismaClient } from "../prisma/prisma";
test("GET retorna um array", async () => {
    const usuarios = await prismaClient.usuario.findMany();
    expect(Array.isArray(usuarios)).toBe(true);
});