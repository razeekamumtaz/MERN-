import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
    var [input, setinput] = useState({
        name:"",
        Age: "",
        Dept:"",
        Salary: ""
        
        
    })
    var location = useLocation()
    var navigate=useNavigate()
    console.log("loc", location.state)
    const inputHandle = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value });
        console.log(input)
    }
    const addHandle = () => {
        console.log("clicked")
        if (location.state !== null) {
            
            axios.put("http://localhost:3004/update/"+location.state.val._id,input)
                .then((res) => {
                    alert(res.data.messege)
                    navigate('/view')
            })
        } else {
            axios.post("http://localhost:3004/add", input)
                .then((res) => {
                    console.log(res);
                    alert(res.data.messege)
                    navigate("/view")
                })
                .catch((errr) => {
                    console.log(errr)
                })
        }
        
            
    }
    useEffect(() => {
        if (location.state !== null)
            setinput({
                ...input,
                Name: location.state.val.Name,
                Age: location.state.val.Age,
                Dept: location.state.val.Dept,
                Salary: location.state.val.Salary
            });
    }, []
    );
  return (
      <div>
          <Typography variant='h5'>ADD employee</Typography><br></br>
          <TextField id="outlined-basic" label="Name" variant="outlined"name='Name' value={input.Name} onChange={inputHandle}>Name</TextField><br></br><br></br>
          <TextField id="outlined-basic" label="Age" variant="outlined" name='Age' value={input.Age} onChange={inputHandle}>Age</TextField><br></br><br></br><br></br>
          <TextField id="outlined-basic" label="Department" variant="outlined" name="Dept" value={input.Dept} onChange={inputHandle}>Department</TextField><br></br><br></br>
          <TextField id="outlined-basic" label="Salary" variant="outlined" name="Salary" value={input.Salary} onChange={inputHandle}>Salary</TextField><br></br><br></br>
          <Button variant="outlined" color="inherit" onClick={addHandle}>ADD</Button>




    </div>
  )
}

export default Add