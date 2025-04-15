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
          name,
          email,
          password,
          role
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
      await prisma.user.delete({
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
    return await prisma.user.findUnique({
      where: { id },
    });
  };
}

export default new UserModel();