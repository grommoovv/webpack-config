import path from 'path'
import webpack from 'webpack'
import { configuration } from './config/webpack/configuration'
import { BuildMode, BuildPaths, BuildPlatform } from './config/webpack/types'

interface EnvVariables {
  port?: number
  mode?: BuildMode
  analyzer?: boolean
  platform?: BuildPlatform
}

const paths: BuildPaths = {
  output: path.resolve(__dirname, 'build'),
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  public: path.resolve(__dirname, 'public'),
  src: path.resolve(__dirname, 'src'),
}

export default (env: EnvVariables) => {
  const config: webpack.Configuration = configuration({
    paths,
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop',
  })

  return config
}
