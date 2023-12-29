import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { buildOptions } from './types/types'

export function buildWebpack(options : buildOptions):webpack.Configuration {

	return  {
    mode: options.mode ?? 'development',
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules:buildLoaders(options)
    },
    resolve:buildResolvers(options),
    devServer: buildDevServer(options)
  };
}