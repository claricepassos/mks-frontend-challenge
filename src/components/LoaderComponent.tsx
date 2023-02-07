import ReactLoading from 'react-loading';
import styled from 'styled-components'



const LoaderConteiner = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.4);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: none;
    };
`


export const LoaderComponent = () => (
    <LoaderConteiner>
        <ReactLoading type={'spin'} color={'#ffffff'} height={300} width={300} delay={10} />
    </LoaderConteiner>
);

