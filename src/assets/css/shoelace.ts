/* eslint-disable max-len */
export const waThemeString = `
.lexml-parecer-scope {
  @layer wa-native, wa-utilities, wa-color-palette, wa-color-variant, wa-theme, wa-theme-dimension, wa-theme-overrides;
  /* Order of precedence for all cascade layers in Web Awesome */
  /* Rules shared by all palettes */
  @layer wa-color-variant {
    :where(:host), /* default */
    .wa-brand-blue {
      --wa-color-brand-95: var(--wa-color-blue-95);
      --wa-color-brand-90: var(--wa-color-blue-90);
      --wa-color-brand-80: var(--wa-color-blue-80);
      --wa-color-brand-70: var(--wa-color-blue-70);
      --wa-color-brand-60: var(--wa-color-blue-60);
      --wa-color-brand-50: var(--wa-color-blue-50);
      --wa-color-brand-40: var(--wa-color-blue-40);
      --wa-color-brand-30: var(--wa-color-blue-30);
      --wa-color-brand-20: var(--wa-color-blue-20);
      --wa-color-brand-10: var(--wa-color-blue-10);
      --wa-color-brand-05: var(--wa-color-blue-05);
      --wa-color-brand: var(--wa-color-blue);
      --wa-color-brand-on: var(--wa-color-blue-on);
    }

    .wa-brand-red {
      --wa-color-brand-95: var(--wa-color-red-95);
      --wa-color-brand-90: var(--wa-color-red-90);
      --wa-color-brand-80: var(--wa-color-red-80);
      --wa-color-brand-70: var(--wa-color-red-70);
      --wa-color-brand-60: var(--wa-color-red-60);
      --wa-color-brand-50: var(--wa-color-red-50);
      --wa-color-brand-40: var(--wa-color-red-40);
      --wa-color-brand-30: var(--wa-color-red-30);
      --wa-color-brand-20: var(--wa-color-red-20);
      --wa-color-brand-10: var(--wa-color-red-10);
      --wa-color-brand-05: var(--wa-color-red-05);
      --wa-color-brand: var(--wa-color-red);
      --wa-color-brand-on: var(--wa-color-red-on);
    }

    .wa-brand-orange {
      --wa-color-brand-95: var(--wa-color-orange-95);
      --wa-color-brand-90: var(--wa-color-orange-90);
      --wa-color-brand-80: var(--wa-color-orange-80);
      --wa-color-brand-70: var(--wa-color-orange-70);
      --wa-color-brand-60: var(--wa-color-orange-60);
      --wa-color-brand-50: var(--wa-color-orange-50);
      --wa-color-brand-40: var(--wa-color-orange-40);
      --wa-color-brand-30: var(--wa-color-orange-30);
      --wa-color-brand-20: var(--wa-color-orange-20);
      --wa-color-brand-10: var(--wa-color-orange-10);
      --wa-color-brand-05: var(--wa-color-orange-05);
      --wa-color-brand: var(--wa-color-orange);
      --wa-color-brand-on: var(--wa-color-orange-on);
    }

    .wa-brand-yellow {
      --wa-color-brand-95: var(--wa-color-yellow-95);
      --wa-color-brand-90: var(--wa-color-yellow-90);
      --wa-color-brand-80: var(--wa-color-yellow-80);
      --wa-color-brand-70: var(--wa-color-yellow-70);
      --wa-color-brand-60: var(--wa-color-yellow-60);
      --wa-color-brand-50: var(--wa-color-yellow-50);
      --wa-color-brand-40: var(--wa-color-yellow-40);
      --wa-color-brand-30: var(--wa-color-yellow-30);
      --wa-color-brand-20: var(--wa-color-yellow-20);
      --wa-color-brand-10: var(--wa-color-yellow-10);
      --wa-color-brand-05: var(--wa-color-yellow-05);
      --wa-color-brand: var(--wa-color-yellow);
      --wa-color-brand-on: var(--wa-color-yellow-on);
    }

    .wa-brand-green {
      --wa-color-brand-95: var(--wa-color-green-95);
      --wa-color-brand-90: var(--wa-color-green-90);
      --wa-color-brand-80: var(--wa-color-green-80);
      --wa-color-brand-70: var(--wa-color-green-70);
      --wa-color-brand-60: var(--wa-color-green-60);
      --wa-color-brand-50: var(--wa-color-green-50);
      --wa-color-brand-40: var(--wa-color-green-40);
      --wa-color-brand-30: var(--wa-color-green-30);
      --wa-color-brand-20: var(--wa-color-green-20);
      --wa-color-brand-10: var(--wa-color-green-10);
      --wa-color-brand-05: var(--wa-color-green-05);
      --wa-color-brand: var(--wa-color-green);
      --wa-color-brand-on: var(--wa-color-green-on);
    }

    .wa-brand-cyan {
      --wa-color-brand-95: var(--wa-color-cyan-95);
      --wa-color-brand-90: var(--wa-color-cyan-90);
      --wa-color-brand-80: var(--wa-color-cyan-80);
      --wa-color-brand-70: var(--wa-color-cyan-70);
      --wa-color-brand-60: var(--wa-color-cyan-60);
      --wa-color-brand-50: var(--wa-color-cyan-50);
      --wa-color-brand-40: var(--wa-color-cyan-40);
      --wa-color-brand-30: var(--wa-color-cyan-30);
      --wa-color-brand-20: var(--wa-color-cyan-20);
      --wa-color-brand-10: var(--wa-color-cyan-10);
      --wa-color-brand-05: var(--wa-color-cyan-05);
      --wa-color-brand: var(--wa-color-cyan);
      --wa-color-brand-on: var(--wa-color-cyan-on);
    }

    .wa-brand-indigo {
      --wa-color-brand-95: var(--wa-color-indigo-95);
      --wa-color-brand-90: var(--wa-color-indigo-90);
      --wa-color-brand-80: var(--wa-color-indigo-80);
      --wa-color-brand-70: var(--wa-color-indigo-70);
      --wa-color-brand-60: var(--wa-color-indigo-60);
      --wa-color-brand-50: var(--wa-color-indigo-50);
      --wa-color-brand-40: var(--wa-color-indigo-40);
      --wa-color-brand-30: var(--wa-color-indigo-30);
      --wa-color-brand-20: var(--wa-color-indigo-20);
      --wa-color-brand-10: var(--wa-color-indigo-10);
      --wa-color-brand-05: var(--wa-color-indigo-05);
      --wa-color-brand: var(--wa-color-indigo);
      --wa-color-brand-on: var(--wa-color-indigo-on);
    }

    .wa-brand-purple {
      --wa-color-brand-95: var(--wa-color-purple-95);
      --wa-color-brand-90: var(--wa-color-purple-90);
      --wa-color-brand-80: var(--wa-color-purple-80);
      --wa-color-brand-70: var(--wa-color-purple-70);
      --wa-color-brand-60: var(--wa-color-purple-60);
      --wa-color-brand-50: var(--wa-color-purple-50);
      --wa-color-brand-40: var(--wa-color-purple-40);
      --wa-color-brand-30: var(--wa-color-purple-30);
      --wa-color-brand-20: var(--wa-color-purple-20);
      --wa-color-brand-10: var(--wa-color-purple-10);
      --wa-color-brand-05: var(--wa-color-purple-05);
      --wa-color-brand: var(--wa-color-purple);
      --wa-color-brand-on: var(--wa-color-purple-on);
    }

    .wa-brand-pink {
      --wa-color-brand-95: var(--wa-color-pink-95);
      --wa-color-brand-90: var(--wa-color-pink-90);
      --wa-color-brand-80: var(--wa-color-pink-80);
      --wa-color-brand-70: var(--wa-color-pink-70);
      --wa-color-brand-60: var(--wa-color-pink-60);
      --wa-color-brand-50: var(--wa-color-pink-50);
      --wa-color-brand-40: var(--wa-color-pink-40);
      --wa-color-brand-30: var(--wa-color-pink-30);
      --wa-color-brand-20: var(--wa-color-pink-20);
      --wa-color-brand-10: var(--wa-color-pink-10);
      --wa-color-brand-05: var(--wa-color-pink-05);
      --wa-color-brand: var(--wa-color-pink);
      --wa-color-brand-on: var(--wa-color-pink-on);
    }

    .wa-brand-gray {
      --wa-color-brand-95: var(--wa-color-gray-95);
      --wa-color-brand-90: var(--wa-color-gray-90);
      --wa-color-brand-80: var(--wa-color-gray-80);
      --wa-color-brand-70: var(--wa-color-gray-70);
      --wa-color-brand-60: var(--wa-color-gray-60);
      --wa-color-brand-50: var(--wa-color-gray-50);
      --wa-color-brand-40: var(--wa-color-gray-40);
      --wa-color-brand-30: var(--wa-color-gray-30);
      --wa-color-brand-20: var(--wa-color-gray-20);
      --wa-color-brand-10: var(--wa-color-gray-10);
      --wa-color-brand-05: var(--wa-color-gray-05);
      --wa-color-brand: var(--wa-color-gray);
      --wa-color-brand-on: var(--wa-color-gray-on);
    }
  }
  @layer wa-color-variant {
    :where(:host), /* default */
    .wa-neutral-gray {
      --wa-color-neutral-95: var(--wa-color-gray-95);
      --wa-color-neutral-90: var(--wa-color-gray-90);
      --wa-color-neutral-80: var(--wa-color-gray-80);
      --wa-color-neutral-70: var(--wa-color-gray-70);
      --wa-color-neutral-60: var(--wa-color-gray-60);
      --wa-color-neutral-50: var(--wa-color-gray-50);
      --wa-color-neutral-40: var(--wa-color-gray-40);
      --wa-color-neutral-30: var(--wa-color-gray-30);
      --wa-color-neutral-20: var(--wa-color-gray-20);
      --wa-color-neutral-10: var(--wa-color-gray-10);
      --wa-color-neutral-05: var(--wa-color-gray-05);
      --wa-color-neutral: var(--wa-color-gray);
      --wa-color-neutral-on: var(--wa-color-gray-on);
    }

    .wa-neutral-red {
      --wa-color-neutral-95: var(--wa-color-red-95);
      --wa-color-neutral-90: var(--wa-color-red-90);
      --wa-color-neutral-80: var(--wa-color-red-80);
      --wa-color-neutral-70: var(--wa-color-red-70);
      --wa-color-neutral-60: var(--wa-color-red-60);
      --wa-color-neutral-50: var(--wa-color-red-50);
      --wa-color-neutral-40: var(--wa-color-red-40);
      --wa-color-neutral-30: var(--wa-color-red-30);
      --wa-color-neutral-20: var(--wa-color-red-20);
      --wa-color-neutral-10: var(--wa-color-red-10);
      --wa-color-neutral-05: var(--wa-color-red-05);
      --wa-color-neutral: var(--wa-color-red);
      --wa-color-neutral-on: var(--wa-color-red-on);
    }

    .wa-neutral-orange {
      --wa-color-neutral-95: var(--wa-color-orange-95);
      --wa-color-neutral-90: var(--wa-color-orange-90);
      --wa-color-neutral-80: var(--wa-color-orange-80);
      --wa-color-neutral-70: var(--wa-color-orange-70);
      --wa-color-neutral-60: var(--wa-color-orange-60);
      --wa-color-neutral-50: var(--wa-color-orange-50);
      --wa-color-neutral-40: var(--wa-color-orange-40);
      --wa-color-neutral-30: var(--wa-color-orange-30);
      --wa-color-neutral-20: var(--wa-color-orange-20);
      --wa-color-neutral-10: var(--wa-color-orange-10);
      --wa-color-neutral-05: var(--wa-color-orange-05);
      --wa-color-neutral: var(--wa-color-orange);
      --wa-color-neutral-on: var(--wa-color-orange-on);
    }

    .wa-neutral-yellow {
      --wa-color-neutral-95: var(--wa-color-yellow-95);
      --wa-color-neutral-90: var(--wa-color-yellow-90);
      --wa-color-neutral-80: var(--wa-color-yellow-80);
      --wa-color-neutral-70: var(--wa-color-yellow-70);
      --wa-color-neutral-60: var(--wa-color-yellow-60);
      --wa-color-neutral-50: var(--wa-color-yellow-50);
      --wa-color-neutral-40: var(--wa-color-yellow-40);
      --wa-color-neutral-30: var(--wa-color-yellow-30);
      --wa-color-neutral-20: var(--wa-color-yellow-20);
      --wa-color-neutral-10: var(--wa-color-yellow-10);
      --wa-color-neutral-05: var(--wa-color-yellow-05);
      --wa-color-neutral: var(--wa-color-yellow);
      --wa-color-neutral-on: var(--wa-color-yellow-on);
    }

    .wa-neutral-green {
      --wa-color-neutral-95: var(--wa-color-green-95);
      --wa-color-neutral-90: var(--wa-color-green-90);
      --wa-color-neutral-80: var(--wa-color-green-80);
      --wa-color-neutral-70: var(--wa-color-green-70);
      --wa-color-neutral-60: var(--wa-color-green-60);
      --wa-color-neutral-50: var(--wa-color-green-50);
      --wa-color-neutral-40: var(--wa-color-green-40);
      --wa-color-neutral-30: var(--wa-color-green-30);
      --wa-color-neutral-20: var(--wa-color-green-20);
      --wa-color-neutral-10: var(--wa-color-green-10);
      --wa-color-neutral-05: var(--wa-color-green-05);
      --wa-color-neutral: var(--wa-color-green);
      --wa-color-neutral-on: var(--wa-color-green-on);
    }

    .wa-neutral-cyan {
      --wa-color-neutral-95: var(--wa-color-cyan-95);
      --wa-color-neutral-90: var(--wa-color-cyan-90);
      --wa-color-neutral-80: var(--wa-color-cyan-80);
      --wa-color-neutral-70: var(--wa-color-cyan-70);
      --wa-color-neutral-60: var(--wa-color-cyan-60);
      --wa-color-neutral-50: var(--wa-color-cyan-50);
      --wa-color-neutral-40: var(--wa-color-cyan-40);
      --wa-color-neutral-30: var(--wa-color-cyan-30);
      --wa-color-neutral-20: var(--wa-color-cyan-20);
      --wa-color-neutral-10: var(--wa-color-cyan-10);
      --wa-color-neutral-05: var(--wa-color-cyan-05);
      --wa-color-neutral: var(--wa-color-cyan);
      --wa-color-neutral-on: var(--wa-color-cyan-on);
    }

    .wa-neutral-blue {
      --wa-color-neutral-95: var(--wa-color-blue-95);
      --wa-color-neutral-90: var(--wa-color-blue-90);
      --wa-color-neutral-80: var(--wa-color-blue-80);
      --wa-color-neutral-70: var(--wa-color-blue-70);
      --wa-color-neutral-60: var(--wa-color-blue-60);
      --wa-color-neutral-50: var(--wa-color-blue-50);
      --wa-color-neutral-40: var(--wa-color-blue-40);
      --wa-color-neutral-30: var(--wa-color-blue-30);
      --wa-color-neutral-20: var(--wa-color-blue-20);
      --wa-color-neutral-10: var(--wa-color-blue-10);
      --wa-color-neutral-05: var(--wa-color-blue-05);
      --wa-color-neutral: var(--wa-color-blue);
      --wa-color-neutral-on: var(--wa-color-blue-on);
    }

    .wa-neutral-indigo {
      --wa-color-neutral-95: var(--wa-color-indigo-95);
      --wa-color-neutral-90: var(--wa-color-indigo-90);
      --wa-color-neutral-80: var(--wa-color-indigo-80);
      --wa-color-neutral-70: var(--wa-color-indigo-70);
      --wa-color-neutral-60: var(--wa-color-indigo-60);
      --wa-color-neutral-50: var(--wa-color-indigo-50);
      --wa-color-neutral-40: var(--wa-color-indigo-40);
      --wa-color-neutral-30: var(--wa-color-indigo-30);
      --wa-color-neutral-20: var(--wa-color-indigo-20);
      --wa-color-neutral-10: var(--wa-color-indigo-10);
      --wa-color-neutral-05: var(--wa-color-indigo-05);
      --wa-color-neutral: var(--wa-color-indigo);
      --wa-color-neutral-on: var(--wa-color-indigo-on);
    }

    .wa-neutral-purple {
      --wa-color-neutral-95: var(--wa-color-purple-95);
      --wa-color-neutral-90: var(--wa-color-purple-90);
      --wa-color-neutral-80: var(--wa-color-purple-80);
      --wa-color-neutral-70: var(--wa-color-purple-70);
      --wa-color-neutral-60: var(--wa-color-purple-60);
      --wa-color-neutral-50: var(--wa-color-purple-50);
      --wa-color-neutral-40: var(--wa-color-purple-40);
      --wa-color-neutral-30: var(--wa-color-purple-30);
      --wa-color-neutral-20: var(--wa-color-purple-20);
      --wa-color-neutral-10: var(--wa-color-purple-10);
      --wa-color-neutral-05: var(--wa-color-purple-05);
      --wa-color-neutral: var(--wa-color-purple);
      --wa-color-neutral-on: var(--wa-color-purple-on);
    }

    .wa-neutral-pink {
      --wa-color-neutral-95: var(--wa-color-pink-95);
      --wa-color-neutral-90: var(--wa-color-pink-90);
      --wa-color-neutral-80: var(--wa-color-pink-80);
      --wa-color-neutral-70: var(--wa-color-pink-70);
      --wa-color-neutral-60: var(--wa-color-pink-60);
      --wa-color-neutral-50: var(--wa-color-pink-50);
      --wa-color-neutral-40: var(--wa-color-pink-40);
      --wa-color-neutral-30: var(--wa-color-pink-30);
      --wa-color-neutral-20: var(--wa-color-pink-20);
      --wa-color-neutral-10: var(--wa-color-pink-10);
      --wa-color-neutral-05: var(--wa-color-pink-05);
      --wa-color-neutral: var(--wa-color-pink);
      --wa-color-neutral-on: var(--wa-color-pink-on);
    }
  }
  @layer wa-color-variant {
    :where(:host), /* default */
    .wa-success-green {
      --wa-color-success-95: var(--wa-color-green-95);
      --wa-color-success-90: var(--wa-color-green-90);
      --wa-color-success-80: var(--wa-color-green-80);
      --wa-color-success-70: var(--wa-color-green-70);
      --wa-color-success-60: var(--wa-color-green-60);
      --wa-color-success-50: var(--wa-color-green-50);
      --wa-color-success-40: var(--wa-color-green-40);
      --wa-color-success-30: var(--wa-color-green-30);
      --wa-color-success-20: var(--wa-color-green-20);
      --wa-color-success-10: var(--wa-color-green-10);
      --wa-color-success-05: var(--wa-color-green-05);
      --wa-color-success: var(--wa-color-green);
      --wa-color-success-on: var(--wa-color-green-on);
    }

    .wa-success-red {
      --wa-color-success-95: var(--wa-color-red-95);
      --wa-color-success-90: var(--wa-color-red-90);
      --wa-color-success-80: var(--wa-color-red-80);
      --wa-color-success-70: var(--wa-color-red-70);
      --wa-color-success-60: var(--wa-color-red-60);
      --wa-color-success-50: var(--wa-color-red-50);
      --wa-color-success-40: var(--wa-color-red-40);
      --wa-color-success-30: var(--wa-color-red-30);
      --wa-color-success-20: var(--wa-color-red-20);
      --wa-color-success-10: var(--wa-color-red-10);
      --wa-color-success-05: var(--wa-color-red-05);
      --wa-color-success: var(--wa-color-red);
      --wa-color-success-on: var(--wa-color-red-on);
    }

    .wa-success-orange {
      --wa-color-success-95: var(--wa-color-orange-95);
      --wa-color-success-90: var(--wa-color-orange-90);
      --wa-color-success-80: var(--wa-color-orange-80);
      --wa-color-success-70: var(--wa-color-orange-70);
      --wa-color-success-60: var(--wa-color-orange-60);
      --wa-color-success-50: var(--wa-color-orange-50);
      --wa-color-success-40: var(--wa-color-orange-40);
      --wa-color-success-30: var(--wa-color-orange-30);
      --wa-color-success-20: var(--wa-color-orange-20);
      --wa-color-success-10: var(--wa-color-orange-10);
      --wa-color-success-05: var(--wa-color-orange-05);
      --wa-color-success: var(--wa-color-orange);
      --wa-color-success-on: var(--wa-color-orange-on);
    }

    .wa-success-yellow {
      --wa-color-success-95: var(--wa-color-yellow-95);
      --wa-color-success-90: var(--wa-color-yellow-90);
      --wa-color-success-80: var(--wa-color-yellow-80);
      --wa-color-success-70: var(--wa-color-yellow-70);
      --wa-color-success-60: var(--wa-color-yellow-60);
      --wa-color-success-50: var(--wa-color-yellow-50);
      --wa-color-success-40: var(--wa-color-yellow-40);
      --wa-color-success-30: var(--wa-color-yellow-30);
      --wa-color-success-20: var(--wa-color-yellow-20);
      --wa-color-success-10: var(--wa-color-yellow-10);
      --wa-color-success-05: var(--wa-color-yellow-05);
      --wa-color-success: var(--wa-color-yellow);
      --wa-color-success-on: var(--wa-color-yellow-on);
    }

    .wa-success-cyan {
      --wa-color-success-95: var(--wa-color-cyan-95);
      --wa-color-success-90: var(--wa-color-cyan-90);
      --wa-color-success-80: var(--wa-color-cyan-80);
      --wa-color-success-70: var(--wa-color-cyan-70);
      --wa-color-success-60: var(--wa-color-cyan-60);
      --wa-color-success-50: var(--wa-color-cyan-50);
      --wa-color-success-40: var(--wa-color-cyan-40);
      --wa-color-success-30: var(--wa-color-cyan-30);
      --wa-color-success-20: var(--wa-color-cyan-20);
      --wa-color-success-10: var(--wa-color-cyan-10);
      --wa-color-success-05: var(--wa-color-cyan-05);
      --wa-color-success: var(--wa-color-cyan);
      --wa-color-success-on: var(--wa-color-cyan-on);
    }

    .wa-success-blue {
      --wa-color-success-95: var(--wa-color-blue-95);
      --wa-color-success-90: var(--wa-color-blue-90);
      --wa-color-success-80: var(--wa-color-blue-80);
      --wa-color-success-70: var(--wa-color-blue-70);
      --wa-color-success-60: var(--wa-color-blue-60);
      --wa-color-success-50: var(--wa-color-blue-50);
      --wa-color-success-40: var(--wa-color-blue-40);
      --wa-color-success-30: var(--wa-color-blue-30);
      --wa-color-success-20: var(--wa-color-blue-20);
      --wa-color-success-10: var(--wa-color-blue-10);
      --wa-color-success-05: var(--wa-color-blue-05);
      --wa-color-success: var(--wa-color-blue);
      --wa-color-success-on: var(--wa-color-blue-on);
    }

    .wa-success-indigo {
      --wa-color-success-95: var(--wa-color-indigo-95);
      --wa-color-success-90: var(--wa-color-indigo-90);
      --wa-color-success-80: var(--wa-color-indigo-80);
      --wa-color-success-70: var(--wa-color-indigo-70);
      --wa-color-success-60: var(--wa-color-indigo-60);
      --wa-color-success-50: var(--wa-color-indigo-50);
      --wa-color-success-40: var(--wa-color-indigo-40);
      --wa-color-success-30: var(--wa-color-indigo-30);
      --wa-color-success-20: var(--wa-color-indigo-20);
      --wa-color-success-10: var(--wa-color-indigo-10);
      --wa-color-success-05: var(--wa-color-indigo-05);
      --wa-color-success: var(--wa-color-indigo);
      --wa-color-success-on: var(--wa-color-indigo-on);
    }

    .wa-success-purple {
      --wa-color-success-95: var(--wa-color-purple-95);
      --wa-color-success-90: var(--wa-color-purple-90);
      --wa-color-success-80: var(--wa-color-purple-80);
      --wa-color-success-70: var(--wa-color-purple-70);
      --wa-color-success-60: var(--wa-color-purple-60);
      --wa-color-success-50: var(--wa-color-purple-50);
      --wa-color-success-40: var(--wa-color-purple-40);
      --wa-color-success-30: var(--wa-color-purple-30);
      --wa-color-success-20: var(--wa-color-purple-20);
      --wa-color-success-10: var(--wa-color-purple-10);
      --wa-color-success-05: var(--wa-color-purple-05);
      --wa-color-success: var(--wa-color-purple);
      --wa-color-success-on: var(--wa-color-purple-on);
    }

    .wa-success-pink {
      --wa-color-success-95: var(--wa-color-pink-95);
      --wa-color-success-90: var(--wa-color-pink-90);
      --wa-color-success-80: var(--wa-color-pink-80);
      --wa-color-success-70: var(--wa-color-pink-70);
      --wa-color-success-60: var(--wa-color-pink-60);
      --wa-color-success-50: var(--wa-color-pink-50);
      --wa-color-success-40: var(--wa-color-pink-40);
      --wa-color-success-30: var(--wa-color-pink-30);
      --wa-color-success-20: var(--wa-color-pink-20);
      --wa-color-success-10: var(--wa-color-pink-10);
      --wa-color-success-05: var(--wa-color-pink-05);
      --wa-color-success: var(--wa-color-pink);
      --wa-color-success-on: var(--wa-color-pink-on);
    }

    .wa-success-gray {
      --wa-color-success-95: var(--wa-color-gray-95);
      --wa-color-success-90: var(--wa-color-gray-90);
      --wa-color-success-80: var(--wa-color-gray-80);
      --wa-color-success-70: var(--wa-color-gray-70);
      --wa-color-success-60: var(--wa-color-gray-60);
      --wa-color-success-50: var(--wa-color-gray-50);
      --wa-color-success-40: var(--wa-color-gray-40);
      --wa-color-success-30: var(--wa-color-gray-30);
      --wa-color-success-20: var(--wa-color-gray-20);
      --wa-color-success-10: var(--wa-color-gray-10);
      --wa-color-success-05: var(--wa-color-gray-05);
      --wa-color-success: var(--wa-color-gray);
      --wa-color-success-on: var(--wa-color-gray-on);
    }
  }
  @layer wa-color-variant {
    :where(:host), /* default */
    .wa-warning-yellow {
      --wa-color-warning-95: var(--wa-color-yellow-95);
      --wa-color-warning-90: var(--wa-color-yellow-90);
      --wa-color-warning-80: var(--wa-color-yellow-80);
      --wa-color-warning-70: var(--wa-color-yellow-70);
      --wa-color-warning-60: var(--wa-color-yellow-60);
      --wa-color-warning-50: var(--wa-color-yellow-50);
      --wa-color-warning-40: var(--wa-color-yellow-40);
      --wa-color-warning-30: var(--wa-color-yellow-30);
      --wa-color-warning-20: var(--wa-color-yellow-20);
      --wa-color-warning-10: var(--wa-color-yellow-10);
      --wa-color-warning-05: var(--wa-color-yellow-05);
      --wa-color-warning: var(--wa-color-yellow);
      --wa-color-warning-on: var(--wa-color-yellow-on);
    }

    .wa-warning-red {
      --wa-color-warning-95: var(--wa-color-red-95);
      --wa-color-warning-90: var(--wa-color-red-90);
      --wa-color-warning-80: var(--wa-color-red-80);
      --wa-color-warning-70: var(--wa-color-red-70);
      --wa-color-warning-60: var(--wa-color-red-60);
      --wa-color-warning-50: var(--wa-color-red-50);
      --wa-color-warning-40: var(--wa-color-red-40);
      --wa-color-warning-30: var(--wa-color-red-30);
      --wa-color-warning-20: var(--wa-color-red-20);
      --wa-color-warning-10: var(--wa-color-red-10);
      --wa-color-warning-05: var(--wa-color-red-05);
      --wa-color-warning: var(--wa-color-red);
      --wa-color-warning-on: var(--wa-color-red-on);
    }

    .wa-warning-orange {
      --wa-color-warning-95: var(--wa-color-orange-95);
      --wa-color-warning-90: var(--wa-color-orange-90);
      --wa-color-warning-80: var(--wa-color-orange-80);
      --wa-color-warning-70: var(--wa-color-orange-70);
      --wa-color-warning-60: var(--wa-color-orange-60);
      --wa-color-warning-50: var(--wa-color-orange-50);
      --wa-color-warning-40: var(--wa-color-orange-40);
      --wa-color-warning-30: var(--wa-color-orange-30);
      --wa-color-warning-20: var(--wa-color-orange-20);
      --wa-color-warning-10: var(--wa-color-orange-10);
      --wa-color-warning-05: var(--wa-color-orange-05);
      --wa-color-warning: var(--wa-color-orange);
      --wa-color-warning-on: var(--wa-color-orange-on);
    }

    .wa-warning-green {
      --wa-color-warning-95: var(--wa-color-green-95);
      --wa-color-warning-90: var(--wa-color-green-90);
      --wa-color-warning-80: var(--wa-color-green-80);
      --wa-color-warning-70: var(--wa-color-green-70);
      --wa-color-warning-60: var(--wa-color-green-60);
      --wa-color-warning-50: var(--wa-color-green-50);
      --wa-color-warning-40: var(--wa-color-green-40);
      --wa-color-warning-30: var(--wa-color-green-30);
      --wa-color-warning-20: var(--wa-color-green-20);
      --wa-color-warning-10: var(--wa-color-green-10);
      --wa-color-warning-05: var(--wa-color-green-05);
      --wa-color-warning: var(--wa-color-green);
      --wa-color-warning-on: var(--wa-color-green-on);
    }

    .wa-warning-cyan {
      --wa-color-warning-95: var(--wa-color-cyan-95);
      --wa-color-warning-90: var(--wa-color-cyan-90);
      --wa-color-warning-80: var(--wa-color-cyan-80);
      --wa-color-warning-70: var(--wa-color-cyan-70);
      --wa-color-warning-60: var(--wa-color-cyan-60);
      --wa-color-warning-50: var(--wa-color-cyan-50);
      --wa-color-warning-40: var(--wa-color-cyan-40);
      --wa-color-warning-30: var(--wa-color-cyan-30);
      --wa-color-warning-20: var(--wa-color-cyan-20);
      --wa-color-warning-10: var(--wa-color-cyan-10);
      --wa-color-warning-05: var(--wa-color-cyan-05);
      --wa-color-warning: var(--wa-color-cyan);
      --wa-color-warning-on: var(--wa-color-cyan-on);
    }

    .wa-warning-blue {
      --wa-color-warning-95: var(--wa-color-blue-95);
      --wa-color-warning-90: var(--wa-color-blue-90);
      --wa-color-warning-80: var(--wa-color-blue-80);
      --wa-color-warning-70: var(--wa-color-blue-70);
      --wa-color-warning-60: var(--wa-color-blue-60);
      --wa-color-warning-50: var(--wa-color-blue-50);
      --wa-color-warning-40: var(--wa-color-blue-40);
      --wa-color-warning-30: var(--wa-color-blue-30);
      --wa-color-warning-20: var(--wa-color-blue-20);
      --wa-color-warning-10: var(--wa-color-blue-10);
      --wa-color-warning-05: var(--wa-color-blue-05);
      --wa-color-warning: var(--wa-color-blue);
      --wa-color-warning-on: var(--wa-color-blue-on);
    }

    .wa-warning-indigo {
      --wa-color-warning-95: var(--wa-color-indigo-95);
      --wa-color-warning-90: var(--wa-color-indigo-90);
      --wa-color-warning-80: var(--wa-color-indigo-80);
      --wa-color-warning-70: var(--wa-color-indigo-70);
      --wa-color-warning-60: var(--wa-color-indigo-60);
      --wa-color-warning-50: var(--wa-color-indigo-50);
      --wa-color-warning-40: var(--wa-color-indigo-40);
      --wa-color-warning-30: var(--wa-color-indigo-30);
      --wa-color-warning-20: var(--wa-color-indigo-20);
      --wa-color-warning-10: var(--wa-color-indigo-10);
      --wa-color-warning-05: var(--wa-color-indigo-05);
      --wa-color-warning: var(--wa-color-indigo);
      --wa-color-warning-on: var(--wa-color-indigo-on);
    }

    .wa-warning-purple {
      --wa-color-warning-95: var(--wa-color-purple-95);
      --wa-color-warning-90: var(--wa-color-purple-90);
      --wa-color-warning-80: var(--wa-color-purple-80);
      --wa-color-warning-70: var(--wa-color-purple-70);
      --wa-color-warning-60: var(--wa-color-purple-60);
      --wa-color-warning-50: var(--wa-color-purple-50);
      --wa-color-warning-40: var(--wa-color-purple-40);
      --wa-color-warning-30: var(--wa-color-purple-30);
      --wa-color-warning-20: var(--wa-color-purple-20);
      --wa-color-warning-10: var(--wa-color-purple-10);
      --wa-color-warning-05: var(--wa-color-purple-05);
      --wa-color-warning: var(--wa-color-purple);
      --wa-color-warning-on: var(--wa-color-purple-on);
    }

    .wa-warning-pink {
      --wa-color-warning-95: var(--wa-color-pink-95);
      --wa-color-warning-90: var(--wa-color-pink-90);
      --wa-color-warning-80: var(--wa-color-pink-80);
      --wa-color-warning-70: var(--wa-color-pink-70);
      --wa-color-warning-60: var(--wa-color-pink-60);
      --wa-color-warning-50: var(--wa-color-pink-50);
      --wa-color-warning-40: var(--wa-color-pink-40);
      --wa-color-warning-30: var(--wa-color-pink-30);
      --wa-color-warning-20: var(--wa-color-pink-20);
      --wa-color-warning-10: var(--wa-color-pink-10);
      --wa-color-warning-05: var(--wa-color-pink-05);
      --wa-color-warning: var(--wa-color-pink);
      --wa-color-warning-on: var(--wa-color-pink-on);
    }

    .wa-warning-gray {
      --wa-color-warning-95: var(--wa-color-gray-95);
      --wa-color-warning-90: var(--wa-color-gray-90);
      --wa-color-warning-80: var(--wa-color-gray-80);
      --wa-color-warning-70: var(--wa-color-gray-70);
      --wa-color-warning-60: var(--wa-color-gray-60);
      --wa-color-warning-50: var(--wa-color-gray-50);
      --wa-color-warning-40: var(--wa-color-gray-40);
      --wa-color-warning-30: var(--wa-color-gray-30);
      --wa-color-warning-20: var(--wa-color-gray-20);
      --wa-color-warning-10: var(--wa-color-gray-10);
      --wa-color-warning-05: var(--wa-color-gray-05);
      --wa-color-warning: var(--wa-color-gray);
      --wa-color-warning-on: var(--wa-color-gray-on);
    }
  }
  @layer wa-color-variant {
    :where(:host), /* default */
    .wa-danger-red {
      --wa-color-danger-95: var(--wa-color-red-95);
      --wa-color-danger-90: var(--wa-color-red-90);
      --wa-color-danger-80: var(--wa-color-red-80);
      --wa-color-danger-70: var(--wa-color-red-70);
      --wa-color-danger-60: var(--wa-color-red-60);
      --wa-color-danger-50: var(--wa-color-red-50);
      --wa-color-danger-40: var(--wa-color-red-40);
      --wa-color-danger-30: var(--wa-color-red-30);
      --wa-color-danger-20: var(--wa-color-red-20);
      --wa-color-danger-10: var(--wa-color-red-10);
      --wa-color-danger-05: var(--wa-color-red-05);
      --wa-color-danger: var(--wa-color-red);
      --wa-color-danger-on: var(--wa-color-red-on);
    }

    .wa-danger-orange {
      --wa-color-danger-95: var(--wa-color-orange-95);
      --wa-color-danger-90: var(--wa-color-orange-90);
      --wa-color-danger-80: var(--wa-color-orange-80);
      --wa-color-danger-70: var(--wa-color-orange-70);
      --wa-color-danger-60: var(--wa-color-orange-60);
      --wa-color-danger-50: var(--wa-color-orange-50);
      --wa-color-danger-40: var(--wa-color-orange-40);
      --wa-color-danger-30: var(--wa-color-orange-30);
      --wa-color-danger-20: var(--wa-color-orange-20);
      --wa-color-danger-10: var(--wa-color-orange-10);
      --wa-color-danger-05: var(--wa-color-orange-05);
      --wa-color-danger: var(--wa-color-orange);
      --wa-color-danger-on: var(--wa-color-orange-on);
    }

    .wa-danger-yellow {
      --wa-color-danger-95: var(--wa-color-yellow-95);
      --wa-color-danger-90: var(--wa-color-yellow-90);
      --wa-color-danger-80: var(--wa-color-yellow-80);
      --wa-color-danger-70: var(--wa-color-yellow-70);
      --wa-color-danger-60: var(--wa-color-yellow-60);
      --wa-color-danger-50: var(--wa-color-yellow-50);
      --wa-color-danger-40: var(--wa-color-yellow-40);
      --wa-color-danger-30: var(--wa-color-yellow-30);
      --wa-color-danger-20: var(--wa-color-yellow-20);
      --wa-color-danger-10: var(--wa-color-yellow-10);
      --wa-color-danger-05: var(--wa-color-yellow-05);
      --wa-color-danger: var(--wa-color-yellow);
      --wa-color-danger-on: var(--wa-color-yellow-on);
    }

    .wa-danger-green {
      --wa-color-danger-95: var(--wa-color-green-95);
      --wa-color-danger-90: var(--wa-color-green-90);
      --wa-color-danger-80: var(--wa-color-green-80);
      --wa-color-danger-70: var(--wa-color-green-70);
      --wa-color-danger-60: var(--wa-color-green-60);
      --wa-color-danger-50: var(--wa-color-green-50);
      --wa-color-danger-40: var(--wa-color-green-40);
      --wa-color-danger-30: var(--wa-color-green-30);
      --wa-color-danger-20: var(--wa-color-green-20);
      --wa-color-danger-10: var(--wa-color-green-10);
      --wa-color-danger-05: var(--wa-color-green-05);
      --wa-color-danger: var(--wa-color-green);
      --wa-color-danger-on: var(--wa-color-green-on);
    }

    .wa-danger-cyan {
      --wa-color-danger-95: var(--wa-color-cyan-95);
      --wa-color-danger-90: var(--wa-color-cyan-90);
      --wa-color-danger-80: var(--wa-color-cyan-80);
      --wa-color-danger-70: var(--wa-color-cyan-70);
      --wa-color-danger-60: var(--wa-color-cyan-60);
      --wa-color-danger-50: var(--wa-color-cyan-50);
      --wa-color-danger-40: var(--wa-color-cyan-40);
      --wa-color-danger-30: var(--wa-color-cyan-30);
      --wa-color-danger-20: var(--wa-color-cyan-20);
      --wa-color-danger-10: var(--wa-color-cyan-10);
      --wa-color-danger-05: var(--wa-color-cyan-05);
      --wa-color-danger: var(--wa-color-cyan);
      --wa-color-danger-on: var(--wa-color-cyan-on);
    }

    .wa-danger-blue {
      --wa-color-danger-95: var(--wa-color-blue-95);
      --wa-color-danger-90: var(--wa-color-blue-90);
      --wa-color-danger-80: var(--wa-color-blue-80);
      --wa-color-danger-70: var(--wa-color-blue-70);
      --wa-color-danger-60: var(--wa-color-blue-60);
      --wa-color-danger-50: var(--wa-color-blue-50);
      --wa-color-danger-40: var(--wa-color-blue-40);
      --wa-color-danger-30: var(--wa-color-blue-30);
      --wa-color-danger-20: var(--wa-color-blue-20);
      --wa-color-danger-10: var(--wa-color-blue-10);
      --wa-color-danger-05: var(--wa-color-blue-05);
      --wa-color-danger: var(--wa-color-blue);
      --wa-color-danger-on: var(--wa-color-blue-on);
    }

    .wa-danger-indigo {
      --wa-color-danger-95: var(--wa-color-indigo-95);
      --wa-color-danger-90: var(--wa-color-indigo-90);
      --wa-color-danger-80: var(--wa-color-indigo-80);
      --wa-color-danger-70: var(--wa-color-indigo-70);
      --wa-color-danger-60: var(--wa-color-indigo-60);
      --wa-color-danger-50: var(--wa-color-indigo-50);
      --wa-color-danger-40: var(--wa-color-indigo-40);
      --wa-color-danger-30: var(--wa-color-indigo-30);
      --wa-color-danger-20: var(--wa-color-indigo-20);
      --wa-color-danger-10: var(--wa-color-indigo-10);
      --wa-color-danger-05: var(--wa-color-indigo-05);
      --wa-color-danger: var(--wa-color-indigo);
      --wa-color-danger-on: var(--wa-color-indigo-on);
    }

    .wa-danger-purple {
      --wa-color-danger-95: var(--wa-color-purple-95);
      --wa-color-danger-90: var(--wa-color-purple-90);
      --wa-color-danger-80: var(--wa-color-purple-80);
      --wa-color-danger-70: var(--wa-color-purple-70);
      --wa-color-danger-60: var(--wa-color-purple-60);
      --wa-color-danger-50: var(--wa-color-purple-50);
      --wa-color-danger-40: var(--wa-color-purple-40);
      --wa-color-danger-30: var(--wa-color-purple-30);
      --wa-color-danger-20: var(--wa-color-purple-20);
      --wa-color-danger-10: var(--wa-color-purple-10);
      --wa-color-danger-05: var(--wa-color-purple-05);
      --wa-color-danger: var(--wa-color-purple);
      --wa-color-danger-on: var(--wa-color-purple-on);
    }

    .wa-danger-pink {
      --wa-color-danger-95: var(--wa-color-pink-95);
      --wa-color-danger-90: var(--wa-color-pink-90);
      --wa-color-danger-80: var(--wa-color-pink-80);
      --wa-color-danger-70: var(--wa-color-pink-70);
      --wa-color-danger-60: var(--wa-color-pink-60);
      --wa-color-danger-50: var(--wa-color-pink-50);
      --wa-color-danger-40: var(--wa-color-pink-40);
      --wa-color-danger-30: var(--wa-color-pink-30);
      --wa-color-danger-20: var(--wa-color-pink-20);
      --wa-color-danger-10: var(--wa-color-pink-10);
      --wa-color-danger-05: var(--wa-color-pink-05);
      --wa-color-danger: var(--wa-color-pink);
      --wa-color-danger-on: var(--wa-color-pink-on);
    }

    .wa-danger-gray {
      --wa-color-danger-95: var(--wa-color-gray-95);
      --wa-color-danger-90: var(--wa-color-gray-90);
      --wa-color-danger-80: var(--wa-color-gray-80);
      --wa-color-danger-70: var(--wa-color-gray-70);
      --wa-color-danger-60: var(--wa-color-gray-60);
      --wa-color-danger-50: var(--wa-color-gray-50);
      --wa-color-danger-40: var(--wa-color-gray-40);
      --wa-color-danger-30: var(--wa-color-gray-30);
      --wa-color-danger-20: var(--wa-color-gray-20);
      --wa-color-danger-10: var(--wa-color-gray-10);
      --wa-color-danger-05: var(--wa-color-gray-05);
      --wa-color-danger: var(--wa-color-gray);
      --wa-color-danger-on: var(--wa-color-gray-on);
    }
  }
  /* Generates --wa-color-{hue}-on tokens for pairing with any palette's key colors */

  :where(:host),
  :host {
    /**
      * Conditional tokens to check if the key color is >= 60
      * Key colors are the most colorful tint in a scale, recorded as --wa-color-{hue} in each palette
      * The numeric value of the key is isolated as --wa-color-{hue}-key
      * If key < 60, the result is 0%
      * If key >= 60, the result is 100%
      * Intended to be used in the color-mix() functions below
      */

    --wa-color-red-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-red-key), 1) * 100%));
    --wa-color-orange-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-orange-key), 1) * 100%));
    --wa-color-yellow-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-yellow-key), 1) * 100%));
    --wa-color-green-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-green-key), 1) * 100%));
    --wa-color-cyan-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-cyan-key), 1) * 100%));
    --wa-color-blue-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-blue-key), 1) * 100%));
    --wa-color-indigo-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-indigo-key), 1) * 100%));
    --wa-color-purple-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-purple-key), 1) * 100%));
    --wa-color-pink-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-pink-key), 1) * 100%));
    --wa-color-gray-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-gray-key), 1) * 100%));

    /**
      * Tokens to set text color with appropriate WCAG 2.1 contrast
      * If key < 60, the text color is white
      * If key >= 60, the text color is {hue}-10
      */

    --wa-color-red-on: color-mix(in oklab, var(--wa-color-red-10) var(--wa-color-red-gte-60), white);
    --wa-color-orange-on: color-mix(in oklab, var(--wa-color-orange-10) var(--wa-color-orange-gte-60), white);
    --wa-color-yellow-on: color-mix(in oklab, var(--wa-color-yellow-10) var(--wa-color-yellow-gte-60), white);
    --wa-color-green-on: color-mix(in oklab, var(--wa-color-green-10) var(--wa-color-green-gte-60), white);
    --wa-color-cyan-on: color-mix(in oklab, var(--wa-color-cyan-10) var(--wa-color-cyan-gte-60), white);
    --wa-color-blue-on: color-mix(in oklab, var(--wa-color-blue-10) var(--wa-color-blue-gte-60), white);
    --wa-color-indigo-on: color-mix(in oklab, var(--wa-color-indigo-10) var(--wa-color-indigo-gte-60), white);
    --wa-color-purple-on: color-mix(in oklab, var(--wa-color-purple-10) var(--wa-color-purple-gte-60), white);
    --wa-color-pink-on: color-mix(in oklab, var(--wa-color-pink-10) var(--wa-color-pink-gte-60), white);
    --wa-color-gray-on: color-mix(in oklab, var(--wa-color-gray-10) var(--wa-color-gray-gte-60), white);
  }

  @layer wa-color-palette {
    .wa-palette-shoelace,
    .wa-palette-shoelace :host {
      --wa-color-red-95: #fff0ef /* oklch(96.667% 0.01632 22.08) */;
      --wa-color-red-90: #ffdedc /* oklch(92.735% 0.03679 21.966) */;
      --wa-color-red-80: #ffb8b5 /* oklch(84.778% 0.083 21.686) */;
      --wa-color-red-70: #fe8f8d /* oklch(76.859% 0.13466 21.762) */;
      --wa-color-red-60: #f56667 /* oklch(68.982% 0.17631 22.472) */;
      --wa-color-red-50: #e02c2b /* oklch(58.861% 0.21461 27.156) */;
      --wa-color-red-40: #b5051a /* oklch(48.833% 0.19611 25.68) */;
      --wa-color-red-30: #900015 /* oklch(41.172% 0.16676 24.609) */;
      --wa-color-red-20: #6c000d /* oklch(33.479% 0.1356 24.617) */;
      --wa-color-red-10: #450005 /* oklch(24.598% 0.09968 24.835) */;
      --wa-color-red-05: #2f0002 /* oklch(19.218% 0.07801 25.517) */;
      --wa-color-red: var(--wa-color-red-50);
      --wa-color-red-key: 50;

      --wa-color-orange-95: #fff0e4 /* oklch(96.374% 0.0228 61.238) */;
      --wa-color-orange-90: #ffe0c8 /* oklch(92.611% 0.04689 59.917) */;
      --wa-color-orange-80: #ffbb89 /* oklch(84.386% 0.10217 57.161) */;
      --wa-color-orange-70: #ff9342 /* oklch(76.486% 0.15964 54.102) */;
      --wa-color-orange-60: #f36d00 /* oklch(68.715% 0.18774 47.79) */;
      --wa-color-orange-50: #c94e00 /* oklch(58.068% 0.17131 43.217) */;
      --wa-color-orange-40: #9d3800 /* oklch(47.924% 0.14534 41.739) */;
      --wa-color-orange-30: #7e2900 /* oklch(40.53% 0.1259 40.51) */;
      --wa-color-orange-20: #5e1c00 /* oklch(32.874% 0.1027 40.228) */;
      --wa-color-orange-10: #3b0f00 /* oklch(24.125% 0.07446 40.837) */;
      --wa-color-orange-05: #280700 /* oklch(18.837% 0.05933 39.827) */;
      --wa-color-orange: var(--wa-color-orange-60);
      --wa-color-orange-key: 60;

      --wa-color-yellow-95: #fef2bf /* oklch(95.823% 0.06674 96.369) */;
      --wa-color-yellow-90: #fde588 /* oklch(92.2% 0.11633 95.327) */;
      --wa-color-yellow-80: #f5c24b /* oklch(83.879% 0.14445 85.083) */;
      --wa-color-yellow-70: #e9a010 /* oklch(75.825% 0.15689 75.537) */;
      --wa-color-yellow-60: #d78000 /* oklch(67.839% 0.15287 64.455) */;
      --wa-color-yellow-50: #b26000 /* oklch(57.324% 0.13672 58.338) */;
      --wa-color-yellow-40: #8a4700 /* oklch(47.183% 0.11461 56.655) */;
      --wa-color-yellow-30: #6e3700 /* oklch(40.03% 0.0976 56.323) */;
      --wa-color-yellow-20: #522700 /* oklch(32.54% 0.07981 55.802) */;
      --wa-color-yellow-10: #331600 /* oklch(23.846% 0.05834 56.02) */;
      --wa-color-yellow-05: #210d00 /* oklch(18.619% 0.04431 58.553) */;
      --wa-color-yellow: var(--wa-color-yellow-70);
      --wa-color-yellow-key: 70;

      --wa-color-green-95: #d4fce1 /* oklch(95.554% 0.05477 155.71) */;
      --wa-color-green-90: #a4f8c2 /* oklch(91.11% 0.1107 155.35) */;
      --wa-color-green-80: #6ae095 /* oklch(81.924% 0.15151 153.52) */;
      --wa-color-green-70: #44c670 /* oklch(73.506% 0.16742 151) */;
      --wa-color-green-60: #21ab52 /* oklch(65.151% 0.17062 149.59) */;
      --wa-color-green-50: #0d873f /* oklch(54.644% 0.14593 150.18) */;
      --wa-color-green-40: #166635 /* oklch(45.105% 0.10874 151.56) */;
      --wa-color-green-30: #115029 /* oklch(38.182% 0.09049 151.63) */;
      --wa-color-green-20: #0a3a1c /* oklch(30.854% 0.07315 151.48) */;
      --wa-color-green-10: #04230f /* oklch(22.692% 0.05324 151.92) */;
      --wa-color-green-05: #021608 /* oklch(17.756% 0.04076 152.68) */;
      --wa-color-green: var(--wa-color-green-60);
      --wa-color-green-key: 60;

      --wa-color-cyan-95: #d8fafc /* oklch(96.149% 0.03524 200.93) */;
      --wa-color-cyan-90: #a3f2f7 /* oklch(91.187% 0.07744 200.93) */;
      --wa-color-cyan-80: #67dbe2 /* oklch(82.721% 0.1051 200.68) */;
      --wa-color-cyan-70: #29c0ca /* oklch(73.859% 0.11825 201.93) */;
      --wa-color-cyan-60: #0ca4ae /* oklch(65.523% 0.10997 202.61) */;
      --wa-color-cyan-50: #0c828c /* oklch(55.424% 0.09237 204.53) */;
      --wa-color-cyan-40: #0a626b /* oklch(45.428% 0.07504 206.17) */;
      --wa-color-cyan-30: #084d55 /* oklch(38.542% 0.06312 207.36) */;
      --wa-color-cyan-20: #06383f /* oklch(31.335% 0.05062 209.3) */;
      --wa-color-cyan-10: #002127 /* oklch(22.739% 0.03961 211.94) */;
      --wa-color-cyan-05: #00151b /* oklch(18.055% 0.03231 217.31) */;
      --wa-color-cyan: var(--wa-color-cyan-70);
      --wa-color-cyan-key: 70;

      --wa-color-blue-95: #e2f6ff /* oklch(96.112% 0.0243 226.47) */;
      --wa-color-blue-90: #c0ecff /* oklch(91.822% 0.0523 226) */;
      --wa-color-blue-80: #7fd4fc /* oklch(83.068% 0.09979 229.91) */;
      --wa-color-blue-70: #48b9f4 /* oklch(74.644% 0.13162 235.42) */;
      --wa-color-blue-60: #1f9de2 /* oklch(66.419% 0.14398 240.02) */;
      --wa-color-blue-50: #007bbc /* oklch(55.956% 0.1346 242.72) */;
      --wa-color-blue-40: #005d93 /* oklch(46.121% 0.11438 244.28) */;
      --wa-color-blue-30: #004975 /* oklch(39.093% 0.09705 244.33) */;
      --wa-color-blue-20: #003558 /* oklch(31.8% 0.08026 245.13) */;
      --wa-color-blue-10: #001f36 /* oklch(23.093% 0.05763 244.59) */;
      --wa-color-blue-05: #001325 /* oklch(18.113% 0.04675 246.17) */;
      --wa-color-blue: var(--wa-color-blue-60);
      --wa-color-blue-key: 60;

      --wa-color-indigo-95: #eff2ff /* oklch(96.265% 0.01769 275.64) */;
      --wa-color-indigo-90: #e0e5ff /* oklch(92.602% 0.03569 277.03) */;
      --wa-color-indigo-80: #bec7ff /* oklch(84.198% 0.07895 277.45) */;
      --wa-color-indigo-70: #9da9fc /* oklch(75.797% 0.11994 276.85) */;
      --wa-color-indigo-60: #808bf8 /* oklch(67.752% 0.15983 276.9) */;
      --wa-color-indigo-50: #6163f0 /* oklch(57.814% 0.20686 277.14) */;
      --wa-color-indigo-40: #4a41d4 /* oklch(48.413% 0.21583 277.35) */;
      --wa-color-indigo-30: #3b369d /* oklch(40.562% 0.16149 278.54) */;
      --wa-color-indigo-20: #2b2872 /* oklch(32.937% 0.12339 278.99) */;
      --wa-color-indigo-10: #191748 /* oklch(24.174% 0.08853 279.28) */;
      --wa-color-indigo-05: #0e0d31 /* oklch(18.772% 0.06933 278.6) */;
      --wa-color-indigo: var(--wa-color-indigo-40);
      --wa-color-indigo-key: 40;

      --wa-color-purple-95: #f6f0ff /* oklch(96.412% 0.02086 304.04) */;
      --wa-color-purple-90: #eee0ff /* oklch(92.72% 0.04406 305.89) */;
      --wa-color-purple-80: #dcbdff /* oklch(84.694% 0.09583 305.85) */;
      --wa-color-purple-70: #ca99ff /* oklch(76.728% 0.14961 305.27) */;
      --wa-color-purple-60: #b874ff /* oklch(69.085% 0.2024 304.19) */;
      --wa-color-purple-50: #9f46ee /* oklch(59.304% 0.23941 304.1) */;
      --wa-color-purple-40: #7e2ac2 /* oklch(49.181% 0.21892 304.24) */;
      --wa-color-purple-30: #632198 /* oklch(41.448% 0.18071 304.64) */;
      --wa-color-purple-20: #4a1574 /* oklch(33.839% 0.15043 304.56) */;
      --wa-color-purple-10: #2e094b /* oklch(24.855% 0.11212 304.52) */;
      --wa-color-purple-05: #1e0433 /* oklch(19.319% 0.0877 304.85) */;
      --wa-color-purple: var(--wa-color-purple-50);
      --wa-color-purple-key: 50;

      --wa-color-pink-95: #fdeff7 /* oklch(96.539% 0.01831 342.02) */;
      --wa-color-pink-90: #fcdcee /* oklch(92.607% 0.04228 343.07) */;
      --wa-color-pink-80: #fab6db /* oklch(84.992% 0.09131 345.4) */;
      --wa-color-pink-70: #f78cc4 /* oklch(77.072% 0.14455 348.37) */;
      --wa-color-pink-60: #f160a9 /* oklch(69.418% 0.19234 351.99) */;
      --wa-color-pink-50: #db2878 /* oklch(59.255% 0.21755 0.28257) */;
      --wa-color-pink-40: #ab1854 /* oklch(48.723% 0.18199 3.8244) */;
      --wa-color-pink-30: #851844 /* oklch(41.188% 0.14622 2.4184) */;
      --wa-color-pink-20: #640e30 /* oklch(33.442% 0.12022 3.3857) */;
      --wa-color-pink-10: #43001a /* oklch(24.613% 0.09885 5.3211) */;
      --wa-color-pink-05: #2f000b /* oklch(19.457% 0.07776 12.211) */;
      --wa-color-pink: var(--wa-color-pink-50);
      --wa-color-pink-key: 50;

      --wa-color-gray-95: #f2f2f3 /* oklch(96.143% 0.00133 286.37) */;
      --wa-color-gray-90: #e5e5e8 /* oklch(92.276% 0.00403 286.32) */;
      --wa-color-gray-80: #c9c9cc /* oklch(83.679% 0.00413 286.31) */;
      --wa-color-gray-70: #aeafb1 /* oklch(75.381% 0.00306 264.54) */;
      --wa-color-gray-60: #94959b /* oklch(67.089% 0.00884 278.56) */;
      --wa-color-gray-50: #72747d /* oklch(56.027% 0.01402 275.93) */;
      --wa-color-gray-40: #565861 /* oklch(46.18% 0.01474 275.83) */;
      --wa-color-gray-30: #43454d /* oklch(39.154% 0.01373 274.58) */;
      --wa-color-gray-20: #313134 /* oklch(31.432% 0.00529 286.09) */;
      --wa-color-gray-10: #1d1d20 /* oklch(23.201% 0.00571 285.95) */;
      --wa-color-gray-05: #101113 /* oklch(17.739% 0.00442 264.46) */;
      --wa-color-gray: var(--wa-color-gray-40);
      --wa-color-gray-key: 40;
    }
  }
  /* To use this palette, add class="wa-palette-shoelace" to the <html> element */
  @layer wa-theme {
    .wa-theme-shoelace,
    .wa-theme-shoelace.wa-light,
    .wa-theme-shoelace .wa-light,
    .wa-theme-shoelace.wa-dark .wa-invert,
    .wa-theme-shoelace .wa-dark .wa-invert,
    .wa-light .wa-theme-shoelace,
    .wa-dark .wa-theme-shoelace.wa-invert,
    .wa-dark .wa-theme-shoelace .wa-invert {
      /* #region Colors (Light) ~~~~~~~~~~~~~~~~~~~~~ */
      color-scheme: light;
      color: var(--wa-color-text-normal);

      --wa-color-surface-raised: white;
      --wa-color-surface-default: white;
      --wa-color-surface-lowered: var(--wa-color-neutral-95);
      --wa-color-surface-border: var(--wa-color-neutral-90);

      --wa-color-text-normal: var(--wa-color-neutral-10);
      --wa-color-text-quiet: var(--wa-color-neutral-40);
      --wa-color-text-link: var(--wa-color-brand-40);

      --wa-color-overlay-modal: color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent);
      --wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent);

      --wa-color-shadow: color-mix(
        in oklab,
        var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%),
        transparent
      );

      --wa-color-focus: var(--wa-color-brand-60);

      --wa-color-mix-hover: black 10%;
      --wa-color-mix-active: black 20%;

      --wa-color-brand-fill-quiet: var(--wa-color-brand-95);
      --wa-color-brand-fill-normal: var(--wa-color-brand-90);
      --wa-color-brand-fill-loud: var(--wa-color-brand-50);
      --wa-color-brand-border-quiet: var(--wa-color-brand-90);
      --wa-color-brand-border-normal: var(--wa-color-brand-80);
      --wa-color-brand-border-loud: var(--wa-color-brand-60);
      --wa-color-brand-on-quiet: var(--wa-color-brand-50);
      --wa-color-brand-on-normal: var(--wa-color-brand-40);
      --wa-color-brand-on-loud: white;

      --wa-color-success-fill-quiet: var(--wa-color-success-95);
      --wa-color-success-fill-normal: var(--wa-color-success-90);
      --wa-color-success-fill-loud: var(--wa-color-success-50);
      --wa-color-success-border-quiet: var(--wa-color-success-90);
      --wa-color-success-border-normal: var(--wa-color-success-80);
      --wa-color-success-border-loud: var(--wa-color-success-60);
      --wa-color-success-on-quiet: var(--wa-color-success-50);
      --wa-color-success-on-normal: var(--wa-color-success-40);
      --wa-color-success-on-loud: white;

      --wa-color-warning-fill-quiet: var(--wa-color-warning-95);
      --wa-color-warning-fill-normal: var(--wa-color-warning-90);
      --wa-color-warning-fill-loud: var(--wa-color-warning-50);
      --wa-color-warning-border-quiet: var(--wa-color-warning-90);
      --wa-color-warning-border-normal: var(--wa-color-warning-80);
      --wa-color-warning-border-loud: var(--wa-color-warning-60);
      --wa-color-warning-on-quiet: var(--wa-color-warning-50);
      --wa-color-warning-on-normal: var(--wa-color-warning-40);
      --wa-color-warning-on-loud: white;

      --wa-color-danger-fill-quiet: var(--wa-color-danger-95);
      --wa-color-danger-fill-normal: var(--wa-color-danger-90);
      --wa-color-danger-fill-loud: var(--wa-color-danger-50);
      --wa-color-danger-border-quiet: var(--wa-color-danger-90);
      --wa-color-danger-border-normal: var(--wa-color-danger-80);
      --wa-color-danger-border-loud: var(--wa-color-danger-60);
      --wa-color-danger-on-quiet: var(--wa-color-danger-50);
      --wa-color-danger-on-normal: var(--wa-color-danger-40);
      --wa-color-danger-on-loud: white;

      --wa-color-neutral-fill-quiet: var(--wa-color-neutral-95);
      --wa-color-neutral-fill-normal: var(--wa-color-neutral-90);
      --wa-color-neutral-fill-loud: var(--wa-color-neutral-40);
      --wa-color-neutral-border-quiet: var(--wa-color-neutral-90);
      --wa-color-neutral-border-normal: var(--wa-color-neutral-80);
      --wa-color-neutral-border-loud: var(--wa-color-neutral-50);
      --wa-color-neutral-on-quiet: var(--wa-color-neutral-40);
      --wa-color-neutral-on-normal: var(--wa-color-neutral-30);
      --wa-color-neutral-on-loud: white;
      /* #endregion */
    }

    .wa-theme-shoelace.wa-dark,
    .wa-theme-shoelace .wa-dark,
    .wa-theme-shoelace.wa-invert,
    .wa-theme-shoelace .wa-invert,
    .wa-dark .wa-theme-shoelace,
    .wa-light .wa-theme-shoelace.wa-invert,
    .wa-light .wa-theme-shoelace .wa-invert {
      /* #region Colors (Dark) ~~~~~~~~~~~~~~~~~~~~~~ */
      color-scheme: dark;
      color: var(--wa-color-text-normal);

      --wa-color-surface-raised: var(--wa-color-neutral-10);
      --wa-color-surface-default: var(--wa-color-neutral-05);
      --wa-color-surface-lowered: color-mix(in oklab, var(--wa-color-surface-default), black 20%);
      --wa-color-surface-border: var(--wa-color-neutral-20);

      --wa-color-text-normal: var(--wa-color-neutral-95);
      --wa-color-text-quiet: var(--wa-color-neutral-60);
      --wa-color-text-link: var(--wa-color-brand-70);

      --wa-color-overlay-modal: color-mix(in oklab, black 60%, transparent);
      --wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-50) 10%, transparent);

      --wa-color-shadow: color-mix(
        in oklab,
        var(--wa-color-surface-lowered) calc(var(--wa-shadow-blur-scale) * 32% + 40%),
        transparent
      );

      --wa-color-focus: var(--wa-color-brand-60);

      --wa-color-mix-hover: black 8%;
      --wa-color-mix-active: black 16%;

      --wa-color-brand-fill-quiet: var(--wa-color-brand-20);
      --wa-color-brand-fill-normal: var(--wa-color-brand-30);
      --wa-color-brand-fill-loud: var(--wa-color-brand-70);
      --wa-color-brand-border-quiet: var(--wa-color-brand-30);
      --wa-color-brand-border-normal: var(--wa-color-brand-40);
      --wa-color-brand-border-loud: var(--wa-color-brand-50);
      --wa-color-brand-on-quiet: var(--wa-color-brand-70);
      --wa-color-brand-on-normal: var(--wa-color-brand-80);
      --wa-color-brand-on-loud: var(--wa-color-neutral-10);

      --wa-color-success-fill-quiet: var(--wa-color-success-20);
      --wa-color-success-fill-normal: var(--wa-color-success-30);
      --wa-color-success-fill-loud: var(--wa-color-success-70);
      --wa-color-success-border-quiet: var(--wa-color-success-30);
      --wa-color-success-border-normal: var(--wa-color-success-40);
      --wa-color-success-border-loud: var(--wa-color-success-50);
      --wa-color-success-on-quiet: var(--wa-color-success-70);
      --wa-color-success-on-normal: var(--wa-color-success-80);
      --wa-color-success-on-loud: var(--wa-color-neutral-10);

      --wa-color-warning-fill-quiet: var(--wa-color-warning-20);
      --wa-color-warning-fill-normal: var(--wa-color-warning-30);
      --wa-color-warning-fill-loud: var(--wa-color-warning-70);
      --wa-color-warning-border-quiet: var(--wa-color-warning-30);
      --wa-color-warning-border-normal: var(--wa-color-warning-40);
      --wa-color-warning-border-loud: var(--wa-color-warning-50);
      --wa-color-warning-on-quiet: var(--wa-color-warning-70);
      --wa-color-warning-on-normal: var(--wa-color-warning-80);
      --wa-color-warning-on-loud: var(--wa-color-neutral-10);

      --wa-color-danger-fill-quiet: var(--wa-color-danger-20);
      --wa-color-danger-fill-normal: var(--wa-color-danger-30);
      --wa-color-danger-fill-loud: var(--wa-color-danger-60);
      --wa-color-danger-border-quiet: var(--wa-color-danger-30);
      --wa-color-danger-border-normal: var(--wa-color-danger-40);
      --wa-color-danger-border-loud: var(--wa-color-danger-50);
      --wa-color-danger-on-quiet: var(--wa-color-danger-70);
      --wa-color-danger-on-normal: var(--wa-color-danger-80);
      --wa-color-danger-on-loud: var(--wa-color-neutral-10);

      --wa-color-neutral-fill-quiet: var(--wa-color-neutral-10);
      --wa-color-neutral-fill-normal: var(--wa-color-neutral-20);
      --wa-color-neutral-fill-loud: var(--wa-color-neutral-60);
      --wa-color-neutral-border-quiet: var(--wa-color-neutral-20);
      --wa-color-neutral-border-normal: var(--wa-color-neutral-30);
      --wa-color-neutral-border-loud: var(--wa-color-neutral-50);
      --wa-color-neutral-on-quiet: var(--wa-color-neutral-60);
      --wa-color-neutral-on-normal: var(--wa-color-neutral-70);
      --wa-color-neutral-on-loud: var(--wa-color-neutral-05);
      /* #endregion */
    }

    .wa-theme-shoelace,
    .wa-theme-shoelace.wa-light,
    .wa-theme-shoelace .wa-light,
    .wa-theme-shoelace.wa-dark,
    .wa-theme-shoelace .wa-dark,
    .wa-theme-shoelace.wa-invert,
    .wa-theme-shoelace .wa-invert {
      font-family: var(--wa-font-family-body);

      /* #region Fonts ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
      --wa-font-family-body: ui-sans-serif, system-ui, sans-serif;
      --wa-font-family-heading: var(--wa-font-family-body);
      --wa-font-family-code: ui-monospace, monospace;
      --wa-font-family-longform: ui-serif, serif;

      /* Font sizes use a ratio of 1.125 to scale sizes proportionally.
       * For larger font sizes, each size is twice 1.125x larger to maximize impact.
       * Each value uses \`rem\` units and is rounded to the nearest whole pixel when rendered. */
      --wa-font-size-scale: 1;
      --wa-font-size-2xs: round(calc(var(--wa-font-size-xs) / 1.125), 1px); /* 11px */
      --wa-font-size-xs: round(calc(var(--wa-font-size-s) / 1.125), 1px); /* 12px */
      --wa-font-size-s: round(calc(var(--wa-font-size-m) / 1.125), 1px); /* 14px */
      --wa-font-size-m: calc(1rem * var(--wa-font-size-scale)); /* 16px */
      --wa-font-size-l: round(calc(var(--wa-font-size-m) * 1.125 * 1.125), 1px); /* 20px */
      --wa-font-size-xl: round(calc(var(--wa-font-size-l) * 1.125 * 1.125), 1px); /* 25px */
      --wa-font-size-2xl: round(calc(var(--wa-font-size-xl) * 1.125 * 1.125), 1px); /* 32px */
      --wa-font-size-3xl: round(calc(var(--wa-font-size-2xl) * 1.125 * 1.125), 1px); /* 41px */
      --wa-font-size-4xl: round(calc(var(--wa-font-size-3xl) * 1.125 * 1.125), 1px); /* 52px */

      --wa-font-size-smaller: round(calc(1em / 1.125), 1px);
      --wa-font-size-larger: round(calc(1em * 1.125 * 1.125), 1px);

      --wa-font-weight-light: 300;
      --wa-font-weight-normal: 400;
      --wa-font-weight-semibold: 500;
      --wa-font-weight-bold: 600;

      --wa-font-weight-body: var(--wa-font-weight-normal);
      --wa-font-weight-heading: var(--wa-font-weight-bold);
      --wa-font-weight-code: var(--wa-font-weight-normal);
      --wa-font-weight-longform: var(--wa-font-weight-normal);
      --wa-font-weight-action: var(--wa-font-weight-semibold);

      --wa-line-height-condensed: 1.2;
      --wa-line-height-normal: 1.6;
      --wa-line-height-expanded: 2;

      --wa-link-decoration-default: underline;
      --wa-link-decoration-hover: underline;
      /* #endregion */

      /* #region Space ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
      --wa-space-scale: 1;
      --wa-space-3xs: calc(var(--wa-space-scale) * 0.125rem); /* 2px */
      --wa-space-2xs: calc(var(--wa-space-scale) * 0.25rem); /* 4px */
      --wa-space-xs: calc(var(--wa-space-scale) * 0.5rem); /* 8px */
      --wa-space-s: calc(var(--wa-space-scale) * 0.75rem); /* 12px */
      --wa-space-m: calc(var(--wa-space-scale) * 1rem); /* 16px */
      --wa-space-l: calc(var(--wa-space-scale) * 1.5rem); /* 24px */
      --wa-space-xl: calc(var(--wa-space-scale) * 2rem); /* 32px */
      --wa-space-2xl: calc(var(--wa-space-scale) * 2.5rem); /* 40px */
      --wa-space-3xl: calc(var(--wa-space-scale) * 3rem); /* 48px */
      --wa-space-4xl: calc(var(--wa-space-scale) * 4rem); /* 64px */

      --wa-content-spacing: var(--wa-space-l);
      /* #endregion */

      /* #region Borders ~~~~~~~~~~~~~~~~~~~~~~~~~~ */
      --wa-border-style: solid;

      --wa-border-width-scale: 1;
      --wa-border-width-s: calc(var(--wa-border-width-scale) * 0.0625rem);
      --wa-border-width-m: calc(var(--wa-border-width-scale) * 0.125rem);
      --wa-border-width-l: calc(var(--wa-border-width-scale) * 0.1875rem);
      /* #endregion */

      /* #region Rounding ~~~~~~~~~~~~~~~~~~~~~~~~~ */
      --wa-border-radius-scale: 0.7;
      --wa-border-radius-s: calc(var(--wa-border-radius-scale) * 0.1875rem);
      --wa-border-radius-m: calc(var(--wa-border-radius-scale) * 0.375rem);
      --wa-border-radius-l: calc(var(--wa-border-radius-scale) * 0.75rem);

      --wa-border-radius-pill: 9999px;
      --wa-border-radius-circle: 50%;
      --wa-border-radius-square: 0px;
      /* #endregion */

      /* #region Focus ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
      --wa-focus-ring-style: solid;
      --wa-focus-ring-width: 0.1875rem; /* 3px */
      --wa-focus-ring: var(--wa-focus-ring-style) var(--wa-focus-ring-width) color-mix(in oklab, var(--wa-color-focus) 60%, transparent);
      --wa-focus-ring-offset: 0.0625rem; /* 1px */
      /* #endregion */

      /* #region Shadows ~~~~~~~~~~~~~~~~~~~~~~~~~~ */
      --wa-shadow-offset-x-scale: 0;
      --wa-shadow-offset-x-s: calc(var(--wa-shadow-offset-x-scale) * 0.125rem);
      --wa-shadow-offset-x-m: calc(var(--wa-shadow-offset-x-scale) * 0.25rem);
      --wa-shadow-offset-x-l: calc(var(--wa-shadow-offset-x-scale) * 0.5rem);

      --wa-shadow-offset-y-scale: 0.0625;
      --wa-shadow-offset-y-s: calc(var(--wa-shadow-offset-y-scale) * 0.125rem);
      --wa-shadow-offset-y-m: calc(var(--wa-shadow-offset-y-scale) * 0.25rem);
      --wa-shadow-offset-y-l: calc(var(--wa-shadow-offset-y-scale) * 0.5rem);

      --wa-shadow-blur-scale: 1;
      --wa-shadow-blur-s: calc(var(--wa-shadow-blur-scale) * 0.125rem);
      --wa-shadow-blur-m: calc(var(--wa-shadow-blur-scale) * 0.25rem);
      --wa-shadow-blur-l: calc(var(--wa-shadow-blur-scale) * 0.5rem);

      --wa-shadow-spread-scale: 0;
      --wa-shadow-spread-s: calc(var(--wa-shadow-spread-scale) * 0.125rem);
      --wa-shadow-spread-m: calc(var(--wa-shadow-spread-scale) * 0.25rem);
      --wa-shadow-spread-l: calc(var(--wa-shadow-spread-scale) * 0.5rem);

      --wa-shadow-s: var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s) var(--wa-shadow-spread-s) var(--wa-color-shadow);
      --wa-shadow-m: var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m) var(--wa-shadow-spread-m) var(--wa-color-shadow);
      --wa-shadow-l: var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l) var(--wa-shadow-spread-l) var(--wa-color-shadow);
      /* #endregion */

      /* #region Transitions ~~~~~~~~~~~~~~~~~~~~~~ */
      --wa-transition-easing: ease;
      --wa-transition-slow: 250ms;
      --wa-transition-normal: 150ms;
      --wa-transition-fast: 50ms;
      /* #endregion */

      /* #region Components ~~~~~~~~~~~~~~~~~~~~~~~ */
      /* Form Controls */
      --wa-form-control-background-color: var(--wa-color-surface-default);

      --wa-form-control-border-color: var(--wa-color-neutral-border-normal);
      --wa-form-control-border-style: var(--wa-border-style);
      --wa-form-control-border-width: var(--wa-border-width-s);
      --wa-form-control-border-radius: var(--wa-border-radius-m);

      --wa-form-control-activated-color: var(--wa-color-brand-fill-loud);

      --wa-form-control-label-color: var(--wa-color-text-normal);
      --wa-form-control-label-font-weight: var(--wa-font-weight-semibold);
      --wa-form-control-label-line-height: var(--wa-line-height-condensed);

      --wa-form-control-value-color: var(--wa-color-text-normal);
      --wa-form-control-value-font-weight: var(--wa-font-weight-body);
      --wa-form-control-value-line-height: var(--wa-line-height-condensed);

      --wa-form-control-hint-color: var(--wa-color-text-quiet);
      --wa-form-control-hint-font-weight: var(--wa-font-weight-body);
      --wa-form-control-hint-line-height: var(--wa-line-height-normal);

      --wa-form-control-placeholder-color: var(--wa-color-gray-50);

      --wa-form-control-required-content: '*';
      --wa-form-control-required-content-color: inherit;
      --wa-form-control-required-content-offset: 0.1em;

      --wa-form-control-padding-block: 0.75em;
      --wa-form-control-padding-inline: 1em;
      --wa-form-control-height: round(
        calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)),
        1px
      );
      --wa-form-control-toggle-size: round(1.25em, 1px);

      /* Panels */
      --wa-panel-border-style: var(--wa-border-style);
      --wa-panel-border-width: var(--wa-border-width-s);
      --wa-panel-border-radius: var(--wa-border-radius-m);

      /* Tooltips */
      --wa-tooltip-arrow-size: 0.375rem;

      --wa-tooltip-background-color: var(--wa-color-text-normal);

      --wa-tooltip-border-color: var(--wa-tooltip-background-color);
      --wa-tooltip-border-style: var(--wa-border-style);
      --wa-tooltip-border-width: var(--wa-border-width-s);
      --wa-tooltip-border-radius: var(--wa-border-radius-s);

      --wa-tooltip-content-color: var(--wa-color-surface-default);
      --wa-tooltip-font-size: var(--wa-font-size-s);
      --wa-tooltip-line-height: var(--wa-line-height-normal);
      /* #endregion */
    }
  }
  @layer wa-theme-overrides {
    .wa-theme-shoelace {
      wa-avatar {
        background-color: var(--wa-color-neutral-fill-loud);
        color: var(--wa-color-neutral-on-loud);
      }

      wa-button::part(label),
      wa-radio[appearance='button'],
      button,
      input:where([type='button'], [type='reset'], [type='submit']) {
        font-size: var(--wa-font-size-smaller);
      }

      wa-radio[appearance='button'] {
        font-weight: var(--wa-font-weight-action);

        &:state(checked) {
          background-color: var(--wa-form-control-activated-color);
          color: var(--wa-color-brand-on-loud);
        }
      }

      wa-breadcrumb {
        font-size: var(--wa-font-size-s);
      }

      wa-callout {
        padding: var(--wa-space-m);
        font-size: var(--wa-font-size-smaller);

        &:is([appearance~='outlined']) {
          border-top-width: var(--wa-border-width-l);
          border-color: var(--wa-color-surface-border);
          border-top-color: var(--border-color, var(--wa-color-border-loud));
        }
      }

      wa-card {
        background-color: var(--wa-color-surface-raised);
      }

      :is(
        wa-input,
        wa-select,
        wa-textarea,
        input:where(
            :not(
              [type='button'],
              [type='checkbox'],
              [type='color'],
              [type='file'],
              [type='hidden'],
              [type='image'],
              [type='radio'],
              [type='range'],
              [type='reset'],
              [type='submit']
            )
          ),
        select,
        textarea
      ):not([appearance='filled'], .wa-filled) {
        --wa-focus-ring: var(--wa-focus-ring-style) var(--wa-focus-ring-width) color-mix(in oklab, var(--wa-color-focus), transparent 50%);
        --wa-focus-ring-offset: 0;
      }

      wa-radio,
      input[type='radio'] {
        --checked-icon-color: var(--wa-color-surface-default);
        --checked-icon-scale: 0.4;

        &:checked,
        &:state(checked)::part(control) {
          background-color: var(--wa-form-control-activated-color);
        }
      }

      wa-slider::part(thumb) {
        border: none;
      }

      wa-switch {
        --height: calc(1em * var(--wa-form-control-value-line-height) - var(--wa-form-control-border-width) * 2);
        --thumb-size: calc(var(--height) + 0.25em);
        --width: calc(var(--height) * 2);

        &::part(control) {
          background-color: var(--wa-color-gray-50);
          border-color: var(--wa-color-gray-50);
        }

        &:state(checked)::part(control) {
          background-color: var(--wa-form-control-activated-color);
          border-color: var(--wa-form-control-activated-color);
        }

        &::part(thumb) {
          background-color: var(--wa-color-surface-default);
          border: var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-gray-50);
        }

        &:state(checked)::part(thumb) {
          border-color: var(--wa-form-control-activated-color);
        }
      }

      wa-tab {
        font-size: var(--wa-font-size-smaller);
      }
    }
  }

  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYXdlc29tZS5tZS93ZWJhd2Vzb21lL2Rpc3Qvc3R5bGVzL2xheWVycy5jc3MiLCJub2RlX21vZHVsZXMvQGF3ZXNvbWUubWUvd2ViYXdlc29tZS9kaXN0L3N0eWxlcy9jb2xvci9wYWxldHRlcy9iYXNlLmNzcyIsIm5vZGVfbW9kdWxlcy9AYXdlc29tZS5tZS93ZWJhd2Vzb21lL2Rpc3Qvc3R5bGVzL2NvbG9yL3ZhcmlhbnRzL2JyYW5kLmNzcyIsIm5vZGVfbW9kdWxlcy9AYXdlc29tZS5tZS93ZWJhd2Vzb21lL2Rpc3Qvc3R5bGVzL2NvbG9yL3ZhcmlhbnRzL25ldXRyYWwuY3NzIiwibm9kZV9tb2R1bGVzL0Bhd2Vzb21lLm1lL3dlYmF3ZXNvbWUvZGlzdC9zdHlsZXMvY29sb3IvdmFyaWFudHMvc3VjY2Vzcy5jc3MiLCJub2RlX21vZHVsZXMvQGF3ZXNvbWUubWUvd2ViYXdlc29tZS9kaXN0L3N0eWxlcy9jb2xvci92YXJpYW50cy93YXJuaW5nLmNzcyIsIm5vZGVfbW9kdWxlcy9AYXdlc29tZS5tZS93ZWJhd2Vzb21lL2Rpc3Qvc3R5bGVzL2NvbG9yL3ZhcmlhbnRzL2Rhbmdlci5jc3MiLCJub2RlX21vZHVsZXMvQGF3ZXNvbWUubWUvd2ViYXdlc29tZS9kaXN0L3N0eWxlcy9jb2xvci9wYWxldHRlcy9zaG9lbGFjZS5jc3MiLCJub2RlX21vZHVsZXMvQGF3ZXNvbWUubWUvd2ViYXdlc29tZS9kaXN0L3N0eWxlcy90aGVtZXMvc2hvZWxhY2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvSEFBb0g7QUFEcEgsOERBQThEO0FDQTlELGlDQUFpQztBQ0FqQztFQUNFOztJQUVFLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsc0NBQXNDO0lBQ3RDLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0MscUNBQXFDO0lBQ3JDLDJDQUEyQztFQUM3Qzs7RUFFQTtJQUNFLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsd0NBQXdDO0lBQ3hDLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsd0NBQXdDO0lBQ3hDLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsdUNBQXVDO0lBQ3ZDLDZDQUE2QztFQUMvQzs7RUFFQTtJQUNFLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsc0NBQXNDO0lBQ3RDLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsd0NBQXdDO0lBQ3hDLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsd0NBQXdDO0lBQ3hDLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsc0NBQXNDO0lBQ3RDLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsc0NBQXNDO0lBQ3RDLDRDQUE0QztFQUM5QztBQUNGO0FDaktBO0VBQ0U7O0lBRUUsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyx3Q0FBd0M7SUFDeEMsOENBQThDO0VBQ2hEOztFQUVBO0lBQ0UsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCwwQ0FBMEM7SUFDMUMsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCwwQ0FBMEM7SUFDMUMsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQyx5Q0FBeUM7SUFDekMsK0NBQStDO0VBQ2pEOztFQUVBO0lBQ0UsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyx3Q0FBd0M7SUFDeEMsOENBQThDO0VBQ2hEOztFQUVBO0lBQ0UsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyx3Q0FBd0M7SUFDeEMsOENBQThDO0VBQ2hEOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCwwQ0FBMEM7SUFDMUMsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCwwQ0FBMEM7SUFDMUMsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyx3Q0FBd0M7SUFDeEMsOENBQThDO0VBQ2hEO0FBQ0Y7QUNqS0E7RUFDRTs7SUFFRSwrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLHlDQUF5QztJQUN6QywrQ0FBK0M7RUFDakQ7O0VBRUE7SUFDRSw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLHVDQUF1QztJQUN2Qyw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELDBDQUEwQztJQUMxQyxnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELDBDQUEwQztJQUMxQyxnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4Qyw4Q0FBOEM7RUFDaEQ7O0VBRUE7SUFDRSw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4Qyw4Q0FBOEM7RUFDaEQ7O0VBRUE7SUFDRSxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELDBDQUEwQztJQUMxQyxnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELDBDQUEwQztJQUMxQyxnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4Qyw4Q0FBOEM7RUFDaEQ7O0VBRUE7SUFDRSw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4Qyw4Q0FBOEM7RUFDaEQ7QUFDRjtBQ2pLQTtFQUNFOztJQUVFLGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsMENBQTBDO0lBQzFDLGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsdUNBQXVDO0lBQ3ZDLDZDQUE2QztFQUMvQzs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsMENBQTBDO0lBQzFDLGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MseUNBQXlDO0lBQ3pDLCtDQUErQztFQUNqRDs7RUFFQTtJQUNFLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsd0NBQXdDO0lBQ3hDLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsd0NBQXdDO0lBQ3hDLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsMENBQTBDO0lBQzFDLGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsMENBQTBDO0lBQzFDLGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsd0NBQXdDO0lBQ3hDLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsd0NBQXdDO0lBQ3hDLDhDQUE4QztFQUNoRDtBQUNGO0FDaktBO0VBQ0U7O0lBRUUsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1QyxzQ0FBc0M7SUFDdEMsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0UsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQyx5Q0FBeUM7SUFDekMsK0NBQStDO0VBQ2pEOztFQUVBO0lBQ0UsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQyx5Q0FBeUM7SUFDekMsK0NBQStDO0VBQ2pEOztFQUVBO0lBQ0UsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyx3Q0FBd0M7SUFDeEMsOENBQThDO0VBQ2hEOztFQUVBO0lBQ0UsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQyx5Q0FBeUM7SUFDekMsK0NBQStDO0VBQ2pEOztFQUVBO0lBQ0UsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQyx5Q0FBeUM7SUFDekMsK0NBQStDO0VBQ2pEOztFQUVBO0lBQ0UsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsNkNBQTZDO0VBQy9DO0FBQ0Y7QUw3SkEsbUZBQW1GO0FBQ25GOztFQUVFOzs7Ozs7O0tBT0c7O0VBRUgsc0ZBQXNGO0VBQ3RGLDRGQUE0RjtFQUM1Riw0RkFBNEY7RUFDNUYsMEZBQTBGO0VBQzFGLHdGQUF3RjtFQUN4Rix3RkFBd0Y7RUFDeEYsNEZBQTRGO0VBQzVGLDRGQUE0RjtFQUM1Rix3RkFBd0Y7RUFDeEYsd0ZBQXdGOztFQUV4Rjs7OztLQUlHOztFQUVILGdHQUFnRztFQUNoRyx5R0FBeUc7RUFDekcseUdBQXlHO0VBQ3pHLHNHQUFzRztFQUN0RyxtR0FBbUc7RUFDbkcsbUdBQW1HO0VBQ25HLHlHQUF5RztFQUN6Ryx5R0FBeUc7RUFDekcsbUdBQW1HO0VBQ25HLG1HQUFtRztBQUNyRztBTXpDQTtFQUNFOztJQUVFLDZEQUE2RDtJQUM3RCw4REFBOEQ7SUFDOUQsNERBQTREO0lBQzVELDhEQUE4RDtJQUM5RCw4REFBOEQ7SUFDOUQsOERBQThEO0lBQzlELDZEQUE2RDtJQUM3RCw4REFBOEQ7SUFDOUQsNkRBQTZEO0lBQzdELDhEQUE4RDtJQUM5RCw4REFBOEQ7SUFDOUQsc0NBQXNDO0lBQ3RDLHNCQUFzQjs7SUFFdEIsZ0VBQWdFO0lBQ2hFLGlFQUFpRTtJQUNqRSxpRUFBaUU7SUFDakUsaUVBQWlFO0lBQ2pFLGdFQUFnRTtJQUNoRSxpRUFBaUU7SUFDakUsaUVBQWlFO0lBQ2pFLDhEQUE4RDtJQUM5RCxnRUFBZ0U7SUFDaEUsaUVBQWlFO0lBQ2pFLGlFQUFpRTtJQUNqRSw0Q0FBNEM7SUFDNUMseUJBQXlCOztJQUV6QixpRUFBaUU7SUFDakUsK0RBQStEO0lBQy9ELGlFQUFpRTtJQUNqRSxpRUFBaUU7SUFDakUsaUVBQWlFO0lBQ2pFLGlFQUFpRTtJQUNqRSxpRUFBaUU7SUFDakUsK0RBQStEO0lBQy9ELGdFQUFnRTtJQUNoRSxnRUFBZ0U7SUFDaEUsaUVBQWlFO0lBQ2pFLDRDQUE0QztJQUM1Qyx5QkFBeUI7O0lBRXpCLGdFQUFnRTtJQUNoRSw4REFBOEQ7SUFDOUQsZ0VBQWdFO0lBQ2hFLDZEQUE2RDtJQUM3RCxnRUFBZ0U7SUFDaEUsZ0VBQWdFO0lBQ2hFLGdFQUFnRTtJQUNoRSxnRUFBZ0U7SUFDaEUsZ0VBQWdFO0lBQ2hFLGdFQUFnRTtJQUNoRSxnRUFBZ0U7SUFDaEUsMENBQTBDO0lBQzFDLHdCQUF3Qjs7SUFFeEIsK0RBQStEO0lBQy9ELCtEQUErRDtJQUMvRCw4REFBOEQ7SUFDOUQsK0RBQStEO0lBQy9ELCtEQUErRDtJQUMvRCwrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELCtEQUErRDtJQUMvRCw4REFBOEQ7SUFDOUQsK0RBQStEO0lBQy9ELCtEQUErRDtJQUMvRCx3Q0FBd0M7SUFDeEMsdUJBQXVCOztJQUV2Qiw4REFBOEQ7SUFDOUQsMkRBQTJEO0lBQzNELCtEQUErRDtJQUMvRCwrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELDhEQUE4RDtJQUM5RCwrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELDZEQUE2RDtJQUM3RCwrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELHdDQUF3QztJQUN4Qyx1QkFBdUI7O0lBRXZCLGlFQUFpRTtJQUNqRSxpRUFBaUU7SUFDakUsaUVBQWlFO0lBQ2pFLGlFQUFpRTtJQUNqRSxnRUFBZ0U7SUFDaEUsaUVBQWlFO0lBQ2pFLGlFQUFpRTtJQUNqRSxpRUFBaUU7SUFDakUsaUVBQWlFO0lBQ2pFLGlFQUFpRTtJQUNqRSxnRUFBZ0U7SUFDaEUsNENBQTRDO0lBQzVDLHlCQUF5Qjs7SUFFekIsaUVBQWlFO0lBQ2pFLGdFQUFnRTtJQUNoRSxpRUFBaUU7SUFDakUsaUVBQWlFO0lBQ2pFLGdFQUFnRTtJQUNoRSxnRUFBZ0U7SUFDaEUsaUVBQWlFO0lBQ2pFLGlFQUFpRTtJQUNqRSxpRUFBaUU7SUFDakUsaUVBQWlFO0lBQ2pFLGdFQUFnRTtJQUNoRSw0Q0FBNEM7SUFDNUMseUJBQXlCOztJQUV6QiwrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELDhEQUE4RDtJQUM5RCwrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELGdFQUFnRTtJQUNoRSwrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELCtEQUErRDtJQUMvRCwrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELHdDQUF3QztJQUN4Qyx1QkFBdUI7O0lBRXZCLCtEQUErRDtJQUMvRCwrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELCtEQUErRDtJQUMvRCwrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELDhEQUE4RDtJQUM5RCwrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELCtEQUErRDtJQUMvRCwrREFBK0Q7SUFDL0Qsd0NBQXdDO0lBQ3hDLHVCQUF1QjtFQUN6QjtBQUNGO0FDaEorQywrRUFBK0U7QUFFOUg7RUFDRTs7Ozs7Ozs7SUFRRSxpREFBaUQ7SUFDakQsbUJBQW1CO0lBQ25CLGtDQUFrQzs7SUFFbEMsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxzREFBc0Q7SUFDdEQscURBQXFEOztJQUVyRCxrREFBa0Q7SUFDbEQsaURBQWlEO0lBQ2pELDhDQUE4Qzs7SUFFOUMsMEZBQTBGO0lBQzFGLDJGQUEyRjs7SUFFM0Y7Ozs7S0FJQzs7SUFFRCwwQ0FBMEM7O0lBRTFDLCtCQUErQjtJQUMvQixnQ0FBZ0M7O0lBRWhDLHFEQUFxRDtJQUNyRCxzREFBc0Q7SUFDdEQsb0RBQW9EO0lBQ3BELHVEQUF1RDtJQUN2RCx3REFBd0Q7SUFDeEQsc0RBQXNEO0lBQ3RELG1EQUFtRDtJQUNuRCxvREFBb0Q7SUFDcEQsK0JBQStCOztJQUUvQix5REFBeUQ7SUFDekQsMERBQTBEO0lBQzFELHdEQUF3RDtJQUN4RCwyREFBMkQ7SUFDM0QsNERBQTREO0lBQzVELDBEQUEwRDtJQUMxRCx1REFBdUQ7SUFDdkQsd0RBQXdEO0lBQ3hELGlDQUFpQzs7SUFFakMseURBQXlEO0lBQ3pELDBEQUEwRDtJQUMxRCx3REFBd0Q7SUFDeEQsMkRBQTJEO0lBQzNELDREQUE0RDtJQUM1RCwwREFBMEQ7SUFDMUQsdURBQXVEO0lBQ3ZELHdEQUF3RDtJQUN4RCxpQ0FBaUM7O0lBRWpDLHVEQUF1RDtJQUN2RCx3REFBd0Q7SUFDeEQsc0RBQXNEO0lBQ3RELHlEQUF5RDtJQUN6RCwwREFBMEQ7SUFDMUQsd0RBQXdEO0lBQ3hELHFEQUFxRDtJQUNyRCxzREFBc0Q7SUFDdEQsZ0NBQWdDOztJQUVoQyx5REFBeUQ7SUFDekQsMERBQTBEO0lBQzFELHdEQUF3RDtJQUN4RCwyREFBMkQ7SUFDM0QsNERBQTREO0lBQzVELDBEQUEwRDtJQUMxRCx1REFBdUQ7SUFDdkQsd0RBQXdEO0lBQ3hELGlDQUFpQztJQUNqQyxlQUFlO0VBQ2pCOztFQUVBOzs7Ozs7O0lBT0UsaURBQWlEO0lBQ2pELGtCQUFrQjtJQUNsQixrQ0FBa0M7O0lBRWxDLHFEQUFxRDtJQUNyRCxzREFBc0Q7SUFDdEQsMkZBQTJGO0lBQzNGLHFEQUFxRDs7SUFFckQsa0RBQWtEO0lBQ2xELGlEQUFpRDtJQUNqRCw4Q0FBOEM7O0lBRTlDLHFFQUFxRTtJQUNyRSwyRkFBMkY7O0lBRTNGOzs7O0tBSUM7O0lBRUQsMENBQTBDOztJQUUxQyw4QkFBOEI7SUFDOUIsZ0NBQWdDOztJQUVoQyxxREFBcUQ7SUFDckQsc0RBQXNEO0lBQ3RELG9EQUFvRDtJQUNwRCx1REFBdUQ7SUFDdkQsd0RBQXdEO0lBQ3hELHNEQUFzRDtJQUN0RCxtREFBbUQ7SUFDbkQsb0RBQW9EO0lBQ3BELG9EQUFvRDs7SUFFcEQseURBQXlEO0lBQ3pELDBEQUEwRDtJQUMxRCx3REFBd0Q7SUFDeEQsMkRBQTJEO0lBQzNELDREQUE0RDtJQUM1RCwwREFBMEQ7SUFDMUQsdURBQXVEO0lBQ3ZELHdEQUF3RDtJQUN4RCxzREFBc0Q7O0lBRXRELHlEQUF5RDtJQUN6RCwwREFBMEQ7SUFDMUQsd0RBQXdEO0lBQ3hELDJEQUEyRDtJQUMzRCw0REFBNEQ7SUFDNUQsMERBQTBEO0lBQzFELHVEQUF1RDtJQUN2RCx3REFBd0Q7SUFDeEQsc0RBQXNEOztJQUV0RCx1REFBdUQ7SUFDdkQsd0RBQXdEO0lBQ3hELHNEQUFzRDtJQUN0RCx5REFBeUQ7SUFDekQsMERBQTBEO0lBQzFELHdEQUF3RDtJQUN4RCxxREFBcUQ7SUFDckQsc0RBQXNEO0lBQ3RELHFEQUFxRDs7SUFFckQseURBQXlEO0lBQ3pELDBEQUEwRDtJQUMxRCx3REFBd0Q7SUFDeEQsMkRBQTJEO0lBQzNELDREQUE0RDtJQUM1RCwwREFBMEQ7SUFDMUQsdURBQXVEO0lBQ3ZELHdEQUF3RDtJQUN4RCxzREFBc0Q7SUFDdEQsZUFBZTtFQUNqQjs7RUFFQTs7Ozs7OztJQU9FLHVDQUF1Qzs7SUFFdkMsK0NBQStDO0lBQy9DLDJEQUEyRDtJQUMzRCxvREFBb0Q7SUFDcEQsOENBQThDO0lBQzlDLDBDQUEwQzs7SUFFMUM7OzZGQUV5RjtJQUN6Rix1QkFBdUI7SUFDdkIsb0VBQW9FLEVBQUUsU0FBUztJQUMvRSxrRUFBa0UsRUFBRSxTQUFTO0lBQzdFLGlFQUFpRSxFQUFFLFNBQVM7SUFDNUUsd0RBQXdELEVBQUUsU0FBUztJQUNuRSx5RUFBeUUsRUFBRSxTQUFTO0lBQ3BGLDBFQUEwRSxFQUFFLFNBQVM7SUFDckYsNEVBQTRFLEVBQUUsU0FBUztJQUN2Riw2RUFBNkUsRUFBRSxTQUFTO0lBQ3hGLDZFQUE2RSxFQUFFLFNBQVM7O0lBRXhGLHFEQUFxRDtJQUNyRCw0REFBNEQ7O0lBRTVELDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDBCQUEwQjs7SUFFMUIsbURBQW1EO0lBQ25ELG9EQUFvRDtJQUNwRCxtREFBbUQ7SUFDbkQsdURBQXVEO0lBQ3ZELHVEQUF1RDs7SUFFdkQsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1Qiw0QkFBNEI7O0lBRTVCLHVDQUF1QztJQUN2QyxxQ0FBcUM7SUFDckMsZUFBZTs7SUFFZiwrQ0FBK0M7SUFDL0MsbUJBQW1CO0lBQ25CLHNEQUFzRCxFQUFFLFFBQVE7SUFDaEUscURBQXFELEVBQUUsUUFBUTtJQUMvRCxtREFBbUQsRUFBRSxRQUFRO0lBQzdELG1EQUFtRCxFQUFFLFNBQVM7SUFDOUQsZ0RBQWdELEVBQUUsU0FBUztJQUMzRCxrREFBa0QsRUFBRSxTQUFTO0lBQzdELGlEQUFpRCxFQUFFLFNBQVM7SUFDNUQsb0RBQW9ELEVBQUUsU0FBUztJQUMvRCxrREFBa0QsRUFBRSxTQUFTO0lBQzdELGtEQUFrRCxFQUFFLFNBQVM7O0lBRTdELHVDQUF1QztJQUN2QyxlQUFlOztJQUVmLCtDQUErQztJQUMvQyx3QkFBd0I7O0lBRXhCLDBCQUEwQjtJQUMxQixtRUFBbUU7SUFDbkUsa0VBQWtFO0lBQ2xFLG1FQUFtRTtJQUNuRSxlQUFlOztJQUVmLCtDQUErQztJQUMvQyw2QkFBNkI7SUFDN0IscUVBQXFFO0lBQ3JFLG9FQUFvRTtJQUNwRSxtRUFBbUU7O0lBRW5FLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLGVBQWU7O0lBRWYsK0NBQStDO0lBQy9DLDRCQUE0QjtJQUM1QixnQ0FBZ0MsRUFBRSxRQUFRO0lBQzFDO2lFQUM2RDtJQUM3RCxpQ0FBaUMsRUFBRSxRQUFRO0lBQzNDLGVBQWU7O0lBRWYsK0NBQStDO0lBQy9DLDZCQUE2QjtJQUM3Qix3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHNFQUFzRTs7SUFFdEUsa0NBQWtDO0lBQ2xDLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsc0VBQXNFOztJQUV0RSx5QkFBeUI7SUFDekIsZ0VBQWdFO0lBQ2hFLCtEQUErRDtJQUMvRCw4REFBOEQ7O0lBRTlELDJCQUEyQjtJQUMzQixvRUFBb0U7SUFDcEUsbUVBQW1FO0lBQ25FLGtFQUFrRTs7SUFFbEU7c0RBQ2tEO0lBQ2xEO3NEQUNrRDtJQUNsRDtzREFDa0Q7SUFDbEQsZUFBZTs7SUFFZiwrQ0FBK0M7SUFDL0MsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLGVBQWU7O0lBRWYsK0NBQStDO0lBQy9DLGtCQUFrQjtJQUNsQixtRUFBbUU7O0lBRW5FLHFFQUFxRTtJQUNyRSxzREFBc0Q7SUFDdEQsd0RBQXdEO0lBQ3hELDBEQUEwRDs7SUFFMUQsa0VBQWtFOztJQUVsRSwwREFBMEQ7SUFDMUQsbUVBQW1FO0lBQ25FLG9FQUFvRTs7SUFFcEUsMERBQTBEO0lBQzFELCtEQUErRDtJQUMvRCxvRUFBb0U7O0lBRXBFLHdEQUF3RDtJQUN4RCw4REFBOEQ7SUFDOUQsZ0VBQWdFOztJQUVoRSw0REFBNEQ7O0lBRTVELHVDQUF1QztJQUN2QyxpREFBaUQ7SUFDakQsZ0RBQWdEOztJQUVoRCx1Q0FBdUM7SUFDdkMscUNBQXFDO0lBQ3JDOzs7S0FHQztJQUNELGlEQUFpRDs7SUFFakQsV0FBVztJQUNYLCtDQUErQztJQUMvQyxpREFBaUQ7SUFDakQsbURBQW1EOztJQUVuRCxhQUFhO0lBQ2IsaUNBQWlDOztJQUVqQywwREFBMEQ7O0lBRTFELDZEQUE2RDtJQUM3RCxpREFBaUQ7SUFDakQsbURBQW1EO0lBQ25ELHFEQUFxRDs7SUFFckQsMkRBQTJEO0lBQzNELDZDQUE2QztJQUM3QyxzREFBc0Q7SUFDdEQsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFO01BQ0UsbURBQW1EO01BQ25ELHNDQUFzQztJQUN4Qzs7SUFFQTs7OztNQUlFLHNDQUFzQztJQUN4Qzs7SUFFQTtNQUNFLHlDQUF5Qzs7TUFFekM7UUFDRSx3REFBd0Q7UUFDeEQsb0NBQW9DO01BQ3RDO0lBQ0Y7O0lBRUE7TUFDRSxnQ0FBZ0M7SUFDbEM7O0lBRUE7TUFDRSwwQkFBMEI7TUFDMUIsc0NBQXNDOztNQUV0QztRQUNFLDBDQUEwQztRQUMxQyw0Q0FBNEM7UUFDNUMsa0VBQWtFO01BQ3BFO0lBQ0Y7O0lBRUE7TUFDRSxnREFBZ0Q7SUFDbEQ7O0lBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXFCRTttRUFDNkQ7TUFDN0QseUJBQXlCO0lBQzNCOztJQUVBOztNQUVFLHFEQUFxRDtNQUNyRCx5QkFBeUI7O01BRXpCOztRQUVFLHdEQUF3RDtNQUMxRDtJQUNGOztJQUVBO01BQ0UsWUFBWTtJQUNkOztJQUVBO01BQ0Usd0dBQXdHO01BQ3hHLDBDQUEwQztNQUMxQyxnQ0FBZ0M7O01BRWhDO1FBQ0UseUNBQXlDO1FBQ3pDLHFDQUFxQztNQUN2Qzs7TUFFQTtRQUNFLHdEQUF3RDtRQUN4RCxvREFBb0Q7TUFDdEQ7O01BRUE7UUFDRSxpREFBaUQ7UUFDakQsK0VBQStFO01BQ2pGO01BQ0E7UUFDRSxvREFBb0Q7TUFDdEQ7SUFDRjs7SUFFQTtNQUNFLHNDQUFzQztJQUN4QztFQUNGO0FBQ0YiLCJmaWxlIjoidGhlbWUtZmxhdC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPcmRlciBvZiBwcmVjZWRlbmNlIGZvciBhbGwgY2FzY2FkZSBsYXllcnMgaW4gV2ViIEF3ZXNvbWUgKi9cbkBsYXllciB3YS1uYXRpdmUsIHdhLXV0aWxpdGllcywgd2EtY29sb3ItcGFsZXR0ZSwgd2EtY29sb3ItdmFyaWFudCwgd2EtdGhlbWUsIHdhLXRoZW1lLWRpbWVuc2lvbiwgd2EtdGhlbWUtb3ZlcnJpZGVzO1xuIiwiLyogUnVsZXMgc2hhcmVkIGJ5IGFsbCBwYWxldHRlcyAqL1xuQGltcG9ydCB1cmwoJy4uLy4uL2xheWVycy5jc3MnKTtcbkBpbXBvcnQgdXJsKCcuLi92YXJpYW50cy5jc3MnKTtcblxuLyogR2VuZXJhdGVzIC0td2EtY29sb3Ite2h1ZX0tb24gdG9rZW5zIGZvciBwYWlyaW5nIHdpdGggYW55IHBhbGV0dGUncyBrZXkgY29sb3JzICovXG46d2hlcmUoOnJvb3QpLFxuOmhvc3Qge1xuICAvKipcbiAgICAqIENvbmRpdGlvbmFsIHRva2VucyB0byBjaGVjayBpZiB0aGUga2V5IGNvbG9yIGlzID49IDYwXG4gICAgKiBLZXkgY29sb3JzIGFyZSB0aGUgbW9zdCBjb2xvcmZ1bCB0aW50IGluIGEgc2NhbGUsIHJlY29yZGVkIGFzIC0td2EtY29sb3Ite2h1ZX0gaW4gZWFjaCBwYWxldHRlXG4gICAgKiBUaGUgbnVtZXJpYyB2YWx1ZSBvZiB0aGUga2V5IGlzIGlzb2xhdGVkIGFzIC0td2EtY29sb3Ite2h1ZX0ta2V5XG4gICAgKiBJZiBrZXkgPCA2MCwgdGhlIHJlc3VsdCBpcyAwJVxuICAgICogSWYga2V5ID49IDYwLCB0aGUgcmVzdWx0IGlzIDEwMCVcbiAgICAqIEludGVuZGVkIHRvIGJlIHVzZWQgaW4gdGhlIGNvbG9yLW1peCgpIGZ1bmN0aW9ucyBiZWxvd1xuICAgICovXG5cbiAgLS13YS1jb2xvci1yZWQtZ3RlLTYwOiBjYWxjKDEwMCUgLSAoY2xhbXAoMCwgNjAgLSB2YXIoLS13YS1jb2xvci1yZWQta2V5KSwgMSkgKiAxMDAlKSk7XG4gIC0td2EtY29sb3Itb3JhbmdlLWd0ZS02MDogY2FsYygxMDAlIC0gKGNsYW1wKDAsIDYwIC0gdmFyKC0td2EtY29sb3Itb3JhbmdlLWtleSksIDEpICogMTAwJSkpO1xuICAtLXdhLWNvbG9yLXllbGxvdy1ndGUtNjA6IGNhbGMoMTAwJSAtIChjbGFtcCgwLCA2MCAtIHZhcigtLXdhLWNvbG9yLXllbGxvdy1rZXkpLCAxKSAqIDEwMCUpKTtcbiAgLS13YS1jb2xvci1ncmVlbi1ndGUtNjA6IGNhbGMoMTAwJSAtIChjbGFtcCgwLCA2MCAtIHZhcigtLXdhLWNvbG9yLWdyZWVuLWtleSksIDEpICogMTAwJSkpO1xuICAtLXdhLWNvbG9yLWN5YW4tZ3RlLTYwOiBjYWxjKDEwMCUgLSAoY2xhbXAoMCwgNjAgLSB2YXIoLS13YS1jb2xvci1jeWFuLWtleSksIDEpICogMTAwJSkpO1xuICAtLXdhLWNvbG9yLWJsdWUtZ3RlLTYwOiBjYWxjKDEwMCUgLSAoY2xhbXAoMCwgNjAgLSB2YXIoLS13YS1jb2xvci1ibHVlLWtleSksIDEpICogMTAwJSkpO1xuICAtLXdhLWNvbG9yLWluZGlnby1ndGUtNjA6IGNhbGMoMTAwJSAtIChjbGFtcCgwLCA2MCAtIHZhcigtLXdhLWNvbG9yLWluZGlnby1rZXkpLCAxKSAqIDEwMCUpKTtcbiAgLS13YS1jb2xvci1wdXJwbGUtZ3RlLTYwOiBjYWxjKDEwMCUgLSAoY2xhbXAoMCwgNjAgLSB2YXIoLS13YS1jb2xvci1wdXJwbGUta2V5KSwgMSkgKiAxMDAlKSk7XG4gIC0td2EtY29sb3ItcGluay1ndGUtNjA6IGNhbGMoMTAwJSAtIChjbGFtcCgwLCA2MCAtIHZhcigtLXdhLWNvbG9yLXBpbmsta2V5KSwgMSkgKiAxMDAlKSk7XG4gIC0td2EtY29sb3ItZ3JheS1ndGUtNjA6IGNhbGMoMTAwJSAtIChjbGFtcCgwLCA2MCAtIHZhcigtLXdhLWNvbG9yLWdyYXkta2V5KSwgMSkgKiAxMDAlKSk7XG5cbiAgLyoqXG4gICAgKiBUb2tlbnMgdG8gc2V0IHRleHQgY29sb3Igd2l0aCBhcHByb3ByaWF0ZSBXQ0FHIDIuMSBjb250cmFzdFxuICAgICogSWYga2V5IDwgNjAsIHRoZSB0ZXh0IGNvbG9yIGlzIHdoaXRlXG4gICAgKiBJZiBrZXkgPj0gNjAsIHRoZSB0ZXh0IGNvbG9yIGlzIHtodWV9LTEwXG4gICAgKi9cblxuICAtLXdhLWNvbG9yLXJlZC1vbjogY29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS13YS1jb2xvci1yZWQtMTApIHZhcigtLXdhLWNvbG9yLXJlZC1ndGUtNjApLCB3aGl0ZSk7XG4gIC0td2EtY29sb3Itb3JhbmdlLW9uOiBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLXdhLWNvbG9yLW9yYW5nZS0xMCkgdmFyKC0td2EtY29sb3Itb3JhbmdlLWd0ZS02MCksIHdoaXRlKTtcbiAgLS13YS1jb2xvci15ZWxsb3ctb246IGNvbG9yLW1peChpbiBva2xhYiwgdmFyKC0td2EtY29sb3IteWVsbG93LTEwKSB2YXIoLS13YS1jb2xvci15ZWxsb3ctZ3RlLTYwKSwgd2hpdGUpO1xuICAtLXdhLWNvbG9yLWdyZWVuLW9uOiBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLXdhLWNvbG9yLWdyZWVuLTEwKSB2YXIoLS13YS1jb2xvci1ncmVlbi1ndGUtNjApLCB3aGl0ZSk7XG4gIC0td2EtY29sb3ItY3lhbi1vbjogY29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS13YS1jb2xvci1jeWFuLTEwKSB2YXIoLS13YS1jb2xvci1jeWFuLWd0ZS02MCksIHdoaXRlKTtcbiAgLS13YS1jb2xvci1ibHVlLW9uOiBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLXdhLWNvbG9yLWJsdWUtMTApIHZhcigtLXdhLWNvbG9yLWJsdWUtZ3RlLTYwKSwgd2hpdGUpO1xuICAtLXdhLWNvbG9yLWluZGlnby1vbjogY29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS13YS1jb2xvci1pbmRpZ28tMTApIHZhcigtLXdhLWNvbG9yLWluZGlnby1ndGUtNjApLCB3aGl0ZSk7XG4gIC0td2EtY29sb3ItcHVycGxlLW9uOiBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLXdhLWNvbG9yLXB1cnBsZS0xMCkgdmFyKC0td2EtY29sb3ItcHVycGxlLWd0ZS02MCksIHdoaXRlKTtcbiAgLS13YS1jb2xvci1waW5rLW9uOiBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLXdhLWNvbG9yLXBpbmstMTApIHZhcigtLXdhLWNvbG9yLXBpbmstZ3RlLTYwKSwgd2hpdGUpO1xuICAtLXdhLWNvbG9yLWdyYXktb246IGNvbG9yLW1peChpbiBva2xhYiwgdmFyKC0td2EtY29sb3ItZ3JheS0xMCkgdmFyKC0td2EtY29sb3ItZ3JheS1ndGUtNjApLCB3aGl0ZSk7XG59XG4iLCJAbGF5ZXIgd2EtY29sb3ItdmFyaWFudCB7XG4gIDp3aGVyZSg6cm9vdCksIC8qIGRlZmF1bHQgKi9cbiAgLndhLWJyYW5kLWJsdWUge1xuICAgIC0td2EtY29sb3ItYnJhbmQtOTU6IHZhcigtLXdhLWNvbG9yLWJsdWUtOTUpO1xuICAgIC0td2EtY29sb3ItYnJhbmQtOTA6IHZhcigtLXdhLWNvbG9yLWJsdWUtOTApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtODA6IHZhcigtLXdhLWNvbG9yLWJsdWUtODApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtNzA6IHZhcigtLXdhLWNvbG9yLWJsdWUtNzApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtNjA6IHZhcigtLXdhLWNvbG9yLWJsdWUtNjApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtNTA6IHZhcigtLXdhLWNvbG9yLWJsdWUtNTApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtNDA6IHZhcigtLXdhLWNvbG9yLWJsdWUtNDApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtMzA6IHZhcigtLXdhLWNvbG9yLWJsdWUtMzApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtMjA6IHZhcigtLXdhLWNvbG9yLWJsdWUtMjApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtMTA6IHZhcigtLXdhLWNvbG9yLWJsdWUtMTApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtMDU6IHZhcigtLXdhLWNvbG9yLWJsdWUtMDUpO1xuICAgIC0td2EtY29sb3ItYnJhbmQ6IHZhcigtLXdhLWNvbG9yLWJsdWUpO1xuICAgIC0td2EtY29sb3ItYnJhbmQtb246IHZhcigtLXdhLWNvbG9yLWJsdWUtb24pO1xuICB9XG5cbiAgLndhLWJyYW5kLXJlZCB7XG4gICAgLS13YS1jb2xvci1icmFuZC05NTogdmFyKC0td2EtY29sb3ItcmVkLTk1KTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTkwOiB2YXIoLS13YS1jb2xvci1yZWQtOTApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtODA6IHZhcigtLXdhLWNvbG9yLXJlZC04MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC03MDogdmFyKC0td2EtY29sb3ItcmVkLTcwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTYwOiB2YXIoLS13YS1jb2xvci1yZWQtNjApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtNTA6IHZhcigtLXdhLWNvbG9yLXJlZC01MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC00MDogdmFyKC0td2EtY29sb3ItcmVkLTQwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTMwOiB2YXIoLS13YS1jb2xvci1yZWQtMzApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtMjA6IHZhcigtLXdhLWNvbG9yLXJlZC0yMCk7XG4gICAgLS13YS1jb2xvci1icmFuZC0xMDogdmFyKC0td2EtY29sb3ItcmVkLTEwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTA1OiB2YXIoLS13YS1jb2xvci1yZWQtMDUpO1xuICAgIC0td2EtY29sb3ItYnJhbmQ6IHZhcigtLXdhLWNvbG9yLXJlZCk7XG4gICAgLS13YS1jb2xvci1icmFuZC1vbjogdmFyKC0td2EtY29sb3ItcmVkLW9uKTtcbiAgfVxuXG4gIC53YS1icmFuZC1vcmFuZ2Uge1xuICAgIC0td2EtY29sb3ItYnJhbmQtOTU6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS05NSk7XG4gICAgLS13YS1jb2xvci1icmFuZC05MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTkwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTgwOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtODApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtNzA6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS03MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC02MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTYwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTUwOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtNTApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtNDA6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS00MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC0zMDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTMwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTIwOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtMjApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtMTA6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS0xMCk7XG4gICAgLS13YS1jb2xvci1icmFuZC0wNTogdmFyKC0td2EtY29sb3Itb3JhbmdlLTA1KTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UpO1xuICAgIC0td2EtY29sb3ItYnJhbmQtb246IHZhcigtLXdhLWNvbG9yLW9yYW5nZS1vbik7XG4gIH1cblxuICAud2EtYnJhbmQteWVsbG93IHtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTk1OiB2YXIoLS13YS1jb2xvci15ZWxsb3ctOTUpO1xuICAgIC0td2EtY29sb3ItYnJhbmQtOTA6IHZhcigtLXdhLWNvbG9yLXllbGxvdy05MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC04MDogdmFyKC0td2EtY29sb3IteWVsbG93LTgwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTcwOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctNzApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtNjA6IHZhcigtLXdhLWNvbG9yLXllbGxvdy02MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC01MDogdmFyKC0td2EtY29sb3IteWVsbG93LTUwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTQwOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctNDApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtMzA6IHZhcigtLXdhLWNvbG9yLXllbGxvdy0zMCk7XG4gICAgLS13YS1jb2xvci1icmFuZC0yMDogdmFyKC0td2EtY29sb3IteWVsbG93LTIwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTEwOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctMTApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtMDU6IHZhcigtLXdhLWNvbG9yLXllbGxvdy0wNSk7XG4gICAgLS13YS1jb2xvci1icmFuZDogdmFyKC0td2EtY29sb3IteWVsbG93KTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLW9uOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctb24pO1xuICB9XG5cbiAgLndhLWJyYW5kLWdyZWVuIHtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTk1OiB2YXIoLS13YS1jb2xvci1ncmVlbi05NSk7XG4gICAgLS13YS1jb2xvci1icmFuZC05MDogdmFyKC0td2EtY29sb3ItZ3JlZW4tOTApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtODA6IHZhcigtLXdhLWNvbG9yLWdyZWVuLTgwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTcwOiB2YXIoLS13YS1jb2xvci1ncmVlbi03MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC02MDogdmFyKC0td2EtY29sb3ItZ3JlZW4tNjApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtNTA6IHZhcigtLXdhLWNvbG9yLWdyZWVuLTUwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTQwOiB2YXIoLS13YS1jb2xvci1ncmVlbi00MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC0zMDogdmFyKC0td2EtY29sb3ItZ3JlZW4tMzApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtMjA6IHZhcigtLXdhLWNvbG9yLWdyZWVuLTIwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTEwOiB2YXIoLS13YS1jb2xvci1ncmVlbi0xMCk7XG4gICAgLS13YS1jb2xvci1icmFuZC0wNTogdmFyKC0td2EtY29sb3ItZ3JlZW4tMDUpO1xuICAgIC0td2EtY29sb3ItYnJhbmQ6IHZhcigtLXdhLWNvbG9yLWdyZWVuKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLW9uOiB2YXIoLS13YS1jb2xvci1ncmVlbi1vbik7XG4gIH1cblxuICAud2EtYnJhbmQtY3lhbiB7XG4gICAgLS13YS1jb2xvci1icmFuZC05NTogdmFyKC0td2EtY29sb3ItY3lhbi05NSk7XG4gICAgLS13YS1jb2xvci1icmFuZC05MDogdmFyKC0td2EtY29sb3ItY3lhbi05MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC04MDogdmFyKC0td2EtY29sb3ItY3lhbi04MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC03MDogdmFyKC0td2EtY29sb3ItY3lhbi03MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC02MDogdmFyKC0td2EtY29sb3ItY3lhbi02MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC01MDogdmFyKC0td2EtY29sb3ItY3lhbi01MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC00MDogdmFyKC0td2EtY29sb3ItY3lhbi00MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC0zMDogdmFyKC0td2EtY29sb3ItY3lhbi0zMCk7XG4gICAgLS13YS1jb2xvci1icmFuZC0yMDogdmFyKC0td2EtY29sb3ItY3lhbi0yMCk7XG4gICAgLS13YS1jb2xvci1icmFuZC0xMDogdmFyKC0td2EtY29sb3ItY3lhbi0xMCk7XG4gICAgLS13YS1jb2xvci1icmFuZC0wNTogdmFyKC0td2EtY29sb3ItY3lhbi0wNSk7XG4gICAgLS13YS1jb2xvci1icmFuZDogdmFyKC0td2EtY29sb3ItY3lhbik7XG4gICAgLS13YS1jb2xvci1icmFuZC1vbjogdmFyKC0td2EtY29sb3ItY3lhbi1vbik7XG4gIH1cblxuICAud2EtYnJhbmQtaW5kaWdvIHtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTk1OiB2YXIoLS13YS1jb2xvci1pbmRpZ28tOTUpO1xuICAgIC0td2EtY29sb3ItYnJhbmQtOTA6IHZhcigtLXdhLWNvbG9yLWluZGlnby05MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC04MDogdmFyKC0td2EtY29sb3ItaW5kaWdvLTgwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTcwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tNzApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtNjA6IHZhcigtLXdhLWNvbG9yLWluZGlnby02MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC01MDogdmFyKC0td2EtY29sb3ItaW5kaWdvLTUwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTQwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tNDApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtMzA6IHZhcigtLXdhLWNvbG9yLWluZGlnby0zMCk7XG4gICAgLS13YS1jb2xvci1icmFuZC0yMDogdmFyKC0td2EtY29sb3ItaW5kaWdvLTIwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTEwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tMTApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtMDU6IHZhcigtLXdhLWNvbG9yLWluZGlnby0wNSk7XG4gICAgLS13YS1jb2xvci1icmFuZDogdmFyKC0td2EtY29sb3ItaW5kaWdvKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLW9uOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tb24pO1xuICB9XG5cbiAgLndhLWJyYW5kLXB1cnBsZSB7XG4gICAgLS13YS1jb2xvci1icmFuZC05NTogdmFyKC0td2EtY29sb3ItcHVycGxlLTk1KTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTkwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtOTApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtODA6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS04MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC03MDogdmFyKC0td2EtY29sb3ItcHVycGxlLTcwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTYwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtNjApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtNTA6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS01MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC00MDogdmFyKC0td2EtY29sb3ItcHVycGxlLTQwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTMwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtMzApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtMjA6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS0yMCk7XG4gICAgLS13YS1jb2xvci1icmFuZC0xMDogdmFyKC0td2EtY29sb3ItcHVycGxlLTEwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTA1OiB2YXIoLS13YS1jb2xvci1wdXJwbGUtMDUpO1xuICAgIC0td2EtY29sb3ItYnJhbmQ6IHZhcigtLXdhLWNvbG9yLXB1cnBsZSk7XG4gICAgLS13YS1jb2xvci1icmFuZC1vbjogdmFyKC0td2EtY29sb3ItcHVycGxlLW9uKTtcbiAgfVxuXG4gIC53YS1icmFuZC1waW5rIHtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTk1OiB2YXIoLS13YS1jb2xvci1waW5rLTk1KTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTkwOiB2YXIoLS13YS1jb2xvci1waW5rLTkwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTgwOiB2YXIoLS13YS1jb2xvci1waW5rLTgwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTcwOiB2YXIoLS13YS1jb2xvci1waW5rLTcwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTYwOiB2YXIoLS13YS1jb2xvci1waW5rLTYwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTUwOiB2YXIoLS13YS1jb2xvci1waW5rLTUwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTQwOiB2YXIoLS13YS1jb2xvci1waW5rLTQwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTMwOiB2YXIoLS13YS1jb2xvci1waW5rLTMwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTIwOiB2YXIoLS13YS1jb2xvci1waW5rLTIwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTEwOiB2YXIoLS13YS1jb2xvci1waW5rLTEwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTA1OiB2YXIoLS13YS1jb2xvci1waW5rLTA1KTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kOiB2YXIoLS13YS1jb2xvci1waW5rKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLW9uOiB2YXIoLS13YS1jb2xvci1waW5rLW9uKTtcbiAgfVxuXG4gIC53YS1icmFuZC1ncmF5IHtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTk1OiB2YXIoLS13YS1jb2xvci1ncmF5LTk1KTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTkwOiB2YXIoLS13YS1jb2xvci1ncmF5LTkwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTgwOiB2YXIoLS13YS1jb2xvci1ncmF5LTgwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTcwOiB2YXIoLS13YS1jb2xvci1ncmF5LTcwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTYwOiB2YXIoLS13YS1jb2xvci1ncmF5LTYwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTUwOiB2YXIoLS13YS1jb2xvci1ncmF5LTUwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTQwOiB2YXIoLS13YS1jb2xvci1ncmF5LTQwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTMwOiB2YXIoLS13YS1jb2xvci1ncmF5LTMwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTIwOiB2YXIoLS13YS1jb2xvci1ncmF5LTIwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTEwOiB2YXIoLS13YS1jb2xvci1ncmF5LTEwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLTA1OiB2YXIoLS13YS1jb2xvci1ncmF5LTA1KTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kOiB2YXIoLS13YS1jb2xvci1ncmF5KTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLW9uOiB2YXIoLS13YS1jb2xvci1ncmF5LW9uKTtcbiAgfVxufVxuIiwiQGxheWVyIHdhLWNvbG9yLXZhcmlhbnQge1xuICA6d2hlcmUoOnJvb3QpLCAvKiBkZWZhdWx0ICovXG4gIC53YS1uZXV0cmFsLWdyYXkge1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC05NTogdmFyKC0td2EtY29sb3ItZ3JheS05NSk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTkwOiB2YXIoLS13YS1jb2xvci1ncmF5LTkwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtODA6IHZhcigtLXdhLWNvbG9yLWdyYXktODApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC03MDogdmFyKC0td2EtY29sb3ItZ3JheS03MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTYwOiB2YXIoLS13YS1jb2xvci1ncmF5LTYwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtNTA6IHZhcigtLXdhLWNvbG9yLWdyYXktNTApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC00MDogdmFyKC0td2EtY29sb3ItZ3JheS00MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTMwOiB2YXIoLS13YS1jb2xvci1ncmF5LTMwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtMjA6IHZhcigtLXdhLWNvbG9yLWdyYXktMjApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC0xMDogdmFyKC0td2EtY29sb3ItZ3JheS0xMCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTA1OiB2YXIoLS13YS1jb2xvci1ncmF5LTA1KTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWw6IHZhcigtLXdhLWNvbG9yLWdyYXkpO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC1vbjogdmFyKC0td2EtY29sb3ItZ3JheS1vbik7XG4gIH1cblxuICAud2EtbmV1dHJhbC1yZWQge1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC05NTogdmFyKC0td2EtY29sb3ItcmVkLTk1KTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtOTA6IHZhcigtLXdhLWNvbG9yLXJlZC05MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTgwOiB2YXIoLS13YS1jb2xvci1yZWQtODApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC03MDogdmFyKC0td2EtY29sb3ItcmVkLTcwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtNjA6IHZhcigtLXdhLWNvbG9yLXJlZC02MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTUwOiB2YXIoLS13YS1jb2xvci1yZWQtNTApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC00MDogdmFyKC0td2EtY29sb3ItcmVkLTQwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtMzA6IHZhcigtLXdhLWNvbG9yLXJlZC0zMCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTIwOiB2YXIoLS13YS1jb2xvci1yZWQtMjApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC0xMDogdmFyKC0td2EtY29sb3ItcmVkLTEwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtMDU6IHZhcigtLXdhLWNvbG9yLXJlZC0wNSk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsOiB2YXIoLS13YS1jb2xvci1yZWQpO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC1vbjogdmFyKC0td2EtY29sb3ItcmVkLW9uKTtcbiAgfVxuXG4gIC53YS1uZXV0cmFsLW9yYW5nZSB7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTk1OiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtOTUpO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC05MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTkwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtODA6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS04MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTcwOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtNzApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC02MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTYwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtNTA6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS01MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTQwOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtNDApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC0zMDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTMwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtMjA6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS0yMCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTEwOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtMTApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC0wNTogdmFyKC0td2EtY29sb3Itb3JhbmdlLTA1KTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWw6IHZhcigtLXdhLWNvbG9yLW9yYW5nZSk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLW9uOiB2YXIoLS13YS1jb2xvci1vcmFuZ2Utb24pO1xuICB9XG5cbiAgLndhLW5ldXRyYWwteWVsbG93IHtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtOTU6IHZhcigtLXdhLWNvbG9yLXllbGxvdy05NSk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTkwOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctOTApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC04MDogdmFyKC0td2EtY29sb3IteWVsbG93LTgwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtNzA6IHZhcigtLXdhLWNvbG9yLXllbGxvdy03MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTYwOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctNjApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC01MDogdmFyKC0td2EtY29sb3IteWVsbG93LTUwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtNDA6IHZhcigtLXdhLWNvbG9yLXllbGxvdy00MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTMwOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctMzApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC0yMDogdmFyKC0td2EtY29sb3IteWVsbG93LTIwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtMTA6IHZhcigtLXdhLWNvbG9yLXllbGxvdy0xMCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTA1OiB2YXIoLS13YS1jb2xvci15ZWxsb3ctMDUpO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbDogdmFyKC0td2EtY29sb3IteWVsbG93KTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtb246IHZhcigtLXdhLWNvbG9yLXllbGxvdy1vbik7XG4gIH1cblxuICAud2EtbmV1dHJhbC1ncmVlbiB7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTk1OiB2YXIoLS13YS1jb2xvci1ncmVlbi05NSk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTkwOiB2YXIoLS13YS1jb2xvci1ncmVlbi05MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTgwOiB2YXIoLS13YS1jb2xvci1ncmVlbi04MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTcwOiB2YXIoLS13YS1jb2xvci1ncmVlbi03MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTYwOiB2YXIoLS13YS1jb2xvci1ncmVlbi02MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTUwOiB2YXIoLS13YS1jb2xvci1ncmVlbi01MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTQwOiB2YXIoLS13YS1jb2xvci1ncmVlbi00MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTMwOiB2YXIoLS13YS1jb2xvci1ncmVlbi0zMCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTIwOiB2YXIoLS13YS1jb2xvci1ncmVlbi0yMCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTEwOiB2YXIoLS13YS1jb2xvci1ncmVlbi0xMCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTA1OiB2YXIoLS13YS1jb2xvci1ncmVlbi0wNSk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsOiB2YXIoLS13YS1jb2xvci1ncmVlbik7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLW9uOiB2YXIoLS13YS1jb2xvci1ncmVlbi1vbik7XG4gIH1cblxuICAud2EtbmV1dHJhbC1jeWFuIHtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtOTU6IHZhcigtLXdhLWNvbG9yLWN5YW4tOTUpO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC05MDogdmFyKC0td2EtY29sb3ItY3lhbi05MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTgwOiB2YXIoLS13YS1jb2xvci1jeWFuLTgwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtNzA6IHZhcigtLXdhLWNvbG9yLWN5YW4tNzApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC02MDogdmFyKC0td2EtY29sb3ItY3lhbi02MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTUwOiB2YXIoLS13YS1jb2xvci1jeWFuLTUwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtNDA6IHZhcigtLXdhLWNvbG9yLWN5YW4tNDApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC0zMDogdmFyKC0td2EtY29sb3ItY3lhbi0zMCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTIwOiB2YXIoLS13YS1jb2xvci1jeWFuLTIwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtMTA6IHZhcigtLXdhLWNvbG9yLWN5YW4tMTApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC0wNTogdmFyKC0td2EtY29sb3ItY3lhbi0wNSk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsOiB2YXIoLS13YS1jb2xvci1jeWFuKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtb246IHZhcigtLXdhLWNvbG9yLWN5YW4tb24pO1xuICB9XG5cbiAgLndhLW5ldXRyYWwtYmx1ZSB7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTk1OiB2YXIoLS13YS1jb2xvci1ibHVlLTk1KTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtOTA6IHZhcigtLXdhLWNvbG9yLWJsdWUtOTApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC04MDogdmFyKC0td2EtY29sb3ItYmx1ZS04MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTcwOiB2YXIoLS13YS1jb2xvci1ibHVlLTcwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtNjA6IHZhcigtLXdhLWNvbG9yLWJsdWUtNjApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC01MDogdmFyKC0td2EtY29sb3ItYmx1ZS01MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTQwOiB2YXIoLS13YS1jb2xvci1ibHVlLTQwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtMzA6IHZhcigtLXdhLWNvbG9yLWJsdWUtMzApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC0yMDogdmFyKC0td2EtY29sb3ItYmx1ZS0yMCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTEwOiB2YXIoLS13YS1jb2xvci1ibHVlLTEwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtMDU6IHZhcigtLXdhLWNvbG9yLWJsdWUtMDUpO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbDogdmFyKC0td2EtY29sb3ItYmx1ZSk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLW9uOiB2YXIoLS13YS1jb2xvci1ibHVlLW9uKTtcbiAgfVxuXG4gIC53YS1uZXV0cmFsLWluZGlnbyB7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTk1OiB2YXIoLS13YS1jb2xvci1pbmRpZ28tOTUpO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC05MDogdmFyKC0td2EtY29sb3ItaW5kaWdvLTkwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtODA6IHZhcigtLXdhLWNvbG9yLWluZGlnby04MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTcwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tNzApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC02MDogdmFyKC0td2EtY29sb3ItaW5kaWdvLTYwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtNTA6IHZhcigtLXdhLWNvbG9yLWluZGlnby01MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTQwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tNDApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC0zMDogdmFyKC0td2EtY29sb3ItaW5kaWdvLTMwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtMjA6IHZhcigtLXdhLWNvbG9yLWluZGlnby0yMCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTEwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tMTApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC0wNTogdmFyKC0td2EtY29sb3ItaW5kaWdvLTA1KTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWw6IHZhcigtLXdhLWNvbG9yLWluZGlnbyk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLW9uOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tb24pO1xuICB9XG5cbiAgLndhLW5ldXRyYWwtcHVycGxlIHtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtOTU6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS05NSk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTkwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtOTApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC04MDogdmFyKC0td2EtY29sb3ItcHVycGxlLTgwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtNzA6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS03MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTYwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtNjApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC01MDogdmFyKC0td2EtY29sb3ItcHVycGxlLTUwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtNDA6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS00MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTMwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtMzApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC0yMDogdmFyKC0td2EtY29sb3ItcHVycGxlLTIwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtMTA6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS0xMCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTA1OiB2YXIoLS13YS1jb2xvci1wdXJwbGUtMDUpO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbDogdmFyKC0td2EtY29sb3ItcHVycGxlKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtb246IHZhcigtLXdhLWNvbG9yLXB1cnBsZS1vbik7XG4gIH1cblxuICAud2EtbmV1dHJhbC1waW5rIHtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtOTU6IHZhcigtLXdhLWNvbG9yLXBpbmstOTUpO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC05MDogdmFyKC0td2EtY29sb3ItcGluay05MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTgwOiB2YXIoLS13YS1jb2xvci1waW5rLTgwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtNzA6IHZhcigtLXdhLWNvbG9yLXBpbmstNzApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC02MDogdmFyKC0td2EtY29sb3ItcGluay02MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTUwOiB2YXIoLS13YS1jb2xvci1waW5rLTUwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtNDA6IHZhcigtLXdhLWNvbG9yLXBpbmstNDApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC0zMDogdmFyKC0td2EtY29sb3ItcGluay0zMCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLTIwOiB2YXIoLS13YS1jb2xvci1waW5rLTIwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtMTA6IHZhcigtLXdhLWNvbG9yLXBpbmstMTApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC0wNTogdmFyKC0td2EtY29sb3ItcGluay0wNSk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsOiB2YXIoLS13YS1jb2xvci1waW5rKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtb246IHZhcigtLXdhLWNvbG9yLXBpbmstb24pO1xuICB9XG59XG4iLCJAbGF5ZXIgd2EtY29sb3ItdmFyaWFudCB7XG4gIDp3aGVyZSg6cm9vdCksIC8qIGRlZmF1bHQgKi9cbiAgLndhLXN1Y2Nlc3MtZ3JlZW4ge1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy05NTogdmFyKC0td2EtY29sb3ItZ3JlZW4tOTUpO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy05MDogdmFyKC0td2EtY29sb3ItZ3JlZW4tOTApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy04MDogdmFyKC0td2EtY29sb3ItZ3JlZW4tODApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy03MDogdmFyKC0td2EtY29sb3ItZ3JlZW4tNzApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy02MDogdmFyKC0td2EtY29sb3ItZ3JlZW4tNjApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy01MDogdmFyKC0td2EtY29sb3ItZ3JlZW4tNTApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy00MDogdmFyKC0td2EtY29sb3ItZ3JlZW4tNDApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0zMDogdmFyKC0td2EtY29sb3ItZ3JlZW4tMzApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0yMDogdmFyKC0td2EtY29sb3ItZ3JlZW4tMjApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0xMDogdmFyKC0td2EtY29sb3ItZ3JlZW4tMTApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0wNTogdmFyKC0td2EtY29sb3ItZ3JlZW4tMDUpO1xuICAgIC0td2EtY29sb3Itc3VjY2VzczogdmFyKC0td2EtY29sb3ItZ3JlZW4pO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy1vbjogdmFyKC0td2EtY29sb3ItZ3JlZW4tb24pO1xuICB9XG5cbiAgLndhLXN1Y2Nlc3MtcmVkIHtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtOTU6IHZhcigtLXdhLWNvbG9yLXJlZC05NSk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTkwOiB2YXIoLS13YS1jb2xvci1yZWQtOTApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy04MDogdmFyKC0td2EtY29sb3ItcmVkLTgwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtNzA6IHZhcigtLXdhLWNvbG9yLXJlZC03MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTYwOiB2YXIoLS13YS1jb2xvci1yZWQtNjApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy01MDogdmFyKC0td2EtY29sb3ItcmVkLTUwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtNDA6IHZhcigtLXdhLWNvbG9yLXJlZC00MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTMwOiB2YXIoLS13YS1jb2xvci1yZWQtMzApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0yMDogdmFyKC0td2EtY29sb3ItcmVkLTIwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtMTA6IHZhcigtLXdhLWNvbG9yLXJlZC0xMCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTA1OiB2YXIoLS13YS1jb2xvci1yZWQtMDUpO1xuICAgIC0td2EtY29sb3Itc3VjY2VzczogdmFyKC0td2EtY29sb3ItcmVkKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3Mtb246IHZhcigtLXdhLWNvbG9yLXJlZC1vbik7XG4gIH1cblxuICAud2Etc3VjY2Vzcy1vcmFuZ2Uge1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy05NTogdmFyKC0td2EtY29sb3Itb3JhbmdlLTk1KTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtOTA6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS05MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTgwOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtODApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy03MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTcwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtNjA6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS02MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTUwOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtNTApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy00MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTQwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtMzA6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS0zMCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTIwOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtMjApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0xMDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTEwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtMDU6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS0wNSk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UpO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy1vbjogdmFyKC0td2EtY29sb3Itb3JhbmdlLW9uKTtcbiAgfVxuXG4gIC53YS1zdWNjZXNzLXllbGxvdyB7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTk1OiB2YXIoLS13YS1jb2xvci15ZWxsb3ctOTUpO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy05MDogdmFyKC0td2EtY29sb3IteWVsbG93LTkwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtODA6IHZhcigtLXdhLWNvbG9yLXllbGxvdy04MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTcwOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctNzApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy02MDogdmFyKC0td2EtY29sb3IteWVsbG93LTYwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtNTA6IHZhcigtLXdhLWNvbG9yLXllbGxvdy01MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTQwOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctNDApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0zMDogdmFyKC0td2EtY29sb3IteWVsbG93LTMwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtMjA6IHZhcigtLXdhLWNvbG9yLXllbGxvdy0yMCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTEwOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctMTApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0wNTogdmFyKC0td2EtY29sb3IteWVsbG93LTA1KTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3M6IHZhcigtLXdhLWNvbG9yLXllbGxvdyk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLW9uOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctb24pO1xuICB9XG5cbiAgLndhLXN1Y2Nlc3MtY3lhbiB7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTk1OiB2YXIoLS13YS1jb2xvci1jeWFuLTk1KTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtOTA6IHZhcigtLXdhLWNvbG9yLWN5YW4tOTApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy04MDogdmFyKC0td2EtY29sb3ItY3lhbi04MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTcwOiB2YXIoLS13YS1jb2xvci1jeWFuLTcwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtNjA6IHZhcigtLXdhLWNvbG9yLWN5YW4tNjApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy01MDogdmFyKC0td2EtY29sb3ItY3lhbi01MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTQwOiB2YXIoLS13YS1jb2xvci1jeWFuLTQwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtMzA6IHZhcigtLXdhLWNvbG9yLWN5YW4tMzApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0yMDogdmFyKC0td2EtY29sb3ItY3lhbi0yMCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTEwOiB2YXIoLS13YS1jb2xvci1jeWFuLTEwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtMDU6IHZhcigtLXdhLWNvbG9yLWN5YW4tMDUpO1xuICAgIC0td2EtY29sb3Itc3VjY2VzczogdmFyKC0td2EtY29sb3ItY3lhbik7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLW9uOiB2YXIoLS13YS1jb2xvci1jeWFuLW9uKTtcbiAgfVxuXG4gIC53YS1zdWNjZXNzLWJsdWUge1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy05NTogdmFyKC0td2EtY29sb3ItYmx1ZS05NSk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTkwOiB2YXIoLS13YS1jb2xvci1ibHVlLTkwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtODA6IHZhcigtLXdhLWNvbG9yLWJsdWUtODApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy03MDogdmFyKC0td2EtY29sb3ItYmx1ZS03MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTYwOiB2YXIoLS13YS1jb2xvci1ibHVlLTYwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtNTA6IHZhcigtLXdhLWNvbG9yLWJsdWUtNTApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy00MDogdmFyKC0td2EtY29sb3ItYmx1ZS00MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTMwOiB2YXIoLS13YS1jb2xvci1ibHVlLTMwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtMjA6IHZhcigtLXdhLWNvbG9yLWJsdWUtMjApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0xMDogdmFyKC0td2EtY29sb3ItYmx1ZS0xMCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTA1OiB2YXIoLS13YS1jb2xvci1ibHVlLTA1KTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3M6IHZhcigtLXdhLWNvbG9yLWJsdWUpO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy1vbjogdmFyKC0td2EtY29sb3ItYmx1ZS1vbik7XG4gIH1cblxuICAud2Etc3VjY2Vzcy1pbmRpZ28ge1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy05NTogdmFyKC0td2EtY29sb3ItaW5kaWdvLTk1KTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtOTA6IHZhcigtLXdhLWNvbG9yLWluZGlnby05MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTgwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tODApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy03MDogdmFyKC0td2EtY29sb3ItaW5kaWdvLTcwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtNjA6IHZhcigtLXdhLWNvbG9yLWluZGlnby02MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTUwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tNTApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy00MDogdmFyKC0td2EtY29sb3ItaW5kaWdvLTQwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtMzA6IHZhcigtLXdhLWNvbG9yLWluZGlnby0zMCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTIwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tMjApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0xMDogdmFyKC0td2EtY29sb3ItaW5kaWdvLTEwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtMDU6IHZhcigtLXdhLWNvbG9yLWluZGlnby0wNSk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzOiB2YXIoLS13YS1jb2xvci1pbmRpZ28pO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy1vbjogdmFyKC0td2EtY29sb3ItaW5kaWdvLW9uKTtcbiAgfVxuXG4gIC53YS1zdWNjZXNzLXB1cnBsZSB7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTk1OiB2YXIoLS13YS1jb2xvci1wdXJwbGUtOTUpO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy05MDogdmFyKC0td2EtY29sb3ItcHVycGxlLTkwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtODA6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS04MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTcwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtNzApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy02MDogdmFyKC0td2EtY29sb3ItcHVycGxlLTYwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtNTA6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS01MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTQwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtNDApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0zMDogdmFyKC0td2EtY29sb3ItcHVycGxlLTMwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtMjA6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS0yMCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTEwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtMTApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0wNTogdmFyKC0td2EtY29sb3ItcHVycGxlLTA1KTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3M6IHZhcigtLXdhLWNvbG9yLXB1cnBsZSk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLW9uOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtb24pO1xuICB9XG5cbiAgLndhLXN1Y2Nlc3MtcGluayB7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTk1OiB2YXIoLS13YS1jb2xvci1waW5rLTk1KTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtOTA6IHZhcigtLXdhLWNvbG9yLXBpbmstOTApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy04MDogdmFyKC0td2EtY29sb3ItcGluay04MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTcwOiB2YXIoLS13YS1jb2xvci1waW5rLTcwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtNjA6IHZhcigtLXdhLWNvbG9yLXBpbmstNjApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy01MDogdmFyKC0td2EtY29sb3ItcGluay01MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTQwOiB2YXIoLS13YS1jb2xvci1waW5rLTQwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtMzA6IHZhcigtLXdhLWNvbG9yLXBpbmstMzApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0yMDogdmFyKC0td2EtY29sb3ItcGluay0yMCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTEwOiB2YXIoLS13YS1jb2xvci1waW5rLTEwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtMDU6IHZhcigtLXdhLWNvbG9yLXBpbmstMDUpO1xuICAgIC0td2EtY29sb3Itc3VjY2VzczogdmFyKC0td2EtY29sb3ItcGluayk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLW9uOiB2YXIoLS13YS1jb2xvci1waW5rLW9uKTtcbiAgfVxuXG4gIC53YS1zdWNjZXNzLWdyYXkge1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy05NTogdmFyKC0td2EtY29sb3ItZ3JheS05NSk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTkwOiB2YXIoLS13YS1jb2xvci1ncmF5LTkwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtODA6IHZhcigtLXdhLWNvbG9yLWdyYXktODApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy03MDogdmFyKC0td2EtY29sb3ItZ3JheS03MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTYwOiB2YXIoLS13YS1jb2xvci1ncmF5LTYwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtNTA6IHZhcigtLXdhLWNvbG9yLWdyYXktNTApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy00MDogdmFyKC0td2EtY29sb3ItZ3JheS00MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTMwOiB2YXIoLS13YS1jb2xvci1ncmF5LTMwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3MtMjA6IHZhcigtLXdhLWNvbG9yLWdyYXktMjApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy0xMDogdmFyKC0td2EtY29sb3ItZ3JheS0xMCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLTA1OiB2YXIoLS13YS1jb2xvci1ncmF5LTA1KTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3M6IHZhcigtLXdhLWNvbG9yLWdyYXkpO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy1vbjogdmFyKC0td2EtY29sb3ItZ3JheS1vbik7XG4gIH1cbn1cbiIsIkBsYXllciB3YS1jb2xvci12YXJpYW50IHtcbiAgOndoZXJlKDpyb290KSwgLyogZGVmYXVsdCAqL1xuICAud2Etd2FybmluZy15ZWxsb3cge1xuICAgIC0td2EtY29sb3Itd2FybmluZy05NTogdmFyKC0td2EtY29sb3IteWVsbG93LTk1KTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctOTA6IHZhcigtLXdhLWNvbG9yLXllbGxvdy05MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTgwOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctODApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy03MDogdmFyKC0td2EtY29sb3IteWVsbG93LTcwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctNjA6IHZhcigtLXdhLWNvbG9yLXllbGxvdy02MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTUwOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctNTApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy00MDogdmFyKC0td2EtY29sb3IteWVsbG93LTQwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctMzA6IHZhcigtLXdhLWNvbG9yLXllbGxvdy0zMCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTIwOiB2YXIoLS13YS1jb2xvci15ZWxsb3ctMjApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy0xMDogdmFyKC0td2EtY29sb3IteWVsbG93LTEwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctMDU6IHZhcigtLXdhLWNvbG9yLXllbGxvdy0wNSk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nOiB2YXIoLS13YS1jb2xvci15ZWxsb3cpO1xuICAgIC0td2EtY29sb3Itd2FybmluZy1vbjogdmFyKC0td2EtY29sb3IteWVsbG93LW9uKTtcbiAgfVxuXG4gIC53YS13YXJuaW5nLXJlZCB7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTk1OiB2YXIoLS13YS1jb2xvci1yZWQtOTUpO1xuICAgIC0td2EtY29sb3Itd2FybmluZy05MDogdmFyKC0td2EtY29sb3ItcmVkLTkwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctODA6IHZhcigtLXdhLWNvbG9yLXJlZC04MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTcwOiB2YXIoLS13YS1jb2xvci1yZWQtNzApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy02MDogdmFyKC0td2EtY29sb3ItcmVkLTYwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctNTA6IHZhcigtLXdhLWNvbG9yLXJlZC01MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTQwOiB2YXIoLS13YS1jb2xvci1yZWQtNDApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy0zMDogdmFyKC0td2EtY29sb3ItcmVkLTMwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctMjA6IHZhcigtLXdhLWNvbG9yLXJlZC0yMCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTEwOiB2YXIoLS13YS1jb2xvci1yZWQtMTApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy0wNTogdmFyKC0td2EtY29sb3ItcmVkLTA1KTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmc6IHZhcigtLXdhLWNvbG9yLXJlZCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLW9uOiB2YXIoLS13YS1jb2xvci1yZWQtb24pO1xuICB9XG5cbiAgLndhLXdhcm5pbmctb3JhbmdlIHtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctOTU6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS05NSk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTkwOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtOTApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy04MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTgwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctNzA6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS03MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTYwOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtNjApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy01MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTUwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctNDA6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS00MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTMwOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtMzApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy0yMDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTIwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctMTA6IHZhcigtLXdhLWNvbG9yLW9yYW5nZS0xMCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTA1OiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtMDUpO1xuICAgIC0td2EtY29sb3Itd2FybmluZzogdmFyKC0td2EtY29sb3Itb3JhbmdlKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctb246IHZhcigtLXdhLWNvbG9yLW9yYW5nZS1vbik7XG4gIH1cblxuICAud2Etd2FybmluZy1ncmVlbiB7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTk1OiB2YXIoLS13YS1jb2xvci1ncmVlbi05NSk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTkwOiB2YXIoLS13YS1jb2xvci1ncmVlbi05MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTgwOiB2YXIoLS13YS1jb2xvci1ncmVlbi04MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTcwOiB2YXIoLS13YS1jb2xvci1ncmVlbi03MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTYwOiB2YXIoLS13YS1jb2xvci1ncmVlbi02MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTUwOiB2YXIoLS13YS1jb2xvci1ncmVlbi01MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTQwOiB2YXIoLS13YS1jb2xvci1ncmVlbi00MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTMwOiB2YXIoLS13YS1jb2xvci1ncmVlbi0zMCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTIwOiB2YXIoLS13YS1jb2xvci1ncmVlbi0yMCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTEwOiB2YXIoLS13YS1jb2xvci1ncmVlbi0xMCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTA1OiB2YXIoLS13YS1jb2xvci1ncmVlbi0wNSk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nOiB2YXIoLS13YS1jb2xvci1ncmVlbik7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLW9uOiB2YXIoLS13YS1jb2xvci1ncmVlbi1vbik7XG4gIH1cblxuICAud2Etd2FybmluZy1jeWFuIHtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctOTU6IHZhcigtLXdhLWNvbG9yLWN5YW4tOTUpO1xuICAgIC0td2EtY29sb3Itd2FybmluZy05MDogdmFyKC0td2EtY29sb3ItY3lhbi05MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTgwOiB2YXIoLS13YS1jb2xvci1jeWFuLTgwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctNzA6IHZhcigtLXdhLWNvbG9yLWN5YW4tNzApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy02MDogdmFyKC0td2EtY29sb3ItY3lhbi02MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTUwOiB2YXIoLS13YS1jb2xvci1jeWFuLTUwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctNDA6IHZhcigtLXdhLWNvbG9yLWN5YW4tNDApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy0zMDogdmFyKC0td2EtY29sb3ItY3lhbi0zMCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTIwOiB2YXIoLS13YS1jb2xvci1jeWFuLTIwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctMTA6IHZhcigtLXdhLWNvbG9yLWN5YW4tMTApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy0wNTogdmFyKC0td2EtY29sb3ItY3lhbi0wNSk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nOiB2YXIoLS13YS1jb2xvci1jeWFuKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctb246IHZhcigtLXdhLWNvbG9yLWN5YW4tb24pO1xuICB9XG5cbiAgLndhLXdhcm5pbmctYmx1ZSB7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTk1OiB2YXIoLS13YS1jb2xvci1ibHVlLTk1KTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctOTA6IHZhcigtLXdhLWNvbG9yLWJsdWUtOTApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy04MDogdmFyKC0td2EtY29sb3ItYmx1ZS04MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTcwOiB2YXIoLS13YS1jb2xvci1ibHVlLTcwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctNjA6IHZhcigtLXdhLWNvbG9yLWJsdWUtNjApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy01MDogdmFyKC0td2EtY29sb3ItYmx1ZS01MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTQwOiB2YXIoLS13YS1jb2xvci1ibHVlLTQwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctMzA6IHZhcigtLXdhLWNvbG9yLWJsdWUtMzApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy0yMDogdmFyKC0td2EtY29sb3ItYmx1ZS0yMCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTEwOiB2YXIoLS13YS1jb2xvci1ibHVlLTEwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctMDU6IHZhcigtLXdhLWNvbG9yLWJsdWUtMDUpO1xuICAgIC0td2EtY29sb3Itd2FybmluZzogdmFyKC0td2EtY29sb3ItYmx1ZSk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLW9uOiB2YXIoLS13YS1jb2xvci1ibHVlLW9uKTtcbiAgfVxuXG4gIC53YS13YXJuaW5nLWluZGlnbyB7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTk1OiB2YXIoLS13YS1jb2xvci1pbmRpZ28tOTUpO1xuICAgIC0td2EtY29sb3Itd2FybmluZy05MDogdmFyKC0td2EtY29sb3ItaW5kaWdvLTkwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctODA6IHZhcigtLXdhLWNvbG9yLWluZGlnby04MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTcwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tNzApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy02MDogdmFyKC0td2EtY29sb3ItaW5kaWdvLTYwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctNTA6IHZhcigtLXdhLWNvbG9yLWluZGlnby01MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTQwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tNDApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy0zMDogdmFyKC0td2EtY29sb3ItaW5kaWdvLTMwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctMjA6IHZhcigtLXdhLWNvbG9yLWluZGlnby0yMCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTEwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tMTApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy0wNTogdmFyKC0td2EtY29sb3ItaW5kaWdvLTA1KTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmc6IHZhcigtLXdhLWNvbG9yLWluZGlnbyk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLW9uOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tb24pO1xuICB9XG5cbiAgLndhLXdhcm5pbmctcHVycGxlIHtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctOTU6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS05NSk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTkwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtOTApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy04MDogdmFyKC0td2EtY29sb3ItcHVycGxlLTgwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctNzA6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS03MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTYwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtNjApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy01MDogdmFyKC0td2EtY29sb3ItcHVycGxlLTUwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctNDA6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS00MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTMwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtMzApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy0yMDogdmFyKC0td2EtY29sb3ItcHVycGxlLTIwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctMTA6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS0xMCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTA1OiB2YXIoLS13YS1jb2xvci1wdXJwbGUtMDUpO1xuICAgIC0td2EtY29sb3Itd2FybmluZzogdmFyKC0td2EtY29sb3ItcHVycGxlKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctb246IHZhcigtLXdhLWNvbG9yLXB1cnBsZS1vbik7XG4gIH1cblxuICAud2Etd2FybmluZy1waW5rIHtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctOTU6IHZhcigtLXdhLWNvbG9yLXBpbmstOTUpO1xuICAgIC0td2EtY29sb3Itd2FybmluZy05MDogdmFyKC0td2EtY29sb3ItcGluay05MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTgwOiB2YXIoLS13YS1jb2xvci1waW5rLTgwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctNzA6IHZhcigtLXdhLWNvbG9yLXBpbmstNzApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy02MDogdmFyKC0td2EtY29sb3ItcGluay02MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTUwOiB2YXIoLS13YS1jb2xvci1waW5rLTUwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctNDA6IHZhcigtLXdhLWNvbG9yLXBpbmstNDApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy0zMDogdmFyKC0td2EtY29sb3ItcGluay0zMCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTIwOiB2YXIoLS13YS1jb2xvci1waW5rLTIwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctMTA6IHZhcigtLXdhLWNvbG9yLXBpbmstMTApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy0wNTogdmFyKC0td2EtY29sb3ItcGluay0wNSk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nOiB2YXIoLS13YS1jb2xvci1waW5rKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctb246IHZhcigtLXdhLWNvbG9yLXBpbmstb24pO1xuICB9XG5cbiAgLndhLXdhcm5pbmctZ3JheSB7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTk1OiB2YXIoLS13YS1jb2xvci1ncmF5LTk1KTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctOTA6IHZhcigtLXdhLWNvbG9yLWdyYXktOTApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy04MDogdmFyKC0td2EtY29sb3ItZ3JheS04MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTcwOiB2YXIoLS13YS1jb2xvci1ncmF5LTcwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctNjA6IHZhcigtLXdhLWNvbG9yLWdyYXktNjApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy01MDogdmFyKC0td2EtY29sb3ItZ3JheS01MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTQwOiB2YXIoLS13YS1jb2xvci1ncmF5LTQwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctMzA6IHZhcigtLXdhLWNvbG9yLWdyYXktMzApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy0yMDogdmFyKC0td2EtY29sb3ItZ3JheS0yMCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLTEwOiB2YXIoLS13YS1jb2xvci1ncmF5LTEwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctMDU6IHZhcigtLXdhLWNvbG9yLWdyYXktMDUpO1xuICAgIC0td2EtY29sb3Itd2FybmluZzogdmFyKC0td2EtY29sb3ItZ3JheSk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLW9uOiB2YXIoLS13YS1jb2xvci1ncmF5LW9uKTtcbiAgfVxufVxuIiwiQGxheWVyIHdhLWNvbG9yLXZhcmlhbnQge1xuICA6d2hlcmUoOnJvb3QpLCAvKiBkZWZhdWx0ICovXG4gIC53YS1kYW5nZXItcmVkIHtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci05NTogdmFyKC0td2EtY29sb3ItcmVkLTk1KTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci05MDogdmFyKC0td2EtY29sb3ItcmVkLTkwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci04MDogdmFyKC0td2EtY29sb3ItcmVkLTgwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci03MDogdmFyKC0td2EtY29sb3ItcmVkLTcwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci02MDogdmFyKC0td2EtY29sb3ItcmVkLTYwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci01MDogdmFyKC0td2EtY29sb3ItcmVkLTUwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci00MDogdmFyKC0td2EtY29sb3ItcmVkLTQwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0zMDogdmFyKC0td2EtY29sb3ItcmVkLTMwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0yMDogdmFyKC0td2EtY29sb3ItcmVkLTIwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0xMDogdmFyKC0td2EtY29sb3ItcmVkLTEwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0wNTogdmFyKC0td2EtY29sb3ItcmVkLTA1KTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlcjogdmFyKC0td2EtY29sb3ItcmVkKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci1vbjogdmFyKC0td2EtY29sb3ItcmVkLW9uKTtcbiAgfVxuXG4gIC53YS1kYW5nZXItb3JhbmdlIHtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci05NTogdmFyKC0td2EtY29sb3Itb3JhbmdlLTk1KTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci05MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTkwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci04MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTgwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci03MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTcwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci02MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTYwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci01MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTUwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci00MDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTQwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0zMDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTMwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0yMDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTIwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0xMDogdmFyKC0td2EtY29sb3Itb3JhbmdlLTEwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0wNTogdmFyKC0td2EtY29sb3Itb3JhbmdlLTA1KTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlcjogdmFyKC0td2EtY29sb3Itb3JhbmdlKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci1vbjogdmFyKC0td2EtY29sb3Itb3JhbmdlLW9uKTtcbiAgfVxuXG4gIC53YS1kYW5nZXIteWVsbG93IHtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci05NTogdmFyKC0td2EtY29sb3IteWVsbG93LTk1KTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci05MDogdmFyKC0td2EtY29sb3IteWVsbG93LTkwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci04MDogdmFyKC0td2EtY29sb3IteWVsbG93LTgwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci03MDogdmFyKC0td2EtY29sb3IteWVsbG93LTcwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci02MDogdmFyKC0td2EtY29sb3IteWVsbG93LTYwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci01MDogdmFyKC0td2EtY29sb3IteWVsbG93LTUwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci00MDogdmFyKC0td2EtY29sb3IteWVsbG93LTQwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0zMDogdmFyKC0td2EtY29sb3IteWVsbG93LTMwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0yMDogdmFyKC0td2EtY29sb3IteWVsbG93LTIwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0xMDogdmFyKC0td2EtY29sb3IteWVsbG93LTEwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0wNTogdmFyKC0td2EtY29sb3IteWVsbG93LTA1KTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlcjogdmFyKC0td2EtY29sb3IteWVsbG93KTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci1vbjogdmFyKC0td2EtY29sb3IteWVsbG93LW9uKTtcbiAgfVxuXG4gIC53YS1kYW5nZXItZ3JlZW4ge1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTk1OiB2YXIoLS13YS1jb2xvci1ncmVlbi05NSk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItOTA6IHZhcigtLXdhLWNvbG9yLWdyZWVuLTkwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci04MDogdmFyKC0td2EtY29sb3ItZ3JlZW4tODApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTcwOiB2YXIoLS13YS1jb2xvci1ncmVlbi03MCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItNjA6IHZhcigtLXdhLWNvbG9yLWdyZWVuLTYwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci01MDogdmFyKC0td2EtY29sb3ItZ3JlZW4tNTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTQwOiB2YXIoLS13YS1jb2xvci1ncmVlbi00MCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItMzA6IHZhcigtLXdhLWNvbG9yLWdyZWVuLTMwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0yMDogdmFyKC0td2EtY29sb3ItZ3JlZW4tMjApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTEwOiB2YXIoLS13YS1jb2xvci1ncmVlbi0xMCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItMDU6IHZhcigtLXdhLWNvbG9yLWdyZWVuLTA1KTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlcjogdmFyKC0td2EtY29sb3ItZ3JlZW4pO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLW9uOiB2YXIoLS13YS1jb2xvci1ncmVlbi1vbik7XG4gIH1cblxuICAud2EtZGFuZ2VyLWN5YW4ge1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTk1OiB2YXIoLS13YS1jb2xvci1jeWFuLTk1KTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci05MDogdmFyKC0td2EtY29sb3ItY3lhbi05MCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItODA6IHZhcigtLXdhLWNvbG9yLWN5YW4tODApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTcwOiB2YXIoLS13YS1jb2xvci1jeWFuLTcwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci02MDogdmFyKC0td2EtY29sb3ItY3lhbi02MCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItNTA6IHZhcigtLXdhLWNvbG9yLWN5YW4tNTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTQwOiB2YXIoLS13YS1jb2xvci1jeWFuLTQwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0zMDogdmFyKC0td2EtY29sb3ItY3lhbi0zMCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItMjA6IHZhcigtLXdhLWNvbG9yLWN5YW4tMjApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTEwOiB2YXIoLS13YS1jb2xvci1jeWFuLTEwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0wNTogdmFyKC0td2EtY29sb3ItY3lhbi0wNSk7XG4gICAgLS13YS1jb2xvci1kYW5nZXI6IHZhcigtLXdhLWNvbG9yLWN5YW4pO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLW9uOiB2YXIoLS13YS1jb2xvci1jeWFuLW9uKTtcbiAgfVxuXG4gIC53YS1kYW5nZXItYmx1ZSB7XG4gICAgLS13YS1jb2xvci1kYW5nZXItOTU6IHZhcigtLXdhLWNvbG9yLWJsdWUtOTUpO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTkwOiB2YXIoLS13YS1jb2xvci1ibHVlLTkwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci04MDogdmFyKC0td2EtY29sb3ItYmx1ZS04MCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItNzA6IHZhcigtLXdhLWNvbG9yLWJsdWUtNzApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTYwOiB2YXIoLS13YS1jb2xvci1ibHVlLTYwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci01MDogdmFyKC0td2EtY29sb3ItYmx1ZS01MCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItNDA6IHZhcigtLXdhLWNvbG9yLWJsdWUtNDApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTMwOiB2YXIoLS13YS1jb2xvci1ibHVlLTMwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0yMDogdmFyKC0td2EtY29sb3ItYmx1ZS0yMCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItMTA6IHZhcigtLXdhLWNvbG9yLWJsdWUtMTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTA1OiB2YXIoLS13YS1jb2xvci1ibHVlLTA1KTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlcjogdmFyKC0td2EtY29sb3ItYmx1ZSk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItb246IHZhcigtLXdhLWNvbG9yLWJsdWUtb24pO1xuICB9XG5cbiAgLndhLWRhbmdlci1pbmRpZ28ge1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTk1OiB2YXIoLS13YS1jb2xvci1pbmRpZ28tOTUpO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTkwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tOTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTgwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tODApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTcwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tNzApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTYwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tNjApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTUwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tNTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTQwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tNDApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTMwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tMzApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTIwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tMjApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTEwOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tMTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTA1OiB2YXIoLS13YS1jb2xvci1pbmRpZ28tMDUpO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyOiB2YXIoLS13YS1jb2xvci1pbmRpZ28pO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLW9uOiB2YXIoLS13YS1jb2xvci1pbmRpZ28tb24pO1xuICB9XG5cbiAgLndhLWRhbmdlci1wdXJwbGUge1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTk1OiB2YXIoLS13YS1jb2xvci1wdXJwbGUtOTUpO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTkwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtOTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTgwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtODApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTcwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtNzApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTYwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtNjApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTUwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtNTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTQwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtNDApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTMwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtMzApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTIwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtMjApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTEwOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtMTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTA1OiB2YXIoLS13YS1jb2xvci1wdXJwbGUtMDUpO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyOiB2YXIoLS13YS1jb2xvci1wdXJwbGUpO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLW9uOiB2YXIoLS13YS1jb2xvci1wdXJwbGUtb24pO1xuICB9XG5cbiAgLndhLWRhbmdlci1waW5rIHtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci05NTogdmFyKC0td2EtY29sb3ItcGluay05NSk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItOTA6IHZhcigtLXdhLWNvbG9yLXBpbmstOTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTgwOiB2YXIoLS13YS1jb2xvci1waW5rLTgwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci03MDogdmFyKC0td2EtY29sb3ItcGluay03MCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItNjA6IHZhcigtLXdhLWNvbG9yLXBpbmstNjApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTUwOiB2YXIoLS13YS1jb2xvci1waW5rLTUwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci00MDogdmFyKC0td2EtY29sb3ItcGluay00MCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItMzA6IHZhcigtLXdhLWNvbG9yLXBpbmstMzApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTIwOiB2YXIoLS13YS1jb2xvci1waW5rLTIwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0xMDogdmFyKC0td2EtY29sb3ItcGluay0xMCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItMDU6IHZhcigtLXdhLWNvbG9yLXBpbmstMDUpO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyOiB2YXIoLS13YS1jb2xvci1waW5rKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci1vbjogdmFyKC0td2EtY29sb3ItcGluay1vbik7XG4gIH1cblxuICAud2EtZGFuZ2VyLWdyYXkge1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTk1OiB2YXIoLS13YS1jb2xvci1ncmF5LTk1KTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci05MDogdmFyKC0td2EtY29sb3ItZ3JheS05MCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItODA6IHZhcigtLXdhLWNvbG9yLWdyYXktODApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTcwOiB2YXIoLS13YS1jb2xvci1ncmF5LTcwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci02MDogdmFyKC0td2EtY29sb3ItZ3JheS02MCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItNTA6IHZhcigtLXdhLWNvbG9yLWdyYXktNTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTQwOiB2YXIoLS13YS1jb2xvci1ncmF5LTQwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0zMDogdmFyKC0td2EtY29sb3ItZ3JheS0zMCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItMjA6IHZhcigtLXdhLWNvbG9yLWdyYXktMjApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLTEwOiB2YXIoLS13YS1jb2xvci1ncmF5LTEwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci0wNTogdmFyKC0td2EtY29sb3ItZ3JheS0wNSk7XG4gICAgLS13YS1jb2xvci1kYW5nZXI6IHZhcigtLXdhLWNvbG9yLWdyYXkpO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLW9uOiB2YXIoLS13YS1jb2xvci1ncmF5LW9uKTtcbiAgfVxufVxuIiwiQGltcG9ydCB1cmwoJ2Jhc2UuY3NzJyk7XG5cbkBsYXllciB3YS1jb2xvci1wYWxldHRlIHtcbiAgLndhLXBhbGV0dGUtc2hvZWxhY2UsXG4gIC53YS1wYWxldHRlLXNob2VsYWNlIDpob3N0IHtcbiAgICAtLXdhLWNvbG9yLXJlZC05NTogI2ZmZjBlZiAvKiBva2xjaCg5Ni42NjclIDAuMDE2MzIgMjIuMDgpICovO1xuICAgIC0td2EtY29sb3ItcmVkLTkwOiAjZmZkZWRjIC8qIG9rbGNoKDkyLjczNSUgMC4wMzY3OSAyMS45NjYpICovO1xuICAgIC0td2EtY29sb3ItcmVkLTgwOiAjZmZiOGI1IC8qIG9rbGNoKDg0Ljc3OCUgMC4wODMgMjEuNjg2KSAqLztcbiAgICAtLXdhLWNvbG9yLXJlZC03MDogI2ZlOGY4ZCAvKiBva2xjaCg3Ni44NTklIDAuMTM0NjYgMjEuNzYyKSAqLztcbiAgICAtLXdhLWNvbG9yLXJlZC02MDogI2Y1NjY2NyAvKiBva2xjaCg2OC45ODIlIDAuMTc2MzEgMjIuNDcyKSAqLztcbiAgICAtLXdhLWNvbG9yLXJlZC01MDogI2UwMmMyYiAvKiBva2xjaCg1OC44NjElIDAuMjE0NjEgMjcuMTU2KSAqLztcbiAgICAtLXdhLWNvbG9yLXJlZC00MDogI2I1MDUxYSAvKiBva2xjaCg0OC44MzMlIDAuMTk2MTEgMjUuNjgpICovO1xuICAgIC0td2EtY29sb3ItcmVkLTMwOiAjOTAwMDE1IC8qIG9rbGNoKDQxLjE3MiUgMC4xNjY3NiAyNC42MDkpICovO1xuICAgIC0td2EtY29sb3ItcmVkLTIwOiAjNmMwMDBkIC8qIG9rbGNoKDMzLjQ3OSUgMC4xMzU2IDI0LjYxNykgKi87XG4gICAgLS13YS1jb2xvci1yZWQtMTA6ICM0NTAwMDUgLyogb2tsY2goMjQuNTk4JSAwLjA5OTY4IDI0LjgzNSkgKi87XG4gICAgLS13YS1jb2xvci1yZWQtMDU6ICMyZjAwMDIgLyogb2tsY2goMTkuMjE4JSAwLjA3ODAxIDI1LjUxNykgKi87XG4gICAgLS13YS1jb2xvci1yZWQ6IHZhcigtLXdhLWNvbG9yLXJlZC01MCk7XG4gICAgLS13YS1jb2xvci1yZWQta2V5OiA1MDtcblxuICAgIC0td2EtY29sb3Itb3JhbmdlLTk1OiAjZmZmMGU0IC8qIG9rbGNoKDk2LjM3NCUgMC4wMjI4IDYxLjIzOCkgKi87XG4gICAgLS13YS1jb2xvci1vcmFuZ2UtOTA6ICNmZmUwYzggLyogb2tsY2goOTIuNjExJSAwLjA0Njg5IDU5LjkxNykgKi87XG4gICAgLS13YS1jb2xvci1vcmFuZ2UtODA6ICNmZmJiODkgLyogb2tsY2goODQuMzg2JSAwLjEwMjE3IDU3LjE2MSkgKi87XG4gICAgLS13YS1jb2xvci1vcmFuZ2UtNzA6ICNmZjkzNDIgLyogb2tsY2goNzYuNDg2JSAwLjE1OTY0IDU0LjEwMikgKi87XG4gICAgLS13YS1jb2xvci1vcmFuZ2UtNjA6ICNmMzZkMDAgLyogb2tsY2goNjguNzE1JSAwLjE4Nzc0IDQ3Ljc5KSAqLztcbiAgICAtLXdhLWNvbG9yLW9yYW5nZS01MDogI2M5NGUwMCAvKiBva2xjaCg1OC4wNjglIDAuMTcxMzEgNDMuMjE3KSAqLztcbiAgICAtLXdhLWNvbG9yLW9yYW5nZS00MDogIzlkMzgwMCAvKiBva2xjaCg0Ny45MjQlIDAuMTQ1MzQgNDEuNzM5KSAqLztcbiAgICAtLXdhLWNvbG9yLW9yYW5nZS0zMDogIzdlMjkwMCAvKiBva2xjaCg0MC41MyUgMC4xMjU5IDQwLjUxKSAqLztcbiAgICAtLXdhLWNvbG9yLW9yYW5nZS0yMDogIzVlMWMwMCAvKiBva2xjaCgzMi44NzQlIDAuMTAyNyA0MC4yMjgpICovO1xuICAgIC0td2EtY29sb3Itb3JhbmdlLTEwOiAjM2IwZjAwIC8qIG9rbGNoKDI0LjEyNSUgMC4wNzQ0NiA0MC44MzcpICovO1xuICAgIC0td2EtY29sb3Itb3JhbmdlLTA1OiAjMjgwNzAwIC8qIG9rbGNoKDE4LjgzNyUgMC4wNTkzMyAzOS44MjcpICovO1xuICAgIC0td2EtY29sb3Itb3JhbmdlOiB2YXIoLS13YS1jb2xvci1vcmFuZ2UtNjApO1xuICAgIC0td2EtY29sb3Itb3JhbmdlLWtleTogNjA7XG5cbiAgICAtLXdhLWNvbG9yLXllbGxvdy05NTogI2ZlZjJiZiAvKiBva2xjaCg5NS44MjMlIDAuMDY2NzQgOTYuMzY5KSAqLztcbiAgICAtLXdhLWNvbG9yLXllbGxvdy05MDogI2ZkZTU4OCAvKiBva2xjaCg5Mi4yJSAwLjExNjMzIDk1LjMyNykgKi87XG4gICAgLS13YS1jb2xvci15ZWxsb3ctODA6ICNmNWMyNGIgLyogb2tsY2goODMuODc5JSAwLjE0NDQ1IDg1LjA4MykgKi87XG4gICAgLS13YS1jb2xvci15ZWxsb3ctNzA6ICNlOWEwMTAgLyogb2tsY2goNzUuODI1JSAwLjE1Njg5IDc1LjUzNykgKi87XG4gICAgLS13YS1jb2xvci15ZWxsb3ctNjA6ICNkNzgwMDAgLyogb2tsY2goNjcuODM5JSAwLjE1Mjg3IDY0LjQ1NSkgKi87XG4gICAgLS13YS1jb2xvci15ZWxsb3ctNTA6ICNiMjYwMDAgLyogb2tsY2goNTcuMzI0JSAwLjEzNjcyIDU4LjMzOCkgKi87XG4gICAgLS13YS1jb2xvci15ZWxsb3ctNDA6ICM4YTQ3MDAgLyogb2tsY2goNDcuMTgzJSAwLjExNDYxIDU2LjY1NSkgKi87XG4gICAgLS13YS1jb2xvci15ZWxsb3ctMzA6ICM2ZTM3MDAgLyogb2tsY2goNDAuMDMlIDAuMDk3NiA1Ni4zMjMpICovO1xuICAgIC0td2EtY29sb3IteWVsbG93LTIwOiAjNTIyNzAwIC8qIG9rbGNoKDMyLjU0JSAwLjA3OTgxIDU1LjgwMikgKi87XG4gICAgLS13YS1jb2xvci15ZWxsb3ctMTA6ICMzMzE2MDAgLyogb2tsY2goMjMuODQ2JSAwLjA1ODM0IDU2LjAyKSAqLztcbiAgICAtLXdhLWNvbG9yLXllbGxvdy0wNTogIzIxMGQwMCAvKiBva2xjaCgxOC42MTklIDAuMDQ0MzEgNTguNTUzKSAqLztcbiAgICAtLXdhLWNvbG9yLXllbGxvdzogdmFyKC0td2EtY29sb3IteWVsbG93LTcwKTtcbiAgICAtLXdhLWNvbG9yLXllbGxvdy1rZXk6IDcwO1xuXG4gICAgLS13YS1jb2xvci1ncmVlbi05NTogI2Q0ZmNlMSAvKiBva2xjaCg5NS41NTQlIDAuMDU0NzcgMTU1LjcxKSAqLztcbiAgICAtLXdhLWNvbG9yLWdyZWVuLTkwOiAjYTRmOGMyIC8qIG9rbGNoKDkxLjExJSAwLjExMDcgMTU1LjM1KSAqLztcbiAgICAtLXdhLWNvbG9yLWdyZWVuLTgwOiAjNmFlMDk1IC8qIG9rbGNoKDgxLjkyNCUgMC4xNTE1MSAxNTMuNTIpICovO1xuICAgIC0td2EtY29sb3ItZ3JlZW4tNzA6ICM0NGM2NzAgLyogb2tsY2goNzMuNTA2JSAwLjE2NzQyIDE1MSkgKi87XG4gICAgLS13YS1jb2xvci1ncmVlbi02MDogIzIxYWI1MiAvKiBva2xjaCg2NS4xNTElIDAuMTcwNjIgMTQ5LjU5KSAqLztcbiAgICAtLXdhLWNvbG9yLWdyZWVuLTUwOiAjMGQ4NzNmIC8qIG9rbGNoKDU0LjY0NCUgMC4xNDU5MyAxNTAuMTgpICovO1xuICAgIC0td2EtY29sb3ItZ3JlZW4tNDA6ICMxNjY2MzUgLyogb2tsY2goNDUuMTA1JSAwLjEwODc0IDE1MS41NikgKi87XG4gICAgLS13YS1jb2xvci1ncmVlbi0zMDogIzExNTAyOSAvKiBva2xjaCgzOC4xODIlIDAuMDkwNDkgMTUxLjYzKSAqLztcbiAgICAtLXdhLWNvbG9yLWdyZWVuLTIwOiAjMGEzYTFjIC8qIG9rbGNoKDMwLjg1NCUgMC4wNzMxNSAxNTEuNDgpICovO1xuICAgIC0td2EtY29sb3ItZ3JlZW4tMTA6ICMwNDIzMGYgLyogb2tsY2goMjIuNjkyJSAwLjA1MzI0IDE1MS45MikgKi87XG4gICAgLS13YS1jb2xvci1ncmVlbi0wNTogIzAyMTYwOCAvKiBva2xjaCgxNy43NTYlIDAuMDQwNzYgMTUyLjY4KSAqLztcbiAgICAtLXdhLWNvbG9yLWdyZWVuOiB2YXIoLS13YS1jb2xvci1ncmVlbi02MCk7XG4gICAgLS13YS1jb2xvci1ncmVlbi1rZXk6IDYwO1xuXG4gICAgLS13YS1jb2xvci1jeWFuLTk1OiAjZDhmYWZjIC8qIG9rbGNoKDk2LjE0OSUgMC4wMzUyNCAyMDAuOTMpICovO1xuICAgIC0td2EtY29sb3ItY3lhbi05MDogI2EzZjJmNyAvKiBva2xjaCg5MS4xODclIDAuMDc3NDQgMjAwLjkzKSAqLztcbiAgICAtLXdhLWNvbG9yLWN5YW4tODA6ICM2N2RiZTIgLyogb2tsY2goODIuNzIxJSAwLjEwNTEgMjAwLjY4KSAqLztcbiAgICAtLXdhLWNvbG9yLWN5YW4tNzA6ICMyOWMwY2EgLyogb2tsY2goNzMuODU5JSAwLjExODI1IDIwMS45MykgKi87XG4gICAgLS13YS1jb2xvci1jeWFuLTYwOiAjMGNhNGFlIC8qIG9rbGNoKDY1LjUyMyUgMC4xMDk5NyAyMDIuNjEpICovO1xuICAgIC0td2EtY29sb3ItY3lhbi01MDogIzBjODI4YyAvKiBva2xjaCg1NS40MjQlIDAuMDkyMzcgMjA0LjUzKSAqLztcbiAgICAtLXdhLWNvbG9yLWN5YW4tNDA6ICMwYTYyNmIgLyogb2tsY2goNDUuNDI4JSAwLjA3NTA0IDIwNi4xNykgKi87XG4gICAgLS13YS1jb2xvci1jeWFuLTMwOiAjMDg0ZDU1IC8qIG9rbGNoKDM4LjU0MiUgMC4wNjMxMiAyMDcuMzYpICovO1xuICAgIC0td2EtY29sb3ItY3lhbi0yMDogIzA2MzgzZiAvKiBva2xjaCgzMS4zMzUlIDAuMDUwNjIgMjA5LjMpICovO1xuICAgIC0td2EtY29sb3ItY3lhbi0xMDogIzAwMjEyNyAvKiBva2xjaCgyMi43MzklIDAuMDM5NjEgMjExLjk0KSAqLztcbiAgICAtLXdhLWNvbG9yLWN5YW4tMDU6ICMwMDE1MWIgLyogb2tsY2goMTguMDU1JSAwLjAzMjMxIDIxNy4zMSkgKi87XG4gICAgLS13YS1jb2xvci1jeWFuOiB2YXIoLS13YS1jb2xvci1jeWFuLTcwKTtcbiAgICAtLXdhLWNvbG9yLWN5YW4ta2V5OiA3MDtcblxuICAgIC0td2EtY29sb3ItYmx1ZS05NTogI2UyZjZmZiAvKiBva2xjaCg5Ni4xMTIlIDAuMDI0MyAyMjYuNDcpICovO1xuICAgIC0td2EtY29sb3ItYmx1ZS05MDogI2MwZWNmZiAvKiBva2xjaCg5MS44MjIlIDAuMDUyMyAyMjYpICovO1xuICAgIC0td2EtY29sb3ItYmx1ZS04MDogIzdmZDRmYyAvKiBva2xjaCg4My4wNjglIDAuMDk5NzkgMjI5LjkxKSAqLztcbiAgICAtLXdhLWNvbG9yLWJsdWUtNzA6ICM0OGI5ZjQgLyogb2tsY2goNzQuNjQ0JSAwLjEzMTYyIDIzNS40MikgKi87XG4gICAgLS13YS1jb2xvci1ibHVlLTYwOiAjMWY5ZGUyIC8qIG9rbGNoKDY2LjQxOSUgMC4xNDM5OCAyNDAuMDIpICovO1xuICAgIC0td2EtY29sb3ItYmx1ZS01MDogIzAwN2JiYyAvKiBva2xjaCg1NS45NTYlIDAuMTM0NiAyNDIuNzIpICovO1xuICAgIC0td2EtY29sb3ItYmx1ZS00MDogIzAwNWQ5MyAvKiBva2xjaCg0Ni4xMjElIDAuMTE0MzggMjQ0LjI4KSAqLztcbiAgICAtLXdhLWNvbG9yLWJsdWUtMzA6ICMwMDQ5NzUgLyogb2tsY2goMzkuMDkzJSAwLjA5NzA1IDI0NC4zMykgKi87XG4gICAgLS13YS1jb2xvci1ibHVlLTIwOiAjMDAzNTU4IC8qIG9rbGNoKDMxLjglIDAuMDgwMjYgMjQ1LjEzKSAqLztcbiAgICAtLXdhLWNvbG9yLWJsdWUtMTA6ICMwMDFmMzYgLyogb2tsY2goMjMuMDkzJSAwLjA1NzYzIDI0NC41OSkgKi87XG4gICAgLS13YS1jb2xvci1ibHVlLTA1OiAjMDAxMzI1IC8qIG9rbGNoKDE4LjExMyUgMC4wNDY3NSAyNDYuMTcpICovO1xuICAgIC0td2EtY29sb3ItYmx1ZTogdmFyKC0td2EtY29sb3ItYmx1ZS02MCk7XG4gICAgLS13YS1jb2xvci1ibHVlLWtleTogNjA7XG5cbiAgICAtLXdhLWNvbG9yLWluZGlnby05NTogI2VmZjJmZiAvKiBva2xjaCg5Ni4yNjUlIDAuMDE3NjkgMjc1LjY0KSAqLztcbiAgICAtLXdhLWNvbG9yLWluZGlnby05MDogI2UwZTVmZiAvKiBva2xjaCg5Mi42MDIlIDAuMDM1NjkgMjc3LjAzKSAqLztcbiAgICAtLXdhLWNvbG9yLWluZGlnby04MDogI2JlYzdmZiAvKiBva2xjaCg4NC4xOTglIDAuMDc4OTUgMjc3LjQ1KSAqLztcbiAgICAtLXdhLWNvbG9yLWluZGlnby03MDogIzlkYTlmYyAvKiBva2xjaCg3NS43OTclIDAuMTE5OTQgMjc2Ljg1KSAqLztcbiAgICAtLXdhLWNvbG9yLWluZGlnby02MDogIzgwOGJmOCAvKiBva2xjaCg2Ny43NTIlIDAuMTU5ODMgMjc2LjkpICovO1xuICAgIC0td2EtY29sb3ItaW5kaWdvLTUwOiAjNjE2M2YwIC8qIG9rbGNoKDU3LjgxNCUgMC4yMDY4NiAyNzcuMTQpICovO1xuICAgIC0td2EtY29sb3ItaW5kaWdvLTQwOiAjNGE0MWQ0IC8qIG9rbGNoKDQ4LjQxMyUgMC4yMTU4MyAyNzcuMzUpICovO1xuICAgIC0td2EtY29sb3ItaW5kaWdvLTMwOiAjM2IzNjlkIC8qIG9rbGNoKDQwLjU2MiUgMC4xNjE0OSAyNzguNTQpICovO1xuICAgIC0td2EtY29sb3ItaW5kaWdvLTIwOiAjMmIyODcyIC8qIG9rbGNoKDMyLjkzNyUgMC4xMjMzOSAyNzguOTkpICovO1xuICAgIC0td2EtY29sb3ItaW5kaWdvLTEwOiAjMTkxNzQ4IC8qIG9rbGNoKDI0LjE3NCUgMC4wODg1MyAyNzkuMjgpICovO1xuICAgIC0td2EtY29sb3ItaW5kaWdvLTA1OiAjMGUwZDMxIC8qIG9rbGNoKDE4Ljc3MiUgMC4wNjkzMyAyNzguNikgKi87XG4gICAgLS13YS1jb2xvci1pbmRpZ286IHZhcigtLXdhLWNvbG9yLWluZGlnby00MCk7XG4gICAgLS13YS1jb2xvci1pbmRpZ28ta2V5OiA0MDtcblxuICAgIC0td2EtY29sb3ItcHVycGxlLTk1OiAjZjZmMGZmIC8qIG9rbGNoKDk2LjQxMiUgMC4wMjA4NiAzMDQuMDQpICovO1xuICAgIC0td2EtY29sb3ItcHVycGxlLTkwOiAjZWVlMGZmIC8qIG9rbGNoKDkyLjcyJSAwLjA0NDA2IDMwNS44OSkgKi87XG4gICAgLS13YS1jb2xvci1wdXJwbGUtODA6ICNkY2JkZmYgLyogb2tsY2goODQuNjk0JSAwLjA5NTgzIDMwNS44NSkgKi87XG4gICAgLS13YS1jb2xvci1wdXJwbGUtNzA6ICNjYTk5ZmYgLyogb2tsY2goNzYuNzI4JSAwLjE0OTYxIDMwNS4yNykgKi87XG4gICAgLS13YS1jb2xvci1wdXJwbGUtNjA6ICNiODc0ZmYgLyogb2tsY2goNjkuMDg1JSAwLjIwMjQgMzA0LjE5KSAqLztcbiAgICAtLXdhLWNvbG9yLXB1cnBsZS01MDogIzlmNDZlZSAvKiBva2xjaCg1OS4zMDQlIDAuMjM5NDEgMzA0LjEpICovO1xuICAgIC0td2EtY29sb3ItcHVycGxlLTQwOiAjN2UyYWMyIC8qIG9rbGNoKDQ5LjE4MSUgMC4yMTg5MiAzMDQuMjQpICovO1xuICAgIC0td2EtY29sb3ItcHVycGxlLTMwOiAjNjMyMTk4IC8qIG9rbGNoKDQxLjQ0OCUgMC4xODA3MSAzMDQuNjQpICovO1xuICAgIC0td2EtY29sb3ItcHVycGxlLTIwOiAjNGExNTc0IC8qIG9rbGNoKDMzLjgzOSUgMC4xNTA0MyAzMDQuNTYpICovO1xuICAgIC0td2EtY29sb3ItcHVycGxlLTEwOiAjMmUwOTRiIC8qIG9rbGNoKDI0Ljg1NSUgMC4xMTIxMiAzMDQuNTIpICovO1xuICAgIC0td2EtY29sb3ItcHVycGxlLTA1OiAjMWUwNDMzIC8qIG9rbGNoKDE5LjMxOSUgMC4wODc3IDMwNC44NSkgKi87XG4gICAgLS13YS1jb2xvci1wdXJwbGU6IHZhcigtLXdhLWNvbG9yLXB1cnBsZS01MCk7XG4gICAgLS13YS1jb2xvci1wdXJwbGUta2V5OiA1MDtcblxuICAgIC0td2EtY29sb3ItcGluay05NTogI2ZkZWZmNyAvKiBva2xjaCg5Ni41MzklIDAuMDE4MzEgMzQyLjAyKSAqLztcbiAgICAtLXdhLWNvbG9yLXBpbmstOTA6ICNmY2RjZWUgLyogb2tsY2goOTIuNjA3JSAwLjA0MjI4IDM0My4wNykgKi87XG4gICAgLS13YS1jb2xvci1waW5rLTgwOiAjZmFiNmRiIC8qIG9rbGNoKDg0Ljk5MiUgMC4wOTEzMSAzNDUuNCkgKi87XG4gICAgLS13YS1jb2xvci1waW5rLTcwOiAjZjc4Y2M0IC8qIG9rbGNoKDc3LjA3MiUgMC4xNDQ1NSAzNDguMzcpICovO1xuICAgIC0td2EtY29sb3ItcGluay02MDogI2YxNjBhOSAvKiBva2xjaCg2OS40MTglIDAuMTkyMzQgMzUxLjk5KSAqLztcbiAgICAtLXdhLWNvbG9yLXBpbmstNTA6ICNkYjI4NzggLyogb2tsY2goNTkuMjU1JSAwLjIxNzU1IDAuMjgyNTcpICovO1xuICAgIC0td2EtY29sb3ItcGluay00MDogI2FiMTg1NCAvKiBva2xjaCg0OC43MjMlIDAuMTgxOTkgMy44MjQ0KSAqLztcbiAgICAtLXdhLWNvbG9yLXBpbmstMzA6ICM4NTE4NDQgLyogb2tsY2goNDEuMTg4JSAwLjE0NjIyIDIuNDE4NCkgKi87XG4gICAgLS13YS1jb2xvci1waW5rLTIwOiAjNjQwZTMwIC8qIG9rbGNoKDMzLjQ0MiUgMC4xMjAyMiAzLjM4NTcpICovO1xuICAgIC0td2EtY29sb3ItcGluay0xMDogIzQzMDAxYSAvKiBva2xjaCgyNC42MTMlIDAuMDk4ODUgNS4zMjExKSAqLztcbiAgICAtLXdhLWNvbG9yLXBpbmstMDU6ICMyZjAwMGIgLyogb2tsY2goMTkuNDU3JSAwLjA3Nzc2IDEyLjIxMSkgKi87XG4gICAgLS13YS1jb2xvci1waW5rOiB2YXIoLS13YS1jb2xvci1waW5rLTUwKTtcbiAgICAtLXdhLWNvbG9yLXBpbmsta2V5OiA1MDtcblxuICAgIC0td2EtY29sb3ItZ3JheS05NTogI2YyZjJmMyAvKiBva2xjaCg5Ni4xNDMlIDAuMDAxMzMgMjg2LjM3KSAqLztcbiAgICAtLXdhLWNvbG9yLWdyYXktOTA6ICNlNWU1ZTggLyogb2tsY2goOTIuMjc2JSAwLjAwNDAzIDI4Ni4zMikgKi87XG4gICAgLS13YS1jb2xvci1ncmF5LTgwOiAjYzljOWNjIC8qIG9rbGNoKDgzLjY3OSUgMC4wMDQxMyAyODYuMzEpICovO1xuICAgIC0td2EtY29sb3ItZ3JheS03MDogI2FlYWZiMSAvKiBva2xjaCg3NS4zODElIDAuMDAzMDYgMjY0LjU0KSAqLztcbiAgICAtLXdhLWNvbG9yLWdyYXktNjA6ICM5NDk1OWIgLyogb2tsY2goNjcuMDg5JSAwLjAwODg0IDI3OC41NikgKi87XG4gICAgLS13YS1jb2xvci1ncmF5LTUwOiAjNzI3NDdkIC8qIG9rbGNoKDU2LjAyNyUgMC4wMTQwMiAyNzUuOTMpICovO1xuICAgIC0td2EtY29sb3ItZ3JheS00MDogIzU2NTg2MSAvKiBva2xjaCg0Ni4xOCUgMC4wMTQ3NCAyNzUuODMpICovO1xuICAgIC0td2EtY29sb3ItZ3JheS0zMDogIzQzNDU0ZCAvKiBva2xjaCgzOS4xNTQlIDAuMDEzNzMgMjc0LjU4KSAqLztcbiAgICAtLXdhLWNvbG9yLWdyYXktMjA6ICMzMTMxMzQgLyogb2tsY2goMzEuNDMyJSAwLjAwNTI5IDI4Ni4wOSkgKi87XG4gICAgLS13YS1jb2xvci1ncmF5LTEwOiAjMWQxZDIwIC8qIG9rbGNoKDIzLjIwMSUgMC4wMDU3MSAyODUuOTUpICovO1xuICAgIC0td2EtY29sb3ItZ3JheS0wNTogIzEwMTExMyAvKiBva2xjaCgxNy43MzklIDAuMDA0NDIgMjY0LjQ2KSAqLztcbiAgICAtLXdhLWNvbG9yLWdyYXk6IHZhcigtLXdhLWNvbG9yLWdyYXktNDApO1xuICAgIC0td2EtY29sb3ItZ3JheS1rZXk6IDQwO1xuICB9XG59XG4iLCJAaW1wb3J0IHVybCgnLi4vbGF5ZXJzLmNzcycpO1xuQGltcG9ydCB1cmwoJy4uL2NvbG9yL3BhbGV0dGVzL3Nob2VsYWNlLmNzcycpOyAvKiBUbyB1c2UgdGhpcyBwYWxldHRlLCBhZGQgY2xhc3M9XCJ3YS1wYWxldHRlLXNob2VsYWNlXCIgdG8gdGhlIDxodG1sPiBlbGVtZW50ICovXG5cbkBsYXllciB3YS10aGVtZSB7XG4gIC53YS10aGVtZS1zaG9lbGFjZSxcbiAgLndhLXRoZW1lLXNob2VsYWNlLndhLWxpZ2h0LFxuICAud2EtdGhlbWUtc2hvZWxhY2UgLndhLWxpZ2h0LFxuICAud2EtdGhlbWUtc2hvZWxhY2Uud2EtZGFyayAud2EtaW52ZXJ0LFxuICAud2EtdGhlbWUtc2hvZWxhY2UgLndhLWRhcmsgLndhLWludmVydCxcbiAgLndhLWxpZ2h0IC53YS10aGVtZS1zaG9lbGFjZSxcbiAgLndhLWRhcmsgLndhLXRoZW1lLXNob2VsYWNlLndhLWludmVydCxcbiAgLndhLWRhcmsgLndhLXRoZW1lLXNob2VsYWNlIC53YS1pbnZlcnQge1xuICAgIC8qICNyZWdpb24gQ29sb3JzIChMaWdodCkgfn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXG4gICAgY29sb3Itc2NoZW1lOiBsaWdodDtcbiAgICBjb2xvcjogdmFyKC0td2EtY29sb3ItdGV4dC1ub3JtYWwpO1xuXG4gICAgLS13YS1jb2xvci1zdXJmYWNlLXJhaXNlZDogd2hpdGU7XG4gICAgLS13YS1jb2xvci1zdXJmYWNlLWRlZmF1bHQ6IHdoaXRlO1xuICAgIC0td2EtY29sb3Itc3VyZmFjZS1sb3dlcmVkOiB2YXIoLS13YS1jb2xvci1uZXV0cmFsLTk1KTtcbiAgICAtLXdhLWNvbG9yLXN1cmZhY2UtYm9yZGVyOiB2YXIoLS13YS1jb2xvci1uZXV0cmFsLTkwKTtcblxuICAgIC0td2EtY29sb3ItdGV4dC1ub3JtYWw6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtMTApO1xuICAgIC0td2EtY29sb3ItdGV4dC1xdWlldDogdmFyKC0td2EtY29sb3ItbmV1dHJhbC00MCk7XG4gICAgLS13YS1jb2xvci10ZXh0LWxpbms6IHZhcigtLXdhLWNvbG9yLWJyYW5kLTQwKTtcblxuICAgIC0td2EtY29sb3Itb3ZlcmxheS1tb2RhbDogY29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS13YS1jb2xvci1uZXV0cmFsLTA1KSA1MCUsIHRyYW5zcGFyZW50KTtcbiAgICAtLXdhLWNvbG9yLW92ZXJsYXktaW5saW5lOiBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtODApIDI1JSwgdHJhbnNwYXJlbnQpO1xuXG4gICAgLS13YS1jb2xvci1zaGFkb3c6IGNvbG9yLW1peChcbiAgICAgIGluIG9rbGFiLFxuICAgICAgdmFyKC0td2EtY29sb3ItbmV1dHJhbC0wNSkgY2FsYyh2YXIoLS13YS1zaGFkb3ctYmx1ci1zY2FsZSkgKiA0JSArIDglKSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcblxuICAgIC0td2EtY29sb3ItZm9jdXM6IHZhcigtLXdhLWNvbG9yLWJyYW5kLTYwKTtcblxuICAgIC0td2EtY29sb3ItbWl4LWhvdmVyOiBibGFjayAxMCU7XG4gICAgLS13YS1jb2xvci1taXgtYWN0aXZlOiBibGFjayAyMCU7XG5cbiAgICAtLXdhLWNvbG9yLWJyYW5kLWZpbGwtcXVpZXQ6IHZhcigtLXdhLWNvbG9yLWJyYW5kLTk1KTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLWZpbGwtbm9ybWFsOiB2YXIoLS13YS1jb2xvci1icmFuZC05MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC1maWxsLWxvdWQ6IHZhcigtLXdhLWNvbG9yLWJyYW5kLTUwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLWJvcmRlci1xdWlldDogdmFyKC0td2EtY29sb3ItYnJhbmQtOTApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtYm9yZGVyLW5vcm1hbDogdmFyKC0td2EtY29sb3ItYnJhbmQtODApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtYm9yZGVyLWxvdWQ6IHZhcigtLXdhLWNvbG9yLWJyYW5kLTYwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLW9uLXF1aWV0OiB2YXIoLS13YS1jb2xvci1icmFuZC01MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC1vbi1ub3JtYWw6IHZhcigtLXdhLWNvbG9yLWJyYW5kLTQwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLW9uLWxvdWQ6IHdoaXRlO1xuXG4gICAgLS13YS1jb2xvci1zdWNjZXNzLWZpbGwtcXVpZXQ6IHZhcigtLXdhLWNvbG9yLXN1Y2Nlc3MtOTUpO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy1maWxsLW5vcm1hbDogdmFyKC0td2EtY29sb3Itc3VjY2Vzcy05MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLWZpbGwtbG91ZDogdmFyKC0td2EtY29sb3Itc3VjY2Vzcy01MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLWJvcmRlci1xdWlldDogdmFyKC0td2EtY29sb3Itc3VjY2Vzcy05MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLWJvcmRlci1ub3JtYWw6IHZhcigtLXdhLWNvbG9yLXN1Y2Nlc3MtODApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy1ib3JkZXItbG91ZDogdmFyKC0td2EtY29sb3Itc3VjY2Vzcy02MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLW9uLXF1aWV0OiB2YXIoLS13YS1jb2xvci1zdWNjZXNzLTUwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3Mtb24tbm9ybWFsOiB2YXIoLS13YS1jb2xvci1zdWNjZXNzLTQwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3Mtb24tbG91ZDogd2hpdGU7XG5cbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctZmlsbC1xdWlldDogdmFyKC0td2EtY29sb3Itd2FybmluZy05NSk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLWZpbGwtbm9ybWFsOiB2YXIoLS13YS1jb2xvci13YXJuaW5nLTkwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctZmlsbC1sb3VkOiB2YXIoLS13YS1jb2xvci13YXJuaW5nLTUwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctYm9yZGVyLXF1aWV0OiB2YXIoLS13YS1jb2xvci13YXJuaW5nLTkwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctYm9yZGVyLW5vcm1hbDogdmFyKC0td2EtY29sb3Itd2FybmluZy04MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLWJvcmRlci1sb3VkOiB2YXIoLS13YS1jb2xvci13YXJuaW5nLTYwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctb24tcXVpZXQ6IHZhcigtLXdhLWNvbG9yLXdhcm5pbmctNTApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy1vbi1ub3JtYWw6IHZhcigtLXdhLWNvbG9yLXdhcm5pbmctNDApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy1vbi1sb3VkOiB3aGl0ZTtcblxuICAgIC0td2EtY29sb3ItZGFuZ2VyLWZpbGwtcXVpZXQ6IHZhcigtLXdhLWNvbG9yLWRhbmdlci05NSk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItZmlsbC1ub3JtYWw6IHZhcigtLXdhLWNvbG9yLWRhbmdlci05MCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItZmlsbC1sb3VkOiB2YXIoLS13YS1jb2xvci1kYW5nZXItNTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLWJvcmRlci1xdWlldDogdmFyKC0td2EtY29sb3ItZGFuZ2VyLTkwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci1ib3JkZXItbm9ybWFsOiB2YXIoLS13YS1jb2xvci1kYW5nZXItODApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLWJvcmRlci1sb3VkOiB2YXIoLS13YS1jb2xvci1kYW5nZXItNjApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLW9uLXF1aWV0OiB2YXIoLS13YS1jb2xvci1kYW5nZXItNTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLW9uLW5vcm1hbDogdmFyKC0td2EtY29sb3ItZGFuZ2VyLTQwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci1vbi1sb3VkOiB3aGl0ZTtcblxuICAgIC0td2EtY29sb3ItbmV1dHJhbC1maWxsLXF1aWV0OiB2YXIoLS13YS1jb2xvci1uZXV0cmFsLTk1KTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtZmlsbC1ub3JtYWw6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtOTApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC1maWxsLWxvdWQ6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtNDApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC1ib3JkZXItcXVpZXQ6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtOTApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC1ib3JkZXItbm9ybWFsOiB2YXIoLS13YS1jb2xvci1uZXV0cmFsLTgwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtYm9yZGVyLWxvdWQ6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtNTApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC1vbi1xdWlldDogdmFyKC0td2EtY29sb3ItbmV1dHJhbC00MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLW9uLW5vcm1hbDogdmFyKC0td2EtY29sb3ItbmV1dHJhbC0zMCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLW9uLWxvdWQ6IHdoaXRlO1xuICAgIC8qICNlbmRyZWdpb24gKi9cbiAgfVxuXG4gIC53YS10aGVtZS1zaG9lbGFjZS53YS1kYXJrLFxuICAud2EtdGhlbWUtc2hvZWxhY2UgLndhLWRhcmssXG4gIC53YS10aGVtZS1zaG9lbGFjZS53YS1pbnZlcnQsXG4gIC53YS10aGVtZS1zaG9lbGFjZSAud2EtaW52ZXJ0LFxuICAud2EtZGFyayAud2EtdGhlbWUtc2hvZWxhY2UsXG4gIC53YS1saWdodCAud2EtdGhlbWUtc2hvZWxhY2Uud2EtaW52ZXJ0LFxuICAud2EtbGlnaHQgLndhLXRoZW1lLXNob2VsYWNlIC53YS1pbnZlcnQge1xuICAgIC8qICNyZWdpb24gQ29sb3JzIChEYXJrKSB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIGNvbG9yOiB2YXIoLS13YS1jb2xvci10ZXh0LW5vcm1hbCk7XG5cbiAgICAtLXdhLWNvbG9yLXN1cmZhY2UtcmFpc2VkOiB2YXIoLS13YS1jb2xvci1uZXV0cmFsLTEwKTtcbiAgICAtLXdhLWNvbG9yLXN1cmZhY2UtZGVmYXVsdDogdmFyKC0td2EtY29sb3ItbmV1dHJhbC0wNSk7XG4gICAgLS13YS1jb2xvci1zdXJmYWNlLWxvd2VyZWQ6IGNvbG9yLW1peChpbiBva2xhYiwgdmFyKC0td2EtY29sb3Itc3VyZmFjZS1kZWZhdWx0KSwgYmxhY2sgMjAlKTtcbiAgICAtLXdhLWNvbG9yLXN1cmZhY2UtYm9yZGVyOiB2YXIoLS13YS1jb2xvci1uZXV0cmFsLTIwKTtcblxuICAgIC0td2EtY29sb3ItdGV4dC1ub3JtYWw6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtOTUpO1xuICAgIC0td2EtY29sb3ItdGV4dC1xdWlldDogdmFyKC0td2EtY29sb3ItbmV1dHJhbC02MCk7XG4gICAgLS13YS1jb2xvci10ZXh0LWxpbms6IHZhcigtLXdhLWNvbG9yLWJyYW5kLTcwKTtcblxuICAgIC0td2EtY29sb3Itb3ZlcmxheS1tb2RhbDogY29sb3ItbWl4KGluIG9rbGFiLCBibGFjayA2MCUsIHRyYW5zcGFyZW50KTtcbiAgICAtLXdhLWNvbG9yLW92ZXJsYXktaW5saW5lOiBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtNTApIDEwJSwgdHJhbnNwYXJlbnQpO1xuXG4gICAgLS13YS1jb2xvci1zaGFkb3c6IGNvbG9yLW1peChcbiAgICAgIGluIG9rbGFiLFxuICAgICAgdmFyKC0td2EtY29sb3Itc3VyZmFjZS1sb3dlcmVkKSBjYWxjKHZhcigtLXdhLXNoYWRvdy1ibHVyLXNjYWxlKSAqIDMyJSArIDQwJSksXG4gICAgICB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgICAtLXdhLWNvbG9yLWZvY3VzOiB2YXIoLS13YS1jb2xvci1icmFuZC02MCk7XG5cbiAgICAtLXdhLWNvbG9yLW1peC1ob3ZlcjogYmxhY2sgOCU7XG4gICAgLS13YS1jb2xvci1taXgtYWN0aXZlOiBibGFjayAxNiU7XG5cbiAgICAtLXdhLWNvbG9yLWJyYW5kLWZpbGwtcXVpZXQ6IHZhcigtLXdhLWNvbG9yLWJyYW5kLTIwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLWZpbGwtbm9ybWFsOiB2YXIoLS13YS1jb2xvci1icmFuZC0zMCk7XG4gICAgLS13YS1jb2xvci1icmFuZC1maWxsLWxvdWQ6IHZhcigtLXdhLWNvbG9yLWJyYW5kLTcwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLWJvcmRlci1xdWlldDogdmFyKC0td2EtY29sb3ItYnJhbmQtMzApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtYm9yZGVyLW5vcm1hbDogdmFyKC0td2EtY29sb3ItYnJhbmQtNDApO1xuICAgIC0td2EtY29sb3ItYnJhbmQtYm9yZGVyLWxvdWQ6IHZhcigtLXdhLWNvbG9yLWJyYW5kLTUwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLW9uLXF1aWV0OiB2YXIoLS13YS1jb2xvci1icmFuZC03MCk7XG4gICAgLS13YS1jb2xvci1icmFuZC1vbi1ub3JtYWw6IHZhcigtLXdhLWNvbG9yLWJyYW5kLTgwKTtcbiAgICAtLXdhLWNvbG9yLWJyYW5kLW9uLWxvdWQ6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtMTApO1xuXG4gICAgLS13YS1jb2xvci1zdWNjZXNzLWZpbGwtcXVpZXQ6IHZhcigtLXdhLWNvbG9yLXN1Y2Nlc3MtMjApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy1maWxsLW5vcm1hbDogdmFyKC0td2EtY29sb3Itc3VjY2Vzcy0zMCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLWZpbGwtbG91ZDogdmFyKC0td2EtY29sb3Itc3VjY2Vzcy03MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLWJvcmRlci1xdWlldDogdmFyKC0td2EtY29sb3Itc3VjY2Vzcy0zMCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLWJvcmRlci1ub3JtYWw6IHZhcigtLXdhLWNvbG9yLXN1Y2Nlc3MtNDApO1xuICAgIC0td2EtY29sb3Itc3VjY2Vzcy1ib3JkZXItbG91ZDogdmFyKC0td2EtY29sb3Itc3VjY2Vzcy01MCk7XG4gICAgLS13YS1jb2xvci1zdWNjZXNzLW9uLXF1aWV0OiB2YXIoLS13YS1jb2xvci1zdWNjZXNzLTcwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3Mtb24tbm9ybWFsOiB2YXIoLS13YS1jb2xvci1zdWNjZXNzLTgwKTtcbiAgICAtLXdhLWNvbG9yLXN1Y2Nlc3Mtb24tbG91ZDogdmFyKC0td2EtY29sb3ItbmV1dHJhbC0xMCk7XG5cbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctZmlsbC1xdWlldDogdmFyKC0td2EtY29sb3Itd2FybmluZy0yMCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLWZpbGwtbm9ybWFsOiB2YXIoLS13YS1jb2xvci13YXJuaW5nLTMwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctZmlsbC1sb3VkOiB2YXIoLS13YS1jb2xvci13YXJuaW5nLTcwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctYm9yZGVyLXF1aWV0OiB2YXIoLS13YS1jb2xvci13YXJuaW5nLTMwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctYm9yZGVyLW5vcm1hbDogdmFyKC0td2EtY29sb3Itd2FybmluZy00MCk7XG4gICAgLS13YS1jb2xvci13YXJuaW5nLWJvcmRlci1sb3VkOiB2YXIoLS13YS1jb2xvci13YXJuaW5nLTUwKTtcbiAgICAtLXdhLWNvbG9yLXdhcm5pbmctb24tcXVpZXQ6IHZhcigtLXdhLWNvbG9yLXdhcm5pbmctNzApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy1vbi1ub3JtYWw6IHZhcigtLXdhLWNvbG9yLXdhcm5pbmctODApO1xuICAgIC0td2EtY29sb3Itd2FybmluZy1vbi1sb3VkOiB2YXIoLS13YS1jb2xvci1uZXV0cmFsLTEwKTtcblxuICAgIC0td2EtY29sb3ItZGFuZ2VyLWZpbGwtcXVpZXQ6IHZhcigtLXdhLWNvbG9yLWRhbmdlci0yMCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItZmlsbC1ub3JtYWw6IHZhcigtLXdhLWNvbG9yLWRhbmdlci0zMCk7XG4gICAgLS13YS1jb2xvci1kYW5nZXItZmlsbC1sb3VkOiB2YXIoLS13YS1jb2xvci1kYW5nZXItNjApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLWJvcmRlci1xdWlldDogdmFyKC0td2EtY29sb3ItZGFuZ2VyLTMwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci1ib3JkZXItbm9ybWFsOiB2YXIoLS13YS1jb2xvci1kYW5nZXItNDApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLWJvcmRlci1sb3VkOiB2YXIoLS13YS1jb2xvci1kYW5nZXItNTApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLW9uLXF1aWV0OiB2YXIoLS13YS1jb2xvci1kYW5nZXItNzApO1xuICAgIC0td2EtY29sb3ItZGFuZ2VyLW9uLW5vcm1hbDogdmFyKC0td2EtY29sb3ItZGFuZ2VyLTgwKTtcbiAgICAtLXdhLWNvbG9yLWRhbmdlci1vbi1sb3VkOiB2YXIoLS13YS1jb2xvci1uZXV0cmFsLTEwKTtcblxuICAgIC0td2EtY29sb3ItbmV1dHJhbC1maWxsLXF1aWV0OiB2YXIoLS13YS1jb2xvci1uZXV0cmFsLTEwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtZmlsbC1ub3JtYWw6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtMjApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC1maWxsLWxvdWQ6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtNjApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC1ib3JkZXItcXVpZXQ6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtMjApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC1ib3JkZXItbm9ybWFsOiB2YXIoLS13YS1jb2xvci1uZXV0cmFsLTMwKTtcbiAgICAtLXdhLWNvbG9yLW5ldXRyYWwtYm9yZGVyLWxvdWQ6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtNTApO1xuICAgIC0td2EtY29sb3ItbmV1dHJhbC1vbi1xdWlldDogdmFyKC0td2EtY29sb3ItbmV1dHJhbC02MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLW9uLW5vcm1hbDogdmFyKC0td2EtY29sb3ItbmV1dHJhbC03MCk7XG4gICAgLS13YS1jb2xvci1uZXV0cmFsLW9uLWxvdWQ6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtMDUpO1xuICAgIC8qICNlbmRyZWdpb24gKi9cbiAgfVxuXG4gIC53YS10aGVtZS1zaG9lbGFjZSxcbiAgLndhLXRoZW1lLXNob2VsYWNlLndhLWxpZ2h0LFxuICAud2EtdGhlbWUtc2hvZWxhY2UgLndhLWxpZ2h0LFxuICAud2EtdGhlbWUtc2hvZWxhY2Uud2EtZGFyayxcbiAgLndhLXRoZW1lLXNob2VsYWNlIC53YS1kYXJrLFxuICAud2EtdGhlbWUtc2hvZWxhY2Uud2EtaW52ZXJ0LFxuICAud2EtdGhlbWUtc2hvZWxhY2UgLndhLWludmVydCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdhLWZvbnQtZmFtaWx5LWJvZHkpO1xuXG4gICAgLyogI3JlZ2lvbiBGb250cyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXG4gICAgLS13YS1mb250LWZhbWlseS1ib2R5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gICAgLS13YS1mb250LWZhbWlseS1oZWFkaW5nOiB2YXIoLS13YS1mb250LWZhbWlseS1ib2R5KTtcbiAgICAtLXdhLWZvbnQtZmFtaWx5LWNvZGU6IHVpLW1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICAgIC0td2EtZm9udC1mYW1pbHktbG9uZ2Zvcm06IHVpLXNlcmlmLCBzZXJpZjtcblxuICAgIC8qIEZvbnQgc2l6ZXMgdXNlIGEgcmF0aW8gb2YgMS4xMjUgdG8gc2NhbGUgc2l6ZXMgcHJvcG9ydGlvbmFsbHkuXG4gICAgICogRm9yIGxhcmdlciBmb250IHNpemVzLCBlYWNoIHNpemUgaXMgdHdpY2UgMS4xMjV4IGxhcmdlciB0byBtYXhpbWl6ZSBpbXBhY3QuXG4gICAgICogRWFjaCB2YWx1ZSB1c2VzIGByZW1gIHVuaXRzIGFuZCBpcyByb3VuZGVkIHRvIHRoZSBuZWFyZXN0IHdob2xlIHBpeGVsIHdoZW4gcmVuZGVyZWQuICovXG4gICAgLS13YS1mb250LXNpemUtc2NhbGU6IDE7XG4gICAgLS13YS1mb250LXNpemUtMnhzOiByb3VuZChjYWxjKHZhcigtLXdhLWZvbnQtc2l6ZS14cykgLyAxLjEyNSksIDFweCk7IC8qIDExcHggKi9cbiAgICAtLXdhLWZvbnQtc2l6ZS14czogcm91bmQoY2FsYyh2YXIoLS13YS1mb250LXNpemUtcykgLyAxLjEyNSksIDFweCk7IC8qIDEycHggKi9cbiAgICAtLXdhLWZvbnQtc2l6ZS1zOiByb3VuZChjYWxjKHZhcigtLXdhLWZvbnQtc2l6ZS1tKSAvIDEuMTI1KSwgMXB4KTsgLyogMTRweCAqL1xuICAgIC0td2EtZm9udC1zaXplLW06IGNhbGMoMXJlbSAqIHZhcigtLXdhLWZvbnQtc2l6ZS1zY2FsZSkpOyAvKiAxNnB4ICovXG4gICAgLS13YS1mb250LXNpemUtbDogcm91bmQoY2FsYyh2YXIoLS13YS1mb250LXNpemUtbSkgKiAxLjEyNSAqIDEuMTI1KSwgMXB4KTsgLyogMjBweCAqL1xuICAgIC0td2EtZm9udC1zaXplLXhsOiByb3VuZChjYWxjKHZhcigtLXdhLWZvbnQtc2l6ZS1sKSAqIDEuMTI1ICogMS4xMjUpLCAxcHgpOyAvKiAyNXB4ICovXG4gICAgLS13YS1mb250LXNpemUtMnhsOiByb3VuZChjYWxjKHZhcigtLXdhLWZvbnQtc2l6ZS14bCkgKiAxLjEyNSAqIDEuMTI1KSwgMXB4KTsgLyogMzJweCAqL1xuICAgIC0td2EtZm9udC1zaXplLTN4bDogcm91bmQoY2FsYyh2YXIoLS13YS1mb250LXNpemUtMnhsKSAqIDEuMTI1ICogMS4xMjUpLCAxcHgpOyAvKiA0MXB4ICovXG4gICAgLS13YS1mb250LXNpemUtNHhsOiByb3VuZChjYWxjKHZhcigtLXdhLWZvbnQtc2l6ZS0zeGwpICogMS4xMjUgKiAxLjEyNSksIDFweCk7IC8qIDUycHggKi9cblxuICAgIC0td2EtZm9udC1zaXplLXNtYWxsZXI6IHJvdW5kKGNhbGMoMWVtIC8gMS4xMjUpLCAxcHgpO1xuICAgIC0td2EtZm9udC1zaXplLWxhcmdlcjogcm91bmQoY2FsYygxZW0gKiAxLjEyNSAqIDEuMTI1KSwgMXB4KTtcblxuICAgIC0td2EtZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcbiAgICAtLXdhLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuICAgIC0td2EtZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDUwMDtcbiAgICAtLXdhLWZvbnQtd2VpZ2h0LWJvbGQ6IDYwMDtcblxuICAgIC0td2EtZm9udC13ZWlnaHQtYm9keTogdmFyKC0td2EtZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgICAtLXdhLWZvbnQtd2VpZ2h0LWhlYWRpbmc6IHZhcigtLXdhLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgIC0td2EtZm9udC13ZWlnaHQtY29kZTogdmFyKC0td2EtZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgICAtLXdhLWZvbnQtd2VpZ2h0LWxvbmdmb3JtOiB2YXIoLS13YS1mb250LXdlaWdodC1ub3JtYWwpO1xuICAgIC0td2EtZm9udC13ZWlnaHQtYWN0aW9uOiB2YXIoLS13YS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG5cbiAgICAtLXdhLWxpbmUtaGVpZ2h0LWNvbmRlbnNlZDogMS4yO1xuICAgIC0td2EtbGluZS1oZWlnaHQtbm9ybWFsOiAxLjY7XG4gICAgLS13YS1saW5lLWhlaWdodC1leHBhbmRlZDogMjtcblxuICAgIC0td2EtbGluay1kZWNvcmF0aW9uLWRlZmF1bHQ6IHVuZGVybGluZTtcbiAgICAtLXdhLWxpbmstZGVjb3JhdGlvbi1ob3ZlcjogdW5kZXJsaW5lO1xuICAgIC8qICNlbmRyZWdpb24gKi9cblxuICAgIC8qICNyZWdpb24gU3BhY2Ugfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiAqL1xuICAgIC0td2Etc3BhY2Utc2NhbGU6IDE7XG4gICAgLS13YS1zcGFjZS0zeHM6IGNhbGModmFyKC0td2Etc3BhY2Utc2NhbGUpICogMC4xMjVyZW0pOyAvKiAycHggKi9cbiAgICAtLXdhLXNwYWNlLTJ4czogY2FsYyh2YXIoLS13YS1zcGFjZS1zY2FsZSkgKiAwLjI1cmVtKTsgLyogNHB4ICovXG4gICAgLS13YS1zcGFjZS14czogY2FsYyh2YXIoLS13YS1zcGFjZS1zY2FsZSkgKiAwLjVyZW0pOyAvKiA4cHggKi9cbiAgICAtLXdhLXNwYWNlLXM6IGNhbGModmFyKC0td2Etc3BhY2Utc2NhbGUpICogMC43NXJlbSk7IC8qIDEycHggKi9cbiAgICAtLXdhLXNwYWNlLW06IGNhbGModmFyKC0td2Etc3BhY2Utc2NhbGUpICogMXJlbSk7IC8qIDE2cHggKi9cbiAgICAtLXdhLXNwYWNlLWw6IGNhbGModmFyKC0td2Etc3BhY2Utc2NhbGUpICogMS41cmVtKTsgLyogMjRweCAqL1xuICAgIC0td2Etc3BhY2UteGw6IGNhbGModmFyKC0td2Etc3BhY2Utc2NhbGUpICogMnJlbSk7IC8qIDMycHggKi9cbiAgICAtLXdhLXNwYWNlLTJ4bDogY2FsYyh2YXIoLS13YS1zcGFjZS1zY2FsZSkgKiAyLjVyZW0pOyAvKiA0MHB4ICovXG4gICAgLS13YS1zcGFjZS0zeGw6IGNhbGModmFyKC0td2Etc3BhY2Utc2NhbGUpICogM3JlbSk7IC8qIDQ4cHggKi9cbiAgICAtLXdhLXNwYWNlLTR4bDogY2FsYyh2YXIoLS13YS1zcGFjZS1zY2FsZSkgKiA0cmVtKTsgLyogNjRweCAqL1xuXG4gICAgLS13YS1jb250ZW50LXNwYWNpbmc6IHZhcigtLXdhLXNwYWNlLWwpO1xuICAgIC8qICNlbmRyZWdpb24gKi9cblxuICAgIC8qICNyZWdpb24gQm9yZGVycyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiAqL1xuICAgIC0td2EtYm9yZGVyLXN0eWxlOiBzb2xpZDtcblxuICAgIC0td2EtYm9yZGVyLXdpZHRoLXNjYWxlOiAxO1xuICAgIC0td2EtYm9yZGVyLXdpZHRoLXM6IGNhbGModmFyKC0td2EtYm9yZGVyLXdpZHRoLXNjYWxlKSAqIDAuMDYyNXJlbSk7XG4gICAgLS13YS1ib3JkZXItd2lkdGgtbTogY2FsYyh2YXIoLS13YS1ib3JkZXItd2lkdGgtc2NhbGUpICogMC4xMjVyZW0pO1xuICAgIC0td2EtYm9yZGVyLXdpZHRoLWw6IGNhbGModmFyKC0td2EtYm9yZGVyLXdpZHRoLXNjYWxlKSAqIDAuMTg3NXJlbSk7XG4gICAgLyogI2VuZHJlZ2lvbiAqL1xuXG4gICAgLyogI3JlZ2lvbiBSb3VuZGluZyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXG4gICAgLS13YS1ib3JkZXItcmFkaXVzLXNjYWxlOiAwLjc7XG4gICAgLS13YS1ib3JkZXItcmFkaXVzLXM6IGNhbGModmFyKC0td2EtYm9yZGVyLXJhZGl1cy1zY2FsZSkgKiAwLjE4NzVyZW0pO1xuICAgIC0td2EtYm9yZGVyLXJhZGl1cy1tOiBjYWxjKHZhcigtLXdhLWJvcmRlci1yYWRpdXMtc2NhbGUpICogMC4zNzVyZW0pO1xuICAgIC0td2EtYm9yZGVyLXJhZGl1cy1sOiBjYWxjKHZhcigtLXdhLWJvcmRlci1yYWRpdXMtc2NhbGUpICogMC43NXJlbSk7XG5cbiAgICAtLXdhLWJvcmRlci1yYWRpdXMtcGlsbDogOTk5OXB4O1xuICAgIC0td2EtYm9yZGVyLXJhZGl1cy1jaXJjbGU6IDUwJTtcbiAgICAtLXdhLWJvcmRlci1yYWRpdXMtc3F1YXJlOiAwcHg7XG4gICAgLyogI2VuZHJlZ2lvbiAqL1xuXG4gICAgLyogI3JlZ2lvbiBGb2N1cyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXG4gICAgLS13YS1mb2N1cy1yaW5nLXN0eWxlOiBzb2xpZDtcbiAgICAtLXdhLWZvY3VzLXJpbmctd2lkdGg6IDAuMTg3NXJlbTsgLyogM3B4ICovXG4gICAgLS13YS1mb2N1cy1yaW5nOiB2YXIoLS13YS1mb2N1cy1yaW5nLXN0eWxlKSB2YXIoLS13YS1mb2N1cy1yaW5nLXdpZHRoKVxuICAgICAgY29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS13YS1jb2xvci1mb2N1cykgNjAlLCB0cmFuc3BhcmVudCk7XG4gICAgLS13YS1mb2N1cy1yaW5nLW9mZnNldDogMC4wNjI1cmVtOyAvKiAxcHggKi9cbiAgICAvKiAjZW5kcmVnaW9uICovXG5cbiAgICAvKiAjcmVnaW9uIFNoYWRvd3Mgfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gKi9cbiAgICAtLXdhLXNoYWRvdy1vZmZzZXQteC1zY2FsZTogMDtcbiAgICAtLXdhLXNoYWRvdy1vZmZzZXQteC1zOiBjYWxjKHZhcigtLXdhLXNoYWRvdy1vZmZzZXQteC1zY2FsZSkgKiAwLjEyNXJlbSk7XG4gICAgLS13YS1zaGFkb3ctb2Zmc2V0LXgtbTogY2FsYyh2YXIoLS13YS1zaGFkb3ctb2Zmc2V0LXgtc2NhbGUpICogMC4yNXJlbSk7XG4gICAgLS13YS1zaGFkb3ctb2Zmc2V0LXgtbDogY2FsYyh2YXIoLS13YS1zaGFkb3ctb2Zmc2V0LXgtc2NhbGUpICogMC41cmVtKTtcblxuICAgIC0td2Etc2hhZG93LW9mZnNldC15LXNjYWxlOiAwLjA2MjU7XG4gICAgLS13YS1zaGFkb3ctb2Zmc2V0LXktczogY2FsYyh2YXIoLS13YS1zaGFkb3ctb2Zmc2V0LXktc2NhbGUpICogMC4xMjVyZW0pO1xuICAgIC0td2Etc2hhZG93LW9mZnNldC15LW06IGNhbGModmFyKC0td2Etc2hhZG93LW9mZnNldC15LXNjYWxlKSAqIDAuMjVyZW0pO1xuICAgIC0td2Etc2hhZG93LW9mZnNldC15LWw6IGNhbGModmFyKC0td2Etc2hhZG93LW9mZnNldC15LXNjYWxlKSAqIDAuNXJlbSk7XG5cbiAgICAtLXdhLXNoYWRvdy1ibHVyLXNjYWxlOiAxO1xuICAgIC0td2Etc2hhZG93LWJsdXItczogY2FsYyh2YXIoLS13YS1zaGFkb3ctYmx1ci1zY2FsZSkgKiAwLjEyNXJlbSk7XG4gICAgLS13YS1zaGFkb3ctYmx1ci1tOiBjYWxjKHZhcigtLXdhLXNoYWRvdy1ibHVyLXNjYWxlKSAqIDAuMjVyZW0pO1xuICAgIC0td2Etc2hhZG93LWJsdXItbDogY2FsYyh2YXIoLS13YS1zaGFkb3ctYmx1ci1zY2FsZSkgKiAwLjVyZW0pO1xuXG4gICAgLS13YS1zaGFkb3ctc3ByZWFkLXNjYWxlOiAwO1xuICAgIC0td2Etc2hhZG93LXNwcmVhZC1zOiBjYWxjKHZhcigtLXdhLXNoYWRvdy1zcHJlYWQtc2NhbGUpICogMC4xMjVyZW0pO1xuICAgIC0td2Etc2hhZG93LXNwcmVhZC1tOiBjYWxjKHZhcigtLXdhLXNoYWRvdy1zcHJlYWQtc2NhbGUpICogMC4yNXJlbSk7XG4gICAgLS13YS1zaGFkb3ctc3ByZWFkLWw6IGNhbGModmFyKC0td2Etc2hhZG93LXNwcmVhZC1zY2FsZSkgKiAwLjVyZW0pO1xuXG4gICAgLS13YS1zaGFkb3ctczogdmFyKC0td2Etc2hhZG93LW9mZnNldC14LXMpIHZhcigtLXdhLXNoYWRvdy1vZmZzZXQteS1zKSB2YXIoLS13YS1zaGFkb3ctYmx1ci1zKVxuICAgICAgdmFyKC0td2Etc2hhZG93LXNwcmVhZC1zKSB2YXIoLS13YS1jb2xvci1zaGFkb3cpO1xuICAgIC0td2Etc2hhZG93LW06IHZhcigtLXdhLXNoYWRvdy1vZmZzZXQteC1tKSB2YXIoLS13YS1zaGFkb3ctb2Zmc2V0LXktbSkgdmFyKC0td2Etc2hhZG93LWJsdXItbSlcbiAgICAgIHZhcigtLXdhLXNoYWRvdy1zcHJlYWQtbSkgdmFyKC0td2EtY29sb3Itc2hhZG93KTtcbiAgICAtLXdhLXNoYWRvdy1sOiB2YXIoLS13YS1zaGFkb3ctb2Zmc2V0LXgtbCkgdmFyKC0td2Etc2hhZG93LW9mZnNldC15LWwpIHZhcigtLXdhLXNoYWRvdy1ibHVyLWwpXG4gICAgICB2YXIoLS13YS1zaGFkb3ctc3ByZWFkLWwpIHZhcigtLXdhLWNvbG9yLXNoYWRvdyk7XG4gICAgLyogI2VuZHJlZ2lvbiAqL1xuXG4gICAgLyogI3JlZ2lvbiBUcmFuc2l0aW9ucyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXG4gICAgLS13YS10cmFuc2l0aW9uLWVhc2luZzogZWFzZTtcbiAgICAtLXdhLXRyYW5zaXRpb24tc2xvdzogMjUwbXM7XG4gICAgLS13YS10cmFuc2l0aW9uLW5vcm1hbDogMTUwbXM7XG4gICAgLS13YS10cmFuc2l0aW9uLWZhc3Q6IDUwbXM7XG4gICAgLyogI2VuZHJlZ2lvbiAqL1xuXG4gICAgLyogI3JlZ2lvbiBDb21wb25lbnRzIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXG4gICAgLyogRm9ybSBDb250cm9scyAqL1xuICAgIC0td2EtZm9ybS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhLWNvbG9yLXN1cmZhY2UtZGVmYXVsdCk7XG5cbiAgICAtLXdhLWZvcm0tY29udHJvbC1ib3JkZXItY29sb3I6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtYm9yZGVyLW5vcm1hbCk7XG4gICAgLS13YS1mb3JtLWNvbnRyb2wtYm9yZGVyLXN0eWxlOiB2YXIoLS13YS1ib3JkZXItc3R5bGUpO1xuICAgIC0td2EtZm9ybS1jb250cm9sLWJvcmRlci13aWR0aDogdmFyKC0td2EtYm9yZGVyLXdpZHRoLXMpO1xuICAgIC0td2EtZm9ybS1jb250cm9sLWJvcmRlci1yYWRpdXM6IHZhcigtLXdhLWJvcmRlci1yYWRpdXMtbSk7XG5cbiAgICAtLXdhLWZvcm0tY29udHJvbC1hY3RpdmF0ZWQtY29sb3I6IHZhcigtLXdhLWNvbG9yLWJyYW5kLWZpbGwtbG91ZCk7XG5cbiAgICAtLXdhLWZvcm0tY29udHJvbC1sYWJlbC1jb2xvcjogdmFyKC0td2EtY29sb3ItdGV4dC1ub3JtYWwpO1xuICAgIC0td2EtZm9ybS1jb250cm9sLWxhYmVsLWZvbnQtd2VpZ2h0OiB2YXIoLS13YS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gICAgLS13YS1mb3JtLWNvbnRyb2wtbGFiZWwtbGluZS1oZWlnaHQ6IHZhcigtLXdhLWxpbmUtaGVpZ2h0LWNvbmRlbnNlZCk7XG5cbiAgICAtLXdhLWZvcm0tY29udHJvbC12YWx1ZS1jb2xvcjogdmFyKC0td2EtY29sb3ItdGV4dC1ub3JtYWwpO1xuICAgIC0td2EtZm9ybS1jb250cm9sLXZhbHVlLWZvbnQtd2VpZ2h0OiB2YXIoLS13YS1mb250LXdlaWdodC1ib2R5KTtcbiAgICAtLXdhLWZvcm0tY29udHJvbC12YWx1ZS1saW5lLWhlaWdodDogdmFyKC0td2EtbGluZS1oZWlnaHQtY29uZGVuc2VkKTtcblxuICAgIC0td2EtZm9ybS1jb250cm9sLWhpbnQtY29sb3I6IHZhcigtLXdhLWNvbG9yLXRleHQtcXVpZXQpO1xuICAgIC0td2EtZm9ybS1jb250cm9sLWhpbnQtZm9udC13ZWlnaHQ6IHZhcigtLXdhLWZvbnQtd2VpZ2h0LWJvZHkpO1xuICAgIC0td2EtZm9ybS1jb250cm9sLWhpbnQtbGluZS1oZWlnaHQ6IHZhcigtLXdhLWxpbmUtaGVpZ2h0LW5vcm1hbCk7XG5cbiAgICAtLXdhLWZvcm0tY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0td2EtY29sb3ItZ3JheS01MCk7XG5cbiAgICAtLXdhLWZvcm0tY29udHJvbC1yZXF1aXJlZC1jb250ZW50OiAnKic7XG4gICAgLS13YS1mb3JtLWNvbnRyb2wtcmVxdWlyZWQtY29udGVudC1jb2xvcjogaW5oZXJpdDtcbiAgICAtLXdhLWZvcm0tY29udHJvbC1yZXF1aXJlZC1jb250ZW50LW9mZnNldDogMC4xZW07XG5cbiAgICAtLXdhLWZvcm0tY29udHJvbC1wYWRkaW5nLWJsb2NrOiAwLjc1ZW07XG4gICAgLS13YS1mb3JtLWNvbnRyb2wtcGFkZGluZy1pbmxpbmU6IDFlbTtcbiAgICAtLXdhLWZvcm0tY29udHJvbC1oZWlnaHQ6IHJvdW5kKFxuICAgICAgY2FsYygyICogdmFyKC0td2EtZm9ybS1jb250cm9sLXBhZGRpbmctYmxvY2spICsgMWVtICogdmFyKC0td2EtZm9ybS1jb250cm9sLXZhbHVlLWxpbmUtaGVpZ2h0KSksXG4gICAgICAxcHhcbiAgICApO1xuICAgIC0td2EtZm9ybS1jb250cm9sLXRvZ2dsZS1zaXplOiByb3VuZCgxLjI1ZW0sIDFweCk7XG5cbiAgICAvKiBQYW5lbHMgKi9cbiAgICAtLXdhLXBhbmVsLWJvcmRlci1zdHlsZTogdmFyKC0td2EtYm9yZGVyLXN0eWxlKTtcbiAgICAtLXdhLXBhbmVsLWJvcmRlci13aWR0aDogdmFyKC0td2EtYm9yZGVyLXdpZHRoLXMpO1xuICAgIC0td2EtcGFuZWwtYm9yZGVyLXJhZGl1czogdmFyKC0td2EtYm9yZGVyLXJhZGl1cy1tKTtcblxuICAgIC8qIFRvb2x0aXBzICovXG4gICAgLS13YS10b29sdGlwLWFycm93LXNpemU6IDAuMzc1cmVtO1xuXG4gICAgLS13YS10b29sdGlwLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhLWNvbG9yLXRleHQtbm9ybWFsKTtcblxuICAgIC0td2EtdG9vbHRpcC1ib3JkZXItY29sb3I6IHZhcigtLXdhLXRvb2x0aXAtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgLS13YS10b29sdGlwLWJvcmRlci1zdHlsZTogdmFyKC0td2EtYm9yZGVyLXN0eWxlKTtcbiAgICAtLXdhLXRvb2x0aXAtYm9yZGVyLXdpZHRoOiB2YXIoLS13YS1ib3JkZXItd2lkdGgtcyk7XG4gICAgLS13YS10b29sdGlwLWJvcmRlci1yYWRpdXM6IHZhcigtLXdhLWJvcmRlci1yYWRpdXMtcyk7XG5cbiAgICAtLXdhLXRvb2x0aXAtY29udGVudC1jb2xvcjogdmFyKC0td2EtY29sb3Itc3VyZmFjZS1kZWZhdWx0KTtcbiAgICAtLXdhLXRvb2x0aXAtZm9udC1zaXplOiB2YXIoLS13YS1mb250LXNpemUtcyk7XG4gICAgLS13YS10b29sdGlwLWxpbmUtaGVpZ2h0OiB2YXIoLS13YS1saW5lLWhlaWdodC1ub3JtYWwpO1xuICAgIC8qICNlbmRyZWdpb24gKi9cbiAgfVxufVxuXG5AbGF5ZXIgd2EtdGhlbWUtb3ZlcnJpZGVzIHtcbiAgLndhLXRoZW1lLXNob2VsYWNlIHtcbiAgICB3YS1hdmF0YXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2EtY29sb3ItbmV1dHJhbC1maWxsLWxvdWQpO1xuICAgICAgY29sb3I6IHZhcigtLXdhLWNvbG9yLW5ldXRyYWwtb24tbG91ZCk7XG4gICAgfVxuXG4gICAgd2EtYnV0dG9uOjpwYXJ0KGxhYmVsKSxcbiAgICB3YS1yYWRpb1thcHBlYXJhbmNlPSdidXR0b24nXSxcbiAgICBidXR0b24sXG4gICAgaW5wdXQ6d2hlcmUoW3R5cGU9J2J1dHRvbiddLCBbdHlwZT0ncmVzZXQnXSwgW3R5cGU9J3N1Ym1pdCddKSB7XG4gICAgICBmb250LXNpemU6IHZhcigtLXdhLWZvbnQtc2l6ZS1zbWFsbGVyKTtcbiAgICB9XG5cbiAgICB3YS1yYWRpb1thcHBlYXJhbmNlPSdidXR0b24nXSB7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0td2EtZm9udC13ZWlnaHQtYWN0aW9uKTtcblxuICAgICAgJjpzdGF0ZShjaGVja2VkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhLWZvcm0tY29udHJvbC1hY3RpdmF0ZWQtY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0td2EtY29sb3ItYnJhbmQtb24tbG91ZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2EtYnJlYWRjcnVtYiB7XG4gICAgICBmb250LXNpemU6IHZhcigtLXdhLWZvbnQtc2l6ZS1zKTtcbiAgICB9XG5cbiAgICB3YS1jYWxsb3V0IHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXdhLXNwYWNlLW0pO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS13YS1mb250LXNpemUtc21hbGxlcik7XG5cbiAgICAgICY6aXMoW2FwcGVhcmFuY2V+PSdvdXRsaW5lZCddKSB7XG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IHZhcigtLXdhLWJvcmRlci13aWR0aC1sKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS13YS1jb2xvci1zdXJmYWNlLWJvcmRlcik7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvciwgdmFyKC0td2EtY29sb3ItYm9yZGVyLWxvdWQpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3YS1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhLWNvbG9yLXN1cmZhY2UtcmFpc2VkKTtcbiAgICB9XG5cbiAgICA6aXMoXG4gICAgICAgIHdhLWlucHV0LFxuICAgICAgICB3YS1zZWxlY3QsXG4gICAgICAgIHdhLXRleHRhcmVhLFxuICAgICAgICBpbnB1dDp3aGVyZShcbiAgICAgICAgICAgIDpub3QoXG4gICAgICAgICAgICAgIFt0eXBlPSdidXR0b24nXSxcbiAgICAgICAgICAgICAgW3R5cGU9J2NoZWNrYm94J10sXG4gICAgICAgICAgICAgIFt0eXBlPSdjb2xvciddLFxuICAgICAgICAgICAgICBbdHlwZT0nZmlsZSddLFxuICAgICAgICAgICAgICBbdHlwZT0naGlkZGVuJ10sXG4gICAgICAgICAgICAgIFt0eXBlPSdpbWFnZSddLFxuICAgICAgICAgICAgICBbdHlwZT0ncmFkaW8nXSxcbiAgICAgICAgICAgICAgW3R5cGU9J3JhbmdlJ10sXG4gICAgICAgICAgICAgIFt0eXBlPSdyZXNldCddLFxuICAgICAgICAgICAgICBbdHlwZT0nc3VibWl0J11cbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICBzZWxlY3QsXG4gICAgICAgIHRleHRhcmVhXG4gICAgICApOm5vdChbYXBwZWFyYW5jZT0nZmlsbGVkJ10sIC53YS1maWxsZWQpIHtcbiAgICAgIC0td2EtZm9jdXMtcmluZzogdmFyKC0td2EtZm9jdXMtcmluZy1zdHlsZSkgdmFyKC0td2EtZm9jdXMtcmluZy13aWR0aClcbiAgICAgICAgY29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS13YS1jb2xvci1mb2N1cyksIHRyYW5zcGFyZW50IDUwJSk7XG4gICAgICAtLXdhLWZvY3VzLXJpbmctb2Zmc2V0OiAwO1xuICAgIH1cblxuICAgIHdhLXJhZGlvLFxuICAgIGlucHV0W3R5cGU9J3JhZGlvJ10ge1xuICAgICAgLS1jaGVja2VkLWljb24tY29sb3I6IHZhcigtLXdhLWNvbG9yLXN1cmZhY2UtZGVmYXVsdCk7XG4gICAgICAtLWNoZWNrZWQtaWNvbi1zY2FsZTogMC40O1xuXG4gICAgICAmOmNoZWNrZWQsXG4gICAgICAmOnN0YXRlKGNoZWNrZWQpOjpwYXJ0KGNvbnRyb2wpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2EtZm9ybS1jb250cm9sLWFjdGl2YXRlZC1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2Etc2xpZGVyOjpwYXJ0KHRodW1iKSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgd2Etc3dpdGNoIHtcbiAgICAgIC0taGVpZ2h0OiBjYWxjKDFlbSAqIHZhcigtLXdhLWZvcm0tY29udHJvbC12YWx1ZS1saW5lLWhlaWdodCkgLSB2YXIoLS13YS1mb3JtLWNvbnRyb2wtYm9yZGVyLXdpZHRoKSAqIDIpO1xuICAgICAgLS10aHVtYi1zaXplOiBjYWxjKHZhcigtLWhlaWdodCkgKyAwLjI1ZW0pO1xuICAgICAgLS13aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpICogMik7XG5cbiAgICAgICY6OnBhcnQoY29udHJvbCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YS1jb2xvci1ncmF5LTUwKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS13YS1jb2xvci1ncmF5LTUwKTtcbiAgICAgIH1cblxuICAgICAgJjpzdGF0ZShjaGVja2VkKTo6cGFydChjb250cm9sKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhLWZvcm0tY29udHJvbC1hY3RpdmF0ZWQtY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXdhLWZvcm0tY29udHJvbC1hY3RpdmF0ZWQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAmOjpwYXJ0KHRodW1iKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhLWNvbG9yLXN1cmZhY2UtZGVmYXVsdCk7XG4gICAgICAgIGJvcmRlcjogdmFyKC0td2EtYm9yZGVyLXdpZHRoLXMpIHZhcigtLXdhLWJvcmRlci1zdHlsZSkgdmFyKC0td2EtY29sb3ItZ3JheS01MCk7XG4gICAgICB9XG4gICAgICAmOnN0YXRlKGNoZWNrZWQpOjpwYXJ0KHRodW1iKSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0td2EtZm9ybS1jb250cm9sLWFjdGl2YXRlZC1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2EtdGFiIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0td2EtZm9udC1zaXplLXNtYWxsZXIpO1xuICAgIH1cbiAgfVxufVxuIl19 */
  }
}
`;
