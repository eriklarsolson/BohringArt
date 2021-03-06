import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import {withStyles} from "@material-ui/core";
import {Col} from "react-bootstrap";

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

const VoltageSlider = withStyles({
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
    max: number
    changeValue: any
}

export default function CircuitSlider(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* */}
            <VoltageSlider aria-labelledby="volt-slider" step={1}
                           marks min={0} max={10}
                           value={props.voltage}
                           onChange={props.handleVoltageChange} />
        </div>
    );
}