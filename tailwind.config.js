/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: "'Nunito', sans-serif",
                serif: "'Alice', serif",
            },
            colors: {
                blue: {
                    300: "#269BFF",
                    600: "#1188EE",
                    900: "#0467CC",
                },
                gray: {
                    100: "#EFF4F9",
                    200: "#BBCCDD",
                    300: "#99AABB",
                    700: "#667788",
                    800: "#445566",
                    900: "#17222D",
                },
                red: {
                    300: "#FF3726",
                    600: "#EE2211",
                    900: "#D91504",
                },
            },
        },
    },
    plugins: [],
}
