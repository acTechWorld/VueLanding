
Distribute UI across an organization
Learn to package and import your design system into other apps
From an architectural perspective, design systems are yet another frontend dependency. They are no different from popular dependencies like moment or lodash. UI components are code, so we can rely on established techniques for code reuse.

This chapter walks through design system distribution from packaging UI components to importing them into other apps. We’ll also uncover time-saving techniques to streamline versioning and release.

Propagate components to sites

Package the design system
Organizations have thousands of UI components spread across different apps. Previously, we extracted the most common components into our design system, and now we need to reintroduce those components back into the apps.

Our design system uses JavaScript package manager npm to handle distribution, versioning, and dependency management.

There are many valid methods for packaging design systems. Gander at design systems from Lonely Planet, Auth0, Salesforce, GitHub, and Microsoft to see a diversity in approaches. Some folks deliver each component as a separate package, and others ship all components in one package.

For nascent design systems, the most direct way is to publish a single versioned package that encapsulates:

🏗 Common UI components
🎨 Design tokens (a.k.a., style variables)
📕 Documentation
Package a design system

Prepare your design system for export
We have utilized a custom template for our development, testing, and documentation purposes. However, we need to improve its descriptive nature before publishing our design system. It's crucial to tidy up some initial artifacts and update the README.md with a detailed description of our design system.

Copy
README.md
# Storybook design system tutorial

The Storybook design system tutorial is a subset of the full [Storybook design system](https://github.com/storybookjs/design-system/), created as a learning resource for those interested in learning how to write and publish a design system using best in practice techniques.

Learn more in [Storybook tutorials](https://storybook.js.org/tutorials/).
Now, let's examine how we will build the package system. To compile our design system, we'll use Rollup, a JavaScript module bundler that combines small code fragments into bigger libraries or applications. The great thing is that the required settings and common entry points are already included in the src/index.js file and rollup.config.mjs, so there's no need to configure them ourselves.

// src/index.js

import * as styles from './shared/styles';
import * as global from './shared/global';
import * as animation from './shared/animation';
import * as icons from './shared/icons';

export { styles, global, animation, icons };

export * from './Avatar';
export * from './Badge';
export * from './Button';
export * from './Icon';
export * from './Link';
// rollup.config.mjs

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.jsx'],
      }),
      commonjs(),
      terser(),
      babel({
        extensions: ['.js', '.jsx'],
        exclude: 'node_modules/**',
      }),
    ],
    external: ['vue'],
  },
];
