export interface ProfileProps {
  id: string;
  username: string;
  email: string;
}
export interface ProfileResponse {
  data: ProfileProps | null;
  status: number;
  message: string;
}
