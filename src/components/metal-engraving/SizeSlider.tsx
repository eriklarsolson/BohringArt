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

const CustomSlider = withStyles({
    root: {
        color: '#29405B',
        height: 6,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#29405B',
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
        backgroundColor: '#29405B',
    },
    rail: {
        height: 6,
        borderRadius: 2,
    },
})(Slider);

interface Props {
    children: React.ReactElement;
    value: number
    setSize: any
}

export default function SizeSlider(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CustomSlider
                value={props.value}
                aria-labelledby="timeline-slider"
                min={1}
                max={40}
                onChange={props.setSize}
            />
        </div>
    );
}