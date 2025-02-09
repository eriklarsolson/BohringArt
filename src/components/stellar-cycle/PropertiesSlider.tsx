import React from 'react';
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';

// Styled wrapper component
const SliderWrapper = styled('div')({
    width: '100%'
});

// Custom styled Stellar Slider
const StellarSlider = styled(Slider)({
    color: 'white',
    height: 6,
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
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
        backgroundColor: '#fff',
    },
    '& .MuiSlider-rail': {
        height: 6,
        borderRadius: 2,
    },
});

interface PropertiesSliderProps {
    value: number;
    max: number;
    changeValue: (event: Event, newValue: number | number[]) => void;
}

const PropertiesSlider: React.FC<PropertiesSliderProps> = ({
                                                               value,
                                                               max,
                                                               changeValue
                                                           }) => {
    return (
        <SliderWrapper>
            <StellarSlider
                value={value}
                step={20}
                max={max}
                valueLabelDisplay="off"
                onChange={changeValue}
            />
        </SliderWrapper>
    );
};

export default PropertiesSlider;