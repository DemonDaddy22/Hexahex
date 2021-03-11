import React from 'react';
import styled from 'styled-components';
import { copyTextToClipboard, isColourDark } from '../../utils';

const ColourBox = styled.div`
    flex: 1;
    padding: 2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: brightness(100%);
    font-weight: 600;
    font-size: 0.75rem;
    letter-spacing: 0.25px;
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

const Colour = React.memo(({ colour }) => <ColourBox colour={colour} labelColour={isColourDark(colour) ? '#fff' : '#000'} onClick={() => copyTextToClipboard(colour)}>
    {colour}
    <div className='copy-button'>COPY</div>
</ColourBox>);

export default Colour;