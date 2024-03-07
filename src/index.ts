import jwt from 'jsonwebtoken';

// Define the User interface representing user data
export interface User {
    email: string;
}

// Define the AuthConfig interface representing authentication configuration
export interface AuthConfig {
    secretKey: string;
    expiresIn: string;
}

// Define the Authentication class for handling authentication logic
export class Authentication<T extends User> {
    private config: AuthConfig;

    constructor(config: AuthConfig) {
        this.config = config;
    }

    // Method to generate a token for the provided user
    login(user: T): string | null {
        if (!user.email) {
            throw new Error('Email is required for authentication');
        }

        const token = jwt.sign({ ...user }, this.config.secretKey, { expiresIn: this.config.expiresIn });
        return token;
    }

    // Method to verify the provided token
    verify(token: string): boolean {
        try {
            jwt.verify(token, this.config.secretKey);
            return true;
        } catch (error) {
            return false;
        }
    }
}
