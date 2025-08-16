premiere tentative d optimisation : 
c est un echec. 


resultat une augmentation de la taille du js de 1 Ko
conclusion : reduire le nombre de class tailwind qu on passe au jsx n ameliore pas les performances 
a noter que j ai conserve l import de tailwind 


** console output ** avec (tailwind)

vite v7.1.1 building for production...
✓ 41 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-2iOTj63j.css    7.23 kB │ gzip:  2.31 kB
dist/assets/index-BjPBCMzP.js   195.53 kB │ gzip: 62.32 kB
✓ built in 1.11s

 shopping-cart  pnpm build

> shopping-cart@0.0.0 build C:\Users\Karlj\react\shopping-cart
> tsc -b && vite build

vite v7.1.1 building for production...
✓ 41 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-B1Ehh7Ta.css   10.76 kB │ gzip:  3.01 kB
dist/assets/index-CaOOhbm8.js   196.87 kB │ gzip: 62.78 kB

** console output ** en retirant tailwind et en reecrivant le css 

vite v7.1.1 building for production...
✓ 41 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-DI2bkoAM.css    3.60 kB │ gzip:  1.18 kB
dist/assets/index-CUifzrUY.js   195.53 kB │ gzip: 62.32 kB
✓ built in 1.02s

les donnees de navigations montrent qu on n a pas d evolution significative des performances

conclusion : on ne fait pas de gain de performances en retirant tailwind et en reecrivant le css 
on a meme un css un peu moins beau 

