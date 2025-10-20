import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";
import { API_BASE_URL } from "../config";

const useStore = create(
    persist(
        (set) => ({
            data: [],
            favoritePlaces: [],
            loading: false,
            error: null,
            fetchData: async () => {
                set({ loading: true /* useState의 역할*/ , error: null });
                try {
                    const response = await axios.get(`${API_BASE_URL}/places`);
                    console.log("📦 응답 확인:", response.data.places);
                    set({ data: response.data.places, loading: false   /* useState의 역할*/ });
                } catch (error) {
                    set({ error: error.message, loading: false });
                }
            },
            addFavoritePlace : async( place ) => {
                console.log("📤 서버로 보낼 place:", place); 
                try {
                    place = Object.fromEntries(
                        Object.entries(place).filter(([_, v]) => v != null)
                    );
                    if (!place || !place.id) {
                    console.error("🚨 place 데이터가 불완전합니다:", place);
                    return;
                    }
                    const response = await axios.post(`${API_BASE_URL}/users/places`, {place} ,{
                        headers: { "Content-Type": "application/json" }
                    });
                    console.log("찜 성공 :", response.data);
                    set((state)=>({
                        favoritePlaces: state.favoritePlaces.some( p => p.id === place.id)
                        ? state.favoritePlaces :
                        [...state.favoritePlaces, place],
                    }));
                    return response.data;
                } catch (error) {
                    console.error("❌ 찜 실패:", error.message);
                    if (error.response) {
                        console.error("📩 서버 응답 코드:", error.response.status);
                        console.error("📩 서버 응답 바디:", error.response.data);
                    } else if (error.request) {
                        console.error("📡 요청은 보냈으나 응답 없음:", error.request);
                    } else {
                        console.error("⚙️ 요청 설정 문제:", error.config);
                    }
                }
            },
            fetchFavoritePlaceData : async() => {
                set({ loading: true /* useState의 역할*/ , error: null });
                try {
                    const response = await axios.get(`${API_BASE_URL}/users/places`);
                    console.log("찜 데이터 응답 확인:", response.data.places);
                    set({ favoritePlaces : response.data.places, loading: false   /* useState의 역할*/ });                    
                } catch (error) {
                    set({ error: error.message, loading: false });
                }
            }
        }),
        {
        name: "food-storage", // ✅ 로컬스토리지에 저장될 key
        }
    )
);

export default useStore;
