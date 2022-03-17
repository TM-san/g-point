import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MessageIcon from '@mui/icons-material/Message';
import { Link } from "react-router-dom"; 

const Footer =()=>{
    const [value, setValue] = React.useState(0);
    
    return (
        <Box sx={{
            position:'fixed',
            bottom:0,
            width: "100%",
        }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="ホーム" icon={<HomeIcon />} component={Link} to='/'/>
                <BottomNavigationAction label="校内マップ" icon={<MapIcon />} component={Link} to='/map'/>
                <BottomNavigationAction label="スケジュール" icon={<DateRangeIcon />} />
                <BottomNavigationAction label="お知らせ" icon={<MessageIcon />} />
            </BottomNavigation>
        </Box>
        
    );
}

export default Footer
