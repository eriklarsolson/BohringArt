import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
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

const PropertySlider = withStyles({
    root: {
        color: '#3BD186',
        height: 10,
    },
    thumb: {
        height: 14,
        width: 10,
        backgroundColor: '#3BD186',
        borderRadius: 0,
        marginTop: 0,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    track: {
        height: 14,
    },
    rail: {
        height: 10,
        border: "7px solid white"
    },
})(Slider);

interface Props {
    children: React.ReactElement;
    value: number
    max: number
    marks: any
    changeTime: any
}

export default function PartPropertySlider(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PropertySlider
                value={props.value}
                aria-labelledby="part-property-slider"
                step={20}
                max={99}
                valueLabelDisplay="off"
            />
        </div>
    );
}