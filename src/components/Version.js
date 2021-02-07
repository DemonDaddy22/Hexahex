import React from 'react';
import styled from 'styled-components';

const VersionWrapper = styled.div`
    position: absolute;
    top: 2px;
    right: 6px;
    color: #555;
    font-size: 0.6rem;
    font-weight: 200;
    letter-spacing: -0.25px;
`;

const Version = React.memo(props => <VersionWrapper>
    v 0.1.0
</VersionWrapper>);

export default Version;