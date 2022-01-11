import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import '../Asset/css/Login.css';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import PhotoService from "../services/photo.service";
import axios from "axios";
import AuthService from "../services/auth.service";


const InfoUser =
    [{
        firstname: "firstname",
        lastname: "lastname",
        email: "email@email.com",
    }]



function Profile() {

    const [newpassword, setNewpassword] = useState("");
    const [cofirmedNewpassword, setCofirmedNewpassword] = useState("");
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState("test");
    const [tag, setTag] = useState("test");


    console.log(file);

    const fileHandler = (e) => {
        setFile(e.target.files[0])
    }
  const upload = async => { 

    PhotoService.uploadPhotos(file,description,tag)
    .then(res => { 
        console.warn(res.data);
    })

         
}    


    const butdisabled = newpassword == cofirmedNewpassword && newpassword.length > 2 && cofirmedNewpassword.length > 2 ? "" : "disabled";



    const handleChangeNewpassword = (event) => {
        setNewpassword(event.target.value);
    };
    const handleChangeCofirmedNewpassword = (event) => {
        setCofirmedNewpassword(event.target.value);
    };

    return (
        <div className="">
            <div className="infoUser">

                <Card sx={{ maxWidth: 345 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Mes info
                    </Typography>
                    <CardContent>
                        <TextField
                            disabled
                            id="standard-disabled"
                            label="nom"
                            defaultValue={InfoUser[0].lastname}
                            variant="standard"
                        />
                        <TextField
                            disabled
                            id="standard-disabled"
                            label="prenom"
                            defaultValue={InfoUser[0].firstname}
                            variant="standard"
                        />
                        <TextField
                            disabled
                            id="standard-disabled"
                            label="email"
                            defaultValue={InfoUser[0].email}
                            variant="standard"
                        />
                        <FormControl variant="standard">
                            <InputLabel htmlFor="component-simple">Nouveau mot de passe</InputLabel>
                            <Input id="component-simple" value={newpassword} onChange={handleChangeNewpassword} />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="component-simple">confirmer le mot de passe</InputLabel>
                            <Input id="component-simple" value={cofirmedNewpassword} onChange={handleChangeCofirmedNewpassword} />
                        </FormControl>
                        <br />
                        <br />
                        <Button disabled={butdisabled} >Update mot de passe </Button>
                    </CardContent>
                </Card>
            </div>

            <div className="upload">
                <form>
                <img src={file? URL.createObjectURL(file) : null} alt={file? file.name : null}/>
                <br></br>
                <input type="file" onChange={fileHandler} />
                <button type="button" onClick={upload}>Upload</button> 
                </form>
            </div>
            <div className="upload">
                <h1>Mes photos</h1>

                //ajouter les photos de l'utilisateurs et rajouter la fonction supprimer la photo
            </div>
        </div>
    )
}

export default Profile;

