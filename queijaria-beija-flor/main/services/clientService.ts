import db from "../config/database";
import { Client } from "../models/Clients/types";

const getAll = (): Promise<Client[]> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM clients", [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        //resolve(rows);
      }
    });
  });
};

const create = (client: Client): Promise<Client> => {
  return new Promise((resolve, reject) => {
    const query = `
        INSERT INTO clients (name, cpf_cnpj, address, phone, email, creationDate)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

    const params = [
      client.name,
      client.cpf_cnpj,
      client.address,
      client.phone,
      client.email,
      client.creationDate,
    ];

    db.run(query, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ ...client, id: this.lastID });
      }
    });
  });
};

const update = (client: Client): Promise<Client> => {
  return new Promise((resolve, reject) => {
    const query = `
        UPDATE clients
        SET name = ?, cpf_cnpj = ?, address = ?, phone = ?, email = ?, creationDate = ?
        WHERE id = ?
      `;

    const params = [
      client.name,
      client.cpf_cnpj,
      client.address,
      client.phone,
      client.email,
      client.creationDate,
      client.id,
    ];

    db.run(query, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(client);
      }
    });
  });
};

const deleteCliente = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM clients WHERE id = ?`;

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
  delete: deleteCliente,
};
