import { ModuleOptions } from 'webpack'
import { buildOptions } from './types/types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'


export function buildLoaders(options : buildOptions):ModuleOptions['rules'] {

	const assetLoader ={
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }

	const cssLoader = {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
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
    cssLoader,
    assetLoader,
		htmlLoader,
		tsLoader
	]
}