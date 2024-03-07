import { User } from "jsonwebtoken";
interface AuthConfig {
    secretKey: string;
    expiresIn: string;
}
declare class Authentication<T extends User> {
    private config;
    constructor(config: AuthConfig);
    login(user: T): string | null;
    verify(token: string): boolean;
}
export { AuthConfig, Authentication };
