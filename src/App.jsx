// Librerías de UI y lógica principal
import { ThemeProvider, CssBaseline, Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Tema personalizado: paleta morado-azul, tipografía Inter, modo oscuro
import theme from './theme';
// Inicializa i18next con los recursos ES/EN (se ejecuta como efecto secundario)
import './i18n';

// Secciones de la página — cada una es una <Box id="..."> para scroll spy
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Thesis from './components/Thesis';
import GitHub from './components/GitHub';
import Contact from './components/Contact';

// Componente sin UI: actualiza <title>, <meta description> y og: en cambio de idioma
import SEOHead from './components/SEOHead';

// Footer simple con crédito y copyright
function Footer() {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: '#190B3A',
        borderTop: '1px solid rgba(155,93,229,0.1)',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
          {t('footer.made')}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.5 }}>
          © {new Date().getFullYear()} Mariel Sofía Gutiérrez Zapién. {t('footer.rights')}
        </Typography>
      </Container>
    </Box>
  );
}

export default function App() {
  return (
    // ThemeProvider aplica el tema MUI a todo el árbol de componentes
    <ThemeProvider theme={theme}>
      {/* CssBaseline: reset de CSS de MUI (normaliza márgenes, box-sizing, etc.) */}
      <CssBaseline />

      {/* SEOHead: sin render, solo actualiza el <head> reactivamente */}
      <SEOHead />

      {/* Navbar fija en la parte superior */}
      <Navbar />

      {/*
        Orden de secciones:
        Hero → About → Experience → Education → Thesis → Skills → Projects → GitHub → Contact
        Cada sección tiene un id correspondiente para el scroll desde la Navbar.
      */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Thesis />
        <Skills />
        <Projects />
        <GitHub />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}
