import  jwt  from "jsonwebtoken";

interface TokenPayLoad {
    id: number;
    email: string;
}
export function generateToken(payload: TokenPayLoad): string{
    return jwt.sign(
        payload,
        process.env.JWT_SECRET!,{
            expiresIn: process.env.JWT_EXPIRES_IN,
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
    )as verifyTokenPayLoad
}