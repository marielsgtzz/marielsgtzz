import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SchoolIcon from '@mui/icons-material/School';
import FlightIcon from '@mui/icons-material/Flight';
import ScienceIcon from '@mui/icons-material/Science';

export default function Education() {
  const { t } = useTranslation();

  return (
    // id="education" para que la navbar pueda hacer scroll aquí
    <Box
      id="education"
      component="section"
      aria-label="Educación"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(180deg, #281256 0%, #221050 100%)',
      }}
    >
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
            {t('education.title')}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 6, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            {t('education.title')}
          </Typography>

          <Paper
            elevation={0}
            component={motion.div}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              background: '#351868',
              border: '1px solid rgba(155,93,229,0.18)',
              display: 'flex',
              gap: 3,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              maxWidth: 700,
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
                flexShrink: 0,
              }}
            >
              {/* loading="lazy" porque esta imagen está below the fold */}
              <Box
                component="img"
                src="/images/logo-ITAM.png"
                alt="ITAM"
                loading="lazy"
                sx={{ width: 48, height: 48, objectFit: 'contain' }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                {t('education.degree')}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  background: 'linear-gradient(135deg, #9B5DE5, #7B93F5)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {t('education.institution')}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                <Chip label={t('education.period')} size="small" sx={{ background: 'rgba(155,93,229,0.12)', color: 'primary.light', fontWeight: 600 }} />
                <Chip label={t('education.location')} size="small" sx={{ background: 'rgba(123,147,245,0.1)', color: 'secondary.light', fontWeight: 600 }} />
              </Box>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <FlightIcon sx={{ fontSize: '0.9rem', color: 'primary.light' }} />
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>AEF</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <SchoolIcon sx={{ fontSize: '0.9rem', color: 'primary.light' }} />
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{t('education.minor')}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ScienceIcon sx={{ fontSize: '0.9rem', color: 'primary.light' }} />
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{t('education.tera')}</Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
