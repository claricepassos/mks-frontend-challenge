import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import styled from "styled-components";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useState } from "react";
import { CartComponent } from "../components/CartComponent";


const Conteiner = styled.div`
background-color: #E5E5E5;
height: 100vh ;
`

export const Homepage = () => {



    return (
        <Conteiner>
            <Header />
            <ProductCard/>
        </Conteiner>
    )

}