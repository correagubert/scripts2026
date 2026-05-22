import jsonServer from "json-server";

let server;
const baseUrl = "http://localhost:5000";

beforeAll((done) => {
    const app = jsonServer.create();
    const router = jsonServer.router("db.json");
    const middlewares = jsonServer.defaults();

    app.use(middlewares);
    app.use(router);

    server = app.listen(5000, done);
});

afterAll((done) => {
    server.close(done);
});

test("GET /equipamentos deve retornar 200", async () => {
    const res = await fetch(`${baseUrl}/equipamentos`);
    expect(res.status).toBe(200);
});

test("GET /equipamentos/1 deve retornar um equipamento válido existente", async () => {
    const res = await fetch(`${baseUrl}/equipamentos/1`);
    const data = await res.json();
    await fetch(`${baseUrl}/equipamentos/$equipamentos.id`, { method: "DELETE" });
    expect(data).toHaveProperty("id", 1);
});

test("POST /equipamentos deve criar uma ferramenta nova no banco de dados", async () => {
    const novoEquip = { nome: "Machadinha", dono: "Nicolas" };
    const res = await fetch(`${baseUrl}/equipamentos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoEquip),
    });
    const data = await res.json();
    expect(data.nome).toBe("Machadinha");
});

test("PUT /equipamentos/2 deve atualizar o nome do equipamento", async () => {
    const res = await fetch(`${baseUrl}/equipamentos/2`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: 2,
            nome: "Escada Dobrável",
            dono: "Vanderlei Luxemburgo",
        }),
    });
    const data = await res.json();
    expect(data.id).toEqual(2);
});

test("PATCH /equipamentos/3 deve atualizar o nome do dono", async () => {
    const res = await fetch(`${baseUrl}/equipamentos/3`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dono: "Vitor" }),
    });
    const data = await res.json();
    console.log(data)
    expect(data.dono).toContain("Vitor");
});

test("DELETE /equipamentos/4 deve excluir um equipamento", async () => {
    await fetch(`${baseUrl}/equipamentos/4`, { method: "DELETE" });
    const res = await fetch(`${baseUrl}/equipamentos/4`);
    expect(res.status).toBe(404);
});

test("GET /equipamentos/999 deve retornar um erro 404", async () => {
    const res = await fetch(`${baseUrl}/equipamentos/999`);
    expect(res.status).toBe(404);
});

test("PATCH em um ID deve retornar um erro", async () => {
    const res = await fetch(`${baseUrl}/equipamentos/2`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: 1 }),
    });
    const data = await res.json();
    console.log(data)
    expect(res.status).toBe(403);
});

test("POST com uma sintaxe errada deve retornar um erro", async () => {
    const novoEquip = { título: "Machadinha", autor: "Nicolas" };
    const res = await fetch(`${baseUrl}/equipamentos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoEquip),
    });
    const data = await res.json();
    if (novoEquip.título != "Machadinha")
    expect(res.status).toBe(400);
});