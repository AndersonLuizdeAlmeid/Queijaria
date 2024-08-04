import db from "../config/database";
import { Product } from "../models/Products/types";

const getAll = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM products", [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        //resolve(rows);
      }
    });
  });
};

const create = (product: Product): Promise<Product> => {
  return new Promise((resolve, reject) => {
    const query = `
        INSERT INTO products (name, description, category, price, creationDate)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

    const params = [
      product.name,
      product.description,
      product.category,
      product.price,
      product.creationDate,
    ];

    db.run(query, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ ...product, id: this.lastID });
      }
    });
  });
};

const update = (product: Product): Promise<Product> => {
  return new Promise((resolve, reject) => {
    const query = `
        UPDATE products
        SET name = ?, description = ?, category = ?, price = ?, creationDate = ?
        WHERE id = ?
      `;

    const params = [
      product.name,
      product.description,
      product.category,
      product.price,
      product.creationDate,
      product.id,
    ];

    db.run(query, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(product);
      }
    });
  });
};

const deleteProducte = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM products WHERE id = ?`;

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
  delete: deleteProducte,
};
