import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <Box id="portfolio" className="portfolio">
      <Typography align="center" variant="h3" mb={5}>
        Portfolio
      </Typography>

      <Grid container px={2}>
        <Grid item md={2} />
        <Grid item md={10}>
          <Grid container spacing={3}>
            <Grid item lg={3} md={4} sm={6}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={require("./img/project-img1.png")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Meet ups
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The landing page is about events, which is designed by a
                      UX/UI designer of Creative Hub. The events type is
                      meet-ups which are organized by Creative Hub. The meet-ups
                      are live events and occur at different time on different
                      places & the design will be implemented on tge Creatuve
                      Hub's existing page. These events will take place at
                      various locations in different cities across Macedonia.
                      Languages: HTML, CSS and Bootstrap.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item lg={3} md={4} sm={6}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={require("./img/project-img1.png")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Meet ups
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The landing page is about events, which is designed by a
                      UX/UI designer of Creative Hub. The events type is
                      meet-ups which are organized by Creative Hub. The meet-ups
                      are live events and occur at different time on different
                      places & the design will be implemented on tge Creatuve
                      Hub's existing page. These events will take place at
                      various locations in different cities across Macedonia.
                      Languages: HTML, CSS, Bootstrap and Javascipt.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item lg={3} md={4} sm={6}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={require("./img/project-img3.png")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Marketplace
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The marketplace web page is to see proudcts, add products,
                      commend products, edit products and delete products. If
                      you like to add products, commend of products, edit
                      products and delete products you need to login, if you
                      don't have login, you must to register than you can add
                      products, edit products, delete products.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
