# Dyte
> A code editor that highlights correct syntax and renders compiled result simultaneously. It has been created using React (TypeScript) and has been deployed using GitHub Pages.
Currently the editor allows user to edit merely a single project, but the code has been written in such a way that multiple projects can be supported, if needed.
### Try It out
 [Link](https://gursimar04.github.io/Dyte/)
 
 ---
 
### Table Of Contents
- [Installation Process](#installation)
- [License](#license)
- [Author Info](#author-info)

---

## Installation Process
The contents of the project are present in a sub folder called code-editor-app
```
cd code-editor-app
```

Babel was required to configure a few modules in the project
```
npm i @babel/types
```

The following module will allow to use scss
```
npm i node-sass
```
The following module is a syntax highlighter.
```
npm install primjs
```

By default dangerouslysetinnerhtml ignores JavaScriptcode. The folowing library will help in compiling the code. It was ensured that there isn't any syntactical error before compiling.

```
npm i dangerously-set-html-content
```

FontAwesome gives us access to various icons.

```
npm i --save @fortawesome/fontawesome-svg-core
```
```
npm install --save @fortawesome/free-solid-svg-icons
```
```
npm install --save @fortawesome/react-fontawesome
```
---
## License
MIT License

Copyright (c) 2020 Gursimar Singh Bedi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


---

## Author Info
- Linkedin - [Gursimar Singh Bedi](https://www.linkedin.com/in/gursimar04/)

[Back to the top](#Dyte)
