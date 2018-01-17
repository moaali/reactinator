<p align="center">
  <img src="https://github.com/moaali/reactinator/blob/master/.assets/Images/intro.png" alt="Intro"> <br/> <br/>
  🚀🚀🚀<br/><br/>Minimalistic boilerplate to start developing <b>React JS</b> applications in just few seconds easily with the included tooling. Using <b>Webpack 3</b>, <b>Mobx 3</b>, <b>Babel 6</b>.<br/><br/>🚀🚀🚀
</p>

<br>

## Table of Contents
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Commands](#commands)
- [License](#license)

<br>

## Installation
To start using this boilerplate, all what you have to do is copy and paste the following commands in your terminal.

```
> git clone https://github.com/moaali/reactinator.git 
> cd reactinator 
> npm install 
> npm run dev 
```

<br>

## Folder Structure
This boilerplate structure is inspired by [**Ryan Florence**](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346) and [**Alexis Mangin**](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) ideas of react app structure.
```
app 
├── components 
│   ├── Layout 
│   │   ├── index.jsx 
│   │   ├── index.scss 
│   │   └── ... 
│   │ 
│   ├── Animation
│   └── ... 
│
├── screens 
│   ├── Index 
│   │   ├── components 
│   │   │   ├── Content 
│   │   │   └── ... 
│   │   │ 
│   │   ├── shared 
│   │   ├── index.jsx 
│   │   ├── index.scss 
│   │   └── ... 
│   │ 
│   ├── 404 
│   └── ... 
│ 
├── shared 
│   ├── config 
│   │   ├── routes.jsx 
│   │   └── ... 
│   │ 
│   ├── services 
│   ├── static 
│   │   ├── favicon.ico 
│   │   └── ... 
│   │ 
│   ├── stores 
│   │   ├── clientStore.js
│   │   ├── index.js
│   │   └── ... 
│   │ 
│   ├── styles 
│   │   ├── settings 
│   │   ├── components 
│   │   ├──  ... 
│   │   └── index.scss 
│   └── ... 
│ 
├── index.html 
└── index.jsx 
```

<br>

## Commands
Below are the available terminal commands used by this boilerplate:<br /><br />
**`npm start`** : Running into development mode but without fancy webpack dashboard plugin.<br />
**`npm run dev`** : Running into development mode with fancy webpack dashboard plugin ebabled.<br />
**`npm run clean`** : Delete the production folder before running the build command below.<br />
**`npm run build`** : Produce the production version of the app.<br />
**`npm run preview`** : Run server on the built production folder just for client preview.<br />
**`npm run lint:js`** : Linting JavaScript files.<br />
**`npm run lint:scss`** : test Linting Sass files.<br />
**`npm run lint`** : Linting both JavaScript & Sass files.<br />

<br>

## License
🍟 **MIT**


