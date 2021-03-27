import typescript from '@rollup/plugin-typescript';
import minify from 'rollup-plugin-babel-minify';

const getConfig = ({ output, isMinify }) => {
  return {
    input: 'index.ts',
    output: {
      file: output,
      format: 'esm',
      sourcemap: false
    },
    plugins: [
      typescript({
        module: 'esnext'
      }),
      ...(isMinify
        ? [
            minify({
              comments: false
            })
          ]
        : [])
    ]
  };
};

export default [
  getConfig({ output: 'lib/index.js' }),
  getConfig({ output: 'lib/index.min.js', isMinify: true })
];
