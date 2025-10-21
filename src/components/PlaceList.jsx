import React, {  Suspense, lazy, useEffect, useState } from 'react'
// import PlaceItem from './PlaceItem'
import useStore from '../store/store'
import { API_BASE_URL } from "../config";
import Loading from './Loading';
import GeoLocationPlace from './GeoLocationPlace.jsx';
import { sortPlacesByDistance  } from '../data/loc.js';

const PlaceItem = lazy(() => import("./PlaceItem.jsx"));
function PlaceList() {
  const { data, loading, error, fetchData } = useStore();
  const [position, setPosition] = useState({ latitude: null, longitude: null, error: null });
  const [sortedData, setSortedData] = useState([]);

  // ✅ 맛집 데이터 불러오기
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ✅ 사용자 현재 위치 가져오기
  useEffect(() => {
    if (!navigator.geolocation) {
      setPosition((prev) => ({ ...prev, error: "브라우저가 Geolocation을 지원하지 않습니다." }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        console.log("📍 현재 위치:", latitude, longitude);
        setPosition({ latitude, longitude, error: null });
      },
      (err) => {
        console.error("❌ 위치 에러:", err);
        setPosition((prev) => ({ ...prev, error: err.message }));
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  // ✅ 위치와 데이터가 모두 준비되면 거리순 정렬 실행
  useEffect(() => {
    if (data.length > 0 && position.latitude && position.longitude) {
      const sorted = sortPlacesByDistance(data, position.latitude, position.longitude);
      setSortedData(sorted);
    }
  }, [data, position]);

  if (loading) return <Loading />;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <div className='flex flex-row flex-wrap bg-white'>
      <div className='gap-[1rem] flex justify-center w-full flex-col px-[1rem] py-[1rem]'>
        <h2 className='text-center text-5xl font-bold dongle-regular'>맛집 목록</h2>
        <div className='flex-wrap flex justify-start gap-5 mt-2'>
          <Suspense fallback={<Loading />}>
              {sortedData
              .filter(item => item)
              .map((item) => (
                <PlaceItem
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  image={`${API_BASE_URL}/${item.image.src}`}
                  location={item.location}                  
                  description={item.description}
                />
              ))}
          </Suspense>
          <GeoLocationPlace/>
        </div>
      </div>
    </div>
  )
}

export default PlaceList