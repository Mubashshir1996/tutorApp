import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../components/button'
import { Flex } from '../../contants/reusableStyles'
import TextBox from '../../components/textBox'
import Dropdown from '../../components/dropDown'
import Header from '../../components/header'
import school from '../../assets/images/school.png'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { fontFamilySelector, fontSizeSelector } from '../../contants/reusableStyles'
import InputGroup from 'react-bootstrap/InputGroup';
import InputBox from '../../components/inputField'
import { connect } from 'react-redux';
import {signup ,setSignup} from '../../redux/action/signup'

const MainWrapper = styled.div`
    position : absolute;
    top : 0px;
    left : 0px;
    width : 100%;
    height : 100%;
`
const BodyWrapper = styled.div`
    /* margin-top : 10px; */
    height : 500px;
    display : flex;
    flex-direction : row;
    justify-content : center;
    background-image : url(${school});
    background-repeat : no-repeat;
    background-size : 100%;
`
const BodySubWrapper = styled.div`
    width : 90%;
    height : 100%;
`
const School = styled.div`
    width : 100%;
    height : 100%;
    background-image : url(${school});
    background-repeat : no-repeat;
    background-size : 90%;
`
const LeftWrapper = styled.div`
    width : 48%;
    height : 100%;
`
const RightWrapper = styled.div`
    width : 48%;
    height : 100%;
`
const RightSubWrapper = styled.div`
    padding-top : 30px;
    height : 100%;
    width : 445px;
`
const Context = styled.div`
    margin-bottom : 0px;
`

class Main extends Component {
    state ={
        firstname: ' ' ,
        lastname:'',
        email: ' ', 
        password: ' ', 
        grade: ' ', 
        userType: '',
        showLoaderStatus: false
    }
    handleChange = (e) => {
        console.log("type",e.target.value);
        console.log("something 92", e.target.name);
       const {name, value} = e.target;
       this.setState({
           [name]:value
       })
    }
    handleSubmit = (e) => {
        e.preventDefault();
       const {email,password,name,grade,userType} = this.state;
       console.log("signup", password);
      
          if(email && password === "")
          {
              alert("Please enter the email or password");
              
          }
        else if(name && grade === "")
         {
             alert("Please enter name or grade")
         }
      else {
          let signObj = {
              email : email,
              password : password,
              name : this.state.firstname + " " + this.state.lastname,
              grade : grade,
              userType : userType
            }
            this.setState({ showLoaderStatus  : true })
            this.props.signup(signObj)
      }
    }
    operation = () =>{
        console.log("Real data",this.props.signupData.signupData)
        if(this.props.signupData.signupData.status === 201){
            this.setState({ showLoaderStatus  : false })
            this.setState({
                            firstname : "", 
                            lastname:"", 
                            email:"", 
                            password:"", 
                            grade:"", 
                            userType:""
                        })
            this.props.setSignup()
        }else if(this.props.signupData.signupData.status === 500){
            this.setState({ showLoaderStatus  : false })
            alert("Something is missing, Plesae check...")
            this.props.setSignup()
        }
    }
    handleDropdown = (e) => {
        this.setState({userType:e.target.value})
    }
   
