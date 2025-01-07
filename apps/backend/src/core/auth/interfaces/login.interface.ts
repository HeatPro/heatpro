export interface LoginDto {
  username: string;
  password: string;
}

export interface TokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}