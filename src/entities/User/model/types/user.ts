export interface UserI {
    id: string;
    username: string;
}

export interface UserSchema {
    authData?: UserI;
    _inited: boolean;
}
