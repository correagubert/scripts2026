// import jsonServer from "json-server";
import { prismaClient } from "../prisma/prisma";

// let server;
const apiUrl = "http://localhost:3000";

// beforeAll((done) => {
//     const app = jsonServer.create();
//     const router = jsonServer.router("db.json");
//     const middlewares = jsonServer.defaults();

//     app.use(middlewares);
//     app.use(router);

//     server = app.listen(3000, done);
// });

// afterAll((done) => {
//     server.close(done);
// });

test("PUT atualiza nome do usuário", async () => {
    const res = await fetch(`${apiUrl}/usuarios/1`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: "Thiago Atualizado" }),
    });
    const retornoApi = await res.json();
    expect(retornoApi.data.nome).toBe("Thiago Atualizado");
});

test("DELETE exclui usuário", async () => {
    await fetch(`${apiUrl}/usuarios/2`, { method: "DELETE" });
    const res = await fetch(`${apiUrl}/usuarios/2`);
    expect(res.status).toBe(404);
});

test("GET retorna 404", async () => {
    const res = await fetch(`${apiUrl}/usuarios/999`);
    expect(res.status).toBe(404);
});

test("POST cria usuário e lista não está vazia", async () => {
    const novoUsuario = { name: "Carlos", email: "carlos@example.com" };
    await fetch(`${apiUrl}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoUsuario),
    });
    const res = await fetch(`${apiUrl}/usuarios`);
    const data = await res.json();
    // if (data.length > 5) {
    //     await fetch(`${apiUrl}/usuarios/5`, { method: "DELETE" });
    //     const res = await fetch(`${apiUrl}/usuarios/5`);
    //     expect(res.status).toBe(404);
    // }
    expect(data.length).toBeGreaterThan(0);
});
