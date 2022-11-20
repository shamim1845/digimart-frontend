import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axiox from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



let name, value;
const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",

  })
  const navigate = useNavigate();


  const InputHandler = (e) => {
    name = e.target.name;
   value = e.target.value;
   setData({...data, [name]: value})
  }

  const SubmitHandler = async(e) => {
    e.preventDefault();

const {name, email, password, cPassword} = data;
if(!name || !email || !password || !cPassword ) {
  toast("Fields can't be empty.")
}
else if(password !== cPassword) {
  toast("password doesn't match!")
}else{
  axiox.post("/api/v1/register", 
    {name, email, password}).then((res) => {
      console.log(res);
      if(res.status === 201) {
        toast("Registration Sucessfull");
        
        localStorage.setItem("digimartToken", JSON.stringify(res.data.token))

        setTimeout(() => {
          navigate("/")
          }, 3000);
      }else if(res.status===202) {
        toast(res.data.message);
        setTimeout(() => {
          navigate("/login")
          }, 3000);
      }
 
    }).catch((err) => {

      
  
      console.log(err.message);
    })

}



  }








  
  return (
    <>
     <ToastContainer />
      <RegContainer>
        <ContainerTop>
          <FormContainer>
            <Title>Create account </Title>
            <Form onSubmit={SubmitHandler}>
              <InputGroup>
                <div>
                  <label htmlFor="name">Enter Your name</label>
                  <input type="name" name="name" required min={3} onChange={InputHandler} value={data.name}/>
                </div>
                <div>
                  <label htmlFor="email">Enter Your Email</label>
                  <input type="email" name="email" required onChange={InputHandler} value={data.email}/>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" required min={8} onChange={InputHandler} value={data.password} placeholder="At least 8 characters"/>
                  <p><span>i</span> Passwords must be at least 8 characters.</p>
                </div>
                <div>
                  <label htmlFor="password">Confirm password</label>
                  <input type="password" name="cPassword" required min={8} onChange={InputHandler} value={data.cPassword}/>
                </div>
              </InputGroup>
              <Button>
                <input type="submit" value="Register" />
              </Button>
            </Form>
            <Message>
              <p>
              By creating an account,  you agree to DIGIMART's
                <Link to={"/conditions"}> Conditions of Use </Link>and
                <Link to={"/privacy-policy"}> Privacy Notice.</Link>
              </p>
             
            </Message>
          </FormContainer>

          <ButtonContainer>
            <div>
              <p>Already have an account?</p>
              <Link to={"/login"}>Sign-In</Link>
            </div>
          </ButtonContainer>
        </ContainerTop>

        <ContainerBottom></ContainerBottom>
      </RegContainer>
    </>
  );
};

export default Register;

const RegContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
 height: 100%;
`;
const ContainerTop = styled.div`
  width: 100%;
  max-width: 35rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ButtonContainer = styled.div`
  margin: 2rem;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
 

    & p {
      font-size: 1.2rem;
      color: #666;
      margin: 1rem 0;
    }
    & a {
      text-align: center;
     
      font-size: 1.2rem;
      background: var(--bg-secondary);
      border: 1px solid #666;
      width: 100%;
      border-radius: 3px;
      padding: 1rem;
      transition: all .3s;
        &:hover{
 
 box-shadow: #66666683 0px -50px 36px -30px inset;
        }
    }
  }
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
`;
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
`;
const InputGroup = styled.div`
  div {
    margin: 1rem 0;
    & label {
      font-size: 1.3rem;
      color: var(--text-secondary);
    }
    & input {
      width: 100%;
      height: 3rem;
      &:focus {
        border: none;
        outline: none;
        /* outline: 1px solid tomato; */
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      }
      &::placeholder{
        padding-left: .5rem;
        font-size: 1.3rem;
      }
    }
    p{
      font-size: 1.1rem;
      span{
        font-style: italic;
        color: tomato;
        margin: 1.2rem .5rem 0 0;
        font-weight: 700;
      font-size: 1.5rem;
      }
    }
  }
`;
const Button = styled.div`
  & input {
    font-size: 1.3rem;
    border: none;
    background-color: var(--bg-primary);
    padding: 1rem 2rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: #fff;
      background-color: #ff6347f6;
    }
  }
`;
const Message = styled.div`
  margin: 1rem 0;
  font-size: 1.2rem;
  p {
    color: var(--text-secondary);

    margin-bottom: 1rem;
  }
  a {
    transition: all 0.5s;
  }
  a:hover {
    color: tomato;
    text-decoration: underline;
  }
`;
const ContainerBottom = styled.div``;
