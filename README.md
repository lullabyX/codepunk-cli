[![npm](https://img.shields.io/npm/v/codepunk)](https://www.npmjs.com/package/codepunk)

# CodePunk

CodePunk is a cyberpunk themed JavaScript notebook inspired by Stephen Grider's jsnote. 
It is almost like jupyter notebook but it runs JavaScript. 
CodePunk client can directly run NodeJS environment code in the browser.


https://user-images.githubusercontent.com/20172066/230612477-bfaa4eec-00f4-4758-8f1e-711738c9b53e.mp4

###
This repository is command line interface for CodePunk package which connects rest of the packages - local server and the client.

# Usage



https://user-images.githubusercontent.com/20172066/230612873-6e5adcc1-dea9-4bea-8f0f-da17d94fc8c1.mp4



### Install (globally)

`npm install -g codepunk`

### Start Local Server

`codepunk serve`

This runs the local server at port 4005 (default) which serves the local client.

**Note:** file 'notebook.js' will be created at the current working directory of your terminal with some default cells.

#### Options
* Open a specific notebook. (file path is relative) 
> Note: Notebooks are saved in a .js file

  `codepunk serve mynote.js`
* Start server on a different port

  `codepunk serve mynote.js --port 4040`

# Client

Visit http://localhost:port (replace 'port' with port number e.g 4005) to view the codepunk client in the browser.

# Features

### Preview
Preview data, object and jsx with special **display** function in the preview window. 
Any DOM manipulation or React App will be visible in the preview window as well.

### Format Code
Prettier is used behind the scene to format the code.

### Directly import and use packages
Packages are fetched from unpkg then bundled and transpiled with esbuild to run in browser. Imported packages are cached for performance. 

### Share the notebook
CodePunk notebooks are saved in a .js file. You can share it and other will be about to use it in their own local client.

![image](https://user-images.githubusercontent.com/20172066/197543353-00a475f5-0101-4908-98e6-69fe729eb8b0.png)

![image](https://user-images.githubusercontent.com/20172066/197540313-15491896-1bc7-451b-83ae-1029e99d1aab.png)




