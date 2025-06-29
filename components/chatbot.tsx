"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const botResponses = {
  greeting: "السلام علیکم! Welcome to Real Estate Pakistan. How can I help you find your dream property today?",
  properties:
    "We have a wide range of properties in Islamabad, Rawalpindi, Lahore, and Karachi. What type of property are you looking for - house, apartment, or commercial?",
  pricing: "Our properties range from ₨30 Lakh to ₨2 Crore. What's your budget range?",
  location:
    "We specialize in prime locations like F-7, F-8, DHA, Bahria Town, and Blue Area. Which area interests you?",
  contact:
    "You can reach us at +92 51 123-4567 or email info@realestatepk.com. Would you like to schedule a property viewing?",
  default:
    "I understand you're interested in real estate. Let me connect you with one of our agents who can provide detailed information about available properties.",
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Auto-open chatbot on first visit
    if (isFirstVisit) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        addBotMessage(botResponses.greeting)
        setIsFirstVisit(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isFirstVisit])

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: "bot",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("budget") ||
      message.includes("قیمت")
    ) {
      return botResponses.pricing
    } else if (
      message.includes("location") ||
      message.includes("area") ||
      message.includes("where") ||
      message.includes("جگہ")
    ) {
      return botResponses.location
    } else if (
      message.includes("property") ||
      message.includes("house") ||
      message.includes("apartment") ||
      message.includes("گھر")
    ) {
      return botResponses.properties
    } else if (
      message.includes("contact") ||
      message.includes("phone") ||
      message.includes("call") ||
      message.includes("رابطہ")
    ) {
      return botResponses.contact
    } else if (message.includes("hello") || message.includes("hi") || message.includes("سلام")) {
      return botResponses.greeting
    } else {
      return botResponses.default
    }
  }

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addUserMessage(inputValue)

      // Simulate bot response delay
      setTimeout(() => {
        const response = getBotResponse(inputValue)
        addBotMessage(response)
      }, 1000)

      setInputValue("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(botResponses.greeting)
      }, 500)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-80 h-96 shadow-2xl border-2 border-blue-200">
          <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bot className="w-6 h-6 mr-2" />
                <div>
                  <h3 className="font-semibold">Customer Support</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-blue-700 h-8 w-8">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-gray-100 text-gray-900 rounded-bl-none"
                    }`}
                  >
                    <div className="flex items-start">
                      {message.sender === "bot" && <Bot className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />}
                      {message.sender === "user" && <User className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message... / اپنا پیغام لکھیں..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">We typically reply within a few minutes</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={toggleChat}
          size="icon"
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}
    </div>
  )
}
