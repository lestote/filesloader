1 - on genere un fichier js qui map le chemin vers les fichiers existants : node script/index.js
2 - ls script créé un fichier images.map.js
3 - on l'export dans notre main.js
4 - on compile et on build

Ca donne :

node script/index.js && yarn build

le dossier 'docs' devient donc le point d'entré à émuler dans n'importe quel navigateur.

voir comment bundler le tout direct dans webpack

ressources utiles :

https://stackoverflow.com/questions/36773619/webpack-execute-function-before-build-starts

https://gist.github.com/kethinov/6658166
https://github.com/isaacs/node-glob
https://stackoverflow.com/questions/36856232/write-add-data-in-json-file-using-node-js
https://gist.github.com/idiotWu/39c4a36ef79f65782f68