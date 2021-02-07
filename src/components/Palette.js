import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PaletteWrapper = styled.div`
    width: inherit;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
`;

const getRandomHex = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const Palette = React.memo(({ refreshPalette }) => {

    const [colours, setColours] = useState([]);

    useEffect(() => {
        setNewColours();
    }, []);

    const setNewColours = () => {
        let colours = [];
        for (let i = 0; i < 6; i++) colours.push(getRandomHex());
        setColours(colours);
    }

    return <PaletteWrapper>
        {colours.map((colour, i) => <div key={`colour-${i}`} style={{ width: '50%', backgroundColor: colour }}>{colour}</div>)}
    </PaletteWrapper>;
});

export default Palette;