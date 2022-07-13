import ESBuild, {BuildOptions} from "esbuild"
import path from "path"
import { CleanPlugin } from "./plugins/CleanPlugin";
import {HTMLPlugin} from "./plugins/HTMLPlugin";

const mode = process.env.MODE || "development"

const isProd = mode === "production"

function resolveRoot(...segments: string[]) {
    return path.resolve(__dirname, "..", "..", ...segments)
}

const config: BuildOptions = {
    outdir: resolveRoot("build"),
    entryPoints: [resolveRoot("src", "index.tsx")],
    entryNames: '[dir]/bundle.[name]-[hash]',
    allowOverwrite: true,
    bundle: true,
    tsconfig: resolveRoot("tsconfig.json"),
    minify: isProd,
    sourcemap: !isProd,
    metafile: true,
    loader: {
        ".png": "file",
        ".svg": "file",
        ".jpg": "file",
    },
    plugins: [CleanPlugin, HTMLPlugin({
        title: "Page"
    })]
}

export default config