import React from "react"
import styled from "styled-components";

export const Footer = () => {

    const FooterConteiner = styled.div`
    position: absolute;
    width: 100vw;
    left: 0px;
    background: #EEEEEE;`

    const Content = styled.div`
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: center;
    `

    return (
        <FooterConteiner>
            <Content>MKS sistemas © Todos os direitos reservados</Content>
        </FooterConteiner>
    )
}