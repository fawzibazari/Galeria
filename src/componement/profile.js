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
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";



function Profile() {

    const navigate = useNavigate();

    useEffect(() => {
        AuthService.getUser().then(
          (response) => {},
          (error) => {
            console.log("T'as pas le droit 😁", error.response);
            // Invalid token
            if (error.response && error.response.status === 401) {
              navigate("/login");
              window.location.reload();
            }
          }
        );
      }, []);

    const [newpassword, setNewpassword] = useState("");
    const [oldwpassword, setOldpassword] = useState("");
    const [cofirmedNewpassword, setCofirmedNewpassword] = useState();
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const fileHandler = (e) => {
        setFile(e.target.files[0])
    }
    
    const DescriptionHandler = (e) => {
        setDescription(e.target.value)
    }
    
    const TagHandler = (e) => {
        setTag(e.target.value)
    }
    
    const firstnameHandler = (e) => {
        setFirstname(e.target.value)
    }
    const lastnameHandler = (e) => {
        setLastname(e.target.value)
    }

  const upload = async => { 

    PhotoService.uploadPhotos(file,tag,description)
    .then(res => { 
        console.warn(res.data);
    })   
}  
  
const update = (e) =>  { 
    e.preventDefault();
    AuthService.update(firstname,lastname)
    .then(res => { 
        localStorage.removeItem("user");
        navigate("/login");
        window.location.reload();
    })   
}  

    const butdisabled = newpassword == cofirmedNewpassword && newpassword.length > 2 && cofirmedNewpassword.length > 2 ? "" : "disabled";

    const handleChangeOldpassword = (event) => {
        setNewpassword(event.target.value);
    };
    const handleChangeNewpassword = (event) => {
        setOldpassword(event.target.value);
    };
    const handleChangeCofirmedNewpassword = (event) => {
        setCofirmedNewpassword(event.target.value);
    };

    const user = JSON.parse(localStorage.getItem("user"));


    return (
        <div className="">
            <div className="infoUser">

                <Card sx={{ maxWidth: 345 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Mes info
                    </Typography>
                    <CardContent>
                        {/* <TextField
                            id="standard-disabled"
                            label="nom"
                            defaultValue={user.user.lastname}
                            variant="standard"
                        />
                        <TextField    
                            id="standard-disabled"
                            label="prenom"
                            defaultValue={user.user.firstname}
                            variant="standard"
                        />
                        <TextField         
                            id="standard-disabled"
                            label="email"
                            variant="standard"
                        /> */}
                        <form onSubmit={update} >

                          <FormControl variant="standard">
                            {/* <InputLabel htmlFor="component-simple">ancien mot de passe</InputLabel> */}
                            <Input id="component-simple" defaultValue={user.user.firstname} onChange={firstnameHandler} />
                            </FormControl>
                            <FormControl variant="standard">
                            <Input id="component-simple" defaultValue={user.user.lastname} onChange={lastnameHandler} />
                            </FormControl>
                            <Typography  component="div">{user.user.email}</Typography>
                      
                        {/* <FormControl variant="standard">
                            <InputLabel htmlFor="component-simple">ancien mot de passe</InputLabel>
                            <Input id="component-simple" value={oldwpassword} onChange={handleChangeOldpassword} />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="component-simple">Nouveau mot de passe</InputLabel>
                            <Input id="component-simple" value={newpassword} onChange={handleChangeNewpassword} />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="component-simple">confirmer le mot de passe</InputLabel>
                            <Input id="component-simple" value={cofirmedNewpassword} onChange={handleChangeCofirmedNewpassword} />
                        </FormControl> */}
                        <br />
                        <br />
                        <Button 
                        type="submit"
                        //  disabled={butdisabled} 
                         >Update votre profle </Button>
                         </form>
                    </CardContent>
                </Card>
            </div>

            <div className="upload">
                <form>
                <img src={file? URL.createObjectURL(file) : null} alt={file? file.name : null}/>
                <br></br>
                <input type="file" onChange={fileHandler} />
                <label>Tag</label>
                <input type="text" onChange={TagHandler} />
                <label>Description</label>
                <input type="text" onChange={DescriptionHandler} />
                <button type="button" onClick={upload}>Upload</button> 
                </form>
            </div>
            <div className="upload">
                <h1>Mes photos</h1>
                {/* //ajouter les photos de l'utilisateurs et rajouter la fonction supprimer la photo */}

            </div>

            {/* <h5 class="card-title">{player.name}</h5>
    <p class="card-text">{player.runs}</p> */}
        </div>

   
    )
}


export default Profile;

