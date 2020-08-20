import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {withStyles} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        margin: {
            height: theme.spacing(3),
        },
    }),
);

//TODO - This current styling breaks the slider (doesn't slide smoothly)
const TimeSlider = withStyles({
    root: {
        color: 'white',
        height: 30,
    },
    thumb: {
        height: 30,
        width: 10,
        backgroundColor: '#fff',
        borderRadius: 0,
        marginTop: 0,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    track: {
        height: 30,
    },
    rail: {
        height: 30,
        border: "7px solid #29405B"
    },
})(Slider);

interface Props {
    children: React.ReactElement;
    value: number
    max: number
    marks: any
    changeTime: any
}

export default function TimelineSlider(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* */}
            <TimeSlider
                value={props.value}
                aria-labelledby="timeline-slider"
                step={20}
                max={props.max}
                valueLabelDisplay="off"
                // marks={props.marks}
                onChange={props.changeTime}
            />
        </div>
    );
}