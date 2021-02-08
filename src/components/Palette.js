import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRandomHex } from '../utils';
import Colour from './Colour';

const PaletteWrapper = styled.div`
    width: inherit;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
`;

const Palette = React.memo(({ refreshPalette, setRefreshPalette }) => {

    const [colours, setColours] = useState([]);

    useEffect(() => {
        setNewColours();
    }, []);

    useEffect(() => {
        if (refreshPalette) {
            setNewColours();
            setRefreshPalette(false);
        }
    }, [refreshPalette, setRefreshPalette]);

    const setNewColours = () => {
        let colours = [];
        for (let i = 0; i < 6; i++) colours.push(getRandomHex());
        setColours(colours);
    }

    return <PaletteWrapper>
        {colours.map((colour, i) => <Colour key={`colour-${i}`} colour={colour}>{colour}</Colour>)}
    </PaletteWrapper>;
});

export default Palette;