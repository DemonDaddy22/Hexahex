import React from 'react';
import styled from 'styled-components';

const ColourBox = styled.div`
    color: ${props => props.labelColour};
    background-color: ${props => props.colour};
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.2px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    flex: 1;
    transition: background-color 0.15s;
`;

const Colour = React.memo(({ colour }) => <ColourBox colour={colour} labelColour='#000'>
    {colour}
</ColourBox>);

export default Colour;