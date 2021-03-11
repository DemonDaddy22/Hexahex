import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRandomHex, isEmptyList, isEmptyString } from '../../utils';
import Colour from '../Colour/Colour';

export const PALETTE_SIZE = 6;

const PaletteWrapper = styled.div`
    width: inherit;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
`;

export const isColourUnique = (colour, colours) => !isEmptyString(colour) && (isEmptyList(colours) || !colours.some(entry => entry === colour));

export const setNewColours = (size = PALETTE_SIZE) => {
    if (size <= 0) return [];
    let colours = [];
    let i = 0;
    while (i < size) {
        const colour = getRandomHex();
        if (isColourUnique(colour, colours)) {
            colours.push(colour);
            i++;
        }
    }
    return colours;
}

const Palette = React.memo(({ refreshPalette, setRefreshPalette }) => {

    const [colours, setColours] = useState([]);

    useEffect(() => {
        setColours(setNewColours());
    }, []);

    useEffect(() => {
        if (refreshPalette) {
            setColours(setNewColours());
            setRefreshPalette(false);
        }
    }, [refreshPalette, setRefreshPalette]);


    return <PaletteWrapper>
        {colours.map((colour, i) => <Colour key={`colour-${i}`} colour={colour}>{colour}</Colour>)}
    </PaletteWrapper>;
});

export default Palette;