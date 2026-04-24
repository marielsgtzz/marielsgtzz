import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Variante de animación reutilizable: aparece desde abajo con fade
// El parámetro `i` sirve como delay escalonado para las tarjetas
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

// Tarjetas de intereses personales
// Cada una tiene una clave de traducción y un emoji decorativo
const funCards = [
  { key: 'golf',         emoji: '⛳' },
  { key: 'tech',         emoji: '🔬' },
  { key: 'thesis_teaser', emoji: '🥽' },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <Box
      id="about"
      component="section"
      aria-label="Sobre mí"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #2E1460 0%, #281256 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Encabezado de sección con animación al hacer scroll */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3, fontSize: '0.8rem' }}
          >
            {t('about.title')}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 6, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            {t('about.title')}
          </Typography>
        </motion.div>

        {/* Layout de dos columnas: foto a la izquierda, texto a la derecha */}
        <Grid container spacing={6} alignItems="flex-start">

          {/* ── Columna izquierda: foto ─────────────────────────── */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={0}
            >
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  mb: 4,
                  position: 'relative',
                  // Borde decorativo superpuesto con pseudo-elemento
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    border: '2px solid rgba(155,93,229,0.2)',
                    borderRadius: 4,
                    pointerEvents: 'none',
                  },
                }}
              >
                {/*
                  loading="lazy": el navegador solo carga esta imagen cuando está
                  próxima al viewport. Mejora el tiempo de carga inicial (LCP).
                */}
                <Box
                  component="img"
                  src="/images/sonriendoFrenteAlas.JPG"
                  alt="Mariel Sofía Gutiérrez Zapién"
                  loading="lazy"
                  sx={{ width: '100%', height: 380, objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* ── Columna derecha: bio + tarjetas ─────────────────── */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={1}
            >
              {/* Párrafos de presentación */}
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1.05rem' }}>
                {t('about.intro')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, fontSize: '1.05rem' }}>
                {t('about.guza')}
              </Typography>

              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: 'text.primary' }}>
                {t('about.personal')}
              </Typography>

              {/* Tarjetas de intereses personales con animación escalonada */}
              <Grid container spacing={2}>
                {funCards.map((card, i) => (
                  <Grid item xs={12} sm={6} key={card.key}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      custom={i + 2}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2.5,
                          borderRadius: 3,
                          background: '#1A1A35',
                          border: '1px solid rgba(155,93,229,0.15)',
                          height: '100%',
                          cursor: 'default',
                          transition: 'border-color 0.2s',
                          '&:hover': { borderColor: 'rgba(155,93,229,0.4)' },
                        }}
                      >
                        <Box sx={{ fontSize: '2rem', mb: 1 }}>{card.emoji}</Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.5 }}>
                          {t(`about.${card.key}`)}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
