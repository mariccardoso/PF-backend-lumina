import userModel from "../models/userModel.js";

class UserController {
  getAll = async (req, res) => {
    try {
      const users = await userModel.getAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar auserções" });
    }
  };

  create = async (req, res) => {
    const {name, email, password, role} = req.body;
    try {
      if (!name || !email || !password || !role) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
      }
      const novoUser = await userModel.create(name, email, password, role);
      res.status(201).json(novoUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar auserção" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const {  favorita, cor, titulo, conteudo  } = req.body;

    try {
      const userAtualizada = await userModel.update(
        parseInt(id),
        favorita,
        cor,
        titulo,
        conteudo
      );

      if (!userAtualizada) {
        return res.status(404).json({ erro: "Auserção não encontrada" });
      }

      res.json(userAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar auserção" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await userModel.delete(parseInt(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Auserção não encontrada" });
      }

      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao excluir auserção" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const user = await userModel.getById(parseInt(id));

      if (!user) {
        return res.status(404).json({ erro: "Auserção não encontrada" });
      }

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar auserção" });
    }
  };
}

export default new UserController();