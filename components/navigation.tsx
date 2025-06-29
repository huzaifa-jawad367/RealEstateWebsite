"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Menu, X, Phone, User, LogOut, Globe } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"
import { useLanguage } from "@/components/language-provider"
import { AuthModal } from "@/components/auth-modal"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const { user, signOut } = useAuth()
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("properties"), href: "/properties" },
    { name: t("aboutUs"), href: "/about" },
  ]

  const handleSignOut = async () => {
    await signOut()
  }

  const handleLanguageChange = (value: string) => {
    setLanguage(value as "en" | "ur")
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
              RealEstate
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}

              {/* Contact Info */}
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-1" />
                <span>+92 51 123-4567</span>
              </div>

              {/* Language Selector */}
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-gray-600" />
                <Select value={language} onValueChange={handleLanguageChange}>
                  <SelectTrigger className="w-20 h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">EN</SelectItem>
                    <SelectItem value="ur">اردو</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Auth Section */}
              {user ? (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-1" />
                    <span>{user.email}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleSignOut}>
                    <LogOut className="w-4 h-4 mr-1" />
                    {t("logout")}
                  </Button>
                </div>
              ) : (
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setShowAuthModal(true)}>
                  {t("login")}
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-2 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Contact Info */}
                <div className="px-2 py-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+92 51 123-4567</span>
                  </div>
                </div>

                {/* Mobile Language Selector */}
                <div className="px-2 flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-gray-600" />
                  <Select value={language} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="w-24 h-8 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">EN</SelectItem>
                      <SelectItem value="ur">اردو</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Mobile Auth Section */}
                {user ? (
                  <div className="px-2 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-2" />
                      <span>{user.email}</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={handleSignOut} className="w-full">
                      <LogOut className="w-4 h-4 mr-1" />
                      {t("logout")}
                    </Button>
                  </div>
                ) : (
                  <Button className="bg-blue-600 hover:bg-blue-700 mx-2" onClick={() => setShowAuthModal(true)}>
                    {t("login")}
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  )
}
