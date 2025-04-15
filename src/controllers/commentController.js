import commentModel from "../models/commentModel.js";

class CommentController {
    getAll = async (req, res) => {
        try {
            const comments = await commentModel.getAll();
            res.json(comments);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao buscar comentários" });
        }
    };

    create = async (req, res) => {
        const { content, userId} = req.body;
        try {
            if (!content || !userId) {
                return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
            }
            const newComment = await commentModel.create(content, userId);
            res.status(201).json(newComment);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao criar comentário" });
        }
    };

    update = async (req, res) => {
        const { id } = req.params;
        const { name, email, password, role } = req.body;

        try {
            const commentUpdated = await commentModel.update(
                parseInt(id),
                name,
                email,
                password,
                role
            );

            if (!commentUpdated) {
                return res.status(404).json({ erro: "Comentário não encontrado" });
            }

            res.json(commentUpdated);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao atualizar comentário" });
        }
    };

    delete = async (req, res) => {
        const { id } = req.params;

        try {
            const sucess = await commentModel.delete(parseInt(id));

            if (!sucess) {
                return res.status(404).json({ erro: "Comentário não encontrado" });
            }

            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao excluir comentário" });
        }
    };

    getById = async (req, res) => {
        const { id } = req.params;

        try {
            const comment = await commentModel.getById(parseInt(id));

            if (!comment) {
                return res.status(404).json({ erro: "Comentário não encontrado" });
            }

            res.json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao buscar comentário" });
        }
    };
}

export default new CommentController();