import React from 'react'
import styled from 'styled-components'
import { fontFamilySelector, fontSizeSelector } from '../../contants/reusableStyles'
// import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
// import Form from 'react-bootstrap/Form'

const BFormControl = styled(FormControl)`
        color : ${props => props.color};
        font-family : ${props => props.ffamily};
        font-size : ${props => props.fsize} !important;
        border-radius : 5px;
        border-style : "solid";
        border-color : rgba(0,0,0,0.1);
        outline : 0px;
        ${props => props.width ? `width : ${props.width}` : ""};
        ${props => props.style};
`

const InputField = (props) => {
    console.log("here is style",props.style)
    return(
        <BFormControl
            style={{...props.style}}
            className={props.styleClass}
            size={props.size}
            width={props.width}
            ffamily={props.ffamily}
            fsize={props.fsize}
            placeholder={props.placeholder}
            value={props.textValue}
            backgroundColor={props.backgroundColor}
            color={props.color}
            onChange={props.onChange}
            name={props.name}
            type={props.type}
        />
    )
}

export default InputField