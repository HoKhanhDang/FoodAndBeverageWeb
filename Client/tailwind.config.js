/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "576px",
            md: "960px",
            lg: "1440px",
        },
        extend: {
            backgroundColor: {
                main: "#FFF8EE",
                secondary: "#FFD6BA",
            },
            fontFamily: { Lexend: ["Lexend Deca", "sans-serif"] },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0, transform: "translateY(50px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                fadeDown: {
                    "0%": { opacity: 0, transform: "translateY(-20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                fadeLeft: {
                    "0%": { opacity: 0, transform: "translateX(-20px)" },
                    "100%": { opacity: 1, transform: "translateX(0)" },
                },
                fadeRight: {
                    "0%": { opacity: 0, transform: "translateX(20px)" },
                    "100%": { opacity: 1, transform: "translateX(0)" },
                },
            },
        },
    },
    variants: {
        extend: {
            display: [
                "responsive",
                "group-hover",
                "focus-within",
                "hover",
                "focus",
            ],
        },
    },
    plugins: [],
};
