import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../../components/header 2'
import { Flex } from '../../contants/reusableStyles'
import TextBox from '../../components/textBox'
import InputBox from '../../components/inputField'
import Button from '../../components/button'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Selector from '../../components/select'

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
    height : 96%;
    width : 100%;
    overflow : hidden;
    padding : 10px;
    /* ::-webkit-scrollbar {
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
    } */
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
const EditorWrapper = styled.div`
    height : 330px;
    border-radius : 5px;
    box-shadow : 0px 0px 3px 1px rgba(0,0,0,0.1);
    padding : 20px;
    background-color : #FFFFFF;
`

class AskQuestion extends Component {
    state = {
        editorState : EditorState.createEmpty(),
        selectorOptions : [
            {value: 'maths', label:'Maths'},
            {value: 'physics', label:'Physics'},
            {value: 'chemistry', label:'Chemistry'},
            {value: 'biology', label:'Biology'},
        ]
    }

    onEditorStateChange = (editorState) => {
        console.log("get editor", editorState)
        this.setState({editorState})
    }

    uploadImage = () => {

    }

    render(){
        console.log("editor xyz", JSON.stringify(this.state.editorState))
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
                               jcontent={"space-between"}
                               height={"100%"}
                               width={"100%"} 
                            >
                                <MiddleWrapper>
                                    <Context>
                                        <Selector
                                            options={this.state.selectorOptions}
                                        />
                                    </Context>
                                    <EditorWrapper>
                                        
                                        <Editor 
                                            editorState={this.state.editorState}
                                            wrapperClassName="demo-wrapper"
                                            toolbarClassName="toolbarClassName"
                                            editorClassName="demo-editor"
                                            onEditorStateChange={this.onEditorStateChange}
                                            uploadCallback={this.uploadImage}
                                            editorStyle={{
                                                height : 200,
                                                overflowY : "scroll",
                                            }}
                                        />
                                        <textarea
                                            disabled
                                            value={draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))} 
                                        />
                                    </EditorWrapper>
                                    <Flex
                                        direction={"row"}
                                        jcontent={"flexend"}
                                        style={{
                                            marginTop : 13
                                        }}
                                    >
                                        <Button
                                            value={"Submit"}
                                            styleClass={"success"}
                                            ffamily={"bold"}
                                            color={"#FFFFFF"}
                                            size={"lg"}
                                        />

                                    </Flex>
                                </MiddleWrapper>

                            </Flex>
                        </BodySubWrapper>

                    </Flex>
                </BodyWrapper>
            </MainWrapper>
        )
    }
}

export default AskQuestion