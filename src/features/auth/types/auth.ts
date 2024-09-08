export interface loginData {
  usernameOrEmail: string;
  password: string;
}

export interface registerData {
  username: string;
  email: string;
  password: string;
}

export interface forgotData {
  email: string;
}

export interface resetPassData {
  newPassword: string;
  comfirmPassword: string;
}
