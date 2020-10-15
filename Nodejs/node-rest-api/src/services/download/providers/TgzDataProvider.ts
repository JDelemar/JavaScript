import { createTar } from "../../../_helpers/tar-file";

export const getTgzData = async (fileName: string, directory: string) => {
    return await createTar(fileName, directory);
};
