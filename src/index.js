import React, {useState} from 'react'

import { 
    DateField as RaDateField,
    EmailField as RaEmailField,
    ImageField as RaImageField,
    NumberField as RaNumberField,
    TextField as RaTextField,
    UrlField as RaUrlField,
    useRecordContext
} from 'react-admin'

import {
    Typography
} from '@mui/material'

// https://material-ui.com/components/material-icons/
import ContentCopyIcon from '@mui/icons-material/ContentCopy'


const withCopy = (Component) => (props) => {
    const [clicked, setClicked] = useState(false)
    const record = useRecordContext();

    const sx = { 
        cursor: "pointer",
        whiteSpace: "nowrap", // controversial?
        "@keyframes wobble": {
            "25%": {
              transform: "rotate(20deg)"
            },
            "50%": {
              transform: "rotate(-20deg)"
            },
            "75%": {
              transform: "rotate(15deg)"
            },
            "100%": {
              transform: "rotate(-15deg)"
            }
        },
        "&:hover .icon": {
            opacity: 1 ,
        },
        "&:active .icon": {
            animation: `wobble 300ms ease-out`,
        },
        "& .icon": {
            height: ".7em",
            marginRight: "-1em",
            transition: "opacity 100ms ease-out",
            opacity: 0 ,
            animation: clicked ? `wobble 300ms ease-out` : 'none',
        },
    }

    const handleClick = (e) => {        
        record && navigator.clipboard.writeText(record[props.source])

        setClicked(true)
        e.stopPropagation() // so we don't trigger Show/Edit based on rowClick settings
    }

    const handleAnimationEnd = () => {        
        setClicked(false)
    }

    return (
        <Typography sx={sx} >
            <Component {...props} />
            <ContentCopyIcon className="icon" color="primary" onClick={handleClick} onAnimationEnd={handleAnimationEnd} />
        </Typography>
    )

}

export const DateField = withCopy(RaDateField)
export const EmailField = withCopy(RaEmailField)
export const ImageField = withCopy(RaImageField)
export const NumberField = withCopy(RaNumberField)
export const TextField = withCopy(RaTextField)
export const UrlField = withCopy(RaUrlField)
