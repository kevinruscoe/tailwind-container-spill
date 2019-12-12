module.exports = function({ addUtilities, theme }) {
    const screens = theme('screens', {});
    const center = theme('container-spill.center', false);
    const padding = theme('container-spill.padding', undefined);

    let containers = {
        '.container--spill': {
            padding: padding,
            width: '100vw',
        }
    };
  
    for (var prop in screens) {
        if (Object.prototype.hasOwnProperty.call(screens, prop)) {
            let width = screens[prop];

            containers[`@media (min-width: ${width})`] = {
                '.container--spill': {
                    border: '0 solid transparent',
                    borderWidth: center ?
                        `0 calc(50vw - calc(${width} / 2))` :
                        `0 calc(100vw - ${width}) 0 0`,
                    padding: padding,
                    width: '100vw'
                }
            };
        }
    }
  
    addUtilities(containers);
}