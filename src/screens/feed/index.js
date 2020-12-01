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

class Feed extends Component {

    state = {
        quesans : [
            {
                question : "Who is your Rab ?",
                answer : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
            {
                question : "How to solve metric of 2 X 5 ?",
                answer : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
            {
                question : "Help in integration algorithm",
                answer : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
            {
                question : "How to solve trignometry ?",
                answer : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
            {
                question : "Who is your Rab ?",
                answer : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
            {
                question : "How to solve metric of 2 X 5 ?",
                answer : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
            {
                question : "Help in integration algorithm",
                answer : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
            {
                question : "How to solve trignometry ?",
                answer : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            }
        ]
    }

    Question = () => {
        this.props.history.push("/question")
    }

    onClickQuestion = () => {
        this.props.history.push('/answer')
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
                                    styleClass={"success"}
                                    width={"150px"}
                                    onClick={this.Question}
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

                                    {
                                        this.state.quesans.map((data) => {
                                            return(
                                                <FeedCard
                                                    question={data.question}
                                                    answer={data.answer}
                                                    onClickQuestion={this.onClickQuestion}
                                                    overflow={false}
                                                    link={true}
                                                />
                                            )
                                        })
                                    }
                                    
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

export default Feed