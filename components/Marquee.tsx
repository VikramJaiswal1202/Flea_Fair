import React from "react";
import { Star } from "lucide-react";

export const Marquee: React.FC = () => {
  const text = "JAIPUR EDITION 24th & 25th JANUARY AT BIRLA AUDITORIUM";

  return (
    <div className="w-full bg-[#C4EBFF] overflow-hidden py-2">
      <div className="flex items-center whitespace-nowrap animate-marquee">
        {/* repeat twice for perfect infinite scroll */}
        {[...Array(2)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex">
            {[...Array(10)].map((_, i) => (
              <div key={`${groupIndex}-${i}`} className="flex items-center mx-6">
                <Star className="w-4 h-4 text-[#5d00bb] fill-[#5d00bb]" />
                <span
                  className="font-bold tracking-wide mx-4"
                  style={{
                    fontFamily: "Helvetica World, Helvetica, Arial, sans-serif",
                    fontSize: "16px",
                    color: "#5d00bb",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
