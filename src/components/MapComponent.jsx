"use client";
import React, { useEffect, useRef } from "react";

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Google Maps API'yi yüklemek için bir fonksiyon oluştur
    const loadGoogleMapsScript = () => {
      const existingScript = document.getElementById("googleMaps");
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=Your_API_Key&callback=initMap`;
        script.id = "googleMaps";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
          if (window.google && window.google.maps) {
            initMap();
          }
        };
      } else {
        if (window.google && window.google.maps) {
          initMap();
        }
      }
    };

    const initMap = () => {
      if (mapRef.current && window.google && window.google.maps) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 37.7749, lng: -122.4194 }, // Başlangıç konumu
          zoom: 10, // Yakınlık seviyesi
        });

        // Haritaya işaretçi ekleyelim
        new window.google.maps.Marker({
          position: { lat: 37.7749, lng: -122.4194 },
          map,
          title: "Başlangıç Noktası",
        });
      }
    };

    loadGoogleMapsScript();
  }, []);

  return (
    <div
      ref={mapRef}
      id="map"
      className="w-full h-full  " 
    />
  );
};

export default MapComponent;
