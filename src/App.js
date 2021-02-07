import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Version from './components/Version';

const AppWrapper = styled.div`
    position: relative;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #212121;
`;

const App = React.memo(props => <AppWrapper>
    <Version />
    <Header />
    <Subheader />
</AppWrapper>);

export default App;
