"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Send, X } from "lucide-react"

export default function ChatSystem() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ id: 1, text: "Hi there! How can we help you today?", sender: "bot" }])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // Add user message
    const userMessage = { id: Date.now(), text: newMessage, sender: "user" }
    setMessages([...messages, userMessage])
    setNewMessage("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: "Thanks for reaching out! Our team will get back to you soon. Meanwhile, feel free to explore our services or portfolio.",
        sender: "bot",
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-purple-600 text-white shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-full max-w-sm bg-white dark:bg-gray-900 rounded-lg shadow-xl z-50 overflow-hidden border border-gray-200 dark:border-gray-800"
          >
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
              <h3 className="font-medium">Codersque Support</h3>
              <p className="text-sm opacity-90">We typically reply within a few minutes</p>
            </div>

            {/* Messages Container */}
            <div className="p-4 h-80 overflow-y-auto flex flex-col space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-purple-600 text-white rounded-tr-none"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-tl-none"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-800 p-4 flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400"
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-purple-600 text-white"
                aria-label="Send message"
              >
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
