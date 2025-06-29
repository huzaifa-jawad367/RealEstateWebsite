"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Search, Bed, Bath, MapPin, Heart, User, Grid, List, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ChatBot } from "@/components/chatbot"

const properties = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Modern Villa in F-7",
    location: "F-7, Islamabad",
    price: "₨85,00,000",
    monthlyPrice: "₨4,20,000/month",
    beds: 4,
    baths: 3,
    size: "2,400 sq ft",
    type: "Villa",
    agent: "Fatima Khan",
    featured: true,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Luxury Apartment in DHA",
    location: "DHA Phase 2, Islamabad",
    price: "₨65,00,000",
    monthlyPrice: "₨3,20,000/month",
    beds: 3,
    baths: 2,
    size: "1,800 sq ft",
    type: "Apartment",
    agent: "Ahmed Ali",
    featured: false,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Family House in Bahria Town",
    location: "Bahria Town, Rawalpindi",
    price: "₨45,00,000",
    monthlyPrice: "₨2,10,000/month",
    beds: 5,
    baths: 3,
    size: "3,200 sq ft",
    type: "House",
    agent: "Ayesha Malik",
    featured: true,
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Cozy Studio in G-11",
    location: "G-11, Islamabad",
    price: "₨32,00,000",
    monthlyPrice: "₨1,80,000/month",
    beds: 1,
    baths: 1,
    size: "800 sq ft",
    type: "Studio",
    agent: "Hassan Shah",
    featured: false,
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Penthouse in Centaurus",
    location: "F-8, Islamabad",
    price: "₨1,20,00,000",
    monthlyPrice: "₨6,00,000/month",
    beds: 3,
    baths: 3,
    size: "2,200 sq ft",
    type: "Penthouse",
    agent: "Sana Ahmed",
    featured: true,
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Suburban Family Home",
    location: "PWD Housing Scheme, Islamabad",
    price: "₨38,00,000",
    monthlyPrice: "₨1,90,000/month",
    beds: 4,
    baths: 2,
    size: "2,800 sq ft",
    type: "House",
    agent: "Usman Khan",
    featured: false,
  },
]

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 15000000])
  const [sizeRange, setSizeRange] = useState([500, 5000])
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-16">
        {/* Breadcrumb and Search */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <nav className="text-sm text-gray-600 mb-2">
                  <Link href="/" className="hover:text-blue-600">
                    Home
                  </Link>
                  <span className="mx-2">/</span>
                  <span className="text-gray-900">Latest Properties</span>
                </nav>
                <h1 className="text-2xl font-bold text-gray-900">Property Listings</h1>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Search properties..." className="pl-10 w-64" />
                </div>
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-80">
              <Card className="p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-6">Advanced Search</h3>

                <div className="space-y-6">
                  {/* City - Removed Country dropdown as requested */}
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="islamabad">Islamabad</SelectItem>
                        <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                        <SelectItem value="lahore">Lahore</SelectItem>
                        <SelectItem value="karachi">Karachi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Property Category */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Property Category</label>
                    <div className="space-y-2">
                      {["House", "Apartment", "Villa", "Studio", "Penthouse"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={type} />
                          <label htmlFor={type} className="text-sm">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Number of Rooms */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Number of Rooms</label>
                    <div className="space-y-2">
                      {["1", "2", "3", "4", "5+"].map((rooms) => (
                        <div key={rooms} className="flex items-center space-x-2">
                          <Checkbox id={`rooms-${rooms}`} />
                          <label htmlFor={`rooms-${rooms}`} className="text-sm">
                            {rooms} {rooms === "1" ? "Room" : "Rooms"}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bathrooms */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Bathrooms</label>
                    <div className="space-y-2">
                      {["1", "2", "3", "4+"].map((baths) => (
                        <div key={baths} className="flex items-center space-x-2">
                          <Checkbox id={`baths-${baths}`} />
                          <label htmlFor={`baths-${baths}`} className="text-sm">
                            {baths} {baths === "1" ? "Bathroom" : "Bathrooms"}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range - Fixed to show both thumbs */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Price Range</label>
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={15000000}
                        min={0}
                        step={100000}
                        className="mb-4"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>₨{(priceRange[0] / 100000).toFixed(0)} Lakh</span>
                        <span>₨{(priceRange[1] / 100000).toFixed(0)} Lakh</span>
                      </div>
                    </div>
                  </div>

                  {/* Square Feet - Fixed to show both thumbs */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Square Feet</label>
                    <div className="px-2">
                      <Slider
                        value={sizeRange}
                        onValueChange={setSizeRange}
                        max={5000}
                        min={500}
                        step={100}
                        className="mb-4"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{sizeRange[0]} sq ft</span>
                        <span>{sizeRange[1]} sq ft</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Search Now</Button>
                </div>
              </Card>
            </div>

            {/* Properties Grid/List */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">Showing {properties.length} properties</p>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="size">Size</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div
                className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-6"}
              >
                {properties.map((property) => (
                  <Card
                    key={property.id}
                    className={`overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                      viewMode === "list" ? "flex" : ""
                    }`}
                  >
                    <div className={`relative ${viewMode === "list" ? "w-80" : "h-64"}`}>
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                      {property.featured && <Badge className="absolute top-4 left-4 bg-blue-600">Featured</Badge>}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                        onClick={() => toggleFavorite(property.id)}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                          }`}
                        />
                      </Button>
                      <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded flex items-center text-sm">
                        <User className="w-3 h-3 mr-1" />
                        {property.agent}
                      </div>
                    </div>

                    <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{property.location}</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{property.price}</div>
                          <div className="text-sm text-gray-600">{property.monthlyPrice}</div>
                        </div>
                        <Badge variant="outline">{property.type}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-gray-600 mb-4">
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
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">View Details</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center mt-12 space-x-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline">1</Button>
                <Button>2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">4</Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <ChatBot />
      </div>
    </div>
  )
}