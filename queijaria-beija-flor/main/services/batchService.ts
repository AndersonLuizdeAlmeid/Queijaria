import db from "../config/database";
import { Batch } from "../models/Batchs/types";

const getAll = (): Promise<Batch[]> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM batches", [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        //resolve(rows);
      }
    });
  });
};

const create = (batch: Batch): Promise<Batch> => {
  return new Promise((resolve, reject) => {
    const query = `
        INSERT INTO batches (idProduct, productionDate, expirationDate, quantity, status, observations)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

    const params = [
      batch.idProduct,
      batch.productionDate,
      batch.expirationDate,
      batch.quantity,
      batch.status,
      batch.observations,
    ];

    db.run(query, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ ...batch, id: this.lastID });
      }
    });
  });
};

const update = (batch: Batch): Promise<Batch> => {
  return new Promise((resolve, reject) => {
    const query = `
        UPDATE batches
        SET idProduct = ?, productionDate = ?, expirationDate = ?, quantity = ?, status = ?, observations = ?
        WHERE id = ?
      `;

    const params = [
      batch.idProduct,
      batch.productionDate,
      batch.expirationDate,
      batch.quantity,
      batch.status,
      batch.observations,
      batch.id,
    ];

    db.run(query, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(batch);
      }
    });
  });
};

const deleteBatch = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM batches WHERE id = ?`;

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
  delete: deleteBatch,
};
