import { getTgzData } from  "./providers/TgzDataProvider";

export const getTgz = async (fileName: string, directory: string) => {
  return await getTgzData(fileName, directory);
};
