import { Font } from "@react-pdf/renderer"
import { useEffect } from "react"


import robotoBlack from "../assets/fonts/Roboto/Roboto-Black.ttf"
import robotoMedium from "../assets/fonts/Roboto/Roboto-Medium.ttf"
import robotoLight from "../assets/fonts/Roboto/Roboto-Light.ttf"

Font.register({
    family: "Roboto",
    fonts: [
        { src: robotoLight, fontWeight: 300 },
        { src: robotoMedium, fontWeight: 500 },
        { src: robotoBlack, fontWeight: 900 }
    ]
});

export const useRobotoFonts = () => (useEffect(() => {
    const loadFonts = async () => {
        await Promise.all([
            Font.load({ fontFamily: 'Roboto' })
        ])
    }
    loadFonts()
}, []))

export const useScrollToTheBottom = (bool: boolean = true) => useEffect(() => {
    if (bool) {
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    }
}, [bool])