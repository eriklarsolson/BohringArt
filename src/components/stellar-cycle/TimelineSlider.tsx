import React from 'react';
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';

// Styled wrapper component
const SliderWrapper = styled('div')({
    width: '100%'
});

// Custom styled Timeline Slider
const TimeSlider = styled(Slider)({
    color: 'white',
    height: 30,
    '& .MuiSlider-thumb': {
        height: 30,
        width: 10,
        backgroundColor: '#fff',
        borderRadius: 0,
        marginTop: 0,
        '&:focus, &:hover, &.Mui-active': {
            boxShadow: 'inherit',
        },
    },
    '& .MuiSlider-track': {
        height: 30,
        border: 'none',
    },
    '& .MuiSlider-rail': {
        height: 30,
        border: '7px solid #29405B',
    },
});

interface TimelineSliderProps {
    value: number;
    max: number;
    changeTime: (event: Event, newValue: number | number[]) => void;
}

const TimelineSlider: React.FC<TimelineSliderProps> = ({ value, max, changeTime }) => {
    return (
        <SliderWrapper>
            <TimeSlider
                value={value}
                aria-labelledby="timeline-slider"
                step={20}
                max={max}
                valueLabelDisplay="off"
                onChange={changeTime}
            />
        </SliderWrapper>
    );
};

export default TimelineSlider;