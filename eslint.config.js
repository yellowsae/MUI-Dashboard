import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  jsx: true,
  tsx: true,
  ignores: [
    '**/fixtures',
    // ...globs
    'tsconfig.node.json',
    'tsconfig.json',
  ],
})
