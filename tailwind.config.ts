import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10160F",        // near-black with a green undertone
        charcoal: "#232B26",   // dark gray for body text
        slate: "#5C6660",      // secondary text
        mist: "#F4F7F4",       // green-tinted off-white section background
        line: "#E4E9E4",       // hairline borders
        pine: {
          DEFAULT: "#1E6B3C",  // deep green accent
          dark: "#164F2C",
          soft: "#E9F2EC",     // tinted fill for chips / icon plates
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,22,15,0.04), 0 8px 24px rgba(16,22,15,0.06)",
        lift: "0 2px 4px rgba(16,22,15,0.05), 0 16px 40px rgba(16,22,15,0.10)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      maxWidth: {
        wrap: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
