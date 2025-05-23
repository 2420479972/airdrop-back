export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        'postcss-px-to-viewport-8-plugin': {
            viewportWidth: 1080,
            unitPrecision: 6,
            unitToConvert: 'px',
            viewportUnit: 'vmin',
            fontViewportUnit: 'vmin',
            propList: ['*'],
        }
    },
}
