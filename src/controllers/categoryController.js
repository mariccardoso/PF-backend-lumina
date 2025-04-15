import categoryModel from "../models/categoryModel.js";

class CategoryController {
    getAll = async (req, res) => {
        try {
            const categories = await categoryModel.getAll();
            res.json(categories);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao buscar categorias" });
        }
    };

    create = async (req, res) => {
        const { name } = req.body;
        try {
            if (!name) {
                return res.status(400).json({ erro: "Nome é um campo obrigatório" });
            }
            const newCategory = await categoryModel.create(name);
            res.status(201).json(newCategory);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao criar categoria" });
        }
    };

    update = async (req, res) => {
        const { id } = req.params;
        const { name } = req.body;

        try {
            const categoryUpdated = await categoryModel.update(
                parseInt(id),
                name
            );

            if (!categoryUpdated) {
                return res.status(404).json({ erro: "Categoria não encontrada" });
            }

            res.json(categoryUpdated);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao atualizar categoria" });
        }
    };

    delete = async (req, res) => {
        const { id } = req.params;

        try {
            const sucess = await categoryModel.delete(parseInt(id));

            if (!sucess) {
                return res.status(404).json({ erro: "Usuário não encontrado" });
            }

            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao excluir categoria" });
        }
    };

    getById = async (req, res) => {
        const { id } = req.params;

        try {
            const category = await categoryModel.getById(parseInt(id));

            if (!category) {
                return res.status(404).json({ erro: "Usuário não encontrada" });
            }

            res.json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao buscar categoria" });
        }
    };
}

export default new CategoryController();