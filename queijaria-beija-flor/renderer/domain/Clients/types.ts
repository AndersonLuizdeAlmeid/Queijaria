export interface Client {
  id: number;
  name: string;
  cpf: string;
  address?: string;
  phone?: string;
  email?: string;
  creationDate: Date;
}
