"use client"
import { Marquee } from './Marquee';
import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Instagram } from 'lucide-react';

export default function QuickLinksFooter() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    // Add your email submission logic here
    setEmail('');
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Quick Links Section */}
      <section className="relative overflow-hidden bg-[#d0fea6] pb-16">
        {/* Event Banner */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-center text-sm font-bold text-purple-800 bg-[#d0fea6]">
          <Marquee />
        </div>

        {/* Quick Links Title */}
        <h2 className="mb-10 flex items-center justify-center gap-5 text-center text-5xl font-black uppercase text-purple-800 md:text-6xl">
          QUICK LINKS
        </h2>

        {/* Links Container */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-5 md:px-6 lg:px-8 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {/* Jaipur Links */}
          <div className="group min-h-[150px] cursor-pointer rounded-tr-2xl sm:rounded-tr-3xl border-3 sm:border-4 border-purple-800 bg-white/60 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 hover:shadow-xl w-full">
            <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-black uppercase text-purple-800">
              Jaipur Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="cursor-pointer font-bold text-sm sm:text-base text-gray-800 transition-colors hover:text-purple-800">
                ↪ stalls
              </li>
              <li className="cursor-pointer font-bold text-sm sm:text-base text-gray-800 transition-colors hover:text-purple-800">
                ↪ vendors
              </li>
              <li className="cursor-pointer font-bold text-sm sm:text-base text-gray-800 transition-colors hover:text-purple-800">
                ↪ artists
              </li>
            </ul>
          </div>

          {/* Join as Partner */}
          <div className="group min-h-[150px] cursor-pointer rounded-tr-2xl sm:rounded-tr-3xl border-3 sm:border-4 border-purple-800 bg-white/60 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 hover:shadow-xl w-full">
            <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-black uppercase text-purple-800">
              Join as a Partner
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="cursor-pointer font-bold text-sm sm:text-base text-gray-800 transition-colors hover:text-purple-800">
                ↪ Sponsorship Form
              </li>
            </ul>
          </div>

          {/* Hiring */}
          <div className="group min-h-[150px] cursor-pointer rounded-tr-2xl sm:rounded-tr-3xl border-3 sm:border-4 border-purple-800 bg-white/60 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 hover:shadow-xl w-full">
            <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-black uppercase text-purple-800">
              Hiring
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="cursor-pointer font-bold text-sm sm:text-base text-gray-800 transition-colors hover:text-purple-800">
                ↪ Designer
              </li>
              <li className="cursor-pointer font-bold text-sm sm:text-base text-gray-800 transition-colors hover:text-purple-800">
                ↪ PR Head
              </li>
              <li className="cursor-pointer font-bold text-sm sm:text-base text-gray-800 transition-colors hover:text-purple-800">
                ↪ Marketing Head
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="group min-h-[150px] cursor-pointer rounded-tr-2xl sm:rounded-tr-3xl border-3 sm:border-4 border-purple-800 bg-white/60 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 hover:shadow-xl w-full">
            <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-black uppercase text-purple-800">
              Connect
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="cursor-pointer font-bold text-sm sm:text-base text-gray-800 transition-colors hover:text-purple-800">
                ↪ About Us
              </li>
              <li className="cursor-pointer font-bold text-sm sm:text-base text-gray-800 transition-colors hover:text-purple-800">
                ↪ Contact
              </li>
              <li className="cursor-pointer font-bold text-sm sm:text-base text-gray-800 transition-colors hover:text-purple-800">
                ↪ FAQ
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5e1687] px-5 py-12 md:py-16 text-white">
        <div className="mx-auto max-w-6xl">
          {/* Footer Top - Social Icons */}
          <div className="mb-8 md:mb-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-6 md:gap-8">
            {/* Email Icon */}
            <div className="flex items-center gap-3 md:gap-4 text-lg md:text-xl">
              <a href="">
                <button>
                  <img src="/mail.png" alt="" />
                </button>
              </a>
            </div>
            
            {/* Instagram Icon */}
            <div className="flex items-center gap-3 md:gap-4">
              <a href="">
                <button>
                  <img src="/insta.png" alt="" />
                </button>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mb-10 md:mb-12">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="Enter your email address"
                className="w-full max-w-md rounded-full border-none bg-pink-200 px-5 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-800 placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
          </div>

          {/* Brand Name */}
          <div className="text-center">
            <img src="/image.png" alt="The Flea Fair" className="mx-auto max-w-full h-auto" />
          </div>
        </div>
      </footer>
    </div>
  );
}