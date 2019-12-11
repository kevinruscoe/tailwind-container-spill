module.exports = function({ addUtilities, theme }) {
    const screens = theme('screens', {})

    let containers = {
        '.container--spill': {
            width: '100vw'
        }
    };
  
    for (var prop in screens) {
        if (Object.prototype.hasOwnProperty.call(screens, prop)) {
            let width = screens[prop];
            let halfWidth = width.replace(/[^0-9\.]+/g, '') / 2;

            containers[`@media (min-width: ${width})`] = {
                '.container--spill': {
                    width: '100vw',
                    border: '0 solid transparent',
                    borderWidth: `0 calc(50vw - ${halfWidth}px)`
                }
            };
        }
    }
  
    addUtilities(containers);
}