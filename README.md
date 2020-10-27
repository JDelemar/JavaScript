# Javascript Projects

Some Javascript Projects  

## Projects

### Electron

Name|Purpose
---|---
[Multi](https://github.com/JDelemar/Javascript/tree/master/Electron/Multi)|Base app for testing electron apps
[Selenium](https://github.com/JDelemar/Javascript/tree/master/Electron/Selenium)|Selenium Electron application for fine tuning automation scripts using Chrome's developer tools console
[Simple](https://github.com/JDelemar/Javascript/tree/master/Electron/Simple)|Simple baseline Electron application

### Nodejs

Name|Purpose
---|---
[node-rest-api](Nodejs/node-rest-api)|Node REST API using TypeScript
[selenium-mocha-chai](https://github.com/JDelemar/Javascript/tree/master/Nodejs/selenium-mocha-chai)|Selenium tests with mocha and chai
[webpack-hmr](https://github.com/JDelemar/Javascript/tree/master/Nodejs/webpack-hmr)|Use webpack to hot reload source code
[webpack-hmr-babel](https://github.com/JDelemar/Javascript/tree/master/Nodejs/webpack-hmr-babel)|Use webpack to hot reload source code
[webpack-hmr-tsc](https://github.com/JDelemar/Javascript/tree/master/Nodejs/webpack-hmr-tsc)|Webpack hot module reload with TypeScript

#### References

- References
  - [Merge two Git repositories without breaking file history](https://stackoverflow.com/questions/13040958/merge-two-git-repositories-without-breaking-file-history)
    - Used the following solution

      ```s
        # create a new repo on GitHub (e.g. Javascript)
        # download the newly created repo and add the old remote repository
        git clone https://github.com/JDelemar/Javascript.git
        # Output
        # Cloning into 'Javascript'...
        # warning: You appear to have cloned an empty repository.
        cd Javascript
        git remote add old-nodejs https://github.com/JDelemar/Nodejs.git
        # optional - to view remote repositories: git remote -v
        # fetch for all the files from the old repo so a new branch gets created
        git fetch old-nodejs
        get branch -a
        # you may see a list of branches, just press q
        # in the master branch, do a merge to combine the old repo with the newly created one
        git merge remotes/old-nodejs/master --allow-unrelated-histories
        # you may be prompted for a commit message, type one in and save
        # remove remote link(s)
        git remote rm old-nodejs
      ```
