import { FormGroup, FormControl, InputLabel, Input, Typography, Button, styled } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers , editUser } from '../Service/api';
const initalvalue = {
    name: '',
    username: '',
    email: '',
    phone: ''
    }
const Container = styled(FormGroup)`
        width:50%;
        margin:5% auto 0 auto;
     `
    const EditUsers = () => {
    const [user,setUser] = useState(initalvalue);
    // const { name, username, email, phone } = user;

    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        getUsersDetails();
    }, []);

    const getUsersDetails = async () => {
        let response = await getUsers(id);
        //    console.log(response);
        setUser(response.data);
    }
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    const editUserDetails = async () => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">EditUsers</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit users</Button>
            </FormControl>
        </Container>
    )
}
export default EditUsers;