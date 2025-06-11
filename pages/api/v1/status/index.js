import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS result");
  console.log(result.rows);
  response.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    message: "API is running",
  });
}

export default status;
