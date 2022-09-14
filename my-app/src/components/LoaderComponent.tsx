import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components'

const LoaderConteiner = styled.div`
    position: fixed;
    left: 800px;
    top: 300px;
    width: 100%;
    height: 100%;
    z-index: 1000;
`


export const LoaderComponent = () => (
    <LoaderConteiner>
        <ReactLoading type={'spin'} color={'#ffffff'} height={300} width={300} delay={10} />
    </LoaderConteiner>
);

