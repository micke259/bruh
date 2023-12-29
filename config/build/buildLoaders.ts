import { ModuleOptions } from 'webpack'
import { buildOptions } from './types/types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'


export function buildLoaders(options : buildOptions):ModuleOptions['rules'] {

	const assetLoader ={
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }

	const scssLoader = {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        }

	const tsLoader = {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }

	const htmlLoader = {
        test: /\.html$/i,
        loader: "html-loader",
      }

	return [
    assetLoader,
		htmlLoader,
		scssLoader,
		tsLoader
	]
}