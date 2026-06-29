import { useEffect, useState, useCallback } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import CollectionsIcon from '@mui/icons-material/Collections';
import ImageCard from './ImageCard';
import { supabase } from '../../lib/supabase';

/**
 * ImageGallery 컴포넌트
 *
 * Props:
 * @param {number} refreshKey - 부모에서 증가시켜 갤러리 강제 갱신 [Required]
 */
function ImageGallery({ refreshKey }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase.storage.from('images').list('', {
      sortBy: { column: 'created_at', order: 'desc' },
    });

    if (!error && data) {
      const withUrls = data
        .filter((file) => file.name !== '.emptyFolderPlaceholder')
        .map((file) => {
          const { data: urlData } = supabase.storage
            .from('images')
            .getPublicUrl(file.name);
          return { name: file.name, url: urlData.publicUrl };
        });
      setImages(withUrls);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages, refreshKey]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress sx={{ color: '#a78bfa' }} />
      </Box>
    );
  }

  if (images.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 10 }}>
        <CollectionsIcon sx={{ fontSize: 64, color: '#4a4a6a', mb: 2 }} />
        <Typography variant='h6' sx={{ color: '#64748b' }}>
          아직 업로드된 이미지가 없습니다
        </Typography>
        <Typography variant='body2' sx={{ color: '#475569', mt: 0.5 }}>
          위 업로더를 통해 이미지를 추가해보세요
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant='body2' sx={{ color: '#64748b', mb: 2 }}>
        총 {images.length}개의 이미지
      </Typography>
      <Grid container spacing={2}>
        {images.map((img) => (
          <Grid key={img.name} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <ImageCard name={img.name} url={img.url} onDelete={fetchImages} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ImageGallery;
