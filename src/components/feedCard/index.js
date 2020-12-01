import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex } from '../../contants/reusableStyles'
import TextBox from '../../components/textBox'


const MainWrapper = styled.div`
    height : ${props => props.height ? props.height : "130px" };
    /* background-color : yellow; */
    margin-bottom : 15px;
    overflow : hidden;
    padding : 25px;
    /* background-color : green; */
    border-radius : 5px;
    box-shadow : 0px 0px 5px 1px rgba(0,0,0,0.1);
`
const FeedCard = (props) => {
    return(
        <MainWrapper
            height={props.height}
        >
            <Flex
                height={"100%"}
                width={"100%"}
                jcontent={"flexstart"}
                aItem={"flexstart"}
            >
                <TextBox 
                    innerText={props.question}
                    link={props.link}
                    ffamily={"bold"}
                    fsize={"big"}
                    onClick={props.onClickQuestion}
                />
                <TextBox 
                    innerText={props.answer}
                    // cstyle={``}
                    height={"140px"}
                    onClick={props.onClickQuestion}
                    overflow={props.overflow}
                />
            </Flex>
        </MainWrapper>
    )
}

export default FeedCard