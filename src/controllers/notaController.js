import notaModel from "../models/notaModel.js";

class NotaController {
  getAll = async (req, res) => {
    try {
      const notas = await notaModel.getAll();
      res.json(notas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar anotações" });
    }
  };

  create = async (req, res) => {
    const { titulo, conteudo} = req.body;
    try {
      if (!titulo || !conteudo) {
        return res.status(400).json({ erro: "Titulo e conteúdo são obrigatórios" });
      }
      const novaNota = await notaModel.create(titulo, conteudo);
      res.status(201).json(novaNota);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar anotação" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const {  favorita, cor, titulo, conteudo  } = req.body;

    try {
      const notaAtualizada = await notaModel.update(
        parseInt(id),
        favorita,
        cor,
        titulo,
        conteudo
      );

      if (!notaAtualizada) {
        return res.status(404).json({ erro: "Anotação não encontrada" });
      }

      res.json(notaAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar anotação" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await notaModel.delete(parseInt(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Anotação não encontrada" });
      }

      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao excluir anotação" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const nota = await notaModel.getById(parseInt(id));

      if (!nota) {
        return res.status(404).json({ erro: "Anotação não encontrada" });
      }

      res.json(nota);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar anotação" });
    }
  };
}

export default new NotaController();