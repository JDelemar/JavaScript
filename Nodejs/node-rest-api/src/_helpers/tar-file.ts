import * as tar from 'tar';
import { CONSTANT } from '../_config/constant';

export const createTar = (fileName: string, folderName: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const fileWithPath = `${CONSTANT.Directory.DownloadFolder}/${fileName}`;
        tar.create(
            {
                gzip: true,
                file: fileWithPath
            },
            [folderName]
        ).then(_ => {
            console.log(`${fileName} tarball created`);
            resolve(fileWithPath);
        });
    });
};
