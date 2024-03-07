# Auth TypeScript

## Description

Auth TypeScript is an authentication package for TypeScript applications. It provides a class for handling user authentication and token generation/verification using JSON Web Tokens (JWT).

## Installation

You can install Auth TypeScript via npm:

```bash
npm install auth-typescript

import { Authentication, User, AuthConfig } from 'typescript-auth';
interface CustomUser extends User {
    username: string;
}
const authConfig: AuthConfig = {
    secretKey: 'your_secret_key_here',
    expiresIn: '1h'
};
const auth = new Authentication<CustomUser>(authConfig);
const user: CustomUser = {
    email: 'example@example.com',
    username: 'example_user'
};
// Login
const token = auth.login(user);
console.log('Generated token:', token);
// Verify
const isTokenValid = auth.verify(token!);
console.log('Is token valid?', isTokenValid);

```

