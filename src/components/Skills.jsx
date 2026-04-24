import { Box, Container, Typography, Chip, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const skillsByCategory = {
  frontend: [
    { name: 'React', level: 'Experienced' },
    { name: 'JavaScript', level: 'Experienced' },
    { name: 'TypeScript', level: 'Skillful' },
  ],
  backend: [
    { name: 'Java', level: 'Experienced' },
    { name: 'Spring Boot', level: 'Experienced' },
    { name: 'C#', level: 'Skillful' },
    { name: 'Node.js', level: 'Skillful' },
    { name: 'Python', level: 'Skillful' },
    { name: 'Maven', level: 'Skillful' },
    { name: 'PostgreSQL', level: 'Skillful' },
  ],
  devops: [
    { name: 'AWS ECS', level: 'Skillful' },
    { name: 'Datadog', level: 'Experienced' },
    { name: 'Git', level: 'Experienced' },
  ],
  other: [
    { name: 'Confluence', level: 'Experienced' },
    { name: 'OpenAPI', level: 'Skillful' },
    { name: 'Figma', level: 'Familiar' },
  ],
};

const levelColor = {
  Experienced: { bg: 'rgba(155,93,229,0.18)', border: 'rgba(155,93,229,0.45)', color: '#C77DFF' },
  Skillful: { bg: 'rgba(71,118,230,0.15)', border: 'rgba(71,118,230,0.4)', color: '#6FA3EF' },
  Familiar: { bg: 'rgba(71,118,230,0.08)', border: 'rgba(71,118,230,0.2)', color: '#8BBCF5' },
};

const langSkills = [
  { name: 'Español', level: 'Nativo / Native', flag: '🇲🇽' },
  { name: 'English', level: 'Fluido / Fluent', flag: '🇺🇸' },
  { name: 'Deutsch', level: 'A2', flag: '🇩🇪' },
];

export default function Skills() {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true });

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #221050 0%, #2E1460 100%)',
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
            {t('skills.title')}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            {t('skills.title')}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 8, maxWidth: 500 }}>
            {t('skills.subtitle')}
          </Typography>
        </motion.div>

        <Grid container spacing={3} sx={{ mb: 5 }}>
          {Object.entries(skillsByCategory).map(([cat, skills], ci) => (
            <Grid item xs={12} sm={6} md={3} key={cat}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    background: '#351868',
                    border: '1px solid rgba(155,93,229,0.12)',
                    height: '100%',
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      mb: 2.5,
                      background: 'linear-gradient(135deg, #9B5DE5, #4776E6)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      fontSize: '0.75rem',
                    }}
                  >
                    {categories[cat]}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skills.map((skill, si) => {
                      const style = levelColor[skill.level] || levelColor.Familiar;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Chip
                            label={skill.name}
                            size="small"
                            sx={{
                              background: style.bg,
                              border: `1px solid ${style.border}`,
                              color: style.color,
                              fontWeight: 600,
                              fontSize: '0.8rem',
                            }}
                          />
                        </motion.div>
                      );
                    })}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              background: '#351868',
              border: '1px solid rgba(155,93,229,0.12)',
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.75rem' }}>
              Idiomas / Languages
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {langSkills.map((lang) => (
                <Box
                  key={lang.name}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    p: '6px 16px',
                    borderRadius: 2,
                    background: 'rgba(155,93,229,0.1)',
                    border: '1px solid rgba(155,93,229,0.2)',
                  }}
                >
                  <Typography sx={{ fontSize: '1.2rem' }}>{lang.flag}</Typography>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.2 }}>{lang.name}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{lang.level}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
