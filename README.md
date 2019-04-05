# babel-preset-tegridy-htm

**Typescript** doesn't play nicely with this preset.

Babel preset to transform HTM into `Tegridy.createComponent` calls.

Thanks to the HTM project for this great package [https://github.com/developit/htm](https://github.com/developit/htm);

### Install

Via NPM

```javascript
npm install babel-preset-tegridy-htm --save-dev
```

or Yarn

```javascript
yarn add babel-preset-tegridy-htm --dev
```

### Usage

Make or update your .babelrc config file with the preset:

```javascript
{
  "presets": [
    "tegridy-htm"
  ]
}
```

Via package.json

```javascript
   ...
   "babel": {
     "presets": [
       "es2015",
       "tegridy-htm"
     ],
     "plugins": [
     ]
   },
   ...
```

## Example usage

```javascript
import Tegridy from 'tegridy'

export const Text = (props) => {
    return html`
    <div>
         ${props.text}
    </div>
`
};
```