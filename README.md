<p align="center">
  <img src="https://github.com/moaali/reactinator/blob/master/.assets/Images/intro.png" alt="Intro"> <br/> <br/>
  🚀🚀🚀<br/><br/>Minimalistic boilerplate to start developing <b>React JS</b> applications in just few seconds easily with the included tooling. Using <b>Webpack 3</b>, <b>Mobx 3</b>, <b>Babel 6</b>.<br/><br/>🚀🚀🚀
</p>

<br>

## Table of Contents
- [Features](#features)
- [State Management](#state-management)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Commands](#commands)
- [License](#license)

<br>

## Features
- Quick scaffolding
- Next generation JavaScript (**ES6+**)
- Next generation CSS with (**SASS** and **CSSNext**)
- **Bootstrap 4** based
- **Mobx** for state managemnt
- [**React Icons**](https://github.com/gorangajic/react-icons) icons bundle
- Industry-standard routing (React Router v4.x.x)
- **SEO** optimized
- Extensible directory structure
- **Cross platform** compitable

<br>

## State Management
This boilerplate uses **MobX** for app state management. In the following section, a basic to-do list app in which all components donot communicate with each other for updating their state, instead they communicate with a common **store** handled by **MobX** and rerender if any change happens in the store values they are linked to. **Reference to basic to-do list app to see it in action**.

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
│   ├── Container 
│   │   ├── index.jsx 
│   │   ├── index.scss 
│   │   └── ... 
│   │ 
│   ├── Logo 
│   ├── Menu 
│   ├── Sidebar 
│   └── ... 
│
├── screens 
│   ├── About 
│   │   ├── components 
│   │   │   ├── Hero 
│   │   │   ├── Content 
│   │   │   └── ... 
│   │   │ 
│   │   ├── shared 
│   │   ├── index.jsx 
│   │   ├── index.scss 
│   │   └── ... 
│   │ 
│   ├── Home 
│   ├── 404 
│   └── ... 
│ 
├── shared 
│   ├── config 
│   │   ├── routes.jsx 
│   │   └── ... 
│   │ 
│   ├── services 
│   │   ├── RequestService.jsx 
│   │   └── ... 
│   │ 
│   ├── static 
│   │   ├── favicon.ico 
│   │   └── ... 
│   │ 
│   ├── stores 
│   │   ├── clientStore.jsx 
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


