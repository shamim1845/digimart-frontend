import React, {useState} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axiox from "axios";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';



const ResetPassword = () => {
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  })

  const navigate = useNavigate();

  
  let name, value;
  const InputHandler = (e) => {
    name = e.target.name;
   value = e.target.value;
   setData({...data, [name]: value})
  }

  let params = useParams();
  const SubmitHandler = async(e) => {
    console.log(params.token);
    e.preventDefault();
    try{
      const { password, confirmPassword} = data;
      if(password !== confirmPassword) {
        toast("Password doesn't match.");
      }else{
        const res = await axiox.put(`/api/v1/password/reset/${params.token}`, {password, confirmPassword});
        console.log(res);
    if(res.status === 200) {
      toast("Password Update successfull.")
      localStorage.setItem("digimartToken", JSON.stringify(res.data.token))
      
          setTimeout(() => {
            navigate("/")
          }, 3000);
        }else{
          toast("Invalid Password Reset Details")
        }
      
      }
    }catch(err) {
      console.log(err);
      toast("Invalid Password Reset Details")
    }
  }


  return (
    <>
    <ToastContainer />
      <LoginContainer>
        <ContainerTop>
          <FormContainer>
            <Title> Reset Password </Title>
            <Form onSubmit={SubmitHandler}>
              <InputGroup>
            
                <div>
                  <label htmlFor="password">New Password</label>
                  <input type="password" name="password" onChange={InputHandler} value={data.password}/>
                </div>
            
                <div>
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input type="password" name="confirmPassword" onChange={InputHandler} value={data.confirmPassword}/>
                </div>
              </InputGroup>
              <Button>
                <input type="submit" value="Submit" />
              </Button>
            </Form>
       
          </FormContainer>

        </ContainerTop>

      </LoginContainer>
    </>
  );
};

export default ResetPassword;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;
const ContainerTop = styled.div`
  width: 100%;
  max-width: 35rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
