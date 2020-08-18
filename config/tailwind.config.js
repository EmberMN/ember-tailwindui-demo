const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // See https://tailwindcss.com/docs/theme#extending-the-default-theme
  theme: {
    extend: {
      // This is just an example showing how to integrate more named colors (I was developing something for the U of M).
      // This section isn't necessary for this demo to function, but you'd likely want to do something like this
      // when you adapt this to some other project.
      colors: {
        misc: {
          disabledButton: 'hsl(345, 7%, 60%)',
        },
        alert: {
          errorLight: 'hsl(0,100%,90%)',
          error: 'hsl(0, 100%, 55%)',
          warningLight: 'hsl(47,100%,84%)',
          warning: 'hsl(52, 100%, 51%)',
        },
        // University of Minnesota's brand colors
        umnred: {
          light: 'hsl(348, 100%, 30%)',
          default: 'hsl(348, 100%, 24%)', // #7a0019
          dark: 'hsl(348, 100%, 18%)',
        },
        umnyellow: {
          light: 'hsl(45, 100%, 70%)',
          default: 'hsl(45, 100%, 60%)', // #ffcc33,
          dark: 'hsl(45, 100%, 50%)',
        }
      },
      // See https://tailwindui.com/documentation#optional-add-the-inter-font-family
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // https://tailwindcss.com/docs/pseudo-class-variants#motion-safe-v1-6-0
  variants: {
    translate: ['responsive', 'hover', 'focus', 'motion-safe'],
  },
  plugins: [
    // See https://tailwindui.com/documentation#getting-set-up
    require('@tailwindcss/ui'),
  ],
}
