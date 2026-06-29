import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * ProjectCard 컴포넌트 — 가로형 프로젝트 미리보기 카드
 *
 * Props:
 * @param {string} name - 프로젝트명 [Required]
 * @param {string} subtitle - 서브타이틀 [Required]
 * @param {string} color - 썸네일 배경 색상 [Required]
 * @param {string} emoji - 썸네일 이모지 [Optional, 기본값: '💧']
 *
 * Example usage:
 * <ProjectCard name='AquaFlow App' subtitle='Mobile Design' color='#A8D8EE' />
 */
function ProjectCard({ name, subtitle, color, emoji = '💧' }) {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1.5,
      p: 1.5,
      borderRadius: '8px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.05)',
      cursor: 'pointer',
      transition: 'box-shadow 0.2s ease',
      '&:hover': {
        boxShadow: '0 2px 12px rgba(168, 216, 238, 0.3)',
      },
    }}>
      <Box sx={{
        width: 70,
        height: 48,
        borderRadius: '6px',
        backgroundColor: color,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
      }}>
        {emoji}
      </Box>
      <Box>
        <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#1D3557' }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: 12, color: '#5A7A9A' }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProjectCard;
