import React from 'react';

const PersonalInfo = () => {
  // Objek info pribadi
  const myInfo = {
    ttl: "Bandung, 27 Juni 2004",
    gender: "Laki-laki",
    tinggiBadan: "175 cm",
    beratBadan: "70 kg",
    statusPernikahan: "Belum Menikah",
    whatsapp: "+62 896 3003 7103",
    email: "raflyra027@gmail.com",
  };

  // Fungsi untuk memformat key menjadi lebih rapi
  const formatKey = (key: string): string => {
    // Ubah camelCase menjadi kata-kata terpisah dan kapitalisasi huruf pertama
    let words = key.replace(/([a-z])([A-Z])/g, '$1 $2');
    words = words.charAt(0).toUpperCase() + words.slice(1);
    return words;
  };

  return (
    <div className="max-w-md mx-auto my-5 p-6 bg-black rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Info Pribadi</h2>
      <ul className="space-y-3">
        {Object.entries(myInfo).map(([key, value]) => (
          <li key={key} className="flex items-center p-3 bg-gray-800 text-white rounded-lg">
            <span className="font-semibold capitalize mr-2">{formatKey(key)}:</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalInfo;
