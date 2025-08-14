test("GET /api/v1/migrations deve retornar status 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);

  const requestBody = await response.json();
  expect(Array.isArray(requestBody)).toBe(true);
});
