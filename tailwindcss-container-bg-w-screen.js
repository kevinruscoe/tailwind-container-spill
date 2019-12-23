module.exports = function({ addUtilities, theme }) {

    let containers = {
        '.container-bg-w-screen': {
            border: '0 solid transparent',
            width: '100vw',
            padding: theme('container.padding')
        }
    };

    Object.values(theme('screens', {})).map(width => {
        let halfWidth = (width.replace(/[^0-9\.]+/g, '') / 2);
        let borderWidth = theme('container.center') ? 
            `0 calc(50vw - ${halfWidth}px)` :
            `0 calc(100vw - ${width}) 0 0`;

        containers[`@media (min-width: ${width})`] = {
            '.container-bg-w-screen': {
                borderWidth: borderWidth,
                padding: theme('container.padding'),
            }
        };
    });

    addUtilities(containers);
}