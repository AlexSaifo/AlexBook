import React, { useEffect, useState } from 'react'
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material'
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral'
import MailIcon from '@mui/icons-material/Mail'
import SearchIcon from '@mui/icons-material/Search'
import { Logout, Notifications, PersonAdd, Settings } from '@mui/icons-material'
import myAvatar from '../../assest/Avatar.jpg'
import MenuIcon from '@mui/icons-material/Menu'
import SideBar from './SideBar'
import {useTheme} from '@emotion/react'



const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

// const Search = styled('div')(({ theme }) => ({
// backgroundColor: 'white',
// padding: '0 10px',
// borderRadius: theme.shape.borderRadius,
// width: '40%',
// }))

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1.3rem',
  alignItems: 'center',
}))

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [anchorElement, setAnchorElement] = useState(null)
  const [openSide , setOpenSide] = useState(false);
  
  const theme = useTheme()

  const openMenuHandler = (e) => {
    setAnchorElement(e.target)
    setOpen(true)
  }
  useEffect(()=>{
    
  },[theme.mode])

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '70%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '40%',
    },
  }))

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        '&:focus': {
          width: '100%',
        },
      },
    },
  }))

  const openSideBarHandler = ()=>{
    setOpenSide((perev)=>{
      return !perev
    })
  }  
  
  const sidBarStyle = {
    display:'none',
    [theme.breakpoints.down('md')]: {
    display:'flex',
    justifyContent:'center',
    position:'fixed',
    zIndex:'5',
    top:'7%',
    left:'0',
    width:'60%',
    backgroundColor:'background.default',
    color:'text.primary',
    height:'100vh',
    zIndex:'6'
  },
  [theme.breakpoints.down('sm')]: {
    top:'8%',  
}}
  
  return (
    
    <AppBar position="sticky" sx={{zIndex:'100'}}>
      <StyledToolbar >
        <Typography variant="h6" sx={{ display: { xs: 'none', md: 'block' } }}>
          Alexbook
        </Typography>
        
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          onClick={openSideBarHandler}
        >
          <MenuIcon />
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Icons>
          <Badge
            badgeContent={4}
            color="error"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <MailIcon sx={{ alignSelf: 'center' }} />
          </Badge>
          <Badge
            badgeContent={2}
            color="error"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <Notifications sx={{ alignSelf: 'center' }} />
          </Badge>
          <Avatar
            sx={{ width: '30px', height: 'auto' }}
            src={myAvatar}
            onClick={openMenuHandler}
          />
          <Menu
            open={open}
            onClose={(e) => setOpen(false)}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,

                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            anchorEl={anchorElement || ''}
          >
            <MenuItem>My Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Icons>
      </StyledToolbar>
      {
          openSide &&
          <SideBar setMode={theme.setMode}   sidBarStyle={sidBarStyle}/>
        }
    </AppBar>
  )
}
