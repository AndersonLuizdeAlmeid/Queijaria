import db from "../config/database";
import { Sale } from "../models/Sales/types";

const getAll = (): Promise<Sale[]> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM sales", [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        //resolve(rows);
      }
    });
  });
};

const create = (sale: Sale): Promise<Sale> => {
  return new Promise((resolve, reject) => {
    const query = `
        INSERT INTO sales (idProduct, IdClient, saleDate, quantity, totalWeight, totalPrice, creationDate)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

    const params = [
      sale.idProduct,
      sale.IdClient,
      sale.saleDate,
      sale.quantity,
      sale.totalWeight,
      sale.totalPrice,
      sale.creationDate,
    ];

    db.run(query, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ ...sale, id: this.lastID });
      }
    });
  });
};

const update = (sale: Sale): Promise<Sale> => {
  return new Promise((resolve, reject) => {
    const query = `
        UPDATE sales
        SET idProduct = ?, IdClient = ?, saleDate = ?, quantity = ?, totalWeight = ?, totalPrice = ?, creationDate = ?
        WHERE id = ?
      `;

    const params = [
      sale.idProduct,
      sale.IdClient,
      sale.saleDate,
      sale.quantity,
      sale.totalWeight,
      sale.totalPrice,
      sale.creationDate,
      sale.id,
    ];

    db.run(query, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(sale);
      }
    });
  });
};

const deleteSale = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM sales WHERE id = ?`;

    db.run(query, id, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// Outros métodos como getById, create, update, delete

export default {
  getAll,
  create,
  update,
  delete: deleteSale,
};
