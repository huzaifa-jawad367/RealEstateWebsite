import { Navigation } from "@/components/navigation"
import { ChatBot } from "@/components/chatbot"
import { HomeContent } from "@/components/home-content"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HomeContent />
      <ChatBot />
    </div>
  )
}
