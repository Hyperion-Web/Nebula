import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import clamp from './src/styles/css-utils/clamp-generator.js'

export default defineConfig({
  shortcuts: [
  ],
  presets: [
    // presetIcons({
    //   scale: 1.2,
    //   warn: true,
    // }),
    // presetUno(),
  ],
  rules: [
    [/^SiO2-(.*)$/, ([, c], { theme }) => {
      if (theme.colors[c])
        return { color: theme.colors[c] }
    }],
    [/^SiO2-width-(.*)$/, ([, c], { theme }) => {
      if (theme.spacing[c])
        return { width: theme.spacing[c] }
    }],
    theme: {
    colors,
    spacing,
    fontSize,
    fontFamily,
  },
    [/^UnoRoot$/, ([,], { theme }) => {
      let result = ''

      const groups = [
        { key: 'colors', prefix: 'color' },
        { key: 'spacing', prefix: 'space' },
        { key: 'fontSize', prefix: 'size' },
        { key: 'fontFamily', prefix: 'font' },
      ]

      groups.forEach(({ key, prefix }) => {
        // @ts-expect-error Theme type not defined
        const group = theme[key]
        if (!group)
          return

        Object.keys(group).forEach((key) => {
          result += `--${prefix}-${key}: ${group[key]};`
        })
      })

      return result
    }],
  ],
  variants: [
    // hover:
    (matcher) => {
      if (!matcher.startsWith('hover:'))
        return matcher
      return {
        // slice `hover:` prefix and passed to the next variants and rules
        matcher: matcher.slice(6),
        selector: s => `${s}:hover`,
      }
    },
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})

