import userModel from "../models/userModel.js";

class UserController {
  getAll = async (req, res) => {
    try {
      const users = await userModel.getAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar usuários" });
    }
  };

  create = async (req, res) => {
    const {name, email, password, role} = req.body;
    try {
      if (!name || !email || !password || !role) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
      }
      const newUser = await userModel.create(name, email, password, role);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar usuário" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const {  name, email, password, role  } = req.body;

    try {
      const userAtualizado = await userModel.update(
        parseInt(id),
        name,
        email,
        password,
        role
      );

      if (!userAtualizado) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
      }

      res.json(userAtualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar usuário" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucess = await userModel.delete(parseInt(id));

      if (!sucess) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
      }

      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao excluir usuário" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const user = await userModel.getById(parseInt(id));

      if (!user) {
        return res.status(404).json({ erro: "Usuário não encontrada" });
      }

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar usuário" });
    }
  };
}

export default new UserController();