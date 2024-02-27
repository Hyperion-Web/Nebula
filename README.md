# Nebula

## Introduction

### What is Nebula?

Nebula is a modular design library that is based on intrinsic fundamentals and context aware layouts.

### Why use Nebula?
ecture. 

## Design Objectives

1. All components should be SSR/SSG and template friendly
2. Intrinsic Design prioritizes content
3. SEO super good
4. Can be exposed as Custom Elements for most flexible usage

## Architecture

2. CSS structure. CSS vars will be the primary way we allow customization. So all components should be styled using these by default to remain flexible. The final interface should allow dead simple variable assignment on the root element to override the `nebula` defaults.

3. Add Storybook for visual testing & documentation?

## Interface
 
Consumers should import style bundle from the lib and make sure it is inserted before custom styles so that custom styles have the final say. Components (atoms, molecules), compositions, and layouts (which are also `Vue` components) are all available and using `vue-unplugin-components` they can be auto imported.

Possibly limit exposed components to assembled molecules and layouts. Abstract away what is in between the content and the complicated layouts and logic.

A workflow for someone using the lib would look like 1. make a page 2. apply a layout 3. fill the layout slots with the appropriate content, be it template for a generated from headless architecture or simply hand written/hardcoded into the slot.


### WIP

- default unocss generated utility classes - how to let user override? UNO CSS CLI as automation?
  - need to expose our config as part of the package then... 

### Opinions on Island Architecture frameworks

- eleventy's islands don't give flexibility for nested components without a bit of custom configuration. 

- Some strange vite voodoo is breaking iles in my sandbox because it is trying to resolve urls inappropriately. I think. 

- Astro

- https://github.com/teambit/bit
