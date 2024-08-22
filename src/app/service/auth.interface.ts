import { User } from "../model/user.model";

export interface IAuthService {
    login(user:User): void;
    logout(): void;
    signup(user:User): void;
    isLoggedIn():boolean;
}