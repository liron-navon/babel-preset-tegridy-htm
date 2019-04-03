# babel-preset-tegrity-htm

**Typescript** doesn't play nicely with this preset, since `babel-plugin-htm` doesn't support it (doesn't support the temlateLiteral output from typescript), so you can use it in runtime if you wish.

Babel preset to transform HTM into `Tegrity.createComponent` calls.

Thanks to the HTM project for this great package [https://github.com/developit/htm](https://github.com/developit/htm);

### Install

Via NPM

```javascript
npm install babel-preset-tegrity-htm --save-dev
```

or Yarn

```javascript
yarn add babel-preset-tegrity-htm --dev
```

### Usage

Make or update your .babelrc config file with the preset:

```javascript
{
  "presets": [
    "tegrity-htm"
  ]
}
```

Via package.json

```javascript
   ...
   "babel": {
     "presets": [
       "es2015",
       "tegrity-htm"
     ],
     "plugins": [
     ]
   },
   ...
```

## Example usage

```javascript
import Tegrity from './lib/Tegrity'

export const Text = (props) => {
    return html`
    <div>
         ${props.text}
    </div>
`
};
```