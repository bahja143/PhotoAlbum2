import React from "react";
import { PhotoCamera } from "@material-ui/icons";
import Styles from "./Style";
import "fontsource-roboto";
import Image from "./car-1149997.jpg";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";

const App = () => {
  const classes = Styles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton>
            <PhotoCamera className={classes.icon} />
          </IconButton>
          <Typography variant="h6">Photo Album </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.main}>
        <Container className={classes.container} maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Photo Album
          </Typography>

          <Typography color="TextSecondary" align="center" paragraph>
            Hello, this is a sentence tha describes a long long long text with
            so many images and albums we stored the paste ten years.
          </Typography>

          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                See photos
              </Button>
            </Grid>

            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary Actions
              </Button>
            </Grid>
          </Grid>
        </Container>

        <Container className={classes.cardContainer}>
          <Grid container spacing={4} justify="center">
            {cards.map((c) => (
              <Grid item key={c} sm={12} md={6} xl={4}>
                <Card className={classes.card}>
                  <CardMedia
                    image={Image}
                    Title="Luxury Card"
                    className={classes.cardMedia}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6">Heading</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      This is collection of luxury cars, that we collect paste 5
                      years.
                    </Typography>
                    <CardActions>
                      <Button color="primary">View</Button>
                      <Button color="primary">Edit</Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center">
          Photo Album
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary">
          Hello, this is amazing Album
        </Typography>
      </footer>
    </>
  );
};

export default App;
