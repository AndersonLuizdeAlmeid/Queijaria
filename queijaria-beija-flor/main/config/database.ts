import { Database } from "sqlite3";
import path from "path";

const dbPath = path.resolve(__dirname, "../database.sqlite");

const db = new Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database", err);
  } else {
    console.log("Database connected");
    initializeDatabase();
  }
});

const initializeDatabase = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    cpf_cnpj TEXT,
    address TEXT,
    phone TEXT,
    email TEXT,
    creation_date DATETIME NOT NULL
  )`,
    (err) => {
      if (err) {
        console.error("Error creating clientes table", err);
      } else {
        console.log("Clientes table ready");
      }
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    category TEXT,
    price DECIMAL(8,2) NOT NULL,
    creation_date DATETIME NOT NULL
  )`,
    (err) => {
      if (err) {
        console.error("Error creating products table", err);
      } else {
        console.log("Produtos table ready");
      }
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS batches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    production_date DATETIME NOT NULL,
    expiration_date DATETIME NOT NULL,
    quantity INTEGER NOT NULL,
    status TEXT,
    observations TEXT,
    FOREIGN KEY(produtoId) REFERENCES products(id)
  )`,
    (err) => {
      if (err) {
        console.error("Error creating lotes table", err);
      } else {
        console.log("Lotes table ready");
      }
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS sales (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    client_id INTEGER,
    sale_date DATETIME NOT NULL,
    quantity INTEGER NOT NULL,
    total_weight DECIMAL(8,2),
    total_price DECIMAL(8,2),
    suggested_price DECIMAL(8,2),
    FOREIGN KEY(product_id) REFERENCES products(id),
    FOREIGN KEY(client_id) REFERENCES clients(id)
  )`,
    (err) => {
      if (err) {
        console.error("Error creating sales table", err);
      } else {
        console.log("Sales table ready");
      }
    }
  );
};

export default db;
