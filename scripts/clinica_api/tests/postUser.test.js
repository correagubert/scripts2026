import { prismaClient } from "../prisma/prisma";
test("POST cria usuário", async () => {
    const data = { nome: "Ana Carla 2", email: "ana3@example.com", senha: "12345", cargo: "Médico" };
    const usuario = await prismaClient.usuario.create({data: data});
    expect(usuario).toMatchObject(usuario);
});