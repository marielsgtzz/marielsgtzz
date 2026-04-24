import { Box, Container, Typography, Grid, Paper, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import ScienceIcon from '@mui/icons-material/Science';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectCard = ({ icon, title, role, period, description, chips, link, highlight, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 3.5,
        borderRadius: 4,
        background: highlight
          ? 'linear-gradient(135deg, rgba(155,93,229,0.12) 0%, rgba(71,118,230,0.08) 100%)'
          : '#351868',
        border: `1px solid ${highlight ? 'rgba(155,93,229,0.35)' : 'rgba(155,93,229,0.12)'}`,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        '&:hover': {
          borderColor: 'rgba(155,93,229,0.4)',
          boxShadow: '0 12px 40px rgba(155,93,229,0.15)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #9B5DE5, #4776E6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.3 }}>
            {title}
          </Typography>
          {role && (
            <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 600 }}>
              {role}
            </Typography>
          )}
        </Box>
      </Box>

      {period && (
        <Chip
          label={period}
          size="small"
          sx={{ mb: 2, alignSelf: 'flex-start', background: 'rgba(155,93,229,0.1)', color: 'text.secondary', fontWeight: 500 }}
        />
      )}

      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, flex: 1, mb: 2 }}>
        {description}
      </Typography>

      {chips && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: link ? 2 : 0 }}>
          {chips.map((chip) => (
            <Chip
              key={chip}
              label={chip}
              size="small"
              sx={{ background: 'rgba(71,118,230,0.1)', color: 'secondary.light', fontSize: '0.75rem', fontWeight: 500 }}
            />
          ))}
        </Box>
      )}

      {link && (
        <Button
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          endIcon={<OpenInNewIcon sx={{ fontSize: '0.9rem' }} />}
          sx={{ alignSelf: 'flex-start', color: 'primary.light', p: 0, '&:hover': { background: 'transparent', color: 'primary.main' } }}
        >
          Ver más
        </Button>
      )}
    </Paper>
  </motion.div>
);

export default function Projects() {
  const { t } = useTranslation();

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #2E1460 0%, #221050 100%)',
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
            {t('projects.title')}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 8, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            {t('projects.title')}
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ProjectCard
              icon={<CodeIcon sx={{ color: '#fff', fontSize: 24 }} />}
              title={t('projects.guza_title')}
              description={t('projects.guza_desc')}
              chips={['React', 'JavaScript', 'TypeScript', 'Node.js']}
              highlight
              delay={0}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <ProjectCard
              icon={<ScienceIcon sx={{ color: '#fff', fontSize: 24 }} />}
              title={t('projects.tera_title')}
              role={t('projects.tera_role')}
              period={t('projects.tera_period')}
              description={t('projects.tera_desc')}
              chips={['AR', 'VR', 'Educación', 'Liderazgo']}
              delay={0.1}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              icon={<LocalHospitalIcon sx={{ color: '#fff', fontSize: 24 }} />}
              title={t('projects.plenna_title')}
              period={t('projects.plenna_period')}
              description={t('projects.plenna_desc')}
              chips={['PostgreSQL', 'C#', 'Visual Studio']}
              delay={0.2}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              icon={<EmojiObjectsIcon sx={{ color: '#fff', fontSize: 24 }} />}
              title={t('projects.hackathon_title')}
              period={t('projects.hackathon_period')}
              description={t('projects.hackathon_desc')}
              chips={['Hackathon', 'Prototipo Web']}
              delay={0.3}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              icon={<SportsSoccerIcon sx={{ color: '#fff', fontSize: 24 }} />}
              title={t('projects.ftc_title')}
              period={t('projects.ftc_period')}
              description={t('projects.ftc_desc')}
              chips={['FIRST Robotics', 'Arbitraje']}
              delay={0.4}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
