export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        background2: "var(--background-2)",
        background3: "var(--background-3)",
        background4: "var(--background-4)",
        background5: "var(--background-5)",
        border: "var(--border)",
        border2: "var(--border-2)",
        color: "var(--color)",
        color2: "var(--color-2)",
        color3: "var(--color-3)",
        color4: "var(--color-4)",
        color5: "var(--color-5)"
      }, screens: {
        'mobile': '400px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
}