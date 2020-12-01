import React from 'react'
import styled from 'styled-components'
import { fontFamilySelector, fontSizeSelector } from '../../contants/reusableStyles'



const Select = styled.select`
    ${props =>
        props.dropDownSize === "small" ?
            `
                padding : 2px 10px 2px 10px;
            `
            :
            props.dropDownSize === "normal" ?
            `
                padding : 6px;
            `
            :
            props.dropDownSize === "big" ?
            `
                padding : 10px;
            `
            :
            props.dropDownSize === "biggest" ?
            `
                padding : 13px;
            `
            :
            `
                padding : 2px 10px 2px 10px;
            `
    }
    border-radius : 5px;
    border-style : "solid";
    border-color : rgba(0,0,0,0.1);
    outline : 0px;
    ${props => props.width ? `width : ${props.width}` : ""};
    color : ${props => props.color};
    font-family : ${props => props.ffamily} !important;
    font-size : ${props => props.fsize} !important;
`

const Dropdown = ({value, data, placeholder, onChange, styleClass, dropDownSize, width, ffamily, fsize, color}) => {
    // const handleChange = (e) => {
    //     const{value}=e.target;
    //     onChange(value);
    // };

    return(
        
            <div>
            <Select 
                    value={value}  
                    onChange={onChange} 
                    dropDownSize={dropDownSize} 
                    width={width}
                    ffamily={fontFamilySelector(ffamily)}
                    fsize={fontSizeSelector(fsize)}
                    color={color}
                    placeholder={placeholder}
            >
                <option value="">{placeholder}</option>
                

                {data.map((item, key) => (
                    <option
                        key={key}
                        value={item.value}
                    >
                        {item.label}
                    </option>
                ))}
            </Select>
            </div>
        
    )
}


// Dropdown.defaultProps = {
//     value : '',
//     styleClass : '',
//     placeholder : '',
// };

export default Dropdown