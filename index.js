const _ = require('lodash')

module.exports = function({ addUtilities, theme }) {
    let containers = _(theme('screens', {}))
        .map(width => {
            return {
                [`@media (min-width: ${width})`]: {
                    '.container--spill': {
                        border: '0 solid transparent',
                        borderWidth: theme('container.center') ?
                            `0 calc(50vw - calc(${width} / 2))` :
                            `0 calc(100vw - ${width}) 0 0`,
                        padding: theme('container.padding'),
                        width: '100vw'
                    }
                }
            }
        })
        .value()

    addUtilities([
        {
            '.container--spill': {
                padding: theme('container.padding'),
                width: '100vw',
            }
        },
        ...containers
    ])
}