export interface Client {
  id: number;
  name: string;
  cpf_cnpj: string;
  address?: string;
  phone?: string;
  email?: string;
  creationDate: Date;
}
