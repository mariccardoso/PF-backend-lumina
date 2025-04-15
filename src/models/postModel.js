import prisma from "../../prisma/client.js";

class PostModel {
    getAll = async () => {
        return await prisma.post.findMany();
    };

    create = async (title, content, imageUrl) => {
        return await prisma.post.create({
            data: {
                title,
                content,
                imageUrl,
            },
        });
    };

    update = async (id, title, content, imageUrl) => {
        console.log();

        try {
            return await prisma.post.update({
                where: { id },
                data: {
                    title,
                    content,
                    imageUrl,
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
            await prisma.post.delete({
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
        return await prisma.post.findUnique({
            where: { id },
        });
    };
}

export default new PostModel();