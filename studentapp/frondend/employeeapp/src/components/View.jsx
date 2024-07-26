import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const View = () => {

    var [emp, setemp] = useState([])
    var navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3004/view")
            .then((res) => {
                setemp(res.data);
                console.log(res)
            })
            .catch((err) => console.log(err))

    }, [])

    const delValue = (id) => {
        console.log(id)
        axios.delete("http://localhost:3004/remove/" + id)
            .then((res) => {
                alert(res.data.messege);
                window.location.reload();
            })
            .catch((err) => console.log(err))
    }
    const updateValue = (val) => {
        console.log("up clicked")
        navigate("/add",{state:{val}})
        
    }
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Salary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {emp.map((val, i) => {
                            return (

                                <TableRow>
                                    <TableCell>{val.Name}</TableCell>
                                    <TableCell>{val.Age}</TableCell>
                                    <TableCell>{val.Dept}</TableCell>
                                    <TableCell>{val.Salary}</TableCell>
                                    <TableCell><Button variant="contained" color="success"
                                        onClick={() => {
                                        updateValue(val)
                                    }}>Update</Button>
                                    </TableCell>
                                    <TableCell><Button variant="contained" color="warning" onClick={
                                        () => {
                                            delValue(val._id)
                                        }
                                    }>Delete</Button></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default View