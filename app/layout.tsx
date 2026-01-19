import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexumfisioterapia.com'),
  title: {
    default: 'Nexum Fisioterapia | Fisioterapia en Alcazar de San Juan',
    template: '%s | Nexum Fisioterapia'
  },
  description: 'Centro de fisioterapia integral en Alcazar de San Juan. Especialistas en suelo pelvico, embarazo, fisioterapia manual, fisioterapia invasiva y pilates terapeutico. Pide cita: 613 00 56 17',
  keywords: [
    'fisioterapia Alcazar de San Juan',
    'fisioterapeuta Alcazar de San Juan',
    'suelo pelvico Ciudad Real',
    'fisioterapia embarazo Alcazar de San Juan',
    'fisioterapia invasiva Ciudad Real',
    'neuromodulacion Alcazar',
    'electrolisis percutanea Alcazar de San Juan',
    'pilates terapeutico Alcazar',
    'fisioterapia manual Ciudad Real',
    'ATM fisioterapia Alcazar'
  ],
  authors: [{ name: 'Nexum Fisioterapia' }],
  creator: 'Nexum Fisioterapia',
  publisher: 'Nexum Fisioterapia',
  formatDetection: {
    telephone: true,
    address: true,
    email: true
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://nexumfisioterapia.com',
    siteName: 'Nexum Fisioterapia',
    title: 'Nexum Fisioterapia | Fisioterapia integral en Alcazar de San Juan',
    description: 'Centro de fisioterapia integral. Especialistas en suelo pelvico, embarazo, fisioterapia invasiva y pilates terapeutico. Pide cita: 613 00 56 17',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexum Fisioterapia - Fisioterapia en Alcazar de San Juan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexum Fisioterapia | Fisioterapia en Alcazar de San Juan',
    description: 'Centro de fisioterapia integral. Especialistas en suelo pelvico, embarazo, fisioterapia invasiva y pilates.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://nexumfisioterapia.com'
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'MedicalBusiness'],
      '@id': 'https://nexumfisioterapia.com/#organization',
      name: 'Nexum Fisioterapia',
      description: 'Centro de fisioterapia integral en Alcazar de San Juan especializado en suelo pelvico, embarazo, fisioterapia manual, fisioterapia invasiva y pilates terapeutico',
      url: 'https://nexumfisioterapia.com',
      telephone: '+34613005617',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle Bailen, 22',
        addressLocality: 'Alcazar de San Juan',
        postalCode: '13600',
        addressRegion: 'Ciudad Real',
        addressCountry: 'ES'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 39.3903,
        longitude: -3.2078
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Monday',
          opens: '16:00',
          closes: '20:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '14:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '16:00',
          closes: '20:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '14:00'
        }
      ],
      priceRange: '$$',
      image: 'https://nexumfisioterapia.com/images/clinica.jpg',
      sameAs: [],
      medicalSpecialty: ['PhysicalTherapy', 'Obstetrics', 'Urology'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Fisioterapia',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Suelo Pelvico y Embarazo',
              description: 'Tratamiento especializado en disfunciones del suelo pelvico, embarazo y postparto'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Fisioterapia Manual',
              description: 'Terapia manual del aparato locomotor, tratamiento del dolor y disfunciones musculoesqueleticas'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Fisioterapia Invasiva',
              description: 'Puncion seca, electrolisis percutanea y neuromodulacion ecoguiada'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Pilates Terapeutico',
              description: 'Ejercicio terapeutico y pilates para rehabilitacion y prevencion'
            }
          }
        ]
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://nexumfisioterapia.com/#website',
      url: 'https://nexumfisioterapia.com',
      name: 'Nexum Fisioterapia',
      publisher: {
        '@id': 'https://nexumfisioterapia.com/#organization'
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
