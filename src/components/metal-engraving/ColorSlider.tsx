import React from 'react';
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';

// Styled wrapper component
const SliderWrapper = styled('div')({
    width: '100%'
});

// Custom styled Color Slider
const ColorChooser = styled(Slider)({
    color: '#29405B',
    height: 6,
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#29405B',
        border: '2px solid currentColor',
        marginTop: -10,
        marginLeft: -12,
        '&:focus, &:hover, &.Mui-active': {
            boxShadow: 'inherit',
        },
    },
    '& .MuiSlider-track': {
        height: 6,
        borderRadius: 2,
        backgroundColor: '#29405B',
    },
    '& .MuiSlider-rail': {
        height: 6,
        borderRadius: 2,
    },
});

interface ColorSliderProps {
    value: number;
    max: number;
    changeValue: (event: Event, newValue: number | number[]) => void;
}

const ColorSlider: React.FC<ColorSliderProps> = ({ value, max, changeValue }) => {
    return (
        <SliderWrapper>
            <ColorChooser
                value={value}
                step={20}
                min={20}
                max={max}
                valueLabelDisplay="off"
                onChange={changeValue}
            />
        </SliderWrapper>
    );
};

export default ColorSlider;