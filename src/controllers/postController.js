import postModel from "../models/postModel.js";

class PostController {
    getAll = async (req, res) => {
        try {
            const posts = await postModel.getAll();
            res.json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao buscar postagens" });
        }
    };
    create = async (req, res) => {
        const { title, content, imageUrl } = req.body;
        try {
            if (!title || !content || !imageUrl) {
                return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
            }
            const newPost = await postModel.create(title, content, imageUrl);
            res.status(201).json(newPost);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao criar postagem" });
        }
    };
    update = async (req, res) => {
        const { id } = req.params;
        const { title, content, imageUrl } = req.body;

        try {
            const postUpdated = await postModel.update(
                parseInt(id),
                title,
                content,
                imageUrl
            );

            if (!postUpdated) {
                return res.status(404).json({ erro: "Postagem não encontradaa" });
            }

            res.json(postUpdated);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao atualizar postagem" });
        }
    };



}

export default new PostController();