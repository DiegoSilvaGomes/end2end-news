test("GET /api/v1/status deve retornar status 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const requestBody = await response.json();
  expect(requestBody.updated_at).toBeDefined();

  const parsedUpdateAt = new Date(requestBody.updated_at).toISOString();
  expect(requestBody.updated_at).toBe(parsedUpdateAt);

  expect(requestBody.dependencies.database.version).toBeDefined();
  expect(requestBody.dependencies.database.version).toBe("16.0");

  expect(requestBody.dependencies.database.max_connections).toBeDefined();
  expect(requestBody.dependencies.database.max_connections).not.toBeNaN();
  expect(requestBody.dependencies.database.max_connections).toBe(100);

  expect(requestBody.dependencies.database.opened_connections).toBeDefined();
  expect(requestBody.dependencies.database.opened_connections).not.toBeNaN();
  expect(requestBody.dependencies.database.opened_connections).toBe(1);
});
