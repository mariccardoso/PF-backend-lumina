import prisma from "../../prisma/client.js";

class CategoryModel {
    getAll = async () => {
        return await prisma.category.findMany();
    };

    create = async (name) => {
        return await prisma.category.create({
            data: {
                name
            },
        });
    };

    update = async (id, name) => {
        console.log();

        try {
            return await prisma.category.update({
                where: { id },
                data: {
                    name
                },
            });
        } catch (error) {
            // Se o usuário não for encontrado, o Prisma lançará uma exceção
            if (error.code === "P2025") {
                return null;
            }
            throw error;
        }
    };

    delete = async (id) => {
        try {
            await prisma.category.delete({
                where: { id },
            });
            return true;
        } catch (error) {
            // Se o Usuário não for encontrado, o Prisma lançará uma exceção
            if (error.code === "P2025") {
                return false;
            }
            throw error;
        }
    };

    getById = async (id) => {
        return await prisma.category.findUnique({
            where: { id },
        });
    };
}

export default new CategoryModel();