import React, { Component } from 'react'
import Select from 'react-select'
import styled from 'styled-components'

const StyledSelect = styled(Select)`
    font-family : 'Baloo2-Regular' !important;
`

const Selector = (props) => {
    return(
        <StyledSelect 
            options={props.options} 
            styles={{
                control: base => ({
                    ...base,
                    '&:hover': { borderColor: 'lightgray' }, 
                    border: '1px solid lightgray', 
                    boxShadow: 'none', 
                }),
            }}
        />
    )
}

export default Selector