import jwt from 'jsonwebtoken';

interface User {
    email: string;
}

interface AuthConfig {
    secretKey: string;
    expiresIn: string;
}

class Authentication<T extends User> {
    private config: AuthConfig;

    constructor(config: AuthConfig) {
        this.config = config;
    }

    login(user: T): string | null {
        const token = jwt.sign({ ...user }, this.config.secretKey, { expiresIn: this.config.expiresIn });
        return token;
    }

    verify(token: string): boolean {
        try {
            jwt.verify(token, this.config.secretKey);
            return true;
        } catch (error) {
            return false;
        }
    }
}

export { User, AuthConfig, Authentication };
