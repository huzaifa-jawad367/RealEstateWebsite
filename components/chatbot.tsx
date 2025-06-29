"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react"

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
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isFirstVisit) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        addBotMessage(botResponses.greeting)
        setIsFirstVisit(false)
      }, 3000)
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
      setIsTyping(true)

      setTimeout(() => {
        const response = getBotResponse(inputValue)
        addBotMessage(response)
        setIsTyping(false)
      }, 1500)

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
        <Card className="w-80 h-96 shadow-2xl border-0 glass-card animate-scale-in">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs opacity-90 flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Online now
                  </p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleChat} 
                className="text-white hover:bg-white/20 h-8 w-8 rounded-full transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md"
                        : "bg-white border border-gray-200 text-gray-900 rounded-bl-md"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === "bot" && (
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Bot className="w-3 h-3 text-blue-600" />
                        </div>
                      )}
                      {message.sender === "user" && (
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <User className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.sender === "user" ? "text-white/70" : "text-gray-500"}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-md shadow-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <Bot className="w-3 h-3 text-blue-600" />
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4 bg-white rounded-b-2xl">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message... / اپنا پیغام لکھیں..."
                  className="flex-1 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by AI • We typically reply instantly
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={toggleChat}
          size="icon"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        >
          <div className="relative">
            <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            {isFirstVisit && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            )}
          </div>
        </Button>
      )}
    </div>
  )
}