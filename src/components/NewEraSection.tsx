import React from 'react';

const NewEraSection = () => {
  return (
    <div 
      className="relative py-32 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Une nouvelle ère pour vos démarches administratives
        </h2>
      </div>
    </div>
  );
};

export default NewEraSection;