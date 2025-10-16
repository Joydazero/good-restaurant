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
            set({ loading: true, error: null });
            try {
                const response = await axios.get(`${API_BASE_URL}/places`);
                console.log("📦 응답 확인:", response.data.places);
                set({ data: response.data.places, loading: false });
            } catch (error) {
                set({ error: error.message, loading: false });
            }
        },
        }),
        {
        name: "food-storage", // ✅ 로컬스토리지에 저장될 key
        }
    )
);

export default useStore;
