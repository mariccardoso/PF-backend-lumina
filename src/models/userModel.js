import prisma from "../../prisma/client.js";

class UserModel {
  getAll = async () => {
    return await prisma.user.findMany();
  };

  create = async (name, email, password, role ) => {
    return await prisma.user.create({
      data: {
        name,
        email,
        password,
        role
      },
    });
  };

  update = async (id, name, email, password, role) => {
    console.log();
    
    try {
      return await prisma.user.update({
        where: { id },
        data: {
          favorita: favorita !== undefined ? favorita : true,
          titulo,
          cor,
          conteudo
        },
      });
    } catch (error) {
      // Se a user não for encontrada, o Prisma lançará uma exceção
      if (error.code === "P2025") {
        return null;
      }
      throw error;
    }
  };

  delete = async (id) => {
    try {
      await prisma.user.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      // Se a tarefa não for encontrada, o Prisma lançará uma exceção
      if (error.code === "P2025") {
        return false;
      }
      throw error;
    }
  };

  getById = async (id) => {
    return await prisma.user.findUnique({
      where: { id },
    });
  };
}

export default new UserModel();