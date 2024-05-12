---
title: 【Frontend Development Essential Tools Series】Part Two：yarn - A Modern JavaScript Package Management Tool
customSlug: modernized-javascript-package-management-tools
tags:
  - Package Tools
  - Front-end Development
  - Web Development
  - Yarn
snippet: This article introduces yarn, a management tool developed by Facebook as an alternative to npm, as well as its usage and advantages.
publishDate: 2024-04-28 17:38
category: Development
---

## What is yarn?
- yarn is a package management tool developed by Facebook as an alternative to npm.
- Initially, it mainly solved the problems of slow installation speed and dependency package version conflicts in npm.
- yarn uses the  `yarn.lock` file to lock the versions of dependency packages, ensuring consistent package versions are installed across different environments.
- It uses parallel installation, unlike npm which installs packages sequentially.
- It uses a more efficient caching mechanism. Sometimes npm will re-download packages even if the required package version exists in the cache, making its caching mechanism less reliable; yarn automatically cleans up unnecessary caches, reducing the size of the cache directory. If the cached package version does not match the version in `yarn.lock`, yarn will re-download the correct version and update the cache.
- It provides offline mode and Workspaces support. The design of Workspaces is very useful for the Monorepo architecture, allowing sharing of dependency packages and simplifying references between packages.


## Commonly Used Commands:

- `yarn install`

- `yarn add [package]`

- `yarn run [script]`

- `yarn remove [package]`

## Extended Thinking:

### If `package.lock.json` already ensures the versions of dependency packages, why does Yarn say it aims to solve the problem of dependency package version conflicts?

- This is mainly because npm had some issues and limitations in its early versions. Before npm 5, npm did not have the `package-lock.json` file, so Yarn introduced the `yarn.lock` file earlier than npm 5 to lock the versions of dependency packages. Therefore, npm 5 started to learn from Yarn's solution and used `package-lock.json`. Even though npm 5 introduced the `package-lock.json` file, yarn still has advantages in performance and security, and is widely used.

### What is offline mode?

- Offline mode refers to when you use yarn to install packages in environments with limited or unstable network conditions. The `--offline` command is used to enable offline mode. yarn automatically downloads the compressed files of packages to the local cache directory and checks if the required packages exist in the cache directory when in offline mode.

### What is a workspace?

- Workspaces are a way to organize and manage multiple related projects or packages.
- In terms of directory structure, assuming a project has two workspaces (a and b), the root directory has a `package.json`, and each workspace can have its own `package.json`.
- All projects share the same `node_modules`. When running `yarn install`, yarn checks the dependencies of all packages and installs them in `node_modules`.
- Workspaces can reference each other. In workspace a, workspace b can be referenced as a dependency, which is set in the `package.json` of workspace a.
Directory structure of the my-project project:

```bash title="my-project"
my-project/
  ├── package.json
  ├── yarn.lock
  └── ...
  └── workspace-a
  |   ├── package.json
  |   └── ...
  └── workspace-b
        ├── package.json
        └── ...
```

- `package.json` in the project directory

```javascript title="package.json"
{
  "private": true,
  "workspaces": ["workspace-a", "workspace-b"]
}
```
- `package.json` of workspace a:

```javascript title="workspace-a/package.json"
{
  "name": "workspace-a",
  "version": "1.0.0",

  "dependencies": {
    "cross-env": "5.0.5"
  }
}
```
- `package.json` of workspace b, referencing workspace a:

```javascript title="workspace-b/package.json"
{
  "name": "workspace-b",
  "version": "1.0.0",

  "dependencies": {
    "cross-env": "5.0.5",
    "workspace-a": "1.0.0"
  }
}
```
