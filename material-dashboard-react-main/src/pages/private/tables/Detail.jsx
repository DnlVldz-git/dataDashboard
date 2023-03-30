import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FunctionsIcon from '@mui/icons-material/Functions';

const Detail = (data) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {data.data &&
        Object.keys(data.data).map((key) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FunctionsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={key} secondary={data.data[key]} />
          </ListItem>
        ))}
    </List>
  );
};

export default Detail;
