import { AxiosRequestConfig } from "axios";
import jwt from 'jsonwebtoken'


export const checkJwt = (request: AxiosRequestConfig): Promise<boolean> => {
    const token = request.headers?.Authorization.replace('Bearer ', '') as string | undefined;

    return new Promise(resolve => {
        const jwtConfig = 0;

        if (!token) {
            resolve(false);
        }

        // jwt.verify(token as string)
    })

}