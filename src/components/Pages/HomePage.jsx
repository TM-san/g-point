import { Box } from "@mui/material";
import { Tab } from "@mui/material";
import { Grid } from "@mui/material";
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

const ClubsData={"1":["RCC","カジノ","きのこ"],"2":["物理部","かがくもん"],"3":["コーヒー","チュロス"],"4":["軽音","ブラバン"]}

const ClubTable=(props)=>{
    
    return(
        <Box sx={{width:"100%"}}>
            <Grid container rowSpacing={3} columnSpacing={3}>
                {props.ClubData.map((value)=>{
                    return (
                        <Grid item xs={100}>
                            <Item>{value}</Item>
                        </Grid>
                    )
                })}
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
          <Box overflow={"hidden"} sx={{ borderBottom: 2, borderColor: 'divider' ,width:374.5,margin:"auto"}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" >
              <Tab label="娯楽" value="1" />
              <Tab label="展示" value="2" />
              <Tab label="食版" value="3" />
              <Tab label="バンド" value="4" />
            </TabList>
          </Box>
          <Box overflow={"scroll"} sx={{position:"fixed",top:130,bottom:40,width:"100%"}}>
            <TabPanel value="1"><ClubTable ClubData={ClubsData["1"]} /></TabPanel>
            <TabPanel value="2"><ClubTable ClubData={ClubsData["2"]} /></TabPanel>
            <TabPanel value="3"><ClubTable ClubData={ClubsData["3"]} /></TabPanel>
            <TabPanel value="4"><ClubTable ClubData={ClubsData["4"]} /></TabPanel>
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