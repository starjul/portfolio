import { GitHub } from "@mui/icons-material";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { CardContainer } from "./Card";

const CardRight = () => {
    return (
        <CardContainer>
          <img src="/Assets/Jammming02.png" alt="jammming-project" />
          <div className="cardRight" >
            <h4>Featured Project</h4>
            <h1>Jammming</h1>
            <p>
              A website for users to create playlists in
              Spotify by searching music and adding to a new playlist. By using
              React, NPM, Surge, and Spotify API.
            </p>
            <div className="flex">
              <p>React JS</p>
              <p>NPM</p>
              <p>Surge</p>
              <p>Spotify API</p>
            </div>
            <div className="linkIcon">
              <GitHub size="small" />
              <OpenInNewIcon size="small" />
            </div>
          </div>
        </CardContainer>
      );
    };

export default CardRight;
