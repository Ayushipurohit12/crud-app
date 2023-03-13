import { FormGroup,FormControl,InputLabel,Input,Typography,Button,styled } from '@mui/material';
import React from 'react';
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../Service/api';

const initalvalue = {
    name: '',
    username:'',
    email:'',
    phone:''
}

const Container = styled(FormGroup)`
        width:50%;
        margin:50px auto 0 auto;
        & > div{
            margin-top:20px
        }
`;
const AddUser = () => {
const [user,setUser] = useState(initalvalue);
const {name, username , email,phone }=user;
let navigate = useNavigate();

const onValueChange = (e) => {
    setUser ({...user , [e.target.name]: e.target.value})
}
const addUserDetails = async() => {
    await addUser(user);
    navigate('/all');
}

  return (
    <Container>
                <Typography variant="h4">Add user</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
                </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
            <Button variant="contained" color="primary" style={{marginRight:10}} onClick={() => addUserDetails()}>Add User</Button>
            {/* <Button color="secondary">Delete</Button> */}
            </FormControl>
    </Container>
  )
}
export default AddUser;