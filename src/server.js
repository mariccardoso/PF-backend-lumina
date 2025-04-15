import express from "express";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js"; // Importando as rotas de comentários
import likeRoutes from "./routes/likeRoutes.js"; // Importando as rotas de likes

const app = express();
const port = 4000;
app.use(express.json());
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/post", postRoutes); // Adicione esta linha para incluir as rotas de postagens
app.use("/comments", commentRoutes); // Adicione esta linha para incluir as rotas de comentários
app.use("/likes", likeRoutes); // Adicione esta linha para incluir as rotas de likes

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!"); // Mensagem para a rota raiz
});