/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  daisyui: {
    themes: [
      {
        athena: {
          // ── Primary: Cool steel blue — clinical, confident, modern
          "primary":          "#4A7C9B",
          "primary-content":  "#FFFFFF",

          // ── Secondary: Soft blue-grey — subtle, professional
          "secondary":        "#7A9BAE",
          "secondary-content":"#FFFFFF",

          // ── Accent: Muted sage green — fresh, scientific
          "accent":           "#6A9E8C",
          "accent-content":   "#FFFFFF",

          // ── Neutral: Cool dark grey — sharp text, not harsh
          "neutral":          "#3A4550",
          "neutral-content":  "#EDF1F4",

          // ── Base: Cool bright whites — airy, light-filled, clinical
          "base-100":         "#FFFFFF",
          "base-200":         "#EDF1F4",
          "base-300":         "#DFE5EA",
          "base-content":     "#3A4550",

          // ── State colors — soft, muted
          "info":             "#5B9EC4",
          "info-content":     "#FFFFFF",
          "success":          "#6A9E8C",
          "success-content":  "#FFFFFF",
          "warning":          "#C4A95A",
          "warning-content":  "#FFFFFF",
          "error":            "#B87070",
          "error-content":    "#FFFFFF",

          // ── Design tokens
          "--rounded-box":          "0.5rem",
          "--rounded-btn":          "0.375rem",
          "--rounded-badge":        "1rem",
          "--animation-btn":        "0.2s",
          "--animation-input":      "0.2s",
          "--btn-focus-scale":      "0.98",
          "--border-btn":           "1px",
          "--tab-border":           "1px",
          "--tab-radius":           "0.375rem",
        },
      },
    ],
    darkTheme: "athena",
    logs: false,
  }
}
