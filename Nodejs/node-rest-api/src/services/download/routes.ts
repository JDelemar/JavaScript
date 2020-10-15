import { Request, Response } from "express";

import { getTgz } from "./DownloadController";
import { CONSTANT } from "../../_config/constant";

export default [
  {
    path: "/api/download/verdaccio",
    method: "get",
    handler: [
      async ({ query }: Request, res: Response) => {
        const result = await getTgz('verdaccio.tar.gz', CONSTANT.Directory.Verdaccio);
        res.setHeader('Content-type', 'application/gzip');
        res.download(result);
        // res.status(200).send(result);
      }
    ]
  },
  {
    path: "/api/download/nuget",
    method: "get",
    handler: [
      async ({ query }: Request, res: Response) => {
        const result = await getTgz('nuget.tar.gz', CONSTANT.Directory.Nuget);
        res.status(200).download(result);
      }
    ]
  },
  {
    path: "/api/download/docker",
    method: "get",
    handler: [
      async ({ query }: Request, res: Response) => {
        const result = await getTgz('docker.tar.gz', CONSTANT.Directory.Docker);
        res.status(200).download(result);
      }
    ]
  },
];
