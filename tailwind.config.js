module.exports = {
    mode: 'jit',
    purge: ['*.html'],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: {
                default: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
              },
          },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
