# Nebula

## Introduction

### What is Nebula?

Nebula is a modular design library that is based on intrinsic fundamentals and context aware layouts.

### Why use Nebula?

Because the web is every morphing and impossible to design for using media queries. Speed matters and Nebula's fundamental goal is to let you build great looking websites and app interfaces very quickly without sacrificing integrity. To learn how this is achieved, read architecture. 

## Design Objectives

1. All components should be SSR/SSG and template friendly
2. Intrinsic Design prioritizes content
3. SEO super good
4. Can be exposed as Custom Elements for most flexible usage

## Architecture

1. Vue 3 chosen for most modern approach to single file components and future-proof design. In near future, mitosis can be used to port these to other frameworks. Also, Vue has built in .ce mode which allows export of all of these as custom elements (the lib should provide this as a `dist` file).

2. CSS structure. CSS vars will be the primary way we allow customization. So all components should be styled using these by default to remain flexible. The final interface should allow dead simple variable assignment on the root element to override the `nebula` defaults.

3. Add Storybook for visual testing & documentation?

## Interface
 
Consumers should import style bundle from the lib and make sure it is inserted before custom styles so that custom styles have the final say. Components (atoms, molecules), compositions, and layouts (which are also `Vue` components) are all available and using `vue-unplugin-components` they can be auto imported.

Possibly limit exposed components to assembled molecules and layouts. Abstract away what is in between the content and the complicated layouts and logic.

A workflow for someone using the lib would look like 1. make a page 2. apply a layout 3. fill the layout slots with the appropriate content, be it template for a generated from headless architecture or simply hand written/hardcoded into the slot.
