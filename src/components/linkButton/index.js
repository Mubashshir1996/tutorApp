import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { fontFamilySelector, fontSizeSelector } from '../../contants/reusableStyles'

const StyledLinkButton = styled(Link)`
    color : ${props => props.color};
    font-family : ${props => props.ffamily};
    font-size : ${props => props.fsize} !important;
`

const LinkButton = (props) => {
    return(
        <Link
            to={props.to}
            color={props.color}
            ffamily={fontFamilySelector('semi-bold')}
            fsize={fontSizeSelector(props.fsize) || fontSizeSelector("medium")}
        >
            {props.label}
        </Link>
    )
}

export default LinkButton