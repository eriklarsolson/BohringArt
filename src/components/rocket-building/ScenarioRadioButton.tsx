import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Container, Row, Col} from 'react-bootstrap'

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 25,
        height: 25,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#3BD186',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 25,
            height: 25,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#3BD186',
        },
    },
});

function StyledRadio(props: RadioProps) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

interface Props {
    children: React.ReactElement;
    value: number
}

export default function ScenarioRadioButton(props: any) {
    return (
        <FormControl component="fieldset" style={{float: "left", margin: "10%"}}>
            <RadioGroup aria-label="gender" name="gender1" onChange={props.changeValue} value={props.value}>
                <Container fluid>
                    <Row>
                        <Col style={{marginRight: 25}}>
                            <FormControlLabel value="Yes" control={<StyledRadio />} label="Yes" />
                        </Col>
                        <Col style={{marginLeft: 25}}>
                            <FormControlLabel value="No" control={<StyledRadio />} label="No" />
                        </Col>
                    </Row>
                </Container>
            </RadioGroup>
        </FormControl>
    );
}