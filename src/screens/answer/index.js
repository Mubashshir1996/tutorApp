import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../../components/header 2'
import { Flex } from '../../contants/reusableStyles'
import TextBox from '../../components/textBox'
import InputBox from '../../components/inputField'
import Button from '../../components/button'
import FeedCard from '../../components/feedCard'

const MainWrapper = styled.div`
    position : absolute;
    top : 0px;
    left : 0px;
    width : 100%;
    height : 100%;
`
const BodyWrapper = styled.div`
    margin-top : 20px;
    height : calc(100% - 120px);
    display : flex;
    flex-direction : row;
    justify-content : center;
    /* background-color : red; */
`

const BodySubWrapper = styled.div`
    width : 90%;
    height : 95%;
    /* background-color : green; */
`


const LeftWrapper = styled.div`
    height : 90%;
    width : 15%;
    /* background-color : blue; */
`
const MiddleWrapper = styled.div`
    height : 90%;
    width : 65%;
    overflow : hidden;
    padding : 10px;
    ::-webkit-scrollbar {
        width: 5px;
    }
    
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1); 
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2); 
    }
    :hover {
        overflow-y : scroll;
    }
`
const RightWrapper = styled.div`
    height : 100%;
    width : 15%;
    /* background-color : blue; */
`
const RightSubWrapper = styled.div`
    /* background-color : green; */
    padding-top : 30px;
    height : 100%;
    width : 445px;
`
const Context = styled.div`
    margin-bottom : 13px;
`

const UserStatusWrapper = styled.div`
    height : 43px;
    border-radius : 3px;
    box-shadow : 0px 0px 4px 1px rgba(0,0,0,0.2);
    padding-left : 20px;
    display : flex;
    background-color : ${props => props.backgroundColor};
    /* justify-content : center; */
    align-items : center;
`

class Answer extends Component {

    state = {
        
    }

    askQuestion = () => {
        this.props.history.push("/question")
    }

    render(){
        return(
            <MainWrapper>
                <Header />
                <BodyWrapper>
                    <Flex
                        direction={"row"}
                        jcontent={"center"}
                        height={"100%"}
                        width={"100%"}
                    >
                        <BodySubWrapper>
                            <Flex
                                direction={"row"}
                                jcontent={"flexend"}
                                width={"100%"}
                            >
                                <Button
                                    value={"Ask Question"}
                                    ffamily={"bold"}
                                    fsize={"medium"}
                                    styleClass={"secondary"}
                                    width={"150px"}
                                    onClick={this.askQuestion}
                                />
                            </Flex>
                            <Flex
                                direction={"row"}
                                jcontent={"space-between"}
                                height={"100%"}
                                width={"100%"}
                            >
                                <LeftWrapper>
                                    <Context>
                                        <UserStatusWrapper
                                            backgroundColor={"skyblue"}
                                        >
                                            <TextBox
                                                innerText={"Total Question : 10"}
                                                ffamily={"bold"}
                                                color={"#FFFFFF"}
                                            />
                                        </UserStatusWrapper>
                                    </Context>
                                    <Context>
                                        <UserStatusWrapper
                                            backgroundColor={"orange"}
                                        >
                                            <TextBox
                                                innerText={"Pending : 5"}
                                                ffamily={"bold"}
                                                color={"#FFFFFF"}
                                            />
                                        </UserStatusWrapper>
                                    </Context>
                                    <Context>
                                        <UserStatusWrapper
                                            backgroundColor={"#6666ff"}
                                        >
                                            <TextBox
                                                innerText={"Answered : 5"}
                                                ffamily={"bold"}
                                                color={"#FFFFFF"}
                                            />
                                        </UserStatusWrapper>
                                    </Context>
                                    
                                </LeftWrapper>
                                <MiddleWrapper>
                                    <FeedCard
                                        question={"Sample question for you ?"}
                                        answer={`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.

                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}
                                        height={"auto"}
                                        overflow={true}
                                        link={false}
                                    />
                                </MiddleWrapper>
                                <RightWrapper>

                                </RightWrapper>

                            </Flex>
                        </BodySubWrapper>
                    </Flex>
                </BodyWrapper>
            </MainWrapper>
        )
    }
}

export default Answer