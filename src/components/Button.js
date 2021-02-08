import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
    padding: 0.5rem 1rem;
    border-radius: 2px;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    box-shadow: none;
    background-color: transparent;
    color: ${props => props.colour};
    border: 1px solid ${props => props.colour};
    transition: box-shadow 0.15s, background-color 0.15s;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.colour}17;
        box-shadow: 0 0 4px ${props => props.colour}7f;
    }
`;

const Button = React.memo(({ label, colour, onClick }) => <StyledButton colour={colour} onClick={() => onClick(true)}>
    {label}
</StyledButton>);

export default Button;

Button.defaultProps = {
    colour: '#10cced'
};