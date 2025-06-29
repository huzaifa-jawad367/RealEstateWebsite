"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Bed,
  Bath,
  MapPin,
  Star,
  Phone,
  Mail,
  MapIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

const featuredProperties = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=400",
    titleKey: "Modern Villa in F-7",
    locationKey: "F-7, Islamabad",
    price: "₨85,00,000",
    beds: 4,
    baths: 3,
    size: "2,400 sq ft",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=400",
    titleKey: "Luxury Apartment in DHA",
    locationKey: "DHA Phase 2, Islamabad",
    price: "₨65,00,000",
    beds: 3,
    baths: 2,
    size: "1,800 sq ft",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=400",
    titleKey: "Family House in Bahria Town",
    locationKey: "Bahria Town, Rawalpindi",
    price: "₨45,00,000",
    beds: 5,
    baths: 3,
    size: "3,200 sq ft",
  },
]

const testimonials = [
  {
    name: "Fatima Khan",
    image: "/placeholder.svg?height=80&width=80",
    quote: "بہترین سروس! انہوں نے ہمیں صرف دو ہفتوں میں ہمارا خوابوں کا گھر تلاش کرنے میں مدد کی۔",
    rating: 5,
  },
  {
    name: "Ahmed Ali",
    image: "/placeholder.svg?height=80&width=80",
    quote: "Professional, knowledgeable, and always available. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ayesha Malik",
    image: "/placeholder.svg?height=80&width=80",
    quote: "Made the home buying process smooth and stress-free. Thank you!",
    rating: 5,
  },
]

const partners = [
  { name: "Partner 1", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 2", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 3", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 4", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 5", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 6", logo: "/placeholder.svg?height=60&width=120" },
]

export function HomeContent() {
  const { t, language } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Contemporary home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${language === "ur" ? "font-urdu" : ""}`}>
            {t("heroTitle")}
          </h1>
          <p className={`text-xl md:text-2xl mb-12 opacity-90 ${language === "ur" ? "font-urdu" : ""}`}>
            {t("heroSubtitle")}
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-6 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <Select>
                <SelectTrigger className="text-gray-900">
                  <SelectValue placeholder={t("selectCity")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="islamabad">{t("islamabad")}</SelectItem>
                  <SelectItem value="rawalpindi">{t("rawalpindi")}</SelectItem>
                  <SelectItem value="lahore">{t("lahore")}</SelectItem>
                  <SelectItem value="karachi">{t("karachi")}</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="text-gray-900">
                  <SelectValue placeholder={t("propertyType")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">{t("house")}</SelectItem>
                  <SelectItem value="apartment">{t("apartment")}</SelectItem>
                  <SelectItem value="villa">{t("villa")}</SelectItem>
                  <SelectItem value="condo">{t("condo")}</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="text-gray-900">
                  <SelectValue placeholder={t("priceRange")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-30lakh">{t("priceRange1")}</SelectItem>
                  <SelectItem value="30-60lakh">{t("priceRange2")}</SelectItem>
                  <SelectItem value="60-1crore">{t("priceRange3")}</SelectItem>
                  <SelectItem value="1crore+">{t("priceRange4")}</SelectItem>
                </SelectContent>
              </Select>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Search className="w-5 h-5 mr-2" />
                {t("search")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Most Viewed Properties */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === "ur" ? "font-urdu" : ""}`}>
              {t("mostViewedProperties")}
            </h2>
            <p className={`text-xl text-gray-600 ${language === "ur" ? "font-urdu" : ""}`}>{t("mostViewedSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.titleKey}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{t("featured")}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${language === "ur" ? "font-urdu" : ""}`}>
                    {property.titleKey}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className={language === "ur" ? "font-urdu" : ""}>{property.locationKey}</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{property.price}</div>
                  <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.baths}</span>
                    </div>
                    <span className="text-sm">{property.size}</span>
                  </div>
                  <Link href={`/properties/${property.id}`}>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">{t("viewDetails")}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/properties">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                {t("viewAllProperties")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === "ur" ? "font-urdu" : ""}`}>
              {t("clientTestimonials")}
            </h2>
            <p className={`text-xl text-gray-600 ${language === "ur" ? "font-urdu" : ""}`}>
              {t("clientTestimonialsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className={`font-semibold text-gray-900 ${language === "ur" ? "font-urdu" : ""}`}>
                        {testimonial.name}
                      </h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className={`text-gray-600 italic ${language === "ur" ? "font-urdu text-right" : ""}`}>
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 ${language === "ur" ? "font-urdu" : ""}`}
              >
                {t("aboutAgency")}
              </h2>
              <p className={`text-lg text-gray-600 mb-6 ${language === "ur" ? "font-urdu text-right" : ""}`}>
                {t("aboutText1")}
              </p>
              <p className={`text-lg text-gray-600 mb-8 ${language === "ur" ? "font-urdu text-right" : ""}`}>
                {t("aboutText2")}
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t("readMore")}
              </Button>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Partners */}
            <div>
              <h3 className={`text-2xl font-bold mb-8 ${language === "ur" ? "font-urdu" : ""}`}>{t("ourPartners")}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className={`text-2xl font-bold mb-8 ${language === "ur" ? "font-urdu" : ""}`}>{t("contactUs")}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span>+92 51 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <span>info@realestatepk.com</span>
                </div>
                <div className="flex items-center">
                  <MapIcon className="w-5 h-5 mr-3 text-blue-400" />
                  <span className={language === "ur" ? "font-urdu" : ""}>Blue Area, Islamabad, Pakistan</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className={`text-lg font-semibold mb-4 ${language === "ur" ? "font-urdu" : ""}`}>
                  {t("followUs")}
                </h4>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className={`text-gray-400 ${language === "ur" ? "font-urdu" : ""}`}>{t("allRightsReserved")}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
