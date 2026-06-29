import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';

const navItems = [
  { label: 'Dashboard', icon: DashboardIcon },
  { label: 'People', icon: PeopleIcon, active: true },
  { label: 'Statistic', icon: BarChartIcon },
  { label: 'Schedule', icon: CalendarTodayIcon },
  { label: 'Company', icon: BusinessIcon },
  { label: 'Settings', icon: SettingsIcon },
];

function LeftSidebar() {
  return (
    <Box sx={{
      width: 180,
      flexShrink: 0,
      backgroundColor: '#FFFFFF',
      borderRight: '1px solid #D0EFF8',
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      p: '20px',
    }}>
      {/* 로고 */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{
          fontSize: 20,
          fontWeight: 700,
          color: '#1D3557',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.3px',
        }}>
          Aqua
          <Box component='span' sx={{ color: '#FF5C8F' }}>HQ</Box>
        </Typography>
      </Box>

      {/* 네비게이션 */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Box
              key={item.label}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                px: 2,
                height: 40,
                borderRadius: '8px',
                backgroundColor: item.active ? '#EEF7FC' : 'transparent',
                cursor: 'pointer',
                color: item.active ? '#1D3557' : '#5A7A9A',
                transition: 'background-color 0.2s ease',
                '&:hover': {
                  backgroundColor: item.active ? '#EEF7FC' : '#F4F9FB',
                },
              }}
            >
              <Icon sx={{ fontSize: 16 }} />
              <Typography sx={{
                fontSize: 14,
                fontWeight: item.active ? 600 : 500,
                color: 'inherit',
              }}>
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default LeftSidebar;
