---
title: 【Frontend Development Essential Tools Series】Part One: Mastering npm, nvm, and npx to Optimize Your Development Workflow
customSlug: master-npm-npx-nvm-optimize-your-development-process
tags:
  - tools
  - frontend
  - webdev
snippet: This article introduces how to use npm, nvm, and npx, as well as how to optimize your development workflow through these tools.
publishDate: 2024-04-27 12:01
category: Development
---

## npm (Node Package Manager)

- Node.js package management tool used to install, manage, and share JavaScript packages.
- `package.json`: When you use $npm install, the project installs packages based on this file.
- `package.lock.json`: A feature introduced in npm 5.0 that can control the package versions that the project depends on.

Commonly used commands for `npm install`:

- `-g` or` --globe`: Global installation command, installs in your local environment, allowing you to use the installed package anywhere on your computer.
- `--save` or `-S`: Before npm 5.0, using `$ npm install <package-name>` would only install the package in the node_modules folder without changing package.json. After 5.0, `package.json` is automatically changed after installation, so this option is not used as often.
- `--save--dev` or `-D`: Only installs in the development environment, such as testing frameworks and code linting tools, which are not needed in the production environment.
- `npm install --production`: Executes the installation command. Only installs packages in the `dependencies` of `package.json`, ignoring packages in `devDependencies`, which helps reduce the burden on the production environment.

## nvm（Node Version Manager）

- In different projects, we may need to rely on different Node.js versions. You can use this tool to set different versions for each project.
- Can test project compatibility under different Node.js versions.
- When Node.js has a new version, you can use nvm to install and try the new version without worrying about affecting the stable version in your local environment.

### Common Commands
`nvm install <version>`: Installs the specified version of Node.js.
`nvm use <version>`: Switches to the specified version of Node.js.
`nvm alias default <version>`: Sets the default Node.js version.

### Extended Thinking:

If I use nvm in a project, how does nvm know if I want to change the project's Node.js version or the global Node.js version?

- nvm uses the `.nvmrc` file to manage the Node.js version under each project.
- The `.nvmrc` file is a simple text file that contains a Node.js version string, usually only one line.
- When you execute `nvm use` in the project root directory without specifying a version number, it will start looking for the `.nvmrc` file. It will automatically search for `.nvmrc` in the current directory and parent directories. If found, it can use the version specified in the file.
- If you execute `nvm use` in a project directory without an `.nvmrc` file, nvm will use the Node.js version you are using in your local environment.

## npx（Node Package Execute）

- npx is an npm execution tool mainly used to manage the execution of npm packages. It has been available since npm 5.2.
- It can download a temporary version of a package in your project, which will be deleted after a single execution.
- npx does not change your `package.json`, so it can keep your environment uncontaminated.

### Extended Thinking:

- Where is the temporary download location?
In the cache directory of the local environment. When you use `$npx package@1.1.1 --version`, it will first search for `package@1.1.1` in the local `node_modules/.bin`. If this version is not found, it will search in the cache directory of the local environment, which is usually `~/.npm/_cacache` on Mac. If still not found, it will temporarily download a new version from the npm server to your cache directory.


- Do I need to re-run the npx command after executing it once?
Yes, after executing the program, npx will clean up the temporary directory. If you need to test version 1.1.1 again, you must re-execute `$npm package@1.1.1 --version`.

