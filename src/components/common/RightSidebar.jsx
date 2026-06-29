import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DonutChart from '../ui/DonutChart';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  { id: 1, name: 'AquaFlow App', subtitle: 'Mobile Design', color: '#A8D8EE', emoji: '💧' },
  { id: 2, name: 'Pure Drop', subtitle: 'Brand Identity', color: '#FFB3CC', emoji: '🌸' },
  { id: 3, name: 'Sky Clear', subtitle: 'Campaign 2024', color: '#B3E8E5', emoji: '🌿' },
];

function RightSidebar() {
  return (
    <Box sx={{
      width: 240,
      flexShrink: 0,
      backgroundColor: '#F8FCFE',
      borderLeft: '1px solid #D0EFF8',
      display: { xs: 'none', lg: 'flex' },
      flexDirection: 'column',
      p: '20px',
      gap: 3,
      overflowY: 'auto',
    }}>
      {/* 유저 프로필 헤더 */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Avatar sx={{
          width: 40,
          height: 40,
          backgroundColor: '#6BBFD6',
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: 16,
        }}>
          V
        </Avatar>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#1D3557' }}>
            Veya Sung
          </Typography>
          <Typography sx={{ fontSize: 12, color: '#5A7A9A' }}>
            Art Director
          </Typography>
        </Box>
        <IconButton size='small'>
          <MoreHorizIcon sx={{ fontSize: 18, color: '#5A7A9A' }} />
        </IconButton>
      </Box>

      {/* 도넛 차트 통계 */}
      <Box>
        <Typography sx={{ fontSize: 18, fontWeight: 600, color: '#1D3557', mb: 2, lineHeight: 1.4 }}>
          My Statistic
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <DonutChart value={75} size={140} />
        </Box>
      </Box>

      {/* 프로젝트 목록 */}
      <Box sx={{ flex: 1 }}>
        <Typography sx={{ fontSize: 18, fontWeight: 600, color: '#1D3557', mb: 2, lineHeight: 1.4 }}>
          Projects
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Box>
      </Box>

      {/* View all 버튼 */}
      <Button
        variant='contained'
        fullWidth
        sx={{
          backgroundColor: '#FF5C8F',
          color: '#FFFFFF',
          borderRadius: '8px',
          height: 40,
          fontSize: 14,
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#E0437A',
            boxShadow: 'none',
          },
        }}
      >
        View all
      </Button>
    </Box>
  );
}

export default RightSidebar;
