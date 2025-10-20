import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";
import { API_BASE_URL } from "../config";

const useStore = create(
    persist(
        (set) => ({
            data: [],
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
                try {
                    const response = await axios.post(`${API_BASE_URL}/users/places`, place);
                    console.log("찜 성공 :", response.data);
                    set((state)=>({
                        data : [...state.data, place], 
                    }));
                    return response.data;
                } catch (error) {
                    console.log("찜 실패", error);
                    set({ error: error.message});
                }
            }
        }),
        {
        name: "food-storage", // ✅ 로컬스토리지에 저장될 key
        }
    )
);

export default useStore;
