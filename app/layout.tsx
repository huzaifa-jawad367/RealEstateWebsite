import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AuthProvider } from "@/components/auth-provider"
import { LanguageProvider } from "@/components/language-provider"

export const metadata: Metadata = {
  title: {
    default: "Real Estate Pakistan - Find Your Dream Property | Premium Properties in Islamabad, Lahore, Karachi",
    template: "%s | Real Estate Pakistan"
  },
  description: "Discover premium properties in Pakistan with Real Estate Pakistan. Expert guidance for buying, selling & investing in Islamabad, Rawalpindi, Lahore & Karachi. 15+ years experience, 5000+ happy clients.",
  keywords: [
    "real estate Pakistan",
    "property Pakistan",
    "houses for sale Pakistan",
    "apartments Pakistan",
    "Islamabad properties",
    "Lahore real estate",
    "Karachi properties",
    "Rawalpindi houses",
    "property investment Pakistan",
    "real estate agent Pakistan",
    "buy property Pakistan",
    "sell property Pakistan",
    "property dealer Pakistan",
    "residential properties Pakistan",
    "commercial properties Pakistan"
  ],
  authors: [{ name: "Real Estate Pakistan" }],
  creator: "Real Estate Pakistan",
  publisher: "Real Estate Pakistan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://realestatepakistan.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'ur-PK': '/ur-PK',
    },
  },
  openGraph: {
    title: "Real Estate Pakistan - Find Your Dream Property",
    description: "Discover premium properties in Pakistan with expert guidance. 15+ years experience, 5000+ happy clients in Islamabad, Lahore, Karachi & Rawalpindi.",
    url: 'https://realestatepakistan.com',
    siteName: 'Real Estate Pakistan',
    images: [
      {
        url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Premium Properties in Pakistan - Real Estate Pakistan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Pakistan - Find Your Dream Property',
    description: 'Discover premium properties in Pakistan with expert guidance. 15+ years experience, 5000+ happy clients.',
    images: ['https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    creator: '@realestatepk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Real Estate',
  classification: 'Real Estate Services',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />
        
        {/* Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Real Estate Pakistan",
              "description": "Premium real estate services in Pakistan with 15+ years experience",
              "url": "https://realestatepakistan.com",
              "logo": "https://realestatepakistan.com/logo.png",
              "image": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
              "telephone": "+92-51-123-4567",
              "email": "info@realestatepk.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Blue Area",
                "addressLocality": "Islamabad",
                "addressCountry": "Pakistan",
                "postalCode": "44000"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.6844",
                "longitude": "73.0479"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "priceRange": "₨30,00,000 - ₨2,00,00,000",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Islamabad"
                },
                {
                  "@type": "City", 
                  "name": "Rawalpindi"
                },
                {
                  "@type": "City",
                  "name": "Lahore"
                },
                {
                  "@type": "City",
                  "name": "Karachi"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Real Estate Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Property Buying Services"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Property Selling Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Property Investment Consultation"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "5000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://www.facebook.com/realestatepakistan",
                "https://www.twitter.com/realestatepk",
                "https://www.instagram.com/realestatepakistan",
                "https://www.linkedin.com/company/realestatepakistan"
              ]
            })
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Real Estate Pakistan",
              "url": "https://realestatepakistan.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://realestatepakistan.com/properties?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://realestatepakistan.com"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Properties",
                  "item": "https://realestatepakistan.com/properties"
                },
                {
                  "@type": "ListItem",
                  "position": 3, 
                  "name": "About Us",
                  "item": "https://realestatepakistan.com/about"
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <AuthProvider>{children}</AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}