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
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Home,
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
    featured: true,
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
    featured: true,
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
    featured: false,
  },
]

const testimonials = [
  {
    name: "Fatima Khan",
    image: "/placeholder.svg?height=80&width=80",
    quote: "بہترین سروس! انہوں نے ہمیں صرف دو ہفتوں میں ہمارا خوابوں کا گھر تلاش کرنے میں مدد کی۔",
    rating: 5,
    role: "Property Buyer"
  },
  {
    name: "Ahmed Ali",
    image: "/placeholder.svg?height=80&width=80",
    quote: "Professional, knowledgeable, and always available. Highly recommended!",
    rating: 5,
    role: "Investor"
  },
  {
    name: "Ayesha Malik",
    image: "/placeholder.svg?height=80&width=80",
    quote: "Made the home buying process smooth and stress-free. Thank you!",
    rating: 5,
    role: "First-time Buyer"
  },
]

const stats = [
  { icon: Home, number: "2,500+", label: "Properties Sold", color: "text-blue-600" },
  { icon: Users, number: "5,000+", label: "Happy Clients", color: "text-green-600" },
  { icon: Award, number: "15+", label: "Years Experience", color: "text-purple-600" },
  { icon: TrendingUp, number: "98%", label: "Success Rate", color: "text-orange-600" },
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Contemporary home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight ${language === "ur" ? "font-urdu" : ""}`}>
              <span className="block text-gradient bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {t("heroTitle")}
              </span>
            </h1>
            <p className={`text-xl md:text-2xl lg:text-3xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed ${language === "ur" ? "font-urdu" : ""}`}>
              {t("heroSubtitle")}
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <div className="animate-slide-up delay-300">
            <div className="glass-card rounded-3xl p-8 shadow-2xl max-w-5xl mx-auto border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">{t("selectCity")}</label>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-white/60 hover:bg-white/20 transition-all duration-200">
                      <SelectValue placeholder={t("selectCity")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="islamabad">{t("islamabad")}</SelectItem>
                      <SelectItem value="rawalpindi">{t("rawalpindi")}</SelectItem>
                      <SelectItem value="lahore">{t("lahore")}</SelectItem>
                      <SelectItem value="karachi">{t("karachi")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">{t("propertyType")}</label>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-white/60 hover:bg-white/20 transition-all duration-200">
                      <SelectValue placeholder={t("propertyType")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">{t("house")}</SelectItem>
                      <SelectItem value="apartment">{t("apartment")}</SelectItem>
                      <SelectItem value="villa">{t("villa")}</SelectItem>
                      <SelectItem value="condo">{t("condo")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">{t("priceRange")}</label>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-white/60 hover:bg-white/20 transition-all duration-200">
                      <SelectValue placeholder={t("priceRange")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-30lakh">{t("priceRange1")}</SelectItem>
                      <SelectItem value="30-60lakh">{t("priceRange2")}</SelectItem>
                      <SelectItem value="60-1crore">{t("priceRange3")}</SelectItem>
                      <SelectItem value="1crore+">{t("priceRange4")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button size="lg" className="w-full btn-modern h-12 text-base font-semibold group">
                    <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    {t("search")}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="neu-card p-8 hover-lift">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === "ur" ? "font-urdu" : ""}`}>
              {t("mostViewedProperties")}
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${language === "ur" ? "font-urdu" : ""}`}>
              {t("mostViewedSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <Card key={property.id} className="group overflow-hidden hover-lift border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.titleKey}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {property.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white border-0 shadow-lg">
                      {t("featured")}
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 cursor-pointer">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors ${language === "ur" ? "font-urdu" : ""}`}>
                    {property.titleKey}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                    <span className={language === "ur" ? "font-urdu" : ""}>{property.locationKey}</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{property.price}</div>
                  <div className="flex items-center justify-between text-gray-600 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        <span className="font-medium">{property.beds}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        <span className="font-medium">{property.baths}</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">{property.size}</span>
                  </div>
                  <Link href={`/properties/${property.id}`}>
                    <Button className="w-full btn-modern group">
                      {t("viewDetails")}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/properties">
              <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 px-8 py-3 rounded-xl font-semibold group">
                {t("viewAllProperties")}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === "ur" ? "font-urdu" : ""}`}>
              {t("clientTestimonials")}
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${language === "ur" ? "font-urdu" : ""}`}>
              {t("clientTestimonialsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border-0 p-8 hover-lift transition-all duration-500 rounded-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className={`font-semibold text-gray-900 ${language === "ur" ? "font-urdu" : ""}`}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className={`text-gray-700 italic leading-relaxed ${language === "ur" ? "font-urdu text-right" : ""}`}>
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-8 ${language === "ur" ? "font-urdu" : ""}`}>
                {t("aboutAgency")}
              </h2>
              <p className={`text-lg text-gray-600 mb-6 leading-relaxed ${language === "ur" ? "font-urdu text-right" : ""}`}>
                {t("aboutText1")}
              </p>
              <p className={`text-lg text-gray-600 mb-8 leading-relaxed ${language === "ur" ? "font-urdu text-right" : ""}`}>
                {t("aboutText2")}
              </p>
              <Button size="lg" className="btn-modern group">
                {t("readMore")}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Our team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border border-white/20 shadow-xl">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Partners */}
            <div>
              <h3 className={`text-3xl font-bold mb-8 ${language === "ur" ? "font-urdu" : ""}`}>
                {t("ourPartners")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl flex items-center justify-center hover-scale transition-all duration-300 border border-white/10">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="opacity-70 hover:opacity-100 transition-opacity filter brightness-0 invert"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className={`text-3xl font-bold mb-8 ${language === "ur" ? "font-urdu" : ""}`}>
                {t("contactUs")}
              </h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg">+92 51 123-4567</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg">info@realestatepk.com</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-colors">
                    <MapIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-lg ${language === "ur" ? "font-urdu" : ""}`}>
                    Blue Area, Islamabad, Pakistan
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className={`text-xl font-semibold mb-4 ${language === "ur" ? "font-urdu" : ""}`}>
                  {t("followUs")}
                </h4>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <Button key={index} variant="ghost" size="icon" className="w-12 h-12 bg-white/10 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-16 pt-8 text-center">
            <p className={`text-gray-400 ${language === "ur" ? "font-urdu" : ""}`}>
              {t("allRightsReserved")}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}