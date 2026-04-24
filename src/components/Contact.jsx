import { Box, Container, Typography, Button, IconButton, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 12, md: 18 },
        background: 'linear-gradient(180deg, #221050 0%, #281256 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        component={motion.div}
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
        sx={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #9B5DE5 0%, #4776E6 50%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.2rem', md: '3rem' },
              fontWeight: 800,
              mb: 2,
              background: 'linear-gradient(135deg, #F0EAFB 0%, #C77DFF 50%, #6FA3EF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('contact.title')}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', mb: 5, fontSize: '1.05rem', lineHeight: 1.7 }}
          >
            {t('contact.subtitle')}
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<EmailIcon />}
            href="mailto:marielsgtzz@gmail.com"
            sx={{
              background: 'linear-gradient(135deg, #9B5DE5 0%, #4776E6 100%)',
              px: 5,
              py: 1.8,
              fontSize: '1.05rem',
              boxShadow: '0 10px 40px rgba(155,93,229,0.4)',
              mb: 5,
              '&:hover': {
                boxShadow: '0 14px 50px rgba(155,93,229,0.6)',
                transform: 'translateY(-3px)',
              },
              transition: 'all 0.25s ease',
            }}
          >
            {t('contact.button')}
          </Button>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Paper
              elevation={0}
              component={motion.div}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1.5,
                borderRadius: 3,
                background: '#351868',
                border: '1px solid rgba(155,93,229,0.15)',
                cursor: 'pointer',
                '&:hover': { borderColor: 'rgba(155,93,229,0.4)' },
                transition: 'border-color 0.2s',
              }}
              onClick={() => window.open('https://www.linkedin.com/in/marielsgtzz/', '_blank')}
            >
              <LinkedInIcon sx={{ color: '#0077B5', fontSize: '1.3rem' }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>LinkedIn</Typography>
            </Paper>

            <Paper
              elevation={0}
              component={motion.div}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1.5,
                borderRadius: 3,
                background: '#351868',
                border: '1px solid rgba(155,93,229,0.15)',
                cursor: 'pointer',
                '&:hover': { borderColor: 'rgba(155,93,229,0.4)' },
                transition: 'border-color 0.2s',
              }}
              onClick={() => window.open('https://github.com/marielsgtzz', '_blank')}
            >
              <GitHubIcon sx={{ fontSize: '1.3rem' }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>GitHub</Typography>
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
