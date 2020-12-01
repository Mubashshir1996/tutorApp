import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex } from '../../contants/reusableStyles'
import InputField from '../../components/inputField'
import TextBox from '../../components/textBox'
import ProfileDropDown from '../../components/profileDropDown'
import Button from '../../components/button'
import searchicon from '../../assets/images/searchicon.png'

const HeaderWrapper = styled.div`
    height : 70px;
    box-shadow : 0px 0px 2px 1px rgba(0,0,0,0.1);
`
const HeaderSubWrapper = styled.div`
    height : 100%;
    width : 90%;
`
const HeaderLeftWrapper = styled.div`
    height : 100%;
    width : 200px;
`
const HeaderMiddleWrapper = styled.div`
    height : 100%;
    width : 700px;
    margin-left : 100px;
`
const HeaderRightWrapper = styled.div`
    height : 100%;
    width : 500px;
`
const CellComponent = styled.div`
    padding : 10px;
`
const Searchicon = styled.div`
    width : 10px;
    height : 15px;
    background-image : url(${searchicon});
    background-repeat : no-repeat;
`
class Header extends Component {
    state = {

    }

    render(){
        return(
            <HeaderWrapper>
                <Flex
                    direction="row"
                    jcontent="center"
                    aItems="center"
                    height="100%"
                >
                    <HeaderSubWrapper>
                        <Flex
                            direction="row"
                            jcontent="space-between"
                            aItems="center"
                            height="100%"
                        >
                            <HeaderLeftWrapper>
                                <Flex
                                    direction="row"
                                    jcontent="flexstart"
                                    aItems="center"
                                    height="100%"
                                >
                                    <TextBox
                                        innerText={"Ask"}
                                        ffamily={"bold"}
                                        fsize={"biggest"}
                                        cstyle={'padding-right : 0px'} 
                                    />
                                    <TextBox
                                        innerText={"Guru"}
                                        ffamily={"bold"}
                                        fsize={"biggest"}
                                        cstyle={'padding-left : 0px'}
                                        color={"#228B22"} 
                                    />
                                </Flex>
                            </HeaderLeftWrapper>
                            <HeaderMiddleWrapper
                                style = {{
                                    width : "100%"
                                }}
                            >
                                <Flex
                                    direction="row"
                                    jcontent="space-between"
                                    aItems="center"
                                    height="100%"
                                    width="100%"
                                >
                                    <InputField
                                        width = {"94%"}
                                        placeholder = {"Search..."}
                                    />
                             
                                </Flex>
                            </HeaderMiddleWrapper>
                            <HeaderRightWrapper>
                                <Flex
                                    direction="column"
                                    jcontent="flexend"
                                    height="100%"
                                >
                                    <ProfileDropDown
                                        options={[  
                                                    'Profile',
                                                    'Setting',
                                                    'Logout'
                                                ]} 
                                    />
                                    
                                </Flex>
                            </HeaderRightWrapper>

                        </Flex>
                    </HeaderSubWrapper>

                </Flex>
            </HeaderWrapper>
        )
    }
}

export default Header