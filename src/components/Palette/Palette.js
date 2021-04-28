import React, { useEffect, useState } from 'react';
import styled, {keyframes} from 'styled-components';
import { getRandomHex, isEmptyList, isEmptyString } from '../../utils';
import Colour from '../Colour/Colour';
import Loader from '../Loader/Loader';

export const PALETTE_SIZE = 6;

export const fadeIn = keyframes`
    from {
        opacity: 0;
        transition: scale(0.5);
    }
    to {
        opacity: 1;
        transition: scale(1);
    }
`;

const PaletteWrapper = styled.div`
    width: inherit;
    min-height: 100px;
    margin-top: 2rem;
    display: grid;
    flex: 1;
    grid-template-columns: 1fr 1fr;
    position: relative;
    animation: ${fadeIn} 1.25s ease-in-out;
`;

const LoaderWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%, -50%);
    display: ${props => props.hide ? 'none' : 'block'};
`;

export const getAPIEndpoint = colours => {
    if (isEmptyList(colours)) return '';
    const createEndpoint = colourValues => `https://api.color.pizza/v1/?values=${colourValues}&noduplicates=true`;
    const colourValues = colours.map(({ generatedHex }) => generatedHex.substring(1)).join(',');
    return createEndpoint(colourValues);
};

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
    };

    return <PaletteWrapper>
        <LoaderWrapper hide={!loading}><Loader /></LoaderWrapper>
        {colours.map((colour, i) => <Colour key={`colour-${i}`} colour={colour}>{colour}</Colour>)}
    </PaletteWrapper>;
});

export default Palette;