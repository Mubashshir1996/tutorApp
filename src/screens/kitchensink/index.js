import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../../components/button'
import Dropdown from '../../components/dropDown'

export const MainWrapper = styled.div`
    position : absolute;
    top : 0px;
    left : 0px;
    width : 100%;
    height : 100%;
`
class Kitchensink extends Component {
    state = {
        inputValue: "",
        userType: ""
    }

    handleDropdown = (userType) => {
        console.log("here is dropdown", userType.target.value)
        this.setState({ userType: userType.target.value });
    };

    handleClick = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <MainWrapper>
                <Button
                    styleClass='primary'
                    value='Click me!'
                    onClick={this.handleClick}
                />
                <div
                    style={{
                        margin: 20
                    }}
                >
                    <Button
                        styleClass='outline-primary'
                        value='Click me!'
                        onClick={this.handleClick}
                    />
                </div>
                <div
                    style={{
                        margin: 20
                    }}
                >
                    <Button
                        styleClass='link'
                        value='Click me!'
                        onClick={this.handleClick}
                    />
                </div>
                <div
                    style={{
                        margin: 20
                    }}
                >
                    <Button
                        styleClass='success'
                        value='Click me!'
                        onClick={this.handleClick}
                        size={"lg"}
                    />
                </div>
                <div
                    style={{
                        margin: 20
                    }}
                >
                    <Button
                        styleClass='success'
                        value='Click me!'
                        onClick={this.handleClick}
                        size={"sm"}
                    />
                </div>

                <div
                    style={{
                        margin: 20
                    }}
                >
                    <Dropdown data={[
                        { value: 1, label: 'Student' },
                        { value: 2, label: 'Teacher' },
                    ]}
                        value={this.state.userType}
                        placeholder='Select userType'
                        onChange={this.handleDropdown}
                    />
                </div>
            </MainWrapper>
        )
    }
}

export default Kitchensink