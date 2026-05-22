test(":getAll - pegar os users", async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json()
    expect(Array.isArray(data)).toBe(true);
})
test(":getByID - pegar users por ID", async () => {
    const res = await fetch("http://localhost:3000/users/:id");
    const data = await res;
    expect(data).toHaveProperty("id");
})