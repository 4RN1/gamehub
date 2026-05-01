"use client"
import React from 'react'

const SupportModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-zinc-800 border border-zinc-700 w-full max-w-md rounded-2xl shadow-xl p-6 z-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Support</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-sm text-white">
            Need help? Send us a message and we’ll get back to you.
          </p>

          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-zinc-500 rounded-lg px-3 py-2 outline-none  focus:border-white/60"
          />

          <textarea
            placeholder="Your message..."
            rows={4}
            className="w-full border border-zinc-500 rounded-lg px-3 py-2 outline-none focus:border-white/60"
          />

          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer">
            Send Message
          </button>
        </div>

      </div>
    </div>
  )
}

export default SupportModal