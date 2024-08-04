import React from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "../../../resources/logo.png";
import { Container } from "./styles";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle} - Queijaria Beija Flor</title>
      </Head>

      <div style={{ padding: "0 40px" }}>
        <Image
          src={Logo.src}
          alt="queijaria beija flor"
          width={90}
          height={90}
        />
        <Container>{children}</Container>
      </div>
    </React.Fragment>
  );
};

export default Layout;
