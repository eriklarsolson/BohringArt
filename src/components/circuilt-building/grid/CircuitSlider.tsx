import React from 'react';
import { styled } from '@mui/styles';
import { Slider } from '@mui/material';

// Styled wrapper component using MUI's styled API
const SliderWrapper = styled('div')({
    width: '100%'
});

// Custom styled Slider using MUI v5's styled API
const VoltageSlider = styled(Slider)(() => ({
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
}));

interface CircuitSliderProps {
    voltage: number;
    handleVoltageChange: (event: Event, newValue: number | number[]) => void;
}

const CircuitSlider: React.FC<CircuitSliderProps> = ({ voltage, handleVoltageChange }) => {
    return (
        <SliderWrapper>
            <VoltageSlider
                aria-labelledby="volt-slider"
                step={1}
                marks
                min={0}
                max={10}
                value={voltage}
                onChange={handleVoltageChange}
            />
        </SliderWrapper>
    );
};

export default CircuitSlider;