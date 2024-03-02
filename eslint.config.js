import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '**/fixtures',
    // ...globs
    'tsconfig.node.json',
    'tsconfig.json',
  ],
})
