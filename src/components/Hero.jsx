import { Box, Typography, Button, Container, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Animación de flotación para la foto de perfil
// Sube y baja suavemente en bucle infinito
const floatAnim = {
  animate: {
    y: [0, -18, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

// Blob decorativo: círculo difuminado en el fondo para dar profundidad
// Se anima sutilmente en escala y opacidad
const Blob = ({ sx }) => (
  <Box
    component={motion.div}
    // Animación suave de escala y opacidad en bucle; 7s para que no sea distractora
    animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    sx={{
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(90px)',
      pointerEvents: 'none', // No interfiere con clics del usuario
      willChange: 'transform, opacity', // Hint al navegador para optimizar compositing
      ...sx,
    }}
  />
);

export default function Hero() {
  const { t } = useTranslation();

  // Scroll suave a la sección de contacto al hacer clic en "Hablemos"
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll suave a "Sobre mí" al hacer clic en la flecha inferior
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="hero"
      component="section"
      aria-label="Presentación"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #221050 0%, #1E0F45 50%, #221050 100%)',
      }}
    >
      {/* Blobs decorativos de fondo — no contienen contenido semántico */}
      <Blob sx={{ width: 500, height: 500, top: '-10%', left: '-10%', background: '#5B21B6' }} />
      <Blob sx={{ width: 400, height: 400, bottom: '5%', right: '-5%', background: '#4C1D95' }} />
      <Blob sx={{ width: 300, height: 300, top: '50%', left: '40%', background: '#7C3AED' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Layout: texto a la izquierda, foto a la derecha (columna inversa en móvil) */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, alignItems: 'center', gap: { xs: 6, md: 10 }, pt: 10 }}>

          {/* ── Bloque de texto ────────────────────────────────── */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Chip decorativo de rol */}
              <Chip
                label="Software Engineer"
                sx={{
                  mb: 3,
                  background: 'rgba(155,93,229,0.18)',
                  border: '1px solid rgba(155,93,229,0.45)',
                  color: '#C77DFF',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                }}
              />

              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1, fontSize: '1.1rem' }}>
                {t('hero.greeting')}
              </Typography>

              {/* Nombre con gradiente morado */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.5rem' },
                  background: 'linear-gradient(135deg, #EDE8F5 0%, #C77DFF 55%, #A5B4FC 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1,
                  lineHeight: 1.1,
                }}
              >
                Mariel Sofía
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.5rem' },
                  color: 'text.primary',
                  mb: 3,
                  lineHeight: 1.1,
                }}
              >
                Gutiérrez Zapién
              </Typography>

              <Typography
                variant="h5"
                sx={{ color: 'text.secondary', mb: 5, maxWidth: 520, fontWeight: 400, lineHeight: 1.6, fontSize: { xs: '1rem', md: '1.15rem' } }}
              >
                {t('hero.subtitle')}
              </Typography>

              {/* Botones de CTA: scroll a contacto + LinkedIn externo */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<EmailIcon />}
                  onClick={scrollToContact}
                  sx={{
                    background: 'linear-gradient(135deg, #9B5DE5 0%, #7B93F5 100%)',
                    px: 4,
                    py: 1.5,
                    boxShadow: '0 6px 24px rgba(124,58,237,0.35)',
                    '&:hover': {
                      boxShadow: '0 8px 32px rgba(124,58,237,0.5)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {t('hero.contact')}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/marielsgtzz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: 'rgba(155,93,229,0.5)',
                    color: 'text.primary',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      borderColor: '#9B5DE5',
                      background: 'rgba(155,93,229,0.08)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  LinkedIn
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* ── Foto de perfil flotante ─────────────────────────── */}
          <Box sx={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
            <motion.div {...floatAnim}>
              <Box
                sx={{
                  width: { xs: 260, sm: 300, md: 360 },
                  height: { xs: 260, sm: 300, md: 360 },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid rgba(155,93,229,0.35)',
                  boxShadow: '0 0 50px rgba(124,58,237,0.25), 0 0 100px rgba(107,70,193,0.15)',
                  position: 'relative',
                }}
              >
                {/*
                  fetchpriority="high": le indica al navegador que precargue esta
                  imagen con prioridad alta (Largest Contentful Paint element).
                  No usar loading="lazy" aquí porque está above the fold.
                */}
                <Box
                  component="img"
                  src="/images/sonriendoPerfil.JPG"
                  alt="Mariel Sofía Gutiérrez Zapién"
                  fetchpriority="high"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </Box>
            </motion.div>
          </Box>
        </Box>

        {/* Flecha animada — invita a hacer scroll */}
        <Box
          component={motion.div}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 8, md: 10 }, cursor: 'pointer' }}
          onClick={scrollToAbout}
          aria-label="Scroll hacia abajo"
        >
          <KeyboardArrowDownIcon sx={{ color: 'text.secondary', fontSize: '2rem', opacity: 0.6 }} />
        </Box>
      </Container>
    </Box>
  );
}
