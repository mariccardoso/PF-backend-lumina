import prisma from "../../prisma/prisma.js";

class LikeModel {
    getAll = async () => {
        return await prisma.like.findMany();
    };

    create = async (userId, postId) => {
        return await prisma.like.create({
            data: {
                postId,
                userId,
            },
        });
    };

    update = async (id, userId, postId) => {
        console.log();

        try {
            return await prisma.like.update({
                where: { id },
                data: {
                    userId,
                    postId,
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
            await prisma.like.delete({
                where: { id },
            });
            return true;
        } catch (error) {
            // Seo Usuário não for encontrado, o Prisma lançará uma exceção
            if (error.code === "P2025") {
                return false;
            }
            throw error;
        }
    };

    getById = async (id) => {
        return await prisma.like.findUnique({
            where: { id },
        });
    };
}

export default new LikeModel();