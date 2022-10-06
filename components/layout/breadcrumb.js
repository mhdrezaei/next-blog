import * as React from "react";
import theme from "./theme";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import {useRouter} from "next/router"
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
const BroadDiv = styled("div")({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.light,
  padding: 30,
  textAlign: "center",
  "& .presentation": {
    display:"flex",
    justifyContent : "center",
    alignItems : "center",
    "& .link": {
        cursor: "pointer",
        padding : 20,
    },
  },
});


export default function PageBreadcrumbs(props) {
    
  return (
    <BroadDiv>
      <div  className="presentation" >
      <Link className="link" href="/">
      <a>
        <HomeIcon fontSize="large" color="#fff"   />
      </a>
      </Link>
      <Typography fontSize={20} paddingLeft={1} >
        {props.url}
      </Typography>
      </div>
    </BroadDiv>
  );
}