    render(){
        return(
            <MainWrapper>
                <Header />
                <BodyWrapper>
                    <BodySubWrapper>
                        
                        <Flex
                            height={"100%"}
                            jcontent={"space-between"}
                            direction={"row"}
                        >
                            <LeftWrapper>
                                <Flex
                                    height={"100%"}
                                    jcontent={"center"}
                                >
                                    <TextBox
                                        innerText={"Education is our passport to the future, for tomorrow belongs to the people who prepare for it today."}
                                        ffamily={"medium-italic"}
                                        fsize={"bigger"}
                                        color={"rgba(250,250,210, 0.8)"} 
                                    />
                               </Flex>
                            </LeftWrapper>
                            <RightWrapper>
                                <Flex
                                    height={"100%"}
                                    jcontent={"flexend"}
                                    direction={"row"}
                                >
                                    <RightSubWrapper>
                                        <TextBox
                                            innerText={"Create an account"}
                                            fsize={"larger"}
                                            ffamily={"bold"}
                                            color={"rgba(255, 255, 255, 0.7)"}
                                            style={{
                                                height : 43
                                            }}
                                        />
                                        <Context
                                            style={{
                                                paddingBottom : 35
                                            }}
                                        >
                                                <TextBox
                                                    innerText={"It's quick and easy"}
                                                    fsize={"big"}
                                                    ffamily={"bold"}
                                                    color={"rgba(65,105,225,0.8)"}

                                                />
                                        </Context>
                                        <Context>
                                            <Flex
                                                jcontent={"space-between"}
                                                direction={"row"} 
                                            >
                                                <InputBox
                                                    styleClass={"mb-3"}
                                                    width={"48%"}
                                                    name={"firstname"}
                                                    placeholder={"Firstname"}
                                                    onChange={this.handleChange}
                                                    size={"lg"}
                                                    style={{
                                                        marginBottom : "10px !important"
                                                    }}
                                                />
                                                <InputBox
                                                    styleClass={"mb-3"}
                                                    width={"48%"}
                                                    name={"lastname"}
                                                    placeholder={"Lastname"}
                                                    onChange={this.handleChange}
                                                    size={"lg"}
                                                    style={{
                                                        marginBottom : "10px !important"
                                                    }}
                                                />
                                            </Flex>
                                            </Context>
                                            <Flex
                                                width={"100%"}
                                            >
                                            <Context
                                                style={{
                                                    width : "100%",
                                                    paddingBottom : "10px"
                                                }}
                                            >
                                                <Dropdown data={[
                                                        {value:1, label:'Student'},
                                                        {value:2, label:'Teacher'},
                                                    ]}
                                                        value={this.state.userType}
                                                        placeholder='Select userType'
                                                        onChange={this.handleDropdown}
                                                        dropDownSize={"big"}
                                                        name={"userType"}
                                                        width={"100%"}
                                                        fsize={"normal"}
                                                        // ffamily={"semi-bold"}
                                                        // color={"rgba(65,105,225,0.8)"}
                                                />
                                            </Context>
                                            </Flex>
                                                
                                                <Flex
                                                    direction={"column"}
                                                    width={"100%"}
                                                > 
                                                    <Context
                                                        style={{
                                                            width : "100%"

                                                        }}
                                                    >  
                                                        <InputBox
                                                            styleClass={"mb-3"}
                                                            width={"100%"}
                                                            name={"email"}
                                                            placeholder={"Email"}
                                                            size={"lg"}
                                                            onChange={this.handleChange}
                                                            style={{
                                                                marginBottom : "10px !important"
                                                            }}
                                                        />
                                                    </Context>
                                                    <Context
                                                        style={{
                                                            width : "100%"
                                                        }}
                                                    >
                                                        <InputBox
                                                            styleClass={"mb-3"}
                                                            width={"100%"}
                                                            name={"password"}
                                                            placeholder={"New Password"}
                                                            type={"password"}
                                                            size={"lg"}
                                                            onChange={this.handleChange}
                                                            style={{
                                                                marginBottom : "10px !important"
                                                            }}
                                                        />
                                                    </Context>
                                                    <Context
                                                        style={{
                                                            width : "100%"
                                                        }}
                                                    >
                                                        <InputBox
                                                            styleClass={"mb-3"}
                                                            width={"100%"}
                                                            name={"grade"}
                                                            placeholder={"Grade"}
                                                            size={"lg"}
                                                            onChange={this.handleChange}
                                                            style={{
                                                                marginBottom : "10px !important"
                                                            }}
                                                        />
                                                    </Context>
                                                    <Context
                                                        style={{
                                                            width : "100%"
                                                        }}
                                                    >
                                                        <Button
                                                            styleClass={"success"}
                                                            // backgroundColor={"#228B22"}
                                                            fsize={"big"}
                                                            // color={"#FFFFFF"}
                                                            value={"Sign Up"}
                                                            width={"100%"}
                                                            ffamily={"bold"} 
                                                            size={"lg"}
                                                            onClick={this.handleSubmit}
                                                        />
                                                    </Context> 
                                                </Flex>
                                    </RightSubWrapper>
                                    {
                        console.log("Here is Franklin",this.props.signupData)
                    }

                    {
                        this.state.showLoaderStatus ? 
                            <div
                                style={{
                                    position : "absolute",
                                    backgroundColor : "rgba(0,0,0,0.2)",
                                    top : 0,
                                    left : 0,
                                    width :"100%",
                                    height : "100%"
                                }}
                            >
                                Loading..........
                            </div>
                            :
                            ""
                    }
                    {console.log(this.props.signupData, "something values")}
                    {
                        Object.keys(this.props.signupData).length > 0 ? this.operation() : null
                    }
                    {/* {
                        this.props.signupData
                    } */}
                                </Flex>
                            </RightWrapper>
                        </Flex>
                    </BodySubWrapper>
                </BodyWrapper>
                
            </MainWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        signupData : state.signupData
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        signup: (signupData) => dispatch(signup(signupData)),
        setSignup:() => dispatch(setSignup())
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(Main)