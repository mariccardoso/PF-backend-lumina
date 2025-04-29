import userModel from "../models/userModel.js";
import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {
    // Listar todos os usuários
    async getAllUsers(req, res) {
        try {
            const users = await UserModel.findAll();
            res.json(users);
        } catch (error) {
            console.error("Erro ao listar usuários:", error);
            res.status(500).json({ error: "Erro ao listar usuários" });
        }
    }

    async register(req, res) {
        try {
            const { name, email, password } = req.body;

            // Validar os dados de entrada
            if (!name || !email || !password) {
                return res
                    .status(400)
                    .json({ message: "Todos os campos são obrigatórios." });
            }

            // Verificar se o usuário já existe
            const userExists = await userModel.findByEmail(email);
            if (userExists) {
                return res.status(400).json({ message: "Usuário já existe." });
            }

            // Hash da senha
            const hashedPassword = await bcrypt.hash(password, 10);

            // Criar objeto do usuário
            const data = {
                name,
                email,
                password: hashedPassword,
            };

            // Criar o usuário
            const user = await userModel.create(data);

            return res.status(201).json({
                message: "Usuário criado com sucesso.",
                user,
            });
        } catch (error) {
            console.error("Erro ao registrar usuário:", error);
            return res.status(500).json({ message: "Erro ao registrar usuário." });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Validar os dados de entrada
            if (!email || !password) {
                return res
                    .status(400)
                    .json({ message: "Email e senha são campos obrigatórios." });
            }

            // Verificar se o usuário existe
            const userExists = await userModel.findByEmail(email);
            if (!userExists) {
                return res.status(401).json({ message: "Credenciais inválidas" });
            }

            // Verificar a senha
            const isPasswordValid = await bcrypt.compare(
                password,
                userExists.password
            );
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Credenciais inválidas" });
            }

            // Gerar o token JWT
            const token = jwt.sign(
                {
                    id: userExists.id,
                    email: userExists.email,
                    name: userExists.name,
                },
                process.env.JWT_SECRET,
                { expiresIn: "24h" }
            );

            return res.json({
                message: "Login realizado com sucesso.",
                token,
                userExists,
            });
        } catch (error) { 
            console.error("Erro ao fazer login:", error);
            res.status(500).json({ message: "Erro ao fazer login." });
        }
    }
}

export default new AuthController();
