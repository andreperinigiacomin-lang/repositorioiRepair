import  jwt  from "jsonwebtoken";

interface TokenPayLoad {
    id: number;
    email: string;
}
export function generateAccessToken(payload: TokenPayLoad): string{
    return jwt.sign(
        payload,
        process.env.JWT_SECRET!,{
            expiresIn: process.env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'],
        }
    )
}
export function generateRefreshToken(payload: object){
    return jwt.sign(
        payload,
        process.env.JWT_SECRET!,{
            expiresIn: process.env.JWT_REFRESH_EXPIRES_IN as jwt.SignOptions['expiresIn'],
        }
    )
}

interface VerifyTokenPayLoad extends TokenPayLoad{
    iat: number,
    exp: number,
}
export function verifyToken(token: string): VerifyTokenPayLoad{
    return jwt.verify(
        token,
        process.env.JWT_SECRET!
    )as VerifyTokenPayLoad
}