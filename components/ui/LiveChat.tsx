// components/ui/LiveChat.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles, User, Bot } from 'lucide-react'

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; timestamp: Date }>>([
    { 
      text: 'Olá! Sou o assistente virtual da NXT Digital. Como posso ajudar você hoje?', 
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setMessages(prev => [...prev, { text: userMessage, isUser: true, timestamp: new Date() }])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      })

      const data = await response.json()
      
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: data.response || 'Obrigado pelo contato! Um especialista da NXT Digital entrará em contato em breve.', 
          isUser: false,
          timestamp: new Date(),
        }])
        setIsLoading(false)
      }, 1500)
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: 'Você também pode falar diretamente conosco pelo WhatsApp: (11) 99999-9999', 
        isUser: false,
        timestamp: new Date(),
      }])
      setIsLoading(false)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 glass border-white/10 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:border-white/20 group"
          >
            <MessageCircle className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse-soft" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[550px] max-h-[calc(100vh-8rem)] glass border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex-shrink-0 p-5 border-b border-white/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl glass border-white/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">NXT Digital</h3>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse-soft" />
                      <p className="text-xs text-white/40">Online</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-xl glass border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-end gap-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse' : ''}`}>
                    {/* Avatar */}
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      message.isUser ? 'glass border-white/10' : 'bg-white/5 border border-white/5'
                    }`}>
                      {message.isUser ? (
                        <User className="w-3.5 h-3.5 text-white/40" />
                      ) : (
                        <Bot className="w-3.5 h-3.5 text-white/40" />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div className={`p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-white/10 rounded-br-md'
                        : 'glass border-white/5 rounded-bl-md'
                    }`}>
                      <p className="text-sm text-white/80 leading-relaxed">{message.text}</p>
                      <p className="text-[10px] text-white/20 mt-1.5">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-end gap-2">
                    <div className="w-7 h-7 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                      <Bot className="w-3.5 h-3.5 text-white/40" />
                    </div>
                    <div className="glass border-white/5 p-4 rounded-2xl rounded-bl-md">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-white/20 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-white/20 rounded-full animate-bounce [animation-delay:0.15s]" />
                        <div className="w-2 h-2 bg-white/20 rounded-full animate-bounce [animation-delay:0.3s]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex-shrink-0 p-4 border-t border-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escreva sua mensagem..."
                  className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-300"
                >
                  <Send className="w-4 h-4 text-white/60" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}