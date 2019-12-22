module.exports = function({ addUtilities, theme }) {
    const screens = theme('screens', {})

    let containers = {
        '.container-bg-w-screen': {
            border: '0 solid transparent',
            width: '100vw',
        }
    };

    Object.values(screens).map(width => {
        let halfWidth = (width.replace(/[^0-9\.]+/g, '') / 2);

        containers[`@media (min-width: ${width})`] = {
            '.container-bg-w-screen': {
                borderWidth: `0 calc(50vw - ${halfWidth}px)`,
            }
        };
    });

    addUtilities(containers);
}