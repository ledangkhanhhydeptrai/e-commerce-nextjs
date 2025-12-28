export interface Props {
  onSubmit: (username: string, password: string) => void;
  loading: boolean;
  error: string | null;
}
