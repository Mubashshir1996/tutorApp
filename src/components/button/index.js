import React from 'react'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import { fontFamilySelector, fontSizeSelector } from '../../contants/reusableStyles'

const CButton = styled(Button)`
    width:${props => props.width };
    font-family:${props => props.ffamily};
    font-size : ${props => props.fsize};
`
const CustomButton = (props) => {
    return (
        <CButton
            variant={props.styleClass}
            onClick={props.onClick}
            size={props.size}
            width={props.width}
            ffamily = {fontFamilySelector(props.ffamily)}
            fsize = {fontSizeSelector(props.fsize)}
        >
            {props.value}
        </CButton>
    )
};

// Button.propTypes = {
//     styleClass : propTypes.string,
//     value : propTypes.string.isRequired,
//     onClick : propTypes.func.isRequired
// };

// Button.defaultProps = {
//     styleClass : 'btn-primary'
// };

export default CustomButton;