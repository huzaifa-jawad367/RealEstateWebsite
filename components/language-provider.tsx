"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ur"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    properties: "Properties",
    aboutUs: "About Us",
    login: "Login",
    logout: "Logout",

    // Hero Section
    heroTitle: "Finding Your New Home Is Simple.",
    heroSubtitle: "Discover your perfect property with our expert guidance and comprehensive listings",
    selectCity: "Select City",
    propertyType: "Property Type",
    priceRange: "Price Range",
    search: "Search",

    // Property Types
    house: "House",
    apartment: "Apartment",
    villa: "Villa",
    condo: "Condo",
    studio: "Studio",
    penthouse: "Penthouse",

    // Cities
    islamabad: "Islamabad",
    rawalpindi: "Rawalpindi",
    lahore: "Lahore",
    karachi: "Karachi",

    // Price Ranges
    priceRange1: "₨0 - ₨30 Lakh",
    priceRange2: "₨30 Lakh - ₨60 Lakh",
    priceRange3: "₨60 Lakh - ₨1 Crore",
    priceRange4: "₨1 Crore+",

    // Property Listings
    mostViewedProperties: "Most Viewed Properties",
    mostViewedSubtitle: "Discover the most popular properties in your area",
    featured: "Featured",
    viewDetails: "View Details",
    viewAllProperties: "View All Properties",

    // Testimonials
    clientTestimonials: "What Our Clients Say",
    clientTestimonialsSubtitle: "Real stories from satisfied homeowners",

    // About Section
    aboutAgency: "About Our Agency",
    aboutText1:
      "With over 15 years of experience in the real estate industry, we've helped thousands of families find their perfect homes. Our dedicated team of professionals provides personalized service and expert guidance throughout your property journey.",
    aboutText2:
      "We serve the greater metropolitan area with a comprehensive understanding of local markets, neighborhoods, and property values. Our mission is to make your real estate experience as smooth and successful as possible.",
    readMore: "Read More About Us",

    // Footer
    ourPartners: "Our Partners",
    contactUs: "Contact Us",
    followUs: "Follow Us",
    allRightsReserved: "© 2024 Real Estate Agency. All rights reserved.",

    // Property Details
    bedrooms: "Bedrooms",
    bathrooms: "Bathrooms",
    salePrice: "Sale Price",
    downPayment: "Down Payment",
    overview: "Overview",
    propertyHighlights: "Property Highlights",
    location: "Location",
    requestTour: "Request a Tour",
    scheduleTour: "Schedule a Tour",
    yourAgent: "Your Agent",
    callAgent: "Call Agent",
    emailAgent: "Email Agent",
    mortgageCalculator: "Mortgage Calculator",
    monthlyPayment: "Monthly Payment",
    similarProperties: "Similar Properties",

    // Auth
    welcomeBack: "Welcome Back",
    createAccount: "Create Account",
    fullName: "Full Name",
    email: "Email",
    password: "Password",
    signIn: "Sign In",
    signUp: "Sign Up",
    pleaseWait: "Please wait...",
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: "Already have an account?",

    // Chatbot
    customerSupport: "Customer Support",
    onlineNow: "Online now",
    typeMessage: "Type your message...",
    replyWithinMinutes: "We typically reply within a few minutes",
  },
  ur: {
    // Navigation
    home: "ہوم",
    properties: "پراپرٹیز",
    aboutUs: "ہمارے بارے میں",
    login: "لاگ ان",
    logout: "لاگ آؤٹ",

    // Hero Section
    heroTitle: "اپنا نیا گھر تلاش کرنا آسان ہے۔",
    heroSubtitle: "ہماری ماہر رہنمائی اور جامع فہرست کے ساتھ اپنی بہترین پراپرٹی دریافت کریں",
    selectCity: "شہر منتخب کریں",
    propertyType: "پراپرٹی کی قسم",
    priceRange: "قیمت کی حد",
    search: "تلاش کریں",

    // Property Types
    house: "گھر",
    apartment: "اپارٹمنٹ",
    villa: "ولا",
    condo: "کنڈو",
    studio: "اسٹوڈیو",
    penthouse: "پینٹ ہاؤس",

    // Cities
    islamabad: "اسلام آباد",
    rawalpindi: "راولپنڈی",
    lahore: "لاہور",
    karachi: "کراچی",

    // Price Ranges
    priceRange1: "₨0 - ₨30 لاکھ",
    priceRange2: "₨30 لاکھ - ₨60 لاکھ",
    priceRange3: "₨60 لاکھ - ₨1 کروڑ",
    priceRange4: "₨1 کروڑ+",

    // Property Listings
    mostViewedProperties: "سب سے زیادہ دیکھی جانے والی پراپرٹیز",
    mostViewedSubtitle: "اپنے علاقے میں سب سے مقبول پراپرٹیز دریافت کریں",
    featured: "نمایاں",
    viewDetails: "تفصیلات دیکھیں",
    viewAllProperties: "تمام پراپرٹیز دیکھیں",

    // Testimonials
    clientTestimonials: "ہمارے کلائنٹس کیا کہتے ہیں",
    clientTestimonialsSubtitle: "مطمئن گھر مالکان کی حقیقی کہانیاں",

    // About Section
    aboutAgency: "ہماری ایجنسی کے بارے میں",
    aboutText1:
      "رئیل اسٹیٹ انڈسٹری میں 15 سال سے زیادہ کے تجربے کے ساتھ، ہم نے ہزاروں خاندانوں کو ان کے بہترین گھر تلاش کرنے میں مدد کی ہے۔ ہماری پیشہ ور ٹیم آپ کے پراپرٹی کے سفر میں ذاتی خدمات اور ماہرانہ رہنمائی فراہم کرتی ہے۔",
    aboutText2:
      "ہم مقامی بازاروں، محلوں اور پراپرٹی کی قیمتوں کی جامع سمझ کے ساتھ بڑے میٹروپولیٹن علاقے میں خدمات فراہم کرتے ہیں۔ ہمارا مشن آپ کے رئیل اسٹیٹ کے تجربے کو جتنا ممکن ہو آسان اور کامیاب بنانا ہے۔",
    readMore: "ہمارے بارے میں مزید پڑھیں",

    // Footer
    ourPartners: "ہمارے پارٹنرز",
    contactUs: "ہم سے رابطہ کریں",
    followUs: "ہمیں فالو کریں",
    allRightsReserved: "© 2024 رئیل اسٹیٹ ایجنسی۔ تمام حقوق محفوظ ہیں۔",

    // Property Details
    bedrooms: "بیڈ رومز",
    bathrooms: "باتھ رومز",
    salePrice: "فروخت کی قیمت",
    downPayment: "ابتدائی ادائیگی",
    overview: "جائزہ",
    propertyHighlights: "پراپرٹی کی خصوصیات",
    location: "مقام",
    requestTour: "ٹور کی درخواست",
    scheduleTour: "ٹور شیڈول کریں",
    yourAgent: "آپ کا ایجنٹ",
    callAgent: "ایجنٹ کو کال کریں",
    emailAgent: "ایجنٹ کو ای میل کریں",
    mortgageCalculator: "قرض کیلکولیٹر",
    monthlyPayment: "ماہانہ ادائیگی",
    similarProperties: "ملتی جلتی پراپرٹیز",

    // Auth
    welcomeBack: "واپس آئیں",
    createAccount: "اکاؤنٹ بنائیں",
    fullName: "پورا نام",
    email: "ای میل",
    password: "پاس ورڈ",
    signIn: "سائن ان",
    signUp: "سائن اپ",
    pleaseWait: "براہ کرم انتظار کریں...",
    dontHaveAccount: "اکاؤنٹ نہیں ہے؟",
    alreadyHaveAccount: "پہلے سے اکاؤنٹ ہے؟",

    // Chatbot
    customerSupport: "کسٹمر سپورٹ",
    onlineNow: "آن لائن ہے",
    typeMessage: "اپنا پیغام لکھیں...",
    replyWithinMinutes: "ہم عام طور پر چند منٹوں میں جواب دیتے ہیں",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ur")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)

    // Update document direction for RTL support
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr"
    document.documentElement.lang = lang === "ur" ? "ur" : "en"
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
