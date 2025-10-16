import React, { useState } from 'react'

function UserLocation() {
    const [location, setLocation ] = useState({});
    const [ error, setError ] = useState(null);

    useEffect( () => {
        if( !navigator.geolocation ){
            setError("이 브라는 위치 정보를 지원하지 않습니다.");
            return;
        }
    })

    navigator.geolocation.getCurrentPosition()
  return (
    <>
    </>
  )
}

export default UserLocation