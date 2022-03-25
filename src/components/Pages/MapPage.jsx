import React from 'react'
import { Global } from '@emotion/react'
import { Box, SwipeableDrawer, Typography } from '@mui/material'
import { ReactComponent as Map } from './map.svg'
import { grey } from '@mui/material/colors'

const drawerBleeding = 130;
const ClubsData={"1":["RCC","カジノ","きのこ"],"2":["物理部","かがくもん"],"3":["コーヒー","チュロス"],"4":["軽音","ブラバン"]}


class MapPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.ClubData=props.ClubData;
        this.svg = React.createRef();
        this.setclick = () => {
            if (this.svg) {
                this.svg.current.querySelectorAll('g.prefecture').forEach(element => {
                    element.onclick = () => {
                        this.place = element;
                        this.setState({ open: true });
                    };
                }
                );
            }
        }
        this.place = null;
    }
    componentDidMount() {
        this.setclick();
    }
    render() {
        const toggleDrawer = (newOpen) => {
            this.setState({ open: newOpen });
        };

        return (
            <Box sx={{ position: 'fixed', width: '100%', height: '100%' }}>
                <style>
                    {`g.prefecture:hover {
                        fill:#ff0000;
                    }`}
                </style>
                <Global
                    styles={{
                        '.MuiDrawer-root > .MuiPaper-root': {
                            height: `calc(50% - ${drawerBleeding}px)`,
                            overflow: 'visible',
                        },
                    }}
                />
                <Box sx={{ width:'100%',height:'calc(100% - 210px)', overflow: 'scroll' }}>
                    <Map ref={this.svg} />
                </Box>
                <SwipeableDrawer
                    open={this.state.open}
                    anchor='bottom'
                    onOpen={() => toggleDrawer(true)}
                    onClose={() => toggleDrawer(false)}
                    disableSwipeToOpen={false}
                    swipeAreaWidth={drawerBleeding}
                    variant='temporary'
                    ModalProps={{ keepMounted: true, disableAutoFocus: true }}
                    BackdropProps={{ invisible: true }}>
                    <Box sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                        height: drawerBleeding,
                        backgroundColor: '#fff',
                    }}>
                        <Box sx={{
                            width: 30,
                            height: 6,
                            backgroundColor: grey[300],
                            borderRadius: 3,
                            position: 'absolute',
                            top: 8,
                            left: 'calc(50% - 15px)',
                        }} />
                        <Box sx={{position:'relative',width:'100%',paddingTop:2}}>
                            <Typography variant='h3'>{ClubsData['1'][0]}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ position:'relative',top:-56,height: '100%', overflowY: 'scroll' }}>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                        <Typography>G-Pointの開発</Typography>
                    </Box>
                </SwipeableDrawer>
            </Box>
        )
    }
}

export default MapPage