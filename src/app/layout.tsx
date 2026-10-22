import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PharaonAcademia — Votre carrière créative commence ici",
    template: "%s | PharaonAcademia",
  },
  description:
    "Centre de formation professionnelle à Yaoundé. DQP en 1 an : infographie, web, photo, vidéo, secrétariat et maintenance. Rejoignez la 1ère promotion !",
  keywords: [
    "formation professionnelle",
    "Yaoundé",
    "Cameroun",
    "infographie",
    "design graphique",
    "web master",
    "photographie",
    "vidéographie",
    "secrétariat bureautique",
    "maintenance des systèmes d'impression",
    "DQP",
    "école numérique",
    "école créative",
    "PharaonAcademia",
    "formation informatique",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "PharaonAcademia" }],
  creator: "PharaonAcademia",
  publisher: "PharaonAcademia",
  metadataBase: new URL("https://pharaonacademia.com"),
  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: "https://pharaonacademia.com",
    siteName: "PharaonAcademia",
    title: "PharaonAcademia — Votre carrière créative commence ici",
    description:
      "Centre de formation professionnelle à Yaoundé. DQP en 1 an dans 6 filières créatives, numériques et techniques.",
    images: [
      {
        url: "/og-image.png",
        width: 630,
        height: 630,
        alt: "PharaonAcademia Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PharaonAcademia — Votre carrière créative commence ici",
    description:
      "Centre de formation professionnelle à Yaoundé. DQP en 1 an dans 6 filières créatives, numériques et techniques.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "PharaonAcademia",
  description:
    "Centre de formation professionnelle à Yaoundé. DQP en 1 an : infographie, web master, photographie, vidéographie, secrétariat bureautique et maintenance des systèmes d'impression.",
  url: "https://pharaonacademia.com",
  logo: "https://pharaonacademia.com/assets/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yaoundé",
    addressRegion: "Centre",
    addressCountry: "CM",
    streetAddress: "Chapelle Nsimeyong",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+237655061486",
    contactType: "admissions",
    email: "contact@pharaonacademia.com",
    availableLanguage: ["French"],
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Formations DQP",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Infographie",
          description: "Identité visuelle, mise en page et création graphique",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Web Master",
          description: "Conception et développement de sites web",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Photographie",
          description: "Prise de vue, lumière et retouche professionnelle",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Vidéographie",
          description: "Tournage, narration visuelle et montage",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Secrétariat bureautique",
          description: "Gestion administrative, secrétariat et bureautique",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Maintenance des systèmes d'impression",
          description: "Maintenance et réparation des systèmes d'impression",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
