import prisma from "../../prisma/client.js";

class NotaModel {
  getAll = async () => {
    return await prisma.note.findMany();
  };

  create = async (titulo, conteudo) => {
    return await prisma.note.create({
      data: {
        titulo,
        conteudo
      },
    });
  };

  update = async (id, favorita, cor, titulo, conteudo) => {
    console.log();
    
    try {
      return await prisma.note.update({
        where: { id },
        data: {
          favorita: favorita !== undefined ? favorita : true,
          titulo,
          cor,
          conteudo
        },
      });
    } catch (error) {
      // Se a nota não for encontrada, o Prisma lançará uma exceção
      if (error.code === "P2025") {
        return null;
      }
      throw error;
    }
  };

  delete = async (id) => {
    try {
      await prisma.note.delete({
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
    return await prisma.note.findUnique({
      where: { id },
    });
  };
}

export default new NotaModel();