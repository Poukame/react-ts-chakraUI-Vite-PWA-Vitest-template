[![Depfu](https://badges.depfu.com/badges/9be7c6a414861674dd8f443b62dd3931/status.svg)](https://depfu.com) [![Depfu](https://badges.depfu.com/badges/9be7c6a414861674dd8f443b62dd3931/overview.svg)](https://depfu.com/github/Poukame/vite-react-ts-chakraUI-boilerplate?project_id=36767)
# Boilerplate / Template

This boilerplate includes:
- Vite
- React
- TypeScript
- Chakra UI

The 'with-PWA' branch includes:
- Vite PWA which is config ready and work as a PWA out of the box.

## How to use

1. Click on "use this template"
2. If you want PWA click on "include all branches"
3. Clone the repo locally `git clone <your SHH key>`
4. `cd <your repo name>`
5. `npm i`
6. You're set!
7. if you want to use PWA you'll have to switch to 'with-PWA' branch.

## Package Update

The package of this repo update automatically on a regular basis.
But if you want to make sure you're are using the latest package use :
`npm update --save --include=dev`

## Chakra UI theming

In the `src` forlder you'll find a `theme` folder which includes all Chakra UI default theme.
These files already extend the theme, so you can modify directly in these files to create customs styles!!!

If you don't want to use that, simply delete the `theme` folder and everything `theme` on line 5 and 10 of `main.tsx`
