import React from 'react'
import styled from 'styled-components'
import { fontFamilySelector, fontSizeSelector } from '../../contants/reusableStyles'
import Button from '../../components/button'

const StyledTextWrapper = styled.div`
    padding : 2px;
    font-size : ${props => props.fsize};
    color : ${props => props.color};
    font-family : ${props => props.ffamily};
    ${props => props.cstyle ? props.cstyle : ""};
    ${props => props.height && props.overflow ? `height : auto` : `height : ${props.height}`};
    :hover{
        ${props => props.link ? `text-decoration : underline;` : ""}
    }
    ${props => props.overflow ? `text-overflow : ellipse;
                                overflow : hidden;` : ""};
    ${props => props.style}
`

const TextBox = (props) => {
    return(
        <StyledTextWrapper
            style={{...props.style}}
            ffamily = {fontFamilySelector(props.ffamily)}
            fsize = {fontSizeSelector(props.fsize)}
            color = {props.color}
            cstyle = {props.cstyle}
            height = {props.height}
            link = {props.link}
            overflow = {props.overflow}
            onClick = {props.onClick}
        >
            {
                props.innerText.length > 300 && !props.overflow ?
                    props.innerText.substr(0,300)
                    :
                    props.innerText
            }
            {
                props.innerText.length > 300 && !props.overflow ?
                    <Button
                        styleClass={"link"}
                        value={"(more)"}
                        ffamily={"bold"}
                        backgroundColor={"#FFFFFF"}
                        buttonSize={"small"} 
                        color={"#C0392B "}
                    />
                    :
                    ""
            }

        </StyledTextWrapper>
    )
}

export default TextBox