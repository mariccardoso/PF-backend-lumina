import likeModel from "../models/likeModel.js";

class LikeController {
    getAll = async (req, res) => {
        try {
            const likes = await likeModel.getAll();
            res.json(likes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao buscar likeagens" });
        }
    };
    create = async (req, res) => {
        const { postId, userId} = req.body;
        try {
            if (!postId || !userId) {
                return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
            }
            const newLike = await likeModel.create(postId, userId);
            res.status(201).json(newLike);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao curtir" });
        }
    };
    update = async (req, res) => {
        const { id } = req.params;
        const { postId, userId } = req.body;
        try {
            const likeUpdated = await likeModel.update(
                parseInt(id),
                postId,
                userId
            );

            if (!likeUpdated) {
                return res.status(404).json({ erro: "Curtida não encontradaa" });
            }

            res.json(likeUpdated);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao atualizar curtida" });
        }
    };

    delete = async (req, res) => {
        const { id } = req.params;

        try {
            const sucess = await likeModel.delete(parseInt(id));

            if (!sucess) {
                return res.status(404).json({ erro: "Curtida não encontrado" });
            }

            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao excluir curtida" });
        }
    };

    getById = async (req, res) => {
        const { id } = req.params;

        try {
            const like = await likeModel.getById(parseInt(id));

            if (!like) {
                return res.status(404).json({ erro: "Curtida não encontrada" });
            }

            res.json(like);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao buscar curtida" });
        }
    };


}

export default new LikeController();