# Node REST APIs using TypeScript

Node REST API using TypeScript

## TODO

- Make API backend to use on something like play-with-docker
  - Capabilities
    - Get npm, nuget, docker images
  - Commands
    - Compress & download
    - Delete
    - List
  - Swagger UI?
  - Enable CORS?
- Create image with capabilities to get
  - npm: Verdaccio
  - nuget: centeredge/nuget
  - docker images: Registry
  - One image

    ```Dockerfile
      FROM node:10.16.3-buster

      # Avoid warnings by switching to noninteractive
      ENV DEBIAN_FRONTEND=noninteractive

      #-------------------------------------------------------------------------------------------------------------
      # Nuget
      #-------------------------------------------------------------------------------------------------------------
      # Install mono and wget
      RUN apt-get update && apt-get install -y --no-install-recommends \
          mono-complete \
          wget \
          tzdata

      # Copy script
      COPY nuget.sh /usr/bin/nuget

      # Download nuget and configure execute permissions on the script
      RUN wget -O /usr/bin/nuget.exe https://dist.nuget.org/win-x86-commandline/latest/nuget.exe \
          && chmod +x /usr/bin/nuget
      #-------------------------------------------------------------------------------------------------------------

      #-------------------------------------------------------------------------------------------------------------
      # Registry
      #-------------------------------------------------------------------------------------------------------------
      COPY ./registry /bin/registry
      COPY ./config-example.yml /etc/docker/registry/config.yml

      EXPOSE 5000

      COPY docker-entrypoint.sh /entrypoint.sh
      ENTRYPOINT ["/entrypoint.sh"]
      #-------------------------------------------------------------------------------------------------------------

      # Cleanup
      RUN apt-get clean && rm -rf /var/lib/apt/lists/*

      # Verdaccio
      RUN npm install -g verdaccio

      # Switch back to dialog for any ad-hoc use of apt-get
      ENV DEBIAN_FRONTEND=dialog

      # Registry
      CMD ["/etc/docker/registry/config.yml"]
    ```

  - One docker-compose file

    ```yml
      version: "2.1"

      services:
          getrepo:
          npm:
              image: node:10.16.3-buster
          nuget:
          registry:
    ```

## Notes

- Sources
  - [Production ready Node.js REST API Setup using TypeScript, PostgreSQL and Redis](https://itnext.io/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407)
  - [GitHub](https://github.com/alexpermyakov/node-rest-api)
    - Getting Step 5 (branch step.5) `git clone -b step.5 --single-branch https://github.com/alexpermyakov/node-rest-api.git`
