const rootDirectory = __dirname.replace('/src/_config', '');

export const CONSTANT = {
    Directory: {
        DownloadFolder: `${rootDirectory}/files`,
        Docker: '/workspace/node_modules',      // '/registry',
        Nuget: '/workspace/node_modules',       // '/centeredge',
        Verdaccio: '/workspace/node_modules',   // '/verdaccio/storage/data',
    }
};
