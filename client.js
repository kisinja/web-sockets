import WebSocket from "ws";

const socket = new WebSocket("ws://localhost:8080");

socket.on("open", () => {
  console.log("Connected to WebSocket server");

  socket.send("Hello from the client!");
});

socket.on("message", (data) => {
  console.log("Received:", data.toString());
});

socket.on("error", (err) => {
  console.error("WebSocket error:", err.message);
});

socket.on("close", () => {
  console.log("Disconnected from server");
});
