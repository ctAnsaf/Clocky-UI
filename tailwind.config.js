/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        justsans: ["JustSans", "sans-serif"],
      },
      colors: {
        primary: "#F8F9FB",
        secondary: "#3326AE",
        accent: {
          blue: "rgba(173, 182, 197, 0.2)",
          red: "#FF5F5F",
          green: "#1DEFA3",
          yellow: "#FCD981",
          orange: "#EE7200",
          white: "#F5F5F5",
        },
        dark: "#B8BBD0",
        light: "#EEEEEE",
        black: {
          1: "#252525",
          2: "#303030",
          3: "#9FA1B5",
          4: "#4A4C63",
          5: "#4E4C60",
          6: "#4E4C6036",
        },
        unselected: "#F9F9FF",
        gray: {
          1: "#F8F9FC",
          2: "#C9C9C9",
          3: "#D9D9D9",
          4: "#F2F2F2",
          5: "#45556D",
          6: "#868686",
          7: "#4B4D6499",
          8: "#4B4D64",
          9: "#9FA1B5",
          10: "#ADB6C5",
          11: "#E4E8F0",
          12: "#100F4F80",
          13: "#ADB6C533",
          14: "#EFEFF44D",
          15: "#F5F5FA",
          16: "#100F4F99",
          17: "#D3D8C4",
          18: "#FBFBFC",
          19: "#ACA9C3",
          20: "#1B192F80",
          21: "#768293",
          22: "#B8BBD03A",
          23: "#f1f3f5",
          23: "#8E8BAA",
          24: "rgb(142, 139, 170, 0.38)",
          25: "#9FA1B566"
        },
        blue: {
          dark: "#172B49",
          dark2: "#172B4999",
          dark3: "#172B49CC",
          dark4: "#100F4F",
        },
        green: {
          1: "#718835",
          2: "#65B7B7",
          3: "#E8F3EB",
          4: "#DAE8DE",
          5: "#B4E26E",
          6: "#526629",
          7: "#C7E26E",
          8: "#C6E26E",
          9: "#74f625",
        },
        red: {
          1: "#EF7171",
          2: "#DC5555",
          3: "#F69696",
          4: "#F3E8EA",
          5: "#E9DBDE",
          6: "#F47272",
        },
        orange: {
          1: "#EEC299",
          2: "#F3F2E8",
          3: "#E0DFD3",
        },
        white: {
          1: "#FFFFFF",
          2: "#F6F6FA",
          3: "#F9F9F9",
          4: "#f1f3f5",
        },
      },
      fontSize: {
        md: "1rem",
        phone_heading: "22.063",
        24: "1.5rem",
        38: "2.375rem",
      },
      backgroundImage: {
        "btn-gradient":
          "linear-gradient(94deg, #ADE26E -26.89%, #CBE26E 111.18%)",
        "btn-gradient-reverse":
          "linear-gradient(94deg, #AAE168 -26.89%, #CAEA4C 111.18%)",
        "error-button-gradient":
          "linear-gradient(90deg, #B4E26E 0%, #C7E26E 100%)",
      },
      margin: {
        6.5: "1.625rem",
        22: "5.5rem",
        500: "500px",
      },
      spacing: {
        "mini-message": "24rem", // Define your custom rem size
      },
      boxShadow: {
        "speed-dial": "0px 4px 12px 0px rgba(173, 182, 197, 0.26)",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
