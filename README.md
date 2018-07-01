
# Geckos-Team-32
Add-project-description-here | Chingu Voyage-6 | https://chingu.io/
[Live demo](https://chingu-voyage6.github.io/Geckos-Team-32/#/)
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## Path aliases  

- `@` - alias for `src` folder
- `*` - alias for `src/components/pages/` folder 
- `+` - alias for `src/components/common/` folder

### how to use alias?
 insteaad of full path like this:
 ```js
import MainPage from 'src/components/pages/main/index';
```
used it alias:
```js
import MainPage from '*/main/index';
```
### how to add alias?
Alliases are defined in file `build/webpack.base.conf.js`. just search `alias` keyworld

# deploying to githubIO
 For deploy purposes was added vue-cli-ghpages module as dev depencency, so install it once by runing
    npm i

To build and deploy project run the command
    npm run deploy

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
