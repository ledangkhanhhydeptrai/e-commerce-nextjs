export interface RegisterProps {
  onSubmit: (email: string, username: string, password: string) => void;
  loading: boolean;
  error: string | null;
}