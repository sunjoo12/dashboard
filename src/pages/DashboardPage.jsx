import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ImageUploader from '../components/ui/ImageUploader';
import ImageGallery from '../components/ui/ImageGallery';

function DashboardPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleUploadComplete = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: '#0f0f23', py: { xs: 3, md: 5 } }}>
      <Container maxWidth='xl'>
        <Typography
          variant='h5'
          sx={{ color: '#e2e8f0', fontWeight: 700, mb: 1 }}
        >
          이미지 갤러리
        </Typography>
        <Typography variant='body2' sx={{ color: '#64748b', mb: 3 }}>
          이미지를 업로드하고 갤러리에서 확인하거나 다운로드하세요. 업로드된 파일은 모든 사용자가 접근할 수 있습니다.
        </Typography>

        <ImageUploader onUploadComplete={handleUploadComplete} />

        <Divider sx={{ borderColor: '#2e2e4a', mb: 3 }} />

        <ImageGallery refreshKey={refreshKey} />
      </Container>
    </Box>
  );
}

export default DashboardPage;
