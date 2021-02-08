import React from 'react';
import styled from 'styled-components';
import logo from '../hex512.png';

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    & img {
        width: 50px;
        height: 45px;
    }
    & .header {
        color: #fff;
        font-size: 1rem;
        margin-left: -1.5rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        background-color: #212121;

        & span {
            color: #10cced;
        }
    }
`;

const Header = React.memo(props => <HeaderWrapper>
    <img src={logo} alt='hexahex-logo' />
    <div className='header'>HEXA<span>HEX</span></div>
</HeaderWrapper>);

export default Header;