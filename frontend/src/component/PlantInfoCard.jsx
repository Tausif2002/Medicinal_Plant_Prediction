import React from 'react'

export default function PlantInfoCard({infoIcon, infoTitle, infoDes}) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        {/* Icon at the top */}
        <div className="text-4xl text-center mb-4">
          <i className="fas fa-star text-yellow-500"></i>
        </div>
        {/* Title */}
        <div className="text-xl font-bold mb-2">{infoTitle}</div>
        {/* Description */}
        <p className="text-gray-700 text-base">This is a sample card description. Replace it with your own content.</p>
      </div>
    </div>
  )
}
