import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import Box from '@mui/material/Box';

function Header() {
  return (
    <AppBar position='static' elevation={0} sx={{ backgroundColor: '#1a1a2e' }}>
      <Toolbar>
        <PhotoLibraryIcon sx={{ mr: 1.5, color: '#a78bfa' }} />
        <Typography variant='h6' sx={{ fontWeight: 700, color: '#fff', letterSpacing: 1 }}>
          Image Gallery Dashboard
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant='body2' sx={{ color: '#a78bfa', opacity: 0.8 }}>
          Powered by Supabase
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
