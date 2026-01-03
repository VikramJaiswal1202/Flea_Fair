'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-end relative z-40">

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">

        {/* 2025 TOUR */}
        <a
          href="#tour"
          className="pb-1"
          style={{
            fontFamily: "Helvetica World, Helvetica, Arial, sans-serif",
            fontSize: "20.3px",
            fontWeight: 700,
            color: "#5d00bb",
            borderBottom: "2px dotted #ff66c4",
          }}
        >
          2025 TOUR
        </a>

        {/* ABOUT US */}
        <a
          href="#about"
          className="pb-1"
          style={{
            fontFamily: "Helvetica World, Helvetica, Arial, sans-serif",
            fontSize: "20.3px",
            fontWeight: 700,
            color: "#5d00bb",
            borderBottom: "2px dotted #ff66c4",
          }}
        >
          ABOUT US
        </a>

        {/* GET TICKETS button */}
        <button
          style={{
            backgroundColor: "#ff66c4",
            fontFamily: "Helvetica World, Helvetica, Arial, sans-serif",
            fontSize: "20.3px",
            fontWeight: 900,
            color: "#5d00bb",
            padding: "14px 32px",
            borderRadius: "40px",
          }}
        >
          GET TICKETS
        </button>

        {/* Hamburger icon */}
        <button className="ml-2 p-2">
          <div className="space-y-1.5">
            <span className="block w-8 h-0.5" style={{ background: "#5d00bb" }}></span>
            <span className="block w-8 h-0.5" style={{ background: "#5d00bb" }}></span>
            <span className="block w-8 h-0.5" style={{ background: "#5d00bb" }}></span>
          </div>
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center gap-4">
        <button
          style={{
            backgroundColor: "#ff66c4",
            fontFamily: "Helvetica World, Helvetica, Arial, sans-serif",
            fontSize: "12.8px",
            fontWeight: 700,
            padding: "8px 16px",
            borderRadius: "999px",
            color: "#5d00bb",
          }}
        >
          Tickets
        </button>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} color="#5d00bb" /> : <Menu size={28} color="#5d00bb" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 w-full bg-white shadow-xl border-t p-4 flex flex-col gap-4 md:hidden z-50">
          <a
            href="#tour"
            style={{
              fontFamily: "Helvetica World, Helvetica, Arial, sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              color: "#5d00bb",
            }}
          >
            2025 TOUR
          </a>
          <a
            href="#about"
            style={{
              fontFamily: "Helvetica World, Helvetica, Arial, sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              color: "#5d00bb",
            }}
          >
            ABOUT US
          </a>
        </div>
      )}
    </nav>
  );
};
