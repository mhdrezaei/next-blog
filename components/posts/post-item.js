import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
function PostItem(props) {
  const { title, image, slug, description } = props.post;
  const href = `/posts/${slug}`;
  const src = `/images/posts/${image}`;
  return (
    <Grid item md={4} sm={6} sx={12}>
      <Card>
        {/* <CardMedia
      component="img"
      height="140"
      image={image}
      alt={title}
    /> */}
        <Image src={src} alt={title} width={400} height={200} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Link href={href} >
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PostItem;
