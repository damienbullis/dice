/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["lcov", "text"],
      all: true,
      exclude: [
        "docs/**",
        "coverage/**",
        "dist/**",
        "**/*.d.ts",
        "**/*{.,-}test.{js,cjs,mjs,ts,tsx,jsx}",
        "**/.{eslint,prettier}rc.{js,cjs,yml}",
        "**/vite.config.*",
      ],
    },
  },
});
