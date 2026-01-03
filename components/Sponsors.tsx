import React from 'react';

const Sponsors: React.FC = () => {
  return (
    <section className="text-center py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 w-full overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[47px] font-black text-[#5a108a] uppercase tracking-tighter mb-8 sm:mb-10 md:mb-12 leading-[1.2] px-2">
        The Flea Fair Sponsors
      </h2>

      {/* Main Sponsor */}
      <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
        <div className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] w-full px-4">
          <img 
            src="/raisoni.png"
            alt="Raisoni Education"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Sub Sponsors */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center justify-items-center max-w-6xl mx-auto px-4 sm:px-6">

        <div className="w-full flex justify-center">
          <img 
            src="/cadence.png"
            alt="Cadence Academy"
            className="w-24 sm:w-28 md:w-32 lg:w-40 h-auto object-contain"
          />
        </div>

        <div className="w-full flex justify-center">
          <img 
            src="/ktm.png"
            alt="KTM"
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto object-contain"
          />
        </div>

        <div className="w-full flex justify-center">
          <img 
            src="/sunrise.png"
            alt="Sunrise Farms"
            className="w-24 sm:w-28 md:w-32 lg:w-40 h-auto object-contain"
          />
        </div>

        <div className="w-full flex justify-center">
          <img 
            src="/ticketwings.png"
            alt="Ticketwings"
            className="w-24 sm:w-28 md:w-32 lg:w-40 h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Sponsors;