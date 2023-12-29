import { Configuration } from 'webpack'
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from 'webpack'
import { buildOptions } from './types/types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'


export function buildPlugins(options: buildOptions):Configuration['plugins'] {

	const plugins:Configuration['plugins'] = [
      new HtmlWebpackPlugin({ template:options.paths.html}),
      new webpack.ProgressPlugin(),
	  new MiniCssExtractPlugin(),
	]

	return plugins
}