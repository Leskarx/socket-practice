import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
const app = express()
const port = 3000
app.use(cors());

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
io.on("connection", (socket) => {
    console.log(`user connected ${socket.id}`);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})