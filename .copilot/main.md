# Instructions pour la conversion de Tailwind CSS vers CSS personnalisé
## Objectif
Convertir les classes Tailwind en CSS personnalisé pour améliorer les performances de l'application.

## Étapes requises
### Créer les variables CSS

Identifier les couleurs Tailwind utilisées
Définir les variables dans :root
```
--blue-600: rgb(37, 99, 235)
--blue-700: rgb(29, 78, 216)
--white: rgb(255, 255, 255)
--gray-500: rgb(107, 114, 128)
```
### Identifier les composants à styliser

- ProductCard
- Image du produit
- Titre du produit
- Description du produit
- Prix du produit
- Bouton "Add to cart"

### Spécifier les règles de style

- Convertir uniquement les styles existants
- Ne pas ajouter de styles supplémentaires
- Utiliser les variables CSS définies
- Maintenir la même apparence visuelle
### Localisation du fichier CSS

- Tous les styles doivent être dans index.css
- Ne pas créer de nouveaux fichiers CSS
### Structure du composant

- Garder la même structure HTML
- Utiliser les mêmes noms de classes
-  Conserver la même fonctionnalité
## Contraintes importantes
- Ne pas ajouter de styles non présents dans le code original
- Ne pas créer de fichiers CSS supplémentaires
- Maintenir la compatibilité avec le système de contexte existant