function status(request, response) {
  response.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    message: "API is running",
  });
}

export default status;
