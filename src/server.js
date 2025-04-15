import express from "express";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!"); // Mensagem para a rota raiz
});