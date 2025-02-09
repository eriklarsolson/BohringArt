import React from 'react';
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';

// Styled wrapper component
const SliderWrapper = styled('div')({
    width: '100%'
});

// Custom styled Property Slider
const PropertySlider = styled(Slider)({
    color: '#3BD186',
    height: 10,
    '& .MuiSlider-thumb': {
        height: 14,
        width: 10,
        backgroundColor: '#3BD186',
        borderRadius: 0,
        marginTop: 0,
        '&:focus, &:hover, &.Mui-active': {
            boxShadow: 'inherit',
        },
    },
    '& .MuiSlider-track': {
        height: 14,
    },
    '& .MuiSlider-rail': {
        height: 10,
        border: '7px solid white',
    },
});

interface PartPropertySliderProps {
    value: number;
    max?: number;
}

const PartPropertySlider: React.FC<PartPropertySliderProps> = ({
                                                                   value,
                                                                   max = 100 // Default max value
                                                               }) => {
    return (
        <SliderWrapper>
            <PropertySlider
                value={value}
                aria-labelledby="part-property-slider"
                max={max}
                valueLabelDisplay="off"
            />
        </SliderWrapper>
    );
};

export default PartPropertySlider;