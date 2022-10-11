# Boilerplate / Template

This boilerplate includes:
- Vite
- React
- TypeScript
- Chakra UI

The 'with-PWA' branch includes:
- Vite PWA which is config ready and work as a PWA out of the box.

## Package Update

To update all the packages at once use :
`npm update --save --include=dev`

## Chakra UI theming

In the `src` forlder you'll find a `theme` folder which includes all Chakra UI default theme.
These files already extend the theme, so you can modify directly in these files to create customs styles!!!

If you don't want to use that, simply delete the `theme` folder and everything `theme` on line 5 and 10 of `main.tsx`
