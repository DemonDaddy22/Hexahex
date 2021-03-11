import React, { useState } from 'react';
import styled from 'styled-components';
import { copyTextToClipboard, isColourDark } from '../../utils';

const ColourBox = styled.div`
    padding: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: brightness(100%);
    color: ${props => props.labelColour};
    background-color: ${props => props.colour};
    transition: background-color 0.2s, filter 0.15s;

    &:hover {
        cursor: pointer;
        filter: brightness(90%);
        & .copy-button {
            opacity: 1;
        }
    }

    & .copy-button {
        opacity: 0;
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 0.1rem 0.25rem;
        color: #fff;
        font-size: 0.6rem;
        letter-spacing: 0.4px;
        text-transform: uppercase;
        background-color: rgba(0, 0, 0, 0.25);
        transition: opacity 0.15s;
    }
`;

const ColourName = styled.div`
    font-size: 0.75rem;
    font-weight: bold;
`;

const ColourCode = styled.div`
    margin-top: 4px;
    text-transform: uppercase;
    letter-spacing: 0.25px;
`;

const Colour = React.memo(({ colour: { name, namedHex } }) => {

    const [clicked, setClicked] = useState(false);

    const handleClick = colourCode => {
        copyTextToClipboard(typeof colourCode === 'string' ? colourCode.toUpperCase() : colourCode);
        setClicked(true);
        setTimeout(() => setClicked(false), 1500);
    };

    return <ColourBox colour={namedHex} labelColour={isColourDark(namedHex) ? '#fff' : '#000'} onClick={!clicked ? () => handleClick(namedHex) : () => { }}>
        <ColourName>{name}</ColourName>
        <ColourCode>{namedHex}</ColourCode>
        <div className='copy-button'>{`COP${!clicked ? 'Y' : 'IED!'}`}</div>
    </ColourBox>;
});

export default Colour;