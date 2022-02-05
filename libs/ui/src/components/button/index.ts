import {style} from 'twind/style'


export const buttonTokens = {
  theme: {

  }
}


export const buttonBaseStyle = style({
  // Define the base style using tailwindcss class names
  base: `rounded-full px-2.5`,

  // Declare all possible properties
  variants: {
    // button({ size: 'sm' })
    size: {
      sm: `text-sm h-6`,
      md: `text-base h-9`,
    },

    // button({ variant: 'primary' })
    variant: {
      gray: `
        bg-gray-400
        hover:bg-gray-500
      `,
      primary: `
        text-white bg-purple-400
        hover:bg-purple-500
      `,
    },
    // button({ outlined: true })
    outlined: {
      true: `bg-transparent ring-1`,
    },
  },

  // Set defaults for properties
  defaults: {
    variant: 'gray',
    size: 'sm',
  },

  // Apply additional styling based on the compination of properties
  matches: [
    {
      // If props match { variant: 'gray', outlined: true } add ring-gray-400
      variant: 'gray',
      outlined: true,
      use: `ring-gray-400`,
    },
  ],
})