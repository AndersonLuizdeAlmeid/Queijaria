export interface Batch {
  id: number;
  idProduct: number;
  productionDate: Date;
  expirationDate: Date;
  quantity: number;
  status: string;
  observations?: string;
}
