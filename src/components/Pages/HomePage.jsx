import { Box } from "@mui/material";
import { Tab } from "@mui/material";
import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from "react"
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ClubData={
    "1":["カジノ","迷路"],"2":["物理部","カト研"],"3":["タピオカ","うどん"],"4":["ブラス","軽音"]
};

const ClubTable=()=>{
    return(
        <Box sx={{width:"100%",}}>
            <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item xs={100}>
                    <Item>1</Item>
                </Grid>
                <Grid item xs={100}>
                    <Item>2</Item>
                </Grid>
                <Grid item xs={100}>
                    <Item>3</Item>
                </Grid>
                <Grid item xs={100}>
                    <Item>4</Item>
                </Grid>
            </Grid>
        </Box>
    );
}

function LabTabs() {
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%'}}>
        <TabContext value={value}>
          <Box  overflow={"hidden"} sx={{ borderBottom: 2, borderColor: 'divider' ,width:374.5,margin:"auto",}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" >
              <Tab label="娯楽" value="1" />
              <Tab label="展示・発表" value="2" />
              <Tab label="食版" value="3" />
              <Tab label="バンド" value="4" />
            </TabList>
          </Box>
          <Box overflow={"scroll"} sx={{position:"fixed",top:130,bottom:40,width:"100%"}}>
            <TabPanel value="1"><ClubTable></ClubTable></TabPanel>
            <TabPanel value="2">展示・発表</TabPanel>
            <TabPanel value="3">食版</TabPanel>
            <TabPanel value="4">バンド</TabPanel>
          </Box>
          </TabContext>
      </Box>
    );
}

const HomePage = () =>{
    return (
        <Box>
            <LabTabs></LabTabs>
        </Box>
    );
}

export default HomePage