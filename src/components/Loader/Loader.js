import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    display: block;
    position: relative;
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 50%;
    border: 4px solid transparent;
    border-top: 4px solid #FF5722;
    -webkit-animation: ${spin} 1.5s linear infinite;
    animation: ${spin} 1.5s linear infinite;

    &::before, &::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 4px solid transparent;
    }

    &::before {
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-top-color: #FF9800;
        -webkit-animation: ${spin} 2s linear infinite;
        animation: ${spin} 2s linear infinite;
    }

    &::after {
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-top-color: #FFC107;
        -webkit-animation: ${spin} 1s linear infinite;
        animation: ${spin} 1s linear infinite;
    }
`;

const Loader = React.memo(({ size }) => <Spinner size={size}>

</Spinner>);

export default Loader;

Loader.defaultProps = {
    size: '70px'
};