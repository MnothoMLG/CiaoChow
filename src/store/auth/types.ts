export interface AuthDataState {
  onBoarded: boolean;
  signedIn: boolean;
  user?: UserDataInterface;
}

export interface UserDataInterface {
  username: string;
  email: string;
  password: string;
}

export interface AuthenticateUserResponse {
    jwt: string;
    user: {
        id: string;
        username: string;
        email: string;
        provider: string;
        confirmed: boolean;
        blocked: boolean;
        createdAt: Date;
        updatedAt: Date;
    }
}