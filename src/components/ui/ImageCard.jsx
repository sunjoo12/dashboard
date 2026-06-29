import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import { supabase } from '../../lib/supabase';

/**
 * ImageCard 컴포넌트
 *
 * Props:
 * @param {string} name - Supabase storage 파일명 [Required]
 * @param {string} url - 이미지 공개 URL [Required]
 * @param {function} onDelete - 삭제 후 갤러리 갱신 콜백 [Required]
 */
function ImageCard({ name, url, onDelete }) {
  const [deleting, setDeleting] = useState(false);

  const displayName = name.replace(/^\d+_/, '').replace(/_/g, ' ');

  const handleDownload = async () => {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = displayName;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const handleDelete = async () => {
    setDeleting(true);
    const { error } = await supabase.storage.from('images').remove([name]);
    if (!error) onDelete();
    setDeleting(false);
  };

  return (
    <Card
      sx={{
        backgroundColor: '#1e1e3a',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 32px rgba(167,139,250,0.2)',
        },
      }}
    >
      <Box sx={{ position: 'relative', paddingTop: '66%', backgroundColor: '#12122a' }}>
        <CardMedia
          component='img'
          image={url}
          alt={displayName}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <CardContent sx={{ py: 1, px: 2 }}>
        <Typography
          variant='body2'
          noWrap
          title={displayName}
          sx={{ color: '#cbd5e1', fontSize: '0.75rem' }}
        >
          {displayName}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 1, pt: 0, pb: 1, justifyContent: 'flex-end' }}>
        <Tooltip title='다운로드'>
          <IconButton size='small' onClick={handleDownload} sx={{ color: '#a78bfa' }}>
            <DownloadIcon fontSize='small' />
          </IconButton>
        </Tooltip>
        <Tooltip title='삭제'>
          <IconButton
            size='small'
            onClick={handleDelete}
            disabled={deleting}
            sx={{ color: '#f87171' }}
          >
            <DeleteIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default ImageCard;
