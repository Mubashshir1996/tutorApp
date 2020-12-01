import react from 'react'
import styled from 'styled-components'

export const fontFamilySelector = (ffamily) => {
    switch(ffamily){
        case 'bold' : return('Baloo2-Bold')
        case 'extra-bold' : return('Baloo2-ExtraBold')
        case 'medium' : return('Baloo2-Medium')
        case 'regular' : return('Baloo2-Regular')
        case 'semi-bold' : return('Baloo2-SemiBold')
        case 'medium-italic' : return('EBGaramond-MediumItalic')
        default : return('Baloo2-Regular')
    }
}

export const fontSizeSelector = (fsize) => {
    switch(fsize){
        case 'tiny' : return('10px')
        case 'small' : return('12px')
        case 'normal' : return('15px')
        case 'regular' : return('18px')
        case 'big' : return('22px')
        case 'bigger' : return('28px')
        case 'biggest' : return('35px')
        case 'larger' : return('40px')
    }
}

export const Flex = styled.div`
    display : flex;
    flex-direction : ${props => props.direction === "row" ? "row" : "column"};
    justify-content : ${props =>
                            props.jcontent === "center" ? "center" :
                            props.jcontent === "flexend" ? "flex-end" :
                            props.jcontent === "flexstart" ? "flex-start" :
                            props.jcontent === "space-between" ? "space-between" :
                            props.jcontent === "space-around" ? "space-around" : "center"
                        };
    align-items : ${props =>
                            props.aItem === "center" ? "center" :
                            props.aItem === "flexend" ? "flex-end" :
                            props.aItem === "flexstart" ? "flex-start" :
                            props.aItem === "space-between" ? "space-between" :
                            props.aItem === "space-around" ? "space-around" : "center"                
                        };
    ${props => props.height ? `height : ${props.height}` : ""};
    ${props => props.width ? `width : ${props.width}` : ""};                    
`
