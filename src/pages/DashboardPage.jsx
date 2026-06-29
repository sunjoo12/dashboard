import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import MemberCard from '../components/ui/MemberCard';
import LeftSidebar from '../components/common/LeftSidebar';
import RightSidebar from '../components/common/RightSidebar';

const members = [
  { id: 1, name: 'Ji Soo Kim', role: 'Senior UI/UX', projects: 22, done: 18, progress: 3, productivity: 82 },
  { id: 2, name: 'Min Jun Lee', role: 'Junior Graphic', projects: 15, done: 10, progress: 4, productivity: 67 },
  { id: 3, name: 'Soo Yeon Park', role: 'Middle Motion', projects: 19, done: 14, progress: 2, productivity: 74 },
  { id: 4, name: 'Tae Yang Choi', role: 'Senior Brand', projects: 25, done: 22, progress: 1, productivity: 88 },
  { id: 5, name: 'Ye Jin Yoon', role: 'Junior UX', projects: 12, done: 7, progress: 3, productivity: 58 },
  { id: 6, name: 'Ha Eun Song', role: 'Middle UI', projects: 17, done: 13, progress: 2, productivity: 76 },
];

function DashboardPage() {
  const [search, setSearch] = useState('');
  const [grade, setGrade] = useState('All');

  const filtered = members.filter((m) => {
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.role.toLowerCase().includes(search.toLowerCase());
    const matchGrade = grade === 'All' || m.role.toLowerCase().includes(grade.toLowerCase());
    return matchSearch && matchGrade;
  });

  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #C8ECF8 0%, #A8D8EE 50%, #6BBFD6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: { xs: 2, md: 4 },
    }}>
      {/* 대시보드 컨테이너 */}
      <Box sx={{
        width: '100%',
        maxWidth: 1200,
        minHeight: { xs: 'auto', md: '90vh' },
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        boxShadow: '0 8px 40px rgba(100, 116, 255, 0.12)',
        display: 'flex',
        overflow: 'hidden',
      }}>
        {/* 왼쪽 사이드바 */}
        <LeftSidebar />

        {/* 메인 콘텐츠 */}
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          p: '24px',
          overflowY: 'auto',
          minWidth: 0,
        }}>
          {/* 브레드크럼 */}
          <Typography sx={{ fontSize: 14, color: '#5A7A9A', mb: 0.5, lineHeight: 1.6 }}>
            People →{' '}
            <Box component='span' sx={{ color: '#1D3557' }}>Design Team</Box>
          </Typography>

          {/* 페이지 타이틀 + 팀원 수 */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
          }}>
            <Typography sx={{
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              fontWeight: 700,
              color: '#1D3557',
              letterSpacing: '-0.3px',
              lineHeight: 1.2,
            }}>
              Design Team
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AvatarGroup max={4} sx={{
                '& .MuiAvatar-root': {
                  width: 28,
                  height: 28,
                  fontSize: 11,
                  border: '2px solid #FFFFFF',
                  backgroundColor: '#A8D8EE',
                  color: '#1D3557',
                  fontWeight: 700,
                },
              }}>
                {members.map((m) => (
                  <Avatar key={m.id}>{m.name.charAt(0)}</Avatar>
                ))}
              </AvatarGroup>
              <Typography sx={{ fontSize: 14, color: '#5A7A9A' }}>
                {members.length}
              </Typography>
            </Box>
          </Box>

          {/* 검색바 + 필터 */}
          <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
            <Box sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              backgroundColor: '#F4F9FB',
              borderRadius: '20px',
              px: 2,
              height: 40,
              boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
            }}>
              <SearchIcon sx={{ fontSize: 18, color: '#5A7A9A' }} />
              <InputBase
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ fontSize: 14, color: '#1D3557', flex: 1 }}
              />
            </Box>
            <Select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              displayEmpty
              size='small'
              sx={{
                backgroundColor: '#F4F9FB',
                borderRadius: '8px',
                height: 40,
                fontSize: 14,
                color: '#1D3557',
                '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
              }}
            >
              <MenuItem value='All'>Grade</MenuItem>
              <MenuItem value='Senior'>Senior</MenuItem>
              <MenuItem value='Middle'>Middle</MenuItem>
              <MenuItem value='Junior'>Junior</MenuItem>
            </Select>
            <IconButton sx={{
              border: '1px solid #D0EFF8',
              borderRadius: '8px',
              width: 40,
              height: 40,
              backgroundColor: '#F4F9FB',
            }}>
              <GridViewIcon sx={{ fontSize: 18, color: '#5A7A9A' }} />
            </IconButton>
          </Box>

          {/* 멤버 카드 그리드 */}
          {filtered.length > 0 ? (
            <Grid container spacing={2}>
              {filtered.map((member) => (
                <Grid key={member.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                  <MemberCard {...member} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Typography sx={{ fontSize: 14, color: '#5A7A9A' }}>
                검색 결과가 없습니다.
              </Typography>
            </Box>
          )}
        </Box>

        {/* 오른쪽 사이드바 */}
        <RightSidebar />
      </Box>
    </Box>
  );
}

export default DashboardPage;
