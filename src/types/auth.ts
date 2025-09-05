export interface AuthResponse {
  user: {
    id: string;
    email: string;
  };
  accessToken: string;
  refreshToken?: string;
}
export interface StoredUser {
  id: string;
  email: string;
}