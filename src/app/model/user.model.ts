export class User{
    name: string;
    email: string;
    password: string;
    role: string;
    is_active: boolean;
    created_at: Date|null;
    updated_at: Date|null;
    deleted_at: Date|null;

    constructor(name: string, email: string, password: string, role: string, is_active: boolean, created_at: Date|null, updated_at: Date|null, deleted_at: Date|null){
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.is_active = is_active;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
}