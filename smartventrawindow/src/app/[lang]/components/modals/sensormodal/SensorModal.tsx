"use client";

import React from "react";
import Image from "next/image";

const SensorModal = ({ sensor, onClose }:any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-lg w-full flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 text-center">{sensor.name}</h2>
        
        {/* Afbeeldingen onder elkaar, iets kleiner */}
        <div className="flex flex-col items-center gap-3 w-full">
          <Image src={sensor.image} alt={sensor.name} width={200} height={150} className="rounded-lg shadow-md w-full max-w-[200px] object-contain" />
          <Image src={sensor.modalImage} alt={sensor.name} width={200} height={150} className="rounded-lg shadow-md w-full max-w-[200px] object-contain" />
        </div>

        <p className="mt-3 text-gray-300 text-left w-full text-xs md:text-sm">{sensor.description}</p>
        <button
          className="mt-5 bg-red-500 text-white font-bold px-3 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-all"
          onClick={onClose}
        >
          Sluiten
        </button>
      </div>
    </div>
  );
};

export default SensorModal;