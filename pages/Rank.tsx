import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '../components/AvatarTest'
import TagSelect from '../components/TagSelect'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  //?は、openがあってもなくてもいいよのオプションパラメータ
}

//styled(MuiAppBar,{})<型指定>(css)
//コロンは、２種類ある。ほとんどが、CSSのコロン
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  //<App...>は、styledの返す型を指定している。
})<AppBarProps>(({ theme, open }) => ({
  //zIndexは第三の軸を与える。つまりはlayerみたいなもんやろ。
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();


function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{ backgroundColor: "blue" }}>
          <Toolbar //sxで色を変えられた。このToolBarは横一直線
            sx={{
              pr: '24px', // keep right padding when drawer closed
              backgroundColor: "#7fffd4"
            }}
          >

            <IconButton //Toolbar の中に、IconButtonが２つ（Badgeとメニューバー）
              //とTypographyの文字もある。
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',

                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>


            <Typography
              //componentは指定すると便利らしい
              //variantは実際のフォントの大きさ的的な
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>


            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
          {/* というToolBarが入っている、AppBar */}
        </AppBar>

        {/*スライドバー*/}
        <Drawer variant="permanent" open={open}>
          <Toolbar // 縦に並んだToolBar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          {/*横幅めいっぱいの、ToolBarをおいている。それによって、安心 */}
          <Toolbar />
          {/*横幅制限しているらしい */}
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>

                あなたへのおすすめ
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    overflow: 'auto'
                  }}
                >
                  {/*お遊び */}

                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    <TagSelect name="Apex Legends" imageName='\images\apex-legends-s8-screenshot-50-16x9.jpg.adapt.crop16x9.818p.jpg' linkName='/'/>


                    <Link href="/">
                      Back to Home
                    </Link>
                  </Box>



                  {/*お遊び */}
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  お気に入り
                  <Avatar />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  MatchMaking


                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
                    <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                      <option aria-label="None" value="" />
                  
                        <option value={1}>Blonze </option>
                        <option value={2}>Silver </option>
                        <option value={3}>Gold </option>
                        <option value={4}>Platinum </option>
                        <option value={5}>Diamond </option>
                        <option value={6}>Master </option>
                        <option value={7}>Predetor </option>
       

                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="Grouping">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <ListSubheader>Category 1</ListSubheader>
                      <MenuItem value={1}>Option 1</MenuItem>
                      <MenuItem value={2}>Option 2</MenuItem>
                      <ListSubheader>Category 2</ListSubheader>
                      <MenuItem value={3}>Option 3</MenuItem>
                      <MenuItem value={4}>Option 4</MenuItem>
                    </Select>
                  </FormControl>
                  <>
                  
                  </>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>

      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}