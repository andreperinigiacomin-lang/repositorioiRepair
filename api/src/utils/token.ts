import  jwt  from "jsonwebtoken";
import { access } from "node:fs";

interface TokenPayLoad {
    id: number;
    email: string;
    type: "access" | "refresh";
}
export function generateAccessToken(payload: Omit<TokenPayLoad, "type">): string{
    return jwt.sign({
        payload,
        type: "access"
    },
        process.env.JWT_SECRET!,{
            expiresIn: process.env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'],
        }
    )
}
export function generateRefreshToken(payload: Omit<TokenPayLoad, "type">): string{
    return jwt.sign({
        payload,
        type: "refresh",
        },
        process.env.JWT_SECRET!,{
            expiresIn: process.env.JWT_REFRESH_EXPIRES_IN as jwt.SignOptions['expiresIn'],
        }
    )
}

interface VerifyTokenPayLoad extends TokenPayLoad{
    id: number;
    email: string;
    type: "access" | "refresh";
    iat: number,
    exp: number,
}
export function verifyToken(token: string): VerifyTokenPayLoad{
    return jwt.verify(
        token,
        process.env.JWT_SECRET!
    )as VerifyTokenPayLoad
}