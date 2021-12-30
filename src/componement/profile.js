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

const InfoUser =
    [{
        firstname: "firstname",
        lastname: "lastname",
        email: "email@email.com",
    }]



function Profile() {

    const [newpassword, setNewpassword] = useState("");
    const [cofirmedNewpassword, setCofirmedNewpassword] = useState("");
    const [photo, setPhoto] = useState("");

    console.log(photo);


    const butdisabled = newpassword == cofirmedNewpassword && newpassword.length > 2 && cofirmedNewpassword.length > 2 ? "" : "disabled";


    // console.log(butdisabled)

    const handleChangeNewpassword = (event) => {
        setNewpassword(event.target.value);
    };
    const handleChangeCofirmedNewpassword = (event) => {
        setCofirmedNewpassword(event.target.value);
    };
    const handleChangePhoto = (event) => {
        setPhoto(event.target.value);
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
                    <Input value={photo} id="component-simple" type="file" onChange={handleChangePhoto} /> <br />
                    <Button  disabled={photo == ""}  >upload la photo </Button>
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

