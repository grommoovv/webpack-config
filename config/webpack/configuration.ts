import webpack from 'webpack'
import { devServer } from './devServer'
import { loaders } from './loaders'
import { plugins } from './plugins'
import { resolvers } from './resolvers'
import { BuildOptions } from './types'

export const configuration = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options
  const isDev = mode === 'development'

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: plugins(options),
    module: {
      rules: loaders(options),
    },
    resolve: resolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: isDev ? devServer(options) : undefined,
  }
}
