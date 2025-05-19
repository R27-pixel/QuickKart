import React from "react";
import { CubeIcon } from '@heroicons/react/24/solid';


export default function BenefitCard({ title, description }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <div className="mb-4">
        {/* Hardcode CubeIcon here or make it dynamic */}
        <CubeIcon className="h-8 w-8 text-purple-700 mx-auto" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
