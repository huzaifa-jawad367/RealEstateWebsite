import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, MapPin, Clock, Star, Home, TrendingUp, Shield, Heart, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ChatBot } from "@/components/chatbot"

const teamMembers = [
  {
    name: "Fatima Khan",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    experience: "15+ years",
    specialization: "Luxury Properties",
  },
  {
    name: "Ahmed Ali",
    role: "Senior Agent",
    image: "/placeholder.svg?height=300&width=300",
    experience: "12+ years",
    specialization: "Commercial Real Estate",
  },
  {
    name: "Ayesha Malik",
    role: "Property Consultant",
    image: "/placeholder.svg?height=300&width=300",
    experience: "8+ years",
    specialization: "Residential Properties",
  },
  {
    name: "Hassan Shah",
    role: "Investment Advisor",
    image: "/placeholder.svg?height=300&width=300",
    experience: "10+ years",
    specialization: "Property Investment",
  },
]

const achievements = [
  { icon: Home, number: "2,500+", label: "Properties Sold" },
  { icon: Users, number: "5,000+", label: "Happy Clients" },
  { icon: Award, number: "15+", label: "Years Experience" },
  { icon: MapPin, number: "4", label: "Cities Covered" },
]

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We believe in honest dealings and transparent processes in every transaction.",
  },
  {
    icon: Heart,
    title: "Client-Centric Approach",
    description: "Your satisfaction is our priority. We go above and beyond to meet your needs.",
  },
  {
    icon: TrendingUp,
    title: "Market Excellence",
    description: "Deep market knowledge and expertise to help you make informed decisions.",
  },
  {
    icon: CheckCircle,
    title: "Quality Service",
    description: "Professional service delivery with attention to detail in every aspect.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Agency</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Building dreams, creating homes, and transforming lives through exceptional real estate services across
              Pakistan
            </p>
            <Badge className="bg-white/20 text-white text-lg px-6 py-2">Trusted Since 2009</Badge>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in 2009 by Fatima Khan, Real Estate Pakistan began as a small family business with a simple
                  mission: to help families find their perfect homes. What started as a single office in Islamabad has
                  grown into one of Pakistan's most trusted real estate agencies.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Over the years, we've expanded our services across major cities including Islamabad, Rawalpindi,
                  Lahore, and Karachi. Our team of dedicated professionals brings together decades of combined
                  experience in residential, commercial, and investment properties.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Today, we're proud to have helped over 5,000 families find their dream homes and assisted countless
                  investors in building their property portfolios. Our commitment to excellence, transparency, and
                  client satisfaction remains at the heart of everything we do.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    <Award className="w-4 h-4 mr-2" />
                    Award Winning Agency
                  </Badge>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <Star className="w-4 h-4 mr-2" />
                    5-Star Rated
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Our office building"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
              <p className="text-xl text-gray-600">Numbers that speak for our success and client satisfaction</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <achievement.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                    <div className="text-gray-600">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide our work and relationships</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-blue-600"
                >
                  <CardContent className="p-0">
                    <value.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center justify-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{member.experience}</span>
                      </div>
                      <p>{member.specialization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="p-8 border-l-4 border-l-blue-600">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To provide exceptional real estate services that exceed client expectations while maintaining the
                    highest standards of professionalism, integrity, and transparency. We strive to make property
                    transactions smooth, stress-free, and successful for every client we serve.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-l-4 border-l-green-600">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To be Pakistan's leading real estate agency, recognized for our innovative approach, market
                    expertise, and unwavering commitment to client satisfaction. We envision a future where every
                    Pakistani family has access to quality housing and investment opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our experienced team help you navigate the real estate market and find the perfect property that meets
              your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/properties">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Browse Properties
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </div>
      <ChatBot />
    </div>
  )
}
