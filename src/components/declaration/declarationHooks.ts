import { Font } from "@react-pdf/renderer"
import { useEffect } from "react"

Font.register({
    family: "Roboto",
    src:
        "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});

export const useCyrilicFonts = () => (useEffect(() => {
    const loadFonts = async () => {
        await Promise.all([
            Font.load({ fontFamily: 'Roboto' })
        ])
    }
    loadFonts()
}, []))

export const useScrollToTheBottom = (bool: boolean) => useEffect(() => {
    if (bool) {
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    }
}, [bool])