import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../renderer/pages/home";
import ProductsPage from "../renderer/pages/products/index"; // Exemplo de página
import BatchesPage from "../renderer/pages/batches/index"; // Exemplo de página
import ClientsPage from "../renderer/pages/clients/index"; // Exemplo de página
import SalesPage from "../renderer/pages/sales/index"; // Exemplo de página

const AppRouter = () => (
  <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/batches" element={<BatchesPage />} />
    <Route path="/clients" element={<ClientsPage />} />
    <Route path="/sales" element={<SalesPage />} />
    <Route path="*" element={<Navigate to="/home" />} />{" "}
    {/* Redireciona para Home se a rota não for encontrada */}
  </Routes>
);

export default AppRouter;
