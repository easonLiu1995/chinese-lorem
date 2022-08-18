import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'cjs'
  },
  plugins: [
    typescript({
      compilerOptions: {
        target: 'es5'
      }
    }),
    terser()
  ]
}
