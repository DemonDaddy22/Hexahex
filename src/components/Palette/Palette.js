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
    position: relative;
`;

export const getAPIEndpoint = colours => {
    if (isEmptyList(colours)) return '';

    const createEndpoint = colourValues => `https://api.color.pizza/v1/?values=${colourValues}&noduplicates=true`;

    const colourValues = colours.map(({ generatedHex }) => generatedHex.substring(1)).join(',');

    return createEndpoint(colourValues);
}

export const isColourUnique = (colour, colours) => !isEmptyString(colour) && (isEmptyList(colours) || !colours.some(entry => entry === colour));

export const setNewColours = (size = PALETTE_SIZE) => {
    if (size <= 0) return [];
    let colours = [];
    let i = 0;
    while (i < size) {
        const colour = getRandomHex();
        if (isColourUnique(colour, colours)) {
            colours.push({ generatedHex: colour });
            i++;
        }
    }
    return colours;
};

const Palette = React.memo(({ refreshPalette, setRefreshPalette }) => {

    const [colours, setColours] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchColours();
    }, []);

    useEffect(() => {
        if (refreshPalette) {
            fetchColours();
            setRefreshPalette(false);
        }
    }, [refreshPalette, setRefreshPalette]);

    const fetchColours = async () => {
        setLoading(true);
        const randomColours = setNewColours();
        try {
            const res = await fetch(getAPIEndpoint(randomColours));
            const data = await res.json();
            const updatedColours = data.colors.map(({ hex, name, requestedHex }) => ({ name, namedHex: hex, generatedHex: requestedHex }));
            setColours(updatedColours);
        } catch (e) {
            const updatedColours = randomColours.map(({ generatedHex }) => ({ name: '', namedHex: generatedHex, generatedHex }));
            setColours(updatedColours);
        } finally {
            setLoading(false);
        }
    }

    return <PaletteWrapper>
        {!loading ? colours.map((colour, i) => <Colour key={`colour-${i}`} colour={colour}>{colour}</Colour>) : 'loading...'}
    </PaletteWrapper>;
});

export default Palette;