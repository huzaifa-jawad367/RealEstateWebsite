"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Bed,
  Bath,
  Car,
  Trees,
  Eye,
  Home,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Star,
  School,
  ShoppingBag,
  Train,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ChatBot } from "@/components/chatbot"

const propertyImages = [
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
]

const propertyHighlights = [
  { icon: Home, label: "Type", value: "Modern Villa" },
  { icon: DollarSign, label: "Maintenance", value: "₨25,000/month" },
  { icon: Calendar, label: "Year Built", value: "2019" },
  { icon: Car, label: "Parking", value: "2 Car Garage" },
  { icon: Trees, label: "Garden", value: "Private Lawn" },
  { icon: Eye, label: "Views", value: "Margalla Hills" },
]

const similarProperties = [
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=300",
    title: "Luxury Apartment in DHA",
    location: "DHA Phase 2, Islamabad",
    price: "₨65,00,000",
    beds: 3,
    baths: 2,
  },
  {
    id: 3,
    image: "/placeholder.svg?height=200&width=300",
    title: "Family House in Bahria Town",
    location: "Bahria Town, Rawalpindi",
    price: "₨45,00,000",
    beds: 5,
    baths: 3,
  },
  {
    id: 4,
    image: "/placeholder.svg?height=200&width=300",
    title: "Cozy Studio in G-11",
    location: "G-11, Islamabad",
    price: "₨32,00,000",
    beds: 1,
    baths: 1,
  },
]

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("schools")

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/properties" className="hover:text-blue-600">
                Properties
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Modern Villa in Downtown</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-8">
                <div className="relative h-96 md:h-[500px] mb-4">
                  <Image
                    src={propertyImages[currentImageIndex] || "/placeholder.svg"}
                    alt="Property image"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex space-x-2 overflow-x-auto">
                  {propertyImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden ${
                        index === currentImageIndex ? "ring-2 ring-blue-600" : ""
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Modern Villa in F-7</h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="text-lg">Street 15, F-7/2, Islamabad, Pakistan</span>
                    </div>
                  </div>
                  <Badge className="bg-blue-600">Featured</Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">₨85,00,000</div>
                    <div className="text-sm text-gray-600">Sale Price</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">₨8,50,000</div>
                    <div className="text-sm text-gray-600">Down Payment</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center">
                      <Bed className="w-5 h-5 mr-1" />
                      <span className="text-2xl font-bold">4</span>
                    </div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center">
                      <Bath className="w-5 h-5 mr-1" />
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                </div>

                {/* Overview */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                  <p className="text-gray-600 leading-relaxed">
                    This stunning modern villa offers the perfect blend of luxury and comfort in the heart of downtown.
                    Featuring an open-concept design with high ceilings, floor-to-ceiling windows, and premium finishes
                    throughout. The gourmet kitchen boasts stainless steel appliances, quartz countertops, and a large
                    island perfect for entertaining. The master suite includes a walk-in closet and spa-like bathroom
                    with dual vanities and a soaking tub. Additional highlights include a private backyard, two-car
                    garage, and smart home technology.
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Highlights</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {propertyHighlights.map((highlight, index) => (
                      <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <highlight.icon className="w-6 h-6 text-blue-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">{highlight.label}</div>
                          <div className="text-sm text-gray-600">{highlight.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>

                  {/* Map Placeholder */}
                  <div className="bg-gray-200 h-64 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-gray-500">Interactive Map</div>
                  </div>

                  {/* Location Tabs */}
                  <div className="flex border-b border-gray-200 mb-4">
                    {[
                      { id: "schools", label: "Schools", icon: School },
                      { id: "shops", label: "Shopping", icon: ShoppingBag },
                      { id: "commute", label: "Commute", icon: Train },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center px-4 py-2 border-b-2 transition-colors ${
                          activeTab === tab.id
                            ? "border-blue-600 text-blue-600"
                            : "border-transparent text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <tab.icon className="w-4 h-4 mr-2" />
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {activeTab === "schools" && (
                      <>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span>Islamabad Model School</span>
                          <span className="text-sm text-gray-600">0.3 km</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span>Beaconhouse School System</span>
                          <span className="text-sm text-gray-600">0.8 km</span>
                        </div>
                      </>
                    )}
                    {activeTab === "shops" && (
                      <>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span>Centaurus Mall</span>
                          <span className="text-sm text-gray-600">2.5 km</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span>Metro Cash & Carry</span>
                          <span className="text-sm text-gray-600">1.2 km</span>
                        </div>
                      </>
                    )}
                    {activeTab === "commute" && (
                      <>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span>Metro Bus Station</span>
                          <span className="text-sm text-gray-600">0.8 km</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span>Daewoo Terminal</span>
                          <span className="text-sm text-gray-600">3.2 km</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tour Request */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Request a Tour</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Time</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9am">9:00 AM</SelectItem>
                        <SelectItem value="10am">10:00 AM</SelectItem>
                        <SelectItem value="11am">11:00 AM</SelectItem>
                        <SelectItem value="2pm">2:00 PM</SelectItem>
                        <SelectItem value="3pm">3:00 PM</SelectItem>
                        <SelectItem value="4pm">4:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                    <Textarea placeholder="Any specific questions or requirements..." />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Tour
                  </Button>
                </div>
              </Card>

              {/* Agent Info */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Your Agent</h3>
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Agent"
                    width={80}
                    height={80}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fatima Khan</h4>
                    <p className="text-sm text-gray-600">Senior Real Estate Agent</p>
                    <p className="text-xs text-gray-500">License #RE123456</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Agent
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Agent
                  </Button>
                </div>
              </Card>

              {/* Mortgage Calculator */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Mortgage Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Loan Amount</label>
                    <Input defaultValue="76,50,000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Interest Rate (%)</label>
                    <Input defaultValue="6.5" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Loan Term (years)</label>
                    <Select defaultValue="30">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="20">20 years</SelectItem>
                        <SelectItem value="30">30 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">₨4,84,700</div>
                      <div className="text-sm text-gray-600">Monthly Payment</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Similar Properties */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{property.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="text-xl font-bold text-blue-600 mb-3">{property.price}</div>
                    <div className="flex items-center justify-between text-gray-600">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        <span>{property.beds}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        <span>{property.baths}</span>
                      </div>
                    </div>
                    <Link href={`/properties/${property.id}`}>
                      <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">View Details</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <ChatBot />
      </div>
    </div>
  )
}
