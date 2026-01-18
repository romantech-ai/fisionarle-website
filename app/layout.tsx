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
  metadataBase: new URL('https://fisionarle.com'),
  title: {
    default: 'Fisionarle | Fisioterapia en Alcazar de San Juan',
    template: '%s | Fisionarle'
  },
  description: 'Centro de fisioterapia integral en Alcazar de San Juan. Especialistas en fisioterapia deportiva, pediatrica, neurologica y geriatrica. Pilates terapeutico. Pide cita: 613 00 46 17',
  keywords: [
    'fisioterapia Alcazar de San Juan',
    'fisioterapeuta Alcazar de San Juan',
    'fisioterapia deportiva Ciudad Real',
    'fisioterapia pediatrica Alcazar de San Juan',
    'fisioterapia infantil Ciudad Real',
    'fisioterapia neurologica Alcazar',
    'rehabilitacion Alcazar de San Juan',
    'pilates terapeutico Alcazar',
    'tratamiento cervicalgia Alcazar',
    'fisioterapia bebes Ciudad Real'
  ],
  authors: [{ name: 'Fisionarle' }],
  creator: 'Fisionarle',
  publisher: 'Fisionarle',
  formatDetection: {
    telephone: true,
    address: true,
    email: true
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://fisionarle.com',
    siteName: 'Fisionarle',
    title: 'Fisionarle | Fisioterapia con vocacion en Alcazar de San Juan',
    description: 'Centro de fisioterapia integral. Especialistas en deportiva, pediatrica, neurologica y geriatrica. Vocacion y calidad humana. Pide cita: 613 00 46 17',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fisionarle - Fisioterapia en Alcazar de San Juan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fisionarle | Fisioterapia en Alcazar de San Juan',
    description: 'Centro de fisioterapia integral. Especialistas en deportiva, pediatrica, neurologica y geriatrica.',
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
    canonical: 'https://fisionarle.com'
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'MedicalBusiness'],
      '@id': 'https://fisionarle.com/#organization',
      name: 'Fisionarle',
      description: 'Centro de fisioterapia integral en Alcazar de San Juan especializado en fisioterapia deportiva, pediatrica, neurologica y geriatrica',
      url: 'https://fisionarle.com',
      telephone: '+34613004617',
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
      image: 'https://fisionarle.com/images/clinica.jpg',
      sameAs: [],
      medicalSpecialty: ['PhysicalTherapy', 'Pediatrics', 'Neurology', 'Geriatrics'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Fisioterapia',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Fisioterapia Deportiva',
              description: 'Tratamiento especializado para lesiones deportivas y readaptacion'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Fisioterapia Pediatrica',
              description: 'Tratamiento para bebes y ninos, estimulacion temprana y desarrollo motor'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Fisioterapia Neurologica',
              description: 'Rehabilitacion post-ictus, Parkinson y enfermedades neurodegenerativas'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Fisioterapia Geriatrica',
              description: 'Prevencion de caidas, mejora del equilibrio y calidad de vida'
            }
          }
        ]
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://fisionarle.com/#website',
      url: 'https://fisionarle.com',
      name: 'Fisionarle',
      publisher: {
        '@id': 'https://fisionarle.com/#organization'
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
