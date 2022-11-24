export interface AuthDataState {
  onBoarded: boolean;
  signedIn: boolean;
  user?: UserDataInterface;
}

export interface UserDataInterface {
  id: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginDataInterface {
  identifier: string;
  password: string;
}

export interface AuthenticateUserResponse {
    jwt: string;
    user: UserDataInterface;
}