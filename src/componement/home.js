import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AuthService from "../services/auth.service";
import PhotoService from "../services/photo.service";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";


import '../Asset/css/Login.css';


// const IMAGES =
//     [{
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         title: "Test",
//         description: "Best journée avec toi"
//     },
//     {
//         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//         title: "Test1",
//         description: "Best journée avec toi 1"
//     },

//     {
//         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         title: "Test2",
//         description: "Best journée avec toi 2"
//     }, {
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         title: "Test",
//         description: "Best journée avec toi"
//     },
//     {
//         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//         title: "Test1",
//         description: "Best journée avec toi 1"
//     },

//     {
//         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         title: "Test2",
//         description: "Best journée avec toi 2"
//     }, {
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         title: "Test",
//         description: "Best journée avec toi"
//     },
//     {
//         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//         title: "Test1",
//         description: "Best journée avec toi 1"
//     },

//     {
//         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         title: "Test2",
//         description: "Best journée avec toi 2"
//     }]


function Home() {
    const [Photos, setPhotos] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        PhotoService.getAllPhotos().then(
          (response) => {
              console.log(response)
            setPhotos(response.data);
          },
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

    const listItems = Photos.map((image) =>
        <div className="card">
            <Card  sx={{ maxWidth: 200, minWidth: 250  }} spacing={4}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image.url}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {image.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );

    return (
        // listItems

        <div className="Cards">
            <Grid container >
                {listItems}
            </Grid>
        </div>
    )
}

export default Home;