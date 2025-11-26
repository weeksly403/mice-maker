import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext', // Modern JavaScript only (ES2020+)
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // React Router
          if (id.includes('node_modules/react-router-dom')) {
            return 'router-vendor';
          }
          // Radix UI - Split into smaller chunks
          if (id.includes('@radix-ui/react-dialog') || id.includes('@radix-ui/react-alert-dialog')) {
            return 'radix-dialog';
          }
          if (id.includes('@radix-ui/react-dropdown-menu') || id.includes('@radix-ui/react-context-menu') || id.includes('@radix-ui/react-menubar')) {
            return 'radix-menu';
          }
          if (id.includes('@radix-ui/react-accordion') || id.includes('@radix-ui/react-collapsible')) {
            return 'radix-accordion';
          }
          if (id.includes('@radix-ui/react-tabs') || id.includes('@radix-ui/react-navigation-menu')) {
            return 'radix-navigation';
          }
          if (id.includes('@radix-ui/react-tooltip') || id.includes('@radix-ui/react-popover') || id.includes('@radix-ui/react-hover-card')) {
            return 'radix-tooltip';
          }
          if (id.includes('@radix-ui')) {
            return 'radix-other';
          }
          // Form libraries
          if (id.includes('react-hook-form') || id.includes('zod') || id.includes('@hookform/resolvers')) {
            return 'form-vendor';
          }
          // Supabase & React Query
          if (id.includes('@supabase/supabase-js')) {
            return 'supabase-vendor';
          }
          if (id.includes('@tanstack/react-query')) {
            return 'react-query-vendor';
          }
          // Recharts (heavy charting library)
          if (id.includes('recharts')) {
            return 'recharts-vendor';
          }
          // Lucide icons
          if (id.includes('lucide-react')) {
            return 'icons-vendor';
          }
          // Framer Motion (if used)
          if (id.includes('framer-motion')) {
            return 'motion-vendor';
          }
          // Date libraries
          if (id.includes('date-fns')) {
            return 'date-vendor';
          }
          // Large node_modules packages
          if (id.includes('node_modules')) {
            return 'vendor-other';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Keep console during build for react-snap diagnostics
        drop_debugger: true,
        pure_funcs: mode === 'production' ? ['console.debug'] : [],
      },
      format: {
        comments: false, // Remove comments in production
      },
    },
    sourcemap: mode === 'development',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    esbuildOptions: {
      target: 'esnext', // Modern JavaScript for faster builds
    },
  },
}));
