import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * DonutChart 컴포넌트 — SVG 기반 도넛 차트
 *
 * Props:
 * @param {number} value - 표시할 퍼센트 값 (0~100) [Required]
 * @param {number} size - SVG 크기 px [Optional, 기본값: 140]
 *
 * Example usage:
 * <DonutChart value={75} size={140} />
 */
function DonutChart({ value = 75, size = 140 }) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const filled = (value / 100) * circumference;
  const center = size / 2;

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* 빈 트랙 */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill='none'
          stroke='#EEF7FC'
          strokeWidth='12'
        />
        {/* 채운 부분 — 아이시스 스카이 블루 */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill='none'
          stroke='#A8D8EE'
          strokeWidth='12'
          strokeDasharray={`${filled} ${circumference - filled}`}
          strokeLinecap='round'
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
      {/* 중앙 텍스트 */}
      <Box sx={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Typography sx={{ fontSize: 11, color: '#5A7A9A', lineHeight: 1.4 }}>
          Productivity
        </Typography>
        <Typography sx={{ fontSize: 24, fontWeight: 700, color: '#1D3557', lineHeight: 1.2, letterSpacing: '-0.3px' }}>
          {value}%
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 500, color: '#3DB8B2' }}>
          +20% ↑
        </Typography>
      </Box>
    </Box>
  );
}

export default DonutChart;
