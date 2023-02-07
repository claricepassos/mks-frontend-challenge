import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import styled from "styled-components";
import "react-modern-drawer/dist/index.css";
import { Footer } from "../components/Footer";

const Conteiner = styled.div`
  background-color: #e5e5e5;

`;

export const Homepage = () => (
    <Conteiner>
      <Header />
      <ProductCard />
      <Footer />
    </Conteiner>
  );
