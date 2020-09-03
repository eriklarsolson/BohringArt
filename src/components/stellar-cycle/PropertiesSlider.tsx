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

const StellarSlider = withStyles({
    root: {
        color: 'white',
        height: 6,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -10,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    track: {
        height: 6,
        borderRadius: 2,
        backgroundColor: '#fff',
    },
    rail: {
        height: 6,
        borderRadius: 2,
    },
})(Slider);

interface Props {
    children: React.ReactElement;
    value: number
    max: number
    changeValue: any
}

export default function PropertiesSlider(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* */}
            <StellarSlider
                value={props.value}
                step={20}
                max={props.max}
                valueLabelDisplay="off"
                onChange={props.changeValue}
            />
        </div>
    );
}