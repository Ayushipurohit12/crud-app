import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from "@mui/material"
import { deleteUser, getUsers } from "../Service/api";
import { Link } from "react-router-dom";
const StyledTable =  styled(Table)`
width: 90%;
margin: 50px auto 0;

`
const Thead =styled(TableRow)`
background:#000;
& > th {
    color:#fff;
    font-size:20px;
}
   `
   const  TRow = styled(TableRow)`
   & > td {
    font-size: 20px;
   }`

const AllUsers = () => {
    const [ Users ,setUser] = useState([]);

 useEffect( () => {
    getUsersDetails();
 },[]);

const deleteUserData = async (id) =>{
    await deleteUser(id);
    getUsersDetails();

}


 const getUsersDetails = async () => {
   let response= await getUsers();
    console.log(response);
    setUser(response.data);
}

    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    Users.map((user) => (
                        <TRow key={user.id}>

                            <TableCell> {user.id} </TableCell>
                            <TableCell> {user.name} </TableCell>
                            <TableCell> {user.username} </TableCell>
                            <TableCell> {user.email} </TableCell>
                            <TableCell> {user.phone} </TableCell>
                            <TableCell>
                                <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button color="secondary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button>


                            </TableCell>
                        </TRow>
                    ))
            }
            </TableBody>
        </StyledTable>

    )
}
export default AllUsers;














