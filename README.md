# ESLint & Prettier Config – Lobbi

Ce package contient la **configuration ESLint et Prettier standardisée** pour tous les projets de Lobbi.  
Il permet de garantir un **style de code uniforme**, de **prévenir les erreurs courantes** et de faciliter le travail collaboratif.

---

## 🔹 Installation

Dans un projet Lobbi :

```bash
# Installer le package ESLint + Prettier
npm install -D git+ssh://git@github.com:lobbiprod/eslint-config-lobbi.git prettier @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unused-imports eslint-plugin-jsx-a11y globals typescript typescript-eslint
```
Les dépendances listées ici sont nécessaires pour ESLint + Prettier.
Les versions exactes sont définies dans le package eslint-config-lobbi.

Rajouter dans le `package.json` les scripts suivants :
```json
"scripts": {
  "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
  "format": "prettier --write .",
  "check-format": "prettier --check ."
}
```

## 🔹 Configuration ESLint
Créer un fichier eslint.config.js à la racine du projet :
```js
import config from 'eslint-config-lobbi';

export default config;
```

Commande pour vérifier que ESLint est bien configuré :
```bash
npx eslint src --ext .ts,.tsx,.js,.jsx
```


## 🔹 Configuration Prettier
Créer un fichier prettier.config.js à la racine du projet :
```js
import prettierConfig from 'eslint-config-lobbi/prettier.config.js';

export default prettierConfig;
```

Commande pour vérifier que ESLint est bien configuré :
```bash
# Vérifier la conformité
npm run check-format
# Formater tous les fichiers
npm run format
```



## 🔹 Règles principales
**JavaScript / TypeScript**
- Point-virgule obligatoire (`semi: true`)
- Single quotes sauf nécessité d’échapper (`quotes: 'single', avoidEscape: true`)
- `prefer-const` pour les variables non réassignées 
- `no-unused-vars` pour éviter les variables inutilisées

**React**
- `react/react-in-jsx-scope`: off → inutile depuis React 17+
- `react/prop-types`: off → TypeScript gère les props

**Imports**
- `import/order` pour un ordre standard : *(builtin → external → internal → parent → sibling → index)*
- Nouvelle ligne entre chaque groupe


