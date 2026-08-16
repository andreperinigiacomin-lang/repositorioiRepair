import { Request, Response } from 'express'
import { AuthService } from './auth.service'

const authService = new AuthService()

export class AuthController {

  async register(req: Request, res: Response) {
    const { email, senha } = req.body
    const usuario = await authService.register(email, senha)
    return res.status(201).json(usuario)
  }

  async login(req: Request, res: Response) {
    const { email, senha } = req.body
    const { accessToken, refreshToken, usuario } = await authService.login(email, senha)

    res.cookie('token', accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 1000,
    })
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 1000 * 24 * 7,
    })

    return res.status(200).json({ usuario })
  }

  async refresh(req: Request, res: Response) {
    const refreshToken = req.cookies?.refreshToken

    if (!refreshToken) {
        return res.status(401).json({
            message: 'Refresh Token não encontrado'
        })
    }

    const accessToken = await authService.refresh(refreshToken)

    res.cookie('token', accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 60 * 60 * 1000,
    })

    return res.status(200).json({
        message: 'Access Token renovado com sucesso'
    })
}

  async logout(req: Request, res: Response) {
    res.clearCookie('token')
    res.clearCookie('refreshToken')
    return res.status(200).json({ message: 'Logout realizado com sucesso' })
  }
  async me(req: Request, res: Response) {
  return res.status(200).json({ usuario: req.user })
}
}