import React, { useState, useEffect } from "react";

function GeoLocationPlace() {
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setPosition((prev) => ({
        ...prev,
        error: "브라우저가 Geolocation을 지원하지 않습니다.",
      }));
      return;
    }

    const success = (pos) => {
      const { latitude, longitude } = pos.coords;
      //console.log("✅ 현재 위치:", latitude, longitude);
      setPosition({ latitude, longitude, error: null });
    };

    const error = (err) => {
      console.error("❌ 위치 에러:", err);
      setPosition((prev) => ({
        ...prev,
        error: err.message,
      }));
    };

    // ✅ 위치를 한 번만 가져오기 (watchPosition → getCurrentPosition)
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      timeout: 10000,
    });

  }, []);


  

  return (
    <>
      {position.error && <p style={{ color: "red" }}>오류: {position.error}</p>}
      
    </>
  );
}

export default GeoLocationPlace;
