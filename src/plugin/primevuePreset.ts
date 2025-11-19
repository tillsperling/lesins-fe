// src/plugin/primevuePreset.ts
import { definePreset } from '@primeuix/themes';
import Lara from '@primeuix/themes/lara';

// Basic preset overriding primary + alert/status colors
export const preset = definePreset(Lara, {
    semantic: {
        // Primary palette (Tailwind-like blues – adjust to your brand)
        primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',

            // Main tokens consumed by components
            color: '{primary.600}', // default primary color
            contrastColor: '#ffffff', // text/icon over primary
            hoverColor: '{primary.700}',
            activeColor: '{primary.800}',
        },

        // Status/Alert colors
        info: {
            color: '#0ea5e9', // sky-500
            contrastColor: '#ffffff',
            hoverColor: '#0284c7',
            activeColor: '#0369a1',
        },
        success: {
            color: '#10b981', // emerald-500
            contrastColor: '#ffffff',
            hoverColor: '#059669',
            activeColor: '#047857',
        },
        warning: {
            color: '#f59e0b', // amber-500
            contrastColor: '#111827', // better contrast on warm colors
            hoverColor: '#d97706',
            activeColor: '#b45309',
        },
        danger: {
            color: '#ef4444', // red-500
            contrastColor: '#ffffff',
            hoverColor: '#dc2626',
            activeColor: '#b91c1c',
        },

        // Optional: define surface scales for light/dark (kept minimal)
        colorScheme: {
            light: {
                primary: {
                    color: '{primary.600}',
                    contrastColor: '#ffffff',
                    hoverColor: '{primary.700}',
                    activeColor: '{primary.800}',
                },
                surface: {
                    0: '#ffffff',
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                    950: '#0b1220',
                },
            },
            dark: {
                primary: {
                    color: '{primary.400}',
                    contrastColor: '#0b1220',
                    hoverColor: '{primary.300}',
                    activeColor: '{primary.200}',
                },
                surface: {
                    0: '#0b1220',
                    50: '#111827',
                    100: '#1f2937',
                    200: '#374151',
                    300: '#4b5563',
                    400: '#6b7280',
                    500: '#9ca3af',
                    600: '#d1d5db',
                    700: '#e5e7eb',
                    800: '#f3f4f6',
                    900: '#f9fafb',
                    950: '#ffffff',
                },
            },
        },
    },
    components: {
        card: {
            root: {
                shadow: 'none',
            },
        },
    },
});
