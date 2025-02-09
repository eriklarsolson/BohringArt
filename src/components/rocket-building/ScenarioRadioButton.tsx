import React from 'react';
import { styled } from '@mui/material/styles';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import line from "../../assets/header/line.png";

// Styled Radio wrapper
const StyledRadioWrapper = styled(Radio)({
    '&:hover': {
        backgroundColor: 'transparent',
    },
});

// Styled span for radio icons
const RadioIcon = styled('span')({
    borderRadius: '50%',
    width: 25,
    height: 25,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
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
});

// Styled span for checked radio icons
const CheckedRadioIcon = styled(RadioIcon)({
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
});

// Styled FormControl
const StyledFormControl = styled(FormControl)({
    float: 'left',
    margin: '6%',
});

interface StyledRadioProps {
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    name?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const StyledRadio: React.FC<StyledRadioProps> = (props) => {
    return (
        <StyledRadioWrapper
            disableRipple
            color="default"
            checkedIcon={<CheckedRadioIcon />}
            icon={<RadioIcon />}
            {...props}
        />
    );
};

interface ScenarioRadioButtonProps {
    value: string;
    changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    yesValue: string;
    noValue: string;
}

const ScenarioRadioButton: React.FC<ScenarioRadioButtonProps> = ({
                                                                     value,
                                                                     changeValue,
                                                                     yesValue,
                                                                     noValue,
                                                                 }) => {
    return (
        <StyledFormControl component="fieldset">
            <RadioGroup
                aria-label="scenario"
                name="scenario"
                onChange={changeValue}
                value={value}
            >
                <Container fluid>
                    <Row className="justify-content-center align-content-center align-items-center">
                        <Col className="col-2">
                            <FormControlLabel
                                value="Yes"
                                control={<StyledRadio />}
                                label=""
                            />
                        </Col>
                        <Col className="col-4" style={{ paddingLeft: 0 }}>
                            <p style={{ marginLeft: 5 }}>{yesValue}</p>
                        </Col>

                        <img src={line} alt="Menu separator" />

                        <Col className="col-2">
                            <FormControlLabel
                                value="No"
                                control={<StyledRadio />}
                                label=""
                            />
                        </Col>
                        <Col style={{ paddingLeft: 0 }}>
                            <p style={{ marginLeft: 5 }}>{noValue}</p>
                        </Col>
                    </Row>
                </Container>
            </RadioGroup>
        </StyledFormControl>
    );
};

export default ScenarioRadioButton;