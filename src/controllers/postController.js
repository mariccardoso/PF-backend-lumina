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
    


}

export default new PostController();