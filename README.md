# vue-layouts

> A collection of simple layout components


## Components

### Container
The simplest component in the library, simply adding horizontal padding to each side, ensuring that the `Row` component has space.

### Row
A container for columns. Ensuring that child columns are actually shown as columns.

#### Properties
- `justify`: String  
Align columns horisontally. Basically just a wrapper for flexbox's justify-content. Possible values:

	- `'center'`
	- `'flex-end'`
	- `'space-between'`

- `gutterless`: Boolean
Removes the gutter. Use if you want no gap between child columns (you need to put the property on them as well). Makes the `Container` component redundant.

### Column
The exciting component that makes every layout possible. The default `Column` without any set properties will have a fluid width filling it's container and a standard horizontal gutter on both sides.

#### Properties
- `columns`: Number  
Number of columns in the grid. Default value is 12 and should probably not be changed until it's part of the store.
- `size`: Number
- `sizes`: Object
- `offset`: Number
- `gutterless`: Boolean
- `Fit`: Boolean


## Shared properties
All the layout components share a set of common properties, that are essential to ensure a consistent visual look throughout a project:

All properties accepts a `Boolean` or a `String`

- `gutterVertical`  
Adds padding to **both** the top and bottom of the element.

- `marginBottom`  
Adds margin to the bottom

- `marginTop`  
Adds margin to the bottom

### Multipliers
There are four multipliers that can be set:

1. Default (`true`)
2. Small (`'small'`)
3. Large (`'large'`)
4. Extra Large (`'x-large'`)

The actual multipliers can be adjusted directly with CSS variables:

```
:root {
  --grid-gutter-base: 1.25em;
  --grid-gutter-multiplier-x-large: 4.5;
  --grid-gutter-multiplier-large: 2;
  --grid-gutter-multiplier-small: 0.25;
}
```
The variables can be set in any CSS file exposed throughout the app.

In the future, I'm considering adding more multipliers and perhaps have a distinction between vertical and horizontal spacing.

For now, I've found these to be quite powerful in even complex layout and typographic contexts.

## CSS
The project is dependent on PostCSS and CSS modules and its workflow is based on the popular [vue-webpack-boilerplate](https://github.com/vuejs-templates/webpack).

Before the CSS and components can be built correctly you need a similar workflow. In theory you could just include the compiled JS/CSS files in the dist folder, but there's no good way to expose both JavaScript and CSS files in NPM modules.

Having to compile the components and CSS yourselves give you the flexibility to insert the CSS in any way you want.

## Store
The Vuex module `breakpoints` can be included in any existing Vuex store:

```
import Vue from 'vue'
import Vuex from 'vuex'
import { breakpoints } from 'vue-layouts'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    breakpoints
  }
})

export default store
```

It's namespaced and can be used outside of the built-in component library, if you so desire:

```
export default {
  computed: {
    breakpoint () {
	    // Return current breakpoint object
      return this.$store.getters['breakpoints/breakpoint']
    },
    breakpoints () {
	    Return list of all breakpoints
      return this.$store.getters['breakpoints/breakpoints']
    },
    showGallery () {
	    return this.breakpoint.name !== 'xs'
    }
  }
}
```

The content of the breakpoints getter:

```
[
  {
    name: 'xs',
    size: 0,
    matches: false
  },
  {
    name: 'sm',
    size: 544,
    matches: false
  },
  {
    name: 'md',
    size: 768,
    matches: false
  },
  {
    name: 'lg',
    size: 1280,
    matches: true
  },
  {
    name: 'xl',
    size: 1920,
    matches: false
  }
]
```
On a 1440x900 screen, the breakpoint getter (reducer) will simply return the _lg_ breakpoint object. Right now there's no way to change the default breakpoints but that's an obvious next step.

### Integration with the `Column` component
If the Vuex module has been attached to the global Vuex Store, the exciting `sizes` property unlocks on the Column component. The property simply expects an object with named breakpoint keys and their corresponding sizes.

Let's say you want to show a list of articles in a four-column grid thus columns with a size of 3:

```
<container>
	<row>
		<column v-for="n in 50" :key="n" :size="3"></column>
	</row>
</container>
```

Works fine on larger screens but it won't be properly responsive on smaller screens. Introducing... the `sizes` property:

```
<container>
	<row>
		<column :sizes="{default: 3, md: 4, sm: 6, xs: 12}"></column>
	</row>
</container>
```
Hopefully the above syntax is self-explanatory: When the breakpoint is matching `md`, the column will have a size of 4, when it's `sm` it will be 6 etc.

The sizes property should be viewed as exceptions to the default value. It's optional whether to use the single `size` property or the _default_ key in `sizes` as default.  

Some light logic has been built in: If you only, for instance, define the `md` breakpoint in the object, the value will also be applied for all **smaller** breakpoints, unless the smaller breakpoints has been specified explicitly, making it unnecessary to define the same value for `sm` and `xs`.

On more complex sites it's recommend to abstract the `sizes` object into constants that can be shared between many components, e.g:

```
export const COLUMN_SIZES_HALF = {
	default: 6
	xs: 12
}

export const COLUMN_SIZES_THIRDS = {
	default: 4,
	sm: 6,
	xs: 12
}
```
In that way layout changes are handled consistently throughout the project.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
