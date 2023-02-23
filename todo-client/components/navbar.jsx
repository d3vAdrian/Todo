import Image from 'next/image'
import Logo from '../img/Alogo.png'
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '27ch',
      },
    },
  },
}));


export default function Navbar() {
    return (
      <>
        <div className="navbar   bg-slate-100 flex items-center flex-col">
          <div className="flex items-center w-4/5 justify-between" >
            <div className="left">
              <Image src={Logo} className='w-20 h-20 object-contain'/>
            </div>
            <div className="right">
              <div className="user flex gap-3 border-2 p-2 rounded-lg border-gray-300 ">
                <div className="profile">
                <Image src={Logo} className='w-12 h-12 object-contain rounded-full border-4 border-gray-500'/>
                </div>
                <div className="user-info">
                  <div className="username">Test</div>
                  <div className="email">Kathyadrian02@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-b-4 w-11/12"></div>

          <div className="flex items-center w-4/5 justify-between py-3" >
            <div className="left flex gap-4 items-center pl-3">
                <MenuOpenOutlinedIcon/>
                <CottageOutlinedIcon/>
                <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                 </Search>
            </div>
            <div className="right flex gap-4 items-center">   
                <AddOutlinedIcon/>
                <CheckCircleOutlinedIcon/>
                <HelpOutlineOutlinedIcon/>
                <NotificationAddOutlinedIcon/>
            </div>
          </div>
        </div>
      </>
    )
  }