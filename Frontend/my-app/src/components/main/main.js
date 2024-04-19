import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Main = () => {

    const navigate = useNavigate();
    const profileNav = () => {
        navigate("/profile");
      };


    return (
        <div>
            <meta name="viewport" content="initial-scale=1, width=device-width" />

            <TextField id="outlined-basic" label="Hello World" variant="outlined" />
            <Button variant="contained" onClick={profileNav} className="btn btn-secondary me-2" style={{ marginRight: '5px' }}>
              Profile
            </Button>
        </div>
    )
}
export default Main;