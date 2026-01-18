# Fisionarle - Website

Sitio web profesional para Fisionarle, centro de fisioterapia en Alcazar de San Juan.

## Inicio Rapido

```bash
# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Abrir en navegador
open http://localhost:3000
```

## Estructura

- `/app` - Paginas y layouts (App Router)
- `/components` - Componentes React
  - `/sections` - Secciones de la landing (Hero, Servicios, etc.)
  - `/shared` - Componentes compartidos (Navbar, Footer, WhatsApp)
  - `/ui` - Componentes UI reutilizables
- `/public` - Archivos estaticos e imagenes
- `/lib` - Utilidades y configuraciones

## Personalizacion

### Colores
Edita `tailwind.config.ts` para cambiar la paleta:
- `primary` - Verde salud (#10B981)
- `secondary` - Azul confianza (#3B82F6)
- `accent` - Naranja calido (#F59E0B)

### Contenido
- **Datos de contacto**: `app/layout.tsx` y componentes
- **Secciones**: Edita los archivos en `/components/sections`
- **Imagenes**: Reemplaza los placeholders en `/public/images`

### Imagenes a reemplazar
1. Hero: Foto del equipo o clinica (800x800px)
2. Equipo: Fotos de Nani y Pilar (400x300px)
3. Clinica: Foto de las instalaciones (800x450px)

## Stack Tecnologico

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP

## Deploy

```bash
# Build de produccion
npm run build

# Recomendado: Vercel
npx vercel --prod
```

## Contacto del Negocio

- **Nombre**: Fisionarle
- **Direccion**: Calle Bailen, 22, 13600 Alcazar de San Juan
- **Telefono**: 613 00 46 17
- **WhatsApp**: 34613004617

---
Desarrollado por RomanTech
