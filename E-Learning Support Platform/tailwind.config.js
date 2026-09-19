/**
 * إعدادات التصميم الموحدة لمنصة دعم التعليم الإلكتروني
 * ملف واحد يتم استدعاؤه من كل صفحات المنصة لضمان توحيد الألوان والخطوط والمقاسات.
 */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* الأساسي - كحلي المنصة (مأخوذ من الشعار) */
        "primary": "#1e3a8a",
        "on-primary": "#ffffff",
        "primary-container": "#dbe4ff",
        "on-primary-container": "#001357",
        "primary-fixed": "#dbe4ff",
        "primary-fixed-dim": "#b3c4ff",
        "on-primary-fixed": "#001357",
        "on-primary-fixed-variant": "#28408a",
        "inverse-primary": "#b3c4ff",

        /* الثانوي - أخضر مائي (مأخوذ من الشعار) */
        "secondary": "#0d9488",
        "on-secondary": "#ffffff",
        "secondary-container": "#a6f2e8",
        "on-secondary-container": "#00201d",
        "secondary-fixed": "#a6f2e8",
        "secondary-fixed-dim": "#74d6ca",
        "on-secondary-fixed": "#00201d",
        "on-secondary-fixed-variant": "#0a5c54",

        /* الثالثي - أزرق سماوي (لون التمييز في الشعار) */
        "tertiary": "#0284c7",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#d3ecff",
        "on-tertiary-container": "#00304d",
        "tertiary-fixed": "#d3ecff",
        "tertiary-fixed-dim": "#8ecdf5",
        "on-tertiary-fixed": "#00304d",
        "on-tertiary-fixed-variant": "#05517d",

        /* الخطأ */
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        /* الأسطح والخلفيات */
        "background": "#f8f9ff",
        "on-background": "#0b1c30",
        "surface": "#f8f9ff",
        "on-surface": "#0b1c30",
        "on-surface-variant": "#45464f",
        "surface-variant": "#dfe2f2",
        "outline": "#75778a",
        "outline-variant": "#c5c6d6",
        "surface-dim": "#d8dae5",
        "surface-bright": "#f8f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f1f2fb",
        "surface-container": "#ebedf7",
        "surface-container-high": "#e5e7f2",
        "surface-container-highest": "#dfe1ec",
        "inverse-surface": "#2d3142",
        "inverse-on-surface": "#eff0fa",
        "surface-tint": "#1e3a8a"
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1.25rem",
        "full": "9999px"
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "gutter": "1.5rem",
        "gutter-lg": "2rem",
        "gutter-mobile": "1rem",
        "margin": "2rem",
        "margin-mobile": "1rem",
        "margin-lg": "2.5rem",
        "margin-desktop": "3rem"
      },
      fontFamily: {
        "display-lg": ["Cairo", "sans-serif"],
        "display": ["Cairo", "sans-serif"],
        "headline-xl": ["Cairo", "sans-serif"],
        "headline-lg": ["Cairo", "sans-serif"],
        "headline-md": ["Cairo", "sans-serif"],
        "headline-sm": ["Cairo", "sans-serif"],
        "title-lg": ["Cairo", "sans-serif"],
        "title-md": ["Cairo", "sans-serif"],
        "body-lg": ["Tajawal", "sans-serif"],
        "body-md": ["Tajawal", "sans-serif"],
        "body-sm": ["Tajawal", "sans-serif"],
        "label-lg": ["Tajawal", "sans-serif"],
        "label-md": ["Tajawal", "sans-serif"],
        "label-sm": ["Tajawal", "sans-serif"],
        "code": ["Roboto Mono", "monospace"]
      },
      fontSize: {
        "display-lg": ["2.5rem", { "lineHeight": "3.25rem", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "display": ["3rem", { "lineHeight": "3.75rem", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-xl": ["2rem", { "lineHeight": "2.75rem", "fontWeight": "700" }],
        "headline-lg": ["1.75rem", { "lineHeight": "2.375rem", "fontWeight": "700" }],
        "headline-md": ["1.5rem", { "lineHeight": "2.125rem", "fontWeight": "600" }],
        "headline-sm": ["1.25rem", { "lineHeight": "1.875rem", "fontWeight": "600" }],
        "title-lg": ["1.125rem", { "lineHeight": "1.75rem", "fontWeight": "600" }],
        "title-md": ["1rem", { "lineHeight": "1.5rem", "fontWeight": "600" }],
        "body-lg": ["1.125rem", { "lineHeight": "1.75rem", "fontWeight": "400" }],
        "body-md": ["1rem", { "lineHeight": "1.625rem", "fontWeight": "400" }],
        "body-sm": ["0.875rem", { "lineHeight": "1.375rem", "fontWeight": "400" }],
        "label-lg": ["0.875rem", { "lineHeight": "1.25rem", "letterSpacing": "0.01em", "fontWeight": "600" }],
        "label-md": ["0.8125rem", { "lineHeight": "1.125rem", "letterSpacing": "0.02em", "fontWeight": "600" }],
        "label-sm": ["0.75rem", { "lineHeight": "1rem", "letterSpacing": "0.02em", "fontWeight": "600" }],
        "code": ["0.875rem", { "lineHeight": "1.375rem", "fontWeight": "400" }]
      }
    }
  }
};
