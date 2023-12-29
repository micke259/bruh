import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack'
import { BuildMode, buildPaths } from './config/build/types/types'


interface Ienv {
  mode: BuildMode;
  port: number;
}

export default (env: Ienv) => {

  const paths: buildPaths ={
    output:path.resolve(__dirname, 'build'),
    entry:path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths
  })

  return config;
};
