import express from "express";
import userRoutes from "./routes/userRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!"); // Mensagem para a rota raiz
});