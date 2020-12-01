import React, { Component } from 'react';
import Menu, {
    Button,
    Dropdown,
    Seperator,
    DropdownItem,
} from "@kenshooui/react-menu";
import styled from 'styled-components'
import { Flex } from '../../contants/reusableStyles'

const ProfilePicWrapper = styled.div`
    width : 70px;
    height : 100%;
`
const ProfilePic = styled.div`
    width : 45px;
    height : 45px;
    border-radius : 50%;
    box-shadow : 0px 0px 2px 1px rgba(0,0,0,0.3);
    margin-right : 3px;
`
const StyledDropDown = styled.div`
    width : 20px;
    height : 10px;
    background-color: green;
`
const StyledMenu = styled(Menu)`
    font-family : 'Baloo2-Medium';
    font-size : 15px;
    background-color : #FFFFFF !important;
    width: 16px;
    border-radius : 5px;
    & .kn-dropdown__dropdown_items_bottom___3iPUJ{
        left : -69px !important;
        top : 35px !important;
        border-radius: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #FFFFFF; 
        box-shadow : 0px 0px 4px 2px rgba(0,0,0,0.1); 
        min-width: 91px
    }
    & .kn-dropdown__dropdown___1Vyuu{
        padding : 0px;
        :hover {
            background-color : #FFFFFF !important;
        }
    } 
    & .kn-dropdown_item__dropdown_item___1tpjd {
        padding-top :  5px;
        padding-bottom : 5px;
        height : 20px;
    }  
`

class ProfileDropDown extends Component {

    render(){
        return(
            <ProfilePicWrapper>
                <Flex
                    height={"100%"}
                    direction={"row"}
                >
                    <ProfilePic />
                    <StyledMenu>
                        <Dropdown>
                            {
                                Array.isArray(this.props.options) ? 
                                    this.props.options.length > 0 ?
                                        this.props.options.map((data) => {
                                            return(
                                                <DropdownItem>
                                                    {data}
                                                </DropdownItem>
                                            )
                                        })
                                        :
                                        ""
                                    :
                                    ""
                            }
                            
                        </Dropdown>
                    </StyledMenu>
                </Flex>
                
            </ProfilePicWrapper>
        )
    }
}

export default ProfileDropDown