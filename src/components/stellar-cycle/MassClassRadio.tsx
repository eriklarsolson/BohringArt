import React from 'react';
import { styled } from '@mui/material/styles';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

// Styled Radio wrapper
const StyledRadioWrapper = styled(Radio)({
    '&:hover': {
        backgroundColor: 'transparent',
    },
});

// Styled span for radio icons
const RadioIcon = styled('span')({
    borderRadius: '50%',
    width: 16,
    height: 16,
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
        width: 16,
        height: 16,
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
    margin: '10%',
});

// Styled FormLabel
const StyledFormLabel = styled(FormLabel)({
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    '&.Mui-focused': {
        color: 'white',
    },
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

interface MassClassRadioProps {
    value: string;
    changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MassClassRadio: React.FC<MassClassRadioProps> = ({ value, changeValue }) => {
    return (
        <StyledFormControl component="fieldset">
            <StyledFormLabel component="legend">
                Mass Class
            </StyledFormLabel>
            <RadioGroup
                aria-label="mass-class"
                name="mass-class"
                value={value}
                onChange={changeValue}
            >
                <FormControlLabel
                    value="Average"
                    control={<StyledRadio />}
                    label="Average"
                />
                <FormControlLabel
                    value="Massive"
                    control={<StyledRadio />}
                    label="Massive"
                />
            </RadioGroup>
        </StyledFormControl>
    );
};

export default MassClassRadio;