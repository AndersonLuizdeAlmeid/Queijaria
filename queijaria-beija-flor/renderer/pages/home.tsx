import React from "react";
import HomeCard from "../components/HomeCard";
import CartShoppingIcon from "../icons/CartShoppingIcon";
import CheeseIcon from "renderer/icons/CheeseIcon";
import UsersIcon from "renderer/icons/UsersIcon";
import SearchDollarIcon from "renderer/icons/SearchDollarIcon";
import Layout from "renderer/components/Layout";
import LabelIcon from "renderer/icons/LabelIcon";

export default function HomePage() {
  const [message, setMessage] = React.useState("No message found");

  React.useEffect(() => {
    window.ipc.on("message", (message: string) => {
      setMessage(message);
    });
  }, []);

  return (
    <Layout pageTitle="Home">
      <div style={{ padding: "20px 20px 20px 0" }}>
        <HomeCard
          icon={<CartShoppingIcon />}
          title="REGISTRO DE VENDAS"
          route="/sales-record"
        />
      </div>
      <div style={{ padding: "20px" }}>
        <HomeCard icon={<CheeseIcon />} title="PRODUTOS" route="/products" />
      </div>
      <div style={{ padding: "20px" }}>
        <HomeCard icon={<LabelIcon />} title="LOTES" route="/batches" />
      </div>
      <div style={{ padding: "20px" }}>
        <HomeCard icon={<UsersIcon />} title="CLIENTES" route="/clients" />
      </div>
      <div style={{ padding: "20px" }}>
        <HomeCard icon={<SearchDollarIcon />} title="VENDAS" route="/sales" />
      </div>
    </Layout>
  );
}
