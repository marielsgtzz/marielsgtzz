import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Configuración de logos y estilos por empresa.
// Se usa backgroundImage en lugar de <img> para tener control preciso
// sobre el zoom (backgroundSize) y posición (backgroundPosition) del logo.
const companyConfig = {
  'J.P. Morgan': {
    logo: '/images/MorganLogo.png',
    color: '#003087',
    bg: '#fff',
    initials: 'JPM',
    logoSize: '120%',   // zoom manual para que el logo llene bien el círculo
    logoPos: 'center',
  },
  'Microsoft': {
    logo: '/images/microsoft-logo-microsoft.png',
    color: '#00BCF2',
    bg: '#fff',
    initials: 'MS',
    logoSize: '90%',
    logoPos: 'center',
  },
  'ITAM': {
    logo: '/images/logo-ITAM.png',
    color: '#8B1538',
    bg: '#fff',
    initials: 'ITAM',
    logoSize: '75%',
    logoPos: 'center',
  },
  'Powertrain Ventures / Aprena': {
    logo: '/images/powerTrainventureslogo.png',
    color: '#fff',
    bg: '#2D5BE3', // Fondo azul corporativo para ocultar el rectángulo blanco del logo
    initials: 'PV',
    logoSize: '130%',
    logoPos: 'center',
  },
};

// Variante de animación: entrada desde la izquierda con fade, escalonada por índice
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

// Avatar circular con el logo de la empresa usando CSS backgroundImage.
// Se usa backgroundImage (no <img>) porque permite controlar el zoom con
// backgroundSize sin afectar el layout ni necesitar onError fallbacks.
function CompanyAvatar({ company }) {
  const config = companyConfig[company] || {
    color: '#9B5DE5',
    bg: '#2D1460',
    initials: company.slice(0, 2),
  };

  if (config.logo) {
    return (
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          overflow: 'hidden',
          background: config.bg,
          border: '2px solid rgba(155,93,229,0.2)',
          flexShrink: 0,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          // Logo centrado con zoom configurable por empresa
          backgroundImage: `url(${config.logo})`,
          backgroundSize: config.logoSize || 'contain',
          backgroundPosition: config.logoPos || 'center',
          backgroundRepeat: 'no-repeat',
        }}
        role="img"
        aria-label={company}
      />
    );
  }

  // Fallback: iniciales de la empresa si no hay logo configurado
  return (
    <Box
      sx={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: config.bg,
        border: '2px solid rgba(155,93,229,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        fontSize: '0.65rem',
        fontWeight: 800,
        color: config.color,
        letterSpacing: '-0.5px',
      }}
    >
      {config.initials}
    </Box>
  );
}

export default function Experience() {
  const { t, i18n } = useTranslation();

  // Los jobs vienen del JSON de traducción como array de objetos
  const jobs = t('experience.jobs', { returnObjects: true });
  const microsoftCount = {};

  // Se añade un índice a cada entrada de Microsoft para diferenciarlas
  // (hay 3 internships distintos en diferentes años)
  const jobsWithIndex = jobs.map((job) => {
    if (job.company === 'Microsoft') {
      microsoftCount.count = (microsoftCount.count || 0) + 1;
      return { ...job, msIndex: microsoftCount.count };
    }
    return job;
  });

  return (
    <Box
      id="experience"
      component="section"
      aria-label="Experiencia"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #221050 0%, #281256 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Encabezado de sección */}
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
            {t('experience.title')}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 8, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            {t('experience.title')}
          </Typography>
        </motion.div>

        {/* Timeline vertical: línea morada + tarjetas a la derecha */}
        <Box sx={{ position: 'relative' }}>
          {/* Línea vertical decorativa de la timeline */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 27, md: 27 },
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, rgba(155,93,229,0.6) 0%, rgba(71,118,230,0.6) 100%)',
              borderRadius: 1,
            }}
          />

          {jobsWithIndex.map((job, i) => (
            <motion.div
              key={`${job.company}-${i}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeLeft}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 2, md: 4 },
                  mb: i < jobs.length - 1 ? 5 : 0,
                  position: 'relative',
                }}
              >
                {/* Avatar de empresa — actúa como nodo de la timeline */}
                <Box sx={{ flexShrink: 0, zIndex: 1 }}>
                  <CompanyAvatar company={job.company} />
                </Box>

                {/* Tarjeta de la experiencia */}
                <Paper
                  elevation={0}
                  component={motion.div}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  sx={{
                    flex: 1,
                    p: { xs: 2.5, md: 3.5 },
                    borderRadius: 3,
                    background: '#351868',
                    border: '1px solid rgba(155,93,229,0.12)',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      borderColor: 'rgba(155,93,229,0.35)',
                      boxShadow: '0 8px 32px rgba(155,93,229,0.12)',
                    },
                  }}
                >
                  {/* Encabezado de la tarjeta: rol + empresa + periodo + ubicación */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'flex-start', justifyContent: 'space-between', mb: 1 }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                        {job.role}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          background: 'linear-gradient(135deg, #9B5DE5, #4776E6)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                        }}
                      >
                        {job.company}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0.5 }}>
                      <Chip
                        label={job.period}
                        size="small"
                        sx={{
                          background: 'rgba(155,93,229,0.12)',
                          color: 'primary.light',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                        }}
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOnIcon sx={{ fontSize: '0.8rem', color: 'text.secondary' }} />
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {job.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Bullets de logros/responsabilidades */}
                  <Box component="ul" sx={{ m: 0, pl: 2.5, mt: 1.5 }}>
                    {job.bullets.map((bullet, bi) => (
                      <Box
                        component="li"
                        key={bi}
                        sx={{ color: 'text.secondary', mb: 0.8, fontSize: '0.9rem', lineHeight: 1.6, '&::marker': { color: 'primary.main' } }}
                      >
                        {bullet}
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
