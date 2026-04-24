import { Box, Container, Typography, Paper, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SchoolIcon from '@mui/icons-material/School';

export default function Thesis() {
  const { t } = useTranslation();

  return (
    <Box
      id="thesis"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #281256 0%, #221050 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Círculo decorativo giratorio de fondo — muy sutil (opacity 0.06).
          willChange: 'transform' le indica al navegador que lo mueva
          al compositor GPU para que no bloquee el hilo principal */}
      <Box
        component={motion.div}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        sx={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          border: '1px solid rgba(155,93,229,0.06)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3, fontSize: '0.8rem' }}
          >
            {t('thesis.subtitle')}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 8, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            {t('thesis.title')}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, rgba(155,93,229,0.1) 0%, rgba(71,118,230,0.06) 100%)',
              border: '1px solid rgba(155,93,229,0.25)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -40,
                right: -40,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(155,93,229,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'flex-start' } }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #9B5DE5, #4776E6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '2.5rem',
                }}
              >
                🥽
              </Box>

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip
                    icon={<AutoAwesomeIcon sx={{ fontSize: '0.8rem' }} />}
                    label="Mixed Reality"
                    size="small"
                    sx={{ background: 'rgba(155,93,229,0.15)', color: '#C77DFF', fontWeight: 600 }}
                  />
                  <Chip
                    icon={<SchoolIcon sx={{ fontSize: '0.8rem' }} />}
                    label="ITAM, 2025"
                    size="small"
                    sx={{ background: 'rgba(71,118,230,0.12)', color: '#6FA3EF', fontWeight: 600 }}
                  />
                </Box>

                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 2.5, lineHeight: 1.4, fontSize: { xs: '1.1rem', md: '1.3rem' } }}
                >
                  {t('thesis.full_title')}
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                  {t('thesis.description')}
                </Typography>

                <Button
                  variant="contained"
                  startIcon={<PictureAsPdfIcon />}
                  href="/thesis.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: 'linear-gradient(135deg, #9B5DE5 0%, #7B93F5 100%)',
                    px: 3,
                    py: 1.2,
                    boxShadow: '0 6px 20px rgba(124,58,237,0.3)',
                    '&:hover': {
                      boxShadow: '0 8px 28px rgba(124,58,237,0.5)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {t('thesis.read')}
                </Button>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
