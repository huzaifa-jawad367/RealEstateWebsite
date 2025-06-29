"use client"

import { useEffect, useRef, useState } from "react"
import { Loader } from "lucide-react"

interface GoogleMapProps {
  address: string
  className?: string
  zoom?: number
  height?: string
}

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

export function GoogleMap({ address, className = "", zoom = 15, height = "400px" }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadGoogleMaps = () => {
      // Check if Google Maps is already loaded
      if (window.google && window.google.maps) {
        initializeMap()
        return
      }

      // Check if script is already being loaded
      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        // Wait for the script to load
        const checkGoogleMaps = setInterval(() => {
          if (window.google && window.google.maps) {
            clearInterval(checkGoogleMaps)
            initializeMap()
          }
        }, 100)
        return
      }

      // Load Google Maps script
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
      script.async = true
      script.defer = true
      
      script.onload = () => {
        initializeMap()
      }
      
      script.onerror = () => {
        setError('Failed to load Google Maps')
        setIsLoading(false)
      }
      
      document.head.appendChild(script)
    }

    const initializeMap = async () => {
      if (!mapRef.current || !window.google) return

      try {
        const geocoder = new window.google.maps.Geocoder()
        
        // Geocode the address
        geocoder.geocode({ address }, (results: any, status: any) => {
          if (status === 'OK' && results[0]) {
            const location = results[0].geometry.location
            
            // Create map
            const map = new window.google.maps.Map(mapRef.current, {
              center: location,
              zoom: zoom,
              styles: [
                {
                  featureType: "all",
                  elementType: "geometry.fill",
                  stylers: [{ weight: "2.00" }]
                },
                {
                  featureType: "all",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#9c9c9c" }]
                },
                {
                  featureType: "all",
                  elementType: "labels.text",
                  stylers: [{ visibility: "on" }]
                },
                {
                  featureType: "landscape",
                  elementType: "all",
                  stylers: [{ color: "#f2f2f2" }]
                },
                {
                  featureType: "landscape",
                  elementType: "geometry.fill",
                  stylers: [{ color: "#ffffff" }]
                },
                {
                  featureType: "landscape.man_made",
                  elementType: "geometry.fill",
                  stylers: [{ color: "#ffffff" }]
                },
                {
                  featureType: "poi",
                  elementType: "all",
                  stylers: [{ visibility: "off" }]
                },
                {
                  featureType: "road",
                  elementType: "all",
                  stylers: [{ saturation: -100 }, { lightness: 45 }]
                },
                {
                  featureType: "road",
                  elementType: "geometry.fill",
                  stylers: [{ color: "#eeeeee" }]
                },
                {
                  featureType: "road",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#7b7b7b" }]
                },
                {
                  featureType: "road",
                  elementType: "labels.text.stroke",
                  stylers: [{ color: "#ffffff" }]
                },
                {
                  featureType: "road.highway",
                  elementType: "all",
                  stylers: [{ visibility: "simplified" }]
                },
                {
                  featureType: "road.arterial",
                  elementType: "labels.icon",
                  stylers: [{ visibility: "off" }]
                },
                {
                  featureType: "transit",
                  elementType: "all",
                  stylers: [{ visibility: "off" }]
                },
                {
                  featureType: "water",
                  elementType: "all",
                  stylers: [{ color: "#46bcec" }, { visibility: "on" }]
                },
                {
                  featureType: "water",
                  elementType: "geometry.fill",
                  stylers: [{ color: "#c8d7d4" }]
                },
                {
                  featureType: "water",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#070707" }]
                },
                {
                  featureType: "water",
                  elementType: "labels.text.stroke",
                  stylers: [{ color: "#ffffff" }]
                }
              ],
              mapTypeControl: false,
              streetViewControl: true,
              fullscreenControl: true,
              zoomControl: true,
              gestureHandling: 'cooperative'
            })

            // Add custom marker
            const marker = new window.google.maps.Marker({
              position: location,
              map: map,
              title: address,
              icon: {
                url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#3B82F6" stroke="white" stroke-width="4"/>
                    <circle cx="20" cy="20" r="8" fill="white"/>
                  </svg>
                `),
                scaledSize: new window.google.maps.Size(40, 40),
                anchor: new window.google.maps.Point(20, 20)
              },
              animation: window.google.maps.Animation.DROP
            })

            // Add info window
            const infoWindow = new window.google.maps.InfoWindow({
              content: `
                <div style="padding: 10px; max-width: 200px;">
                  <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: 600;">Property Location</h3>
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">${address}</p>
                </div>
              `
            })

            marker.addListener('click', () => {
              infoWindow.open(map, marker)
            })

            setIsLoading(false)
          } else {
            setError('Could not find location')
            setIsLoading(false)
          }
        })
      } catch (err) {
        setError('Error initializing map')
        setIsLoading(false)
      }
    }

    loadGoogleMaps()
  }, [address, zoom])

  if (error) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
        style={{ height }}
      >
        <div className="text-center">
          <div className="text-gray-500 mb-2">⚠️</div>
          <p className="text-gray-600 text-sm">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`} style={{ height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="text-center">
            <Loader className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-2" />
            <p className="text-gray-600 text-sm">Loading map...</p>
          </div>
        </div>
      )}
      <div 
        ref={mapRef} 
        className="w-full h-full"
        style={{ minHeight: height }}
      />
    </div>
  )
}