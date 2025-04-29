import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Verifica se o token foi fornecido
    if (!authHeader) {
        return res.status(401).json({ message: "Token não fornecido." });
    }

    //Retira o token do Bearer
    const parts = authHeader.split(" ");

    if (parts.length !== 2) {
        return res.status(401).json({ message: "Token mal formatado" });
    }

    const [schema, token] = parts;

    //Verificar se o token é válido
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Token inválido." });
        }

        // Adiciona o usuário decodificado à requisição
        req.userId = decoded.id;
        return next();
    });
}

export default authMiddleware;