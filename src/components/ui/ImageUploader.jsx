import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { supabase } from '../../lib/supabase';

/**
 * ImageUploader 컴포넌트
 *
 * Props:
 * @param {function} onUploadComplete - 업로드 완료 후 갤러리 갱신 콜백 [Required]
 */
function ImageUploader({ onUploadComplete }) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef(null);

  const uploadFile = async (file) => {
    if (!file.type.startsWith('image/')) {
      setError('이미지 파일만 업로드할 수 있습니다.');
      return;
    }

    setUploading(true);
    setError('');
    setSuccess('');

    const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(fileName, file, { upsert: false });

    if (uploadError) {
      setError(`업로드 실패: ${uploadError.message}`);
    } else {
      setSuccess(`"${file.name}" 업로드 완료!`);
      onUploadComplete();
    }

    setUploading(false);
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleFiles = (files) => {
    if (files.length === 0) return;
    Array.from(files).forEach(uploadFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  return (
    <Box sx={{ mb: 4 }}>
      <Box
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
        sx={{
          border: '2px dashed',
          borderColor: isDragging ? '#a78bfa' : '#4a4a6a',
          borderRadius: 3,
          py: { xs: 4, md: 6 },
          px: 3,
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: isDragging ? 'rgba(167,139,250,0.08)' : 'rgba(255,255,255,0.03)',
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: '#a78bfa',
            backgroundColor: 'rgba(167,139,250,0.06)',
          },
        }}
      >
        <CloudUploadIcon sx={{ fontSize: { xs: 40, md: 56 }, color: '#a78bfa', mb: 1 }} />
        <Typography variant='h6' sx={{ color: '#e2e8f0', mb: 0.5 }}>
          이미지를 드래그하거나 클릭하여 업로드
        </Typography>
        <Typography variant='body2' sx={{ color: '#94a3b8' }}>
          JPG, PNG, GIF, WEBP, SVG — 최대 10MB
        </Typography>
      </Box>

      <input
        ref={fileInputRef}
        type='file'
        accept='image/*'
        multiple
        style={{ display: 'none' }}
        onChange={(e) => handleFiles(e.target.files)}
      />

      {uploading && <LinearProgress sx={{ mt: 2, borderRadius: 1 }} />}
      {error && <Alert severity='error' sx={{ mt: 2 }}>{error}</Alert>}
      {success && <Alert severity='success' sx={{ mt: 2 }}>{success}</Alert>}

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='contained'
          startIcon={<CloudUploadIcon />}
          onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
          disabled={uploading}
          sx={{
            backgroundColor: '#7c3aed',
            '&:hover': { backgroundColor: '#6d28d9' },
            borderRadius: 2,
            px: 4,
          }}
        >
          파일 선택
        </Button>
      </Box>
    </Box>
  );
}

export default ImageUploader;
