"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { 
  Share2, 
  Facebook, 
  Twitter, 
  Instagram, 
  MessageCircle, 
  Mail, 
  Copy, 
  Check,
  Send
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ShareButtonProps {
  propertyTitle: string
  propertyPrice: string
  propertyLocation: string
  propertyImage: string
  className?: string
}

export function ShareButton({ 
  propertyTitle, 
  propertyPrice, 
  propertyLocation, 
  propertyImage,
  className = "" 
}: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  // Get current page URL
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  
  // Create share text
  const shareText = `Check out this amazing property: ${propertyTitle} in ${propertyLocation} for ${propertyPrice}. View details:`
  const encodedText = encodeURIComponent(shareText)
  const encodedUrl = encodeURIComponent(currentUrl)
  const encodedTitle = encodeURIComponent(propertyTitle)

  // Share URLs for different platforms
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${shareText}%0A%0A${currentUrl}`,
    sms: `sms:?body=${shareText}%20${currentUrl}`
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      toast({
        title: "Link Copied!",
        description: "Property link has been copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy link to clipboard",
        variant: "destructive"
      })
    }
  }

  const handleShare = (platform: string) => {
    const url = shareUrls[platform as keyof typeof shareUrls]
    if (url) {
      window.open(url, '_blank', 'width=600,height=400')
      setIsOpen(false)
      
      toast({
        title: "Sharing Property",
        description: `Opening ${platform} to share this property`,
      })
    }
  }

  // Native Web Share API (for mobile devices)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: propertyTitle,
          text: shareText,
          url: currentUrl,
        })
        setIsOpen(false)
      } catch (err) {
        // User cancelled or error occurred
        console.log('Share cancelled')
      }
    }
  }

  const shareOptions = [
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      color: 'text-green-600 hover:bg-green-50', 
      platform: 'whatsapp' 
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      color: 'text-blue-600 hover:bg-blue-50', 
      platform: 'facebook' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      color: 'text-sky-500 hover:bg-sky-50', 
      platform: 'twitter' 
    },
    { 
      name: 'LinkedIn', 
      icon: Send, 
      color: 'text-blue-700 hover:bg-blue-50', 
      platform: 'linkedin' 
    },
    { 
      name: 'Telegram', 
      icon: Send, 
      color: 'text-blue-500 hover:bg-blue-50', 
      platform: 'telegram' 
    },
    { 
      name: 'Email', 
      icon: Mail, 
      color: 'text-gray-600 hover:bg-gray-50', 
      platform: 'email' 
    },
  ]

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="lg" 
          className={`group hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 ${className}`}
        >
          <Share2 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          Share Property
        </Button>
      </PopoverTrigger>
      
      <PopoverContent className="w-80 p-0" align="end">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this Property</h3>
                <p className="text-sm text-gray-600">Share with friends and family</p>
              </div>

              {/* Native Share (Mobile) */}
              {typeof window !== 'undefined' && navigator.share && (
                <Button 
                  onClick={handleNativeShare}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share via Device
                </Button>
              )}

              {/* Social Media Options */}
              <div className="grid grid-cols-2 gap-3">
                {shareOptions.map((option) => (
                  <Button
                    key={option.name}
                    variant="outline"
                    onClick={() => handleShare(option.platform)}
                    className={`flex items-center justify-center p-3 h-auto ${option.color} border-gray-200 transition-all duration-200`}
                  >
                    <option.icon className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">{option.name}</span>
                  </Button>
                ))}
              </div>

              {/* Copy Link Section */}
              <div className="border-t pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Copy Link
                </label>
                <div className="flex space-x-2">
                  <Input
                    value={currentUrl}
                    readOnly
                    className="flex-1 text-sm bg-gray-50 border-gray-200"
                  />
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    size="icon"
                    className={`shrink-0 transition-all duration-200 ${
                      copied 
                        ? 'bg-green-50 border-green-300 text-green-600' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                {copied && (
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <Check className="w-3 h-3 mr-1" />
                    Link copied to clipboard!
                  </p>
                )}
              </div>

              {/* Property Preview */}
              <div className="border-t pt-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Share2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {propertyTitle}
                      </p>
                      <p className="text-xs text-gray-600 truncate">
                        {propertyLocation} • {propertyPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}