import prisma from "../../prisma/prisma.js";

class CommentModel {
    getAll = async () => {
        return await prisma.comment.findMany();
    };

    create = async (content, userId) => {
        return await prisma.comment.create({
            data: {
                content,
                userId
            },
        });
    };

    update = async (id, content, userId) => {
        console.log();

        try {
            return await prisma.comment.update({
                where: { id },
                data: {
                    content,
                    userId
                },
            });
        } catch (error) {
            // Se o comentário não for encontrado, o Prisma lançará uma exceção
            if (error.code === "P2025") {
                return null;
            }
            throw error;
        }
    };

    delete = async (id) => {
        try {
            await prisma.comment.delete({
                where: { id },
            });
            return true;
        } catch (error) {
            // Se o comentário não for encontrado, o Prisma lançará uma exceção
            if (error.code === "P2025") {
                return false;
            }
            throw error;
        }
    };

    getById = async (id) => {
        return await prisma.comment.findUnique({
            where: { id },
        });
    };
}

export default new CommentModel();