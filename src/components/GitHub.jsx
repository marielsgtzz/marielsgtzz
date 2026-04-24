import { Box, Container, Typography, Paper, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const highlightRepos = [
  { name: 'Augmented Reality Projects', desc: 'Trabajos relacionados con Realidad Aumentada', lang: 'C#', color: '#178600' },
  { name: 'Web Development', desc: 'Proyectos de front-end y herramientas web', lang: 'JavaScript', color: '#f1e05a' },
  { name: 'Algorithms', desc: 'Implementaciones de algoritmos y estructuras de datos', lang: 'Python', color: '#3572A5' },
];

export default function GitHub() {
  const { t } = useTranslation();

  return (
    <Box
      id="github"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #2E1460 0%, #281256 100%)',
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
            {t('github.subtitle')}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 8, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            {t('github.title')}
          </Typography>
        </motion.div>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  background: '#351868',
                  border: '1px solid rgba(155,93,229,0.15)',
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #9B5DE5, #4776E6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <GitHubIcon sx={{ color: '#fff', fontSize: 32 }} />
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  @marielsgtzz
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 4 }}>
                  {t('github.description')}
                </Typography>

                <Button
                  variant="contained"
                  href="https://github.com/marielsgtzz?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNewIcon />}
                  sx={{
                    background: 'linear-gradient(135deg, #9B5DE5 0%, #4776E6 100%)',
                    px: 3,
                    py: 1.2,
                    boxShadow: '0 6px 20px rgba(155,93,229,0.3)',
                    '&:hover': {
                      boxShadow: '0 8px 28px rgba(155,93,229,0.5)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {t('github.visit')}
                </Button>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {highlightRepos.map((repo, i) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.5,
                      borderRadius: 3,
                      background: '#351868',
                      border: '1px solid rgba(155,93,229,0.1)',
                      cursor: 'default',
                      transition: 'border-color 0.2s',
                      '&:hover': { borderColor: 'rgba(155,93,229,0.3)' },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <GitHubIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.light' }}>
                        {repo.name}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
                      {repo.desc}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: repo.color }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>{repo.lang}</Typography>
                    </Box>
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
