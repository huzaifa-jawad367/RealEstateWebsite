import { Navigation } from "@/components/navigation"
import { ChatBot } from "@/components/chatbot"
import { HomeContent } from "@/components/home-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Real Estate Pakistan - Find Your Dream Property | Premium Properties",
  description: "Discover premium properties in Pakistan with Real Estate Pakistan. Expert guidance for buying, selling & investing in Islamabad, Rawalpindi, Lahore & Karachi. 15+ years experience, 5000+ happy clients.",
  keywords: [
    "real estate Pakistan",
    "property Pakistan", 
    "houses for sale Pakistan",
    "apartments Pakistan",
    "property investment Pakistan",
    "real estate agent Pakistan"
  ],
  openGraph: {
    title: "Real Estate Pakistan - Find Your Dream Property",
    description: "Discover premium properties in Pakistan with expert guidance. 15+ years experience, 5000+ happy clients.",
    images: [
      {
        url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Premium Properties in Pakistan',
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <HomeContent />
      <ChatBot />
    </>
  )
}