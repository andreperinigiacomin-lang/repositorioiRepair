import bcrypt from 'bcrypt'
import { prisma } from '../../config/prismaClient'
import { generateAccessToken, generateRefreshToken, verifyToken } from '../../utils/token'
import { AppError } from '../../utils/AppError'

const SALT_ROUNDS = 10

export class AuthService {

  async register(email: string, senha: string) {
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email },
    })

    if (usuarioExistente) {
      throw new AppError('Email já cadastrado', 409)
    }

    const senhaHash = await bcrypt.hash(senha, SALT_ROUNDS)

    const usuario = await prisma.usuario.create({
      data: {
         email, 
         senha: senhaHash },
      select: {
         id: true, 
         email: true },
    })

    return usuario
  }

  async login(email: string, senha: string) {
    const usuario = await prisma.usuario.findUnique({
      where: { email },
    })

    if (!usuario) {
      throw new AppError('Credenciais inválidas', 401)
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

    if (!senhaCorreta) {
      throw new AppError('Credenciais inválidas', 401)
    }
    const payload = ({id: usuario.id, email: usuario.email})
    const accessToken = generateAccessToken(payload)
    const refreshToken = generateRefreshToken(payload)

    return { accessToken, refreshToken, usuario: { id: usuario.id, email: usuario.email } }
  }

  async refresh(refreshToken: string){
    const payload = verifyToken(refreshToken)
    const  acessToken = generateAccessToken({
      id: payload.id,
      email: payload.email
    })
    return acessToken
  }
}