import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem,
  ListItemButton, ListItemText, Typography,
  ToggleButton, ToggleButtonGroup
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

const navKeys = ['about', 'experience', 'skills', 'projects', 'thesis', 'github', 'contact'];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setDrawerOpen(false);
  };

  const handleLang = (_, val) => {
    if (val) i18n.changeLanguage(val);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled ? 'rgba(13,13,26,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(155,93,229,0.15)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #9B5DE5 0%, #4776E6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
              fontSize: '1.3rem',
            }}
            onClick={() => scrollTo('hero')}
          >
            MSGZ
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {navKeys.map((key) => (
              <Button
                key={key}
                onClick={() => scrollTo(key)}
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.9rem',
                  px: 1.5,
                  '&:hover': { color: 'primary.main', background: 'transparent' },
                }}
              >
                {t(`nav.${key}`)}
              </Button>
            ))}
            <ToggleButtonGroup
              value={i18n.language}
              exclusive
              onChange={handleLang}
              size="small"
              sx={{ ml: 2 }}
            >
              <ToggleButton
                value="es"
                sx={{
                  px: 1.5, py: 0.5, fontSize: '0.8rem', fontWeight: 700,
                  borderRadius: '8px 0 0 8px',
                  border: '1px solid rgba(155,93,229,0.3)',
                  color: 'text.secondary',
                  '&.Mui-selected': { background: 'linear-gradient(135deg, #9B5DE5, #4776E6)', color: '#fff' },
                }}
              >
                ES
              </ToggleButton>
              <ToggleButton
                value="en"
                sx={{
                  px: 1.5, py: 0.5, fontSize: '0.8rem', fontWeight: 700,
                  borderRadius: '0 8px 8px 0',
                  border: '1px solid rgba(155,93,229,0.3)',
                  color: 'text.secondary',
                  '&.Mui-selected': { background: 'linear-gradient(135deg, #9B5DE5, #4776E6)', color: '#fff' },
                }}
              >
                EN
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 280, background: '#13132A', p: 2 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navKeys.map((key) => (
            <ListItem key={key} disablePadding>
              <ListItemButton onClick={() => scrollTo(key)} sx={{ borderRadius: 2, mb: 0.5 }}>
                <ListItemText primary={t(`nav.${key}`)} primaryTypographyProps={{ fontWeight: 600 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 3, display: 'flex', gap: 1 }}>
          <Button
            variant={i18n.language === 'es' ? 'contained' : 'outlined'}
            onClick={() => i18n.changeLanguage('es')}
            sx={{ flex: 1 }}
          >
            ES
          </Button>
          <Button
            variant={i18n.language === 'en' ? 'contained' : 'outlined'}
            onClick={() => i18n.changeLanguage('en')}
            sx={{ flex: 1 }}
          >
            EN
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
