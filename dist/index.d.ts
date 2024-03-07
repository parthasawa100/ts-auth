export interface User {
    email: string;
}
export interface AuthConfig {
    secretKey: string;
    expiresIn: string;
}
export declare class Authentication<T extends User> {
    private config;
    constructor(config: AuthConfig);
    login(user: T): string | null;
    verify(token: string): boolean;
}
