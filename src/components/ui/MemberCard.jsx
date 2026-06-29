import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';

const AVATAR_COLORS = ['#A8D8EE', '#6BBFD6', '#FFB3CC', '#B3E8E5', '#C8ECF8', '#2C4A7C'];

function getProductivityColor(value) {
  if (value >= 80) return '#3DB8B2';
  if (value >= 60) return '#F59E0B';
  return '#FF5C8F';
}

function getAvatarColor(name) {
  return AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
}

/**
 * MemberCard 컴포넌트
 *
 * Props:
 * @param {string} name - 멤버 이름 [Required]
 * @param {string} role - 직책 [Required]
 * @param {number} projects - 총 프로젝트 수 [Required]
 * @param {number} done - 완료 프로젝트 수 [Required]
 * @param {number} progress - 진행 중 프로젝트 수 [Required]
 * @param {number} productivity - 생산성 퍼센트 (0~100) [Required]
 *
 * Example usage:
 * <MemberCard name='Ji Soo Kim' role='Senior UI/UX' projects={22} done={18} progress={3} productivity={82} />
 */
function MemberCard({ name, role, projects, done, progress, productivity }) {
  const prodColor = getProductivityColor(productivity);
  const avatarBg = getAvatarColor(name);

  return (
    <Box sx={{
      backgroundColor: '#FFFFFF',
      borderRadius: '12px',
      p: '20px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 20px rgba(168, 216, 238, 0.35)',
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1.5,
    }}>
      {/* 아바타 */}
      <Avatar sx={{
        width: 64,
        height: 64,
        backgroundColor: avatarBg,
        color: '#1D3557',
        fontSize: 20,
        fontWeight: 700,
      }}>
        {name.charAt(0)}
      </Avatar>

      {/* 이름 & 직책 */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 16, fontWeight: 600, color: '#1D3557', lineHeight: 1.4 }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: 13, color: '#5A7A9A', lineHeight: 1.6 }}>
          {role}
        </Typography>
      </Box>

      {/* 통계 */}
      <Box sx={{
        display: 'flex',
        gap: 2,
        width: '100%',
        justifyContent: 'space-around',
        borderTop: '1px solid #EEF7FC',
        borderBottom: '1px solid #EEF7FC',
        py: 1.5,
      }}>
        {[
          { label: 'Projects', value: projects },
          { label: 'Done', value: done },
          { label: 'Progress', value: progress },
        ].map((stat) => (
          <Box key={stat.label} sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontSize: 16, fontWeight: 700, color: '#1D3557', lineHeight: 1.2 }}>
              {stat.value}
            </Typography>
            <Typography sx={{ fontSize: 11, color: '#5A7A9A', letterSpacing: '0.5px', lineHeight: 1.6 }}>
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Productivity */}
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
          <Typography sx={{ fontSize: 12, color: '#5A7A9A' }}>Productivity</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 600, color: prodColor }}>
            {productivity}%
          </Typography>
        </Box>
        <LinearProgress
          variant='determinate'
          value={productivity}
          sx={{
            height: 4,
            borderRadius: 2,
            backgroundColor: '#EEF7FC',
            '& .MuiLinearProgress-bar': {
              backgroundColor: prodColor,
              borderRadius: 2,
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default MemberCard;
