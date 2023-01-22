import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {
    return <RegisterStyle className='register'>
        <div className='card'>
            <div className='right'>
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder='Username' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Password' />
                    <button>Register</button>
                </form>
            </div>
            <div className='left'>
                <h1>Login Page</h1>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                </p>
                <span>Dont you have an account ?</span>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    </RegisterStyle>
};
export default Register

const RegisterStyle = styled.div`
height: 100vh;
background-color: rgb(193,190,255);
display:flex;
align-items:center;
justify-content:center;
.card {
    width:50%;
    display:flex;
    background-color: white;
    border-radius: 10px;
    min-height:600px;
    overflow:hidden;
    .left {
        flex: 1;
        background: linear-gradient(rgb(39,11,96,0.5), rgb(39,11,96,0.5)), url("https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600") center;
        background-size: cover;
        padding: 50px;
        display:flex;
        flex-direction: column;
        // justify-content: center;
        // align-items:center;
        gap:30px;
        color: white;

        h1{
            font-size:100px;
            line-height:100px;
        }
        p {}
        span {
            font-size:14px;
        }
        button {
            width:50%;
            padding:10px;
            border:none;
            background-color:white;
            color : rebeccapurple;
            font-weight:bold;
            cursor: pointer;
        }
    }
    .right {
        flex: 1;
        padding:50px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        h1 {
            color: #555;
        }
        form {
            display:flex;
            flex-direction:column;
            gap:30px;

            input {
                border: none;
                border-bottom: 1px solid lightgray;
                padding: 20px 10px;
            }

            button {
                width:50%;
                padding: 10px;
                border: none;
                background-color: #938eef;
                color: white;
                font-weight: bold;
                cursor: pointer;
            }
        }
    }
}
`