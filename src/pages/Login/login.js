import React, {useState} from 'react';
import {connect} from 'react-redux';
import {SignUp, login} from '../../actions/user'
import {TextField} from '../../components/TextField/textField'
import './login.css';

const Login = props => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const onClick = () => {
        let data = {
            emailPhone: email,
            fullName: fullName,
            userName: userName,
            password: password
        }
        props.SignUp(data).then(response => {
            if (response) {
                props.history.push("/home")
            }
        }).catch(error => {
            console.log(error);
        });
    }
    const LoginClick = () => {
        props.login({email, password}).then(res => {
            if (res) {
                props.history.push("/home")
            } else {
                alert("Username or password wrong")
            }
        }).catch(error => {
            console.log(error);
        })

    };
    const renderSignUpView = () => {
        return (<div className="mainContainer">
                <h2>Ecommerce</h2>
                <div>
                    <h2 className='h2'>Create new account.</h2>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {/*<div className='buttonContainer'>*/}
                        {/*    <button type="button" className="buttonComponent">*/}
                        {/*        <span className="spanContainer">*/}
                        {/*            Log in with Facebook*/}
                        {/*        </span>*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        {/*<div style={{display: 'flex', flexDirection: 'row', margin: "10"}}>*/}
                        {/*    <div className="lineContainer"/>*/}
                        {/*    <div className="ORText">OR</div>*/}
                        {/*    <div className="lineContainer"/>*/}
                        {/*</div>*/}
                        <div style={{marginTop: 5, marginLeft: 30, marginBottom: "6%", marginRight: 30}}>
                            <TextField name="emailOrPhone" type="text" value={email}
                                       placeholder={'Mobile Number or Email'} onChange={
                                (email) =>
                                    setEmail(email.target.value)
                            }/>
                            <TextField name="fullName" type="text" value={fullName} placeholder={'Full Name'} onChange={
                                (fullName) =>
                                    setFullName(fullName.target.value)
                            }/>
                            <TextField name="userName" type="text" value={userName} placeholder={'UserName'} onChange={
                                (userName) =>
                                    setUserName(userName.target.value)
                            }/>
                            <TextField name="password" type="password" value={password} placeholder={'Password'}
                                       onChange={
                                           (password) =>
                                               setPassword(password.target.value)
                                       }/>

                            <div className="buttonContainer">
                                <button type="button" className="buttonComponent" onClick={onClick}>
                                    <span className="spanContainer">
                                        Sign Up
                                    </span>
                                </button>
                            </div>
                            <p className="pContainer">By
                                signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const renderLoginView = () => {
        return (<div className="mainContainer">
                <h2>Ecommerce
                </h2>
                <div style={{
                    width: "100%"
                }
                }>

                    <div style={{display: 'flex', flexDirection: 'column'}} method='post'>
                        <div style={{marginTop: 5, marginLeft: 30, marginBottom: "6%", marginRight: 30}}>
                            <TextField name="emailOrPhone" type="text" value={email}
                                       placeholder={'Mobile Number or Email'} onChange={
                                (email) =>
                                    setEmail(email.target.value)
                            }/>
                            <TextField name="password" type="password" value={password} placeholder={'Password'}
                                       onChange={
                                           (password) =>
                                               setPassword(password.target.value)
                                       }/>
                            <div className="buttonContainer">
                                <button type="button" className="buttonComponent" onClick={LoginClick}>
                <span style={{height: "16%", width: '16%', fontWeight: 600}}>
                    LOG IN
                </span>
                                </button>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', margin: "10"}}>
                                <div className="lineContainer"/>
                                <div className="ORText">OR</div>
                                <div className="lineContainer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderFooterView = () => {
        return (<div className="footerMainContainer">

            <text> {!isLogin ? "Have a account ?" : "Don't have an account? "}</text>
            <text style={{
                fontWeight: '600',
                color: "#3897F0",
                marginLeft: "1%"
            }} onClick={() => {
                setIsLogin(!isLogin)
            }}>{!isLogin ? "Login" : "Sign up"}</text>
        </div>)
    }

    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: "center", flexDirection: "column"}}>
            {isLogin ? renderLoginView() : renderSignUpView()}
            {
                renderFooterView()
            }

        </div>
    )
}

const mapStateToProps = state => {
    // const { addData, searchData, updateData } = state;
    // return {
    //     addData,
    //     searchData,
    //     updateData
    // };
};
export default connect(
    mapStateToProps,
    {
        // SignUp, login
    }
)(Login);
