import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Header from './components/Header';
import Palette from './components/Palette';
import Subheader from './components/Subheader';
import Version from './components/Version';

const AppWrapper = styled.div`
    position: relative;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #212121; */
`;

const App = React.memo(props => {

    const [refreshPalette, setRefreshPalette] = useState(false);

    return <AppWrapper>
        <Version />
        <Header />
        <Subheader />
        <Button label='New Palette' onClick={setRefreshPalette} />
        <Palette refreshPalette={refreshPalette} setRefreshPalette={setRefreshPalette} />
    </AppWrapper>;
});

export default App;
