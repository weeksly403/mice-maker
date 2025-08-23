import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				arabic: ['Amiri', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					hover: 'hsl(var(--secondary-hover))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					hover: 'hsl(var(--accent-hover))'
				},
				gold: {
					DEFAULT: 'hsl(var(--gold))',
					foreground: 'hsl(var(--gold-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "scale-in-bounce": {
          "0%": {
            transform: "scale(0.3)",
            opacity: "0"
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "0.8"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "rotate-fade-in": {
          "0%": {
            transform: "rotate(-10deg) scale(0.9)",
            opacity: "0"
          },
          "100%": {
            transform: "rotate(0deg) scale(1)",
            opacity: "1"
          }
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-10px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        "slide-up": {
          "0%": {
            transform: "translateY(10px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        "slide-up-subtle": {
          "0%": {
            transform: "translateY(15px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-20px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(20px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "elastic-in": {
          "0%": {
            transform: "scale(0.8)",
            opacity: "0"
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: "0.7"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "bounce-subtle": {
          "0%, 20%, 53%, 80%, 100%": {
            animation_timing_function: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: "translate3d(0, 0, 0)"
          },
          "40%, 43%": {
            animation_timing_function: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            transform: "translate3d(0, -8px, 0)"
          },
          "70%": {
            animation_timing_function: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            transform: "translate3d(0, -4px, 0)"
          },
          "90%": {
            transform: "translate3d(0, -2px, 0)"
          }
        },
        "progressive-reveal": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) scale(0.95)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)"
          }
        },
        "stagger-fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "fade-in": "fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in-down": "fade-in-down 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in-left": "fade-in-left 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in-right": "fade-in-right 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        "scale-in": "scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "scale-in-bounce": "scale-in-bounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "rotate-fade-in": "rotate-fade-in 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-down": "slide-down 0.4s ease-out",
        "slide-up": "slide-up 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up-subtle": "slide-up-subtle 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in-left": "slide-in-left 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in-right": "slide-in-right 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "elastic-in": "elastic-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "bounce-subtle": "bounce-subtle 1s ease-in-out",
        "progressive-reveal": "progressive-reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "stagger-fade-in": "stagger-fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
      },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
