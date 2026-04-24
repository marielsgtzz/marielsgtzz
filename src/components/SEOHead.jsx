import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * SEOHead — componente sin UI (render null) que actualiza dinámicamente
 * las etiquetas del <head> cuando el usuario cambia de idioma.
 *
 * Se usa useEffect en lugar de react-helmet-async porque ésta tiene
 * conflictos de peers con React 19. La solución con DOM directo es
 * más ligera y funciona igual para SPAs.
 */
export default function SEOHead() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  // Textos SEO en ambos idiomas
  const title = isEn
    ? 'Mariel Sofía Gutiérrez Zapién | Software Engineer'
    : 'Mariel Sofía Gutiérrez Zapién | Ingeniera de Software';

  const description = isEn
    ? 'Portfolio of Mariel Sofía Gutiérrez Zapién, Software Engineer at J.P. Morgan. Computer Engineering graduate from ITAM. React, JavaScript, Java, Spring Boot.'
    : 'Portafolio de Mariel Sofía Gutiérrez Zapién, Ingeniera de Software en J.P. Morgan. Egresada del ITAM. React, JavaScript, Java, Spring Boot.';

  useEffect(() => {
    // Actualiza el atributo lang del <html> para accesibilidad y SEO
    document.documentElement.lang = i18n.language;

    // Actualiza el <title> de la página
    document.title = title;

    // Actualiza la meta description principal
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);

    // Actualiza Open Graph para que coincida con el idioma activo
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', isEn ? 'en_US' : 'es_MX');

    // Actualiza Twitter Card
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  }, [i18n.language, title, description]);

  // No renderiza nada en el DOM visible
  return null;
}
