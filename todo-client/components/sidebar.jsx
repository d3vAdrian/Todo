import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import ChevronRightOutlined from '@mui/icons-material/ChevronRightOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined';
import AlarmOnOutlinedIcon from '@mui/icons-material/AlarmOnOutlined';

import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";

export default function Home() {

    const items =[
        {
            text: "Home ~",
            icon: null,
        },
        {
            text: "index",
            icon: <AllInboxOutlinedIcon/>,
          },
          
          {
            text: "Today",
            icon: <CalendarTodayOutlinedIcon />,
          },
          {
            text: "Upcoming",
            icon: <CalendarMonthOutlinedIcon />,
          },
          {
            text: "Filter & Labels",
            icon: <BlurOnOutlinedIcon />,
          },
          {
            text: "Projects ~",
            icon: null,
        },
        {
            text: "School",
            icon: <SchoolOutlinedIcon />,
        },
        {
            text: "Level up",
            icon: <ShowChartOutlinedIcon />,
        },
          {
            text: "More form us ~",
            icon: null,
        },
        {
            text: "Reminder",
            icon: <AlarmOnOutlinedIcon />,
        },
        {
            text: "Backup",
            icon: <CloudSyncOutlinedIcon />,
        },
    ]

    return (
      <>

      <div className="flex flex-col bg-slate-50 h-[65vh]">
      <List>
              {items.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 1rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding sx={{ m: "0 0 0 -2rem" }}>
                    <ListItemButton >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                        }} >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                        <ChevronRightOutlined sx={{ ml: "auto" }} />                    
                    </ListItemButton>
                  </ListItem>
                );
              })}
      </List>
      </div>
      </>
    )
  }