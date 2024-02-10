import type { IGame } from "@/interfaces/IGame";

const gamesData: IGame = [
    {
        id: 1,
        name: "EA SPORTS FC™ 24",
        image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000061749/bd653d83bdcc1613cfacae62845933633ce97fffc52e7e4070014eb41f9e75f7",
        price: 1099,
        release_date: new Date(2023, 9, 29),
    },
    {
        id: 2,
        name: "Minecraft",
        image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
        price: 499,
        release_date: new Date(2018, 6, 20)
    },
    {
        id: 3,
        name: "MARIO + RABBIDS SPARKS OF HOPE",
        image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000035797/f3dc6aa2e25ab6d713ac5da17e90ce676dfadf6a0b8fefb37b8b5159d89fc36c",
        price: 1399,
        release_date: new Date(2022, 10, 20)
    }
]

export default gamesData