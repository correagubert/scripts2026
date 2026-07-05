import { prismaClient } from "../prisma/prisma";
test("GET retorna usuário válido", async () => {
    const usuarios = await prismaClient.usuario.findUnique({
        where: { id: 13 },
      });
    expect(usuarios.id).toBe(13);
});