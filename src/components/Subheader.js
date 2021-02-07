import React from 'react';
import styled from 'styled-components';

const SubheaderWrapper = styled.div`
    padding: 1rem 2rem;
    font-family: 400;
    font-size: 0.8rem;
    text-align: center;
    color: #888;
`;

const Subheader = React.memo(props => <SubheaderWrapper>
    A quick way to get a randomly generated colour palette, which lets you copy a desired hex code value from 6 vivid colours with just one click 🤩
</SubheaderWrapper>);

export default Subheader;