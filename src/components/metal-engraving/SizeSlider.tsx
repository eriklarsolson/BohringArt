import React from 'react';
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';

// Styled wrapper component
const SliderWrapper = styled('div')({
    width: '100%'
});

// Custom styled Size Slider
const CustomSlider = styled(Slider)({
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

interface SizeSliderProps {
    value: number;
    setSize: (event: Event, newValue: number | number[]) => void;
}

const SizeSlider: React.FC<SizeSliderProps> = ({ value, setSize }) => {
    return (
        <SliderWrapper>
            <CustomSlider
                value={value}
                aria-labelledby="size-slider"
                min={1}
                max={40}
                onChange={setSize}
            />
        </SliderWrapper>
    );
};

export default SizeSlider;