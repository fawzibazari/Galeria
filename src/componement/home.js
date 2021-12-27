import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import '../Asset/css/Login.css';


const IMAGES =
    [{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        title: "Test",
        description: "Best journée avec toi"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        title: "Test1",
        description: "Best journée avec toi 1"
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        title: "Test2",
        description: "Best journée avec toi 2"
    }, {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        title: "Test",
        description: "Best journée avec toi"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        title: "Test1",
        description: "Best journée avec toi 1"
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        title: "Test2",
        description: "Best journée avec toi 2"
    }, {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        title: "Test",
        description: "Best journée avec toi"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        title: "Test1",
        description: "Best journée avec toi 1"
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        title: "Test2",
        description: "Best journée avec toi 2"
    }]


function Home() {
    const listItems = IMAGES.map((image) =>
        <div className="card">
            <Card  sx={{ maxWidth: 200, minWidth: 250  }} spacing={4}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image.src}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {image.title}
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