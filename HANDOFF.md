# Passation CMS Payload

## État actuel

Le projet est une application Next.js 16 avec Payload CMS 3.88 intégré.

Le back-office est accessible sur `/admin` et l'API Payload sur `/api`.

Collections Payload disponibles :

- `Users` : utilisateurs du back-office avec authentification.
- `Media` : images téléversées avec texte alternatif obligatoire.
- `Articles` : articles, catégories, résumé, contenu riche, image, statut brouillon/publié et date de publication.
- `Pages` : pages éditables `home`, `qui-suis-je`, `services` et `contact`.

## Configuration locale

Créer `.env.local` à la racine du projet :

```env
PAYLOAD_SECRET=une-cle-secrete-longue-et-aleatoire
DATABASE_URL=file:./payload.db
```

Ne jamais committer `.env.local`, `payload.db` ou une vraie valeur de `PAYLOAD_SECRET`.

## Commandes utiles

```bash
npm install
npm run dev
npm run lint
npm run build
npm run payload:generate:importmap
npm run payload:seed:pages
```

Le seed crée les quatre pages initiales sans doublons. Il peut être relancé sans danger.

## Ce qui est déjà connecté

Les pages publiques interrogent Payload côté serveur via `lib/payload.ts`.

Les champs actuellement lus depuis les pages Payload sont :

- section `Excellence juridique` : titre du hero ;
- section `Domaines d’expertise` : titre de la section expertise.

Les titres principaux sont également connectés pour :

- `contact` : section `Entrer en relation` ;
- `qui-suis-je` : section `L’excellence au service de l’humain` ;
- `services` : section `L’excellence au service de l’humain`.

Si Payload est indisponible, les contenus codés actuels sont utilisés en fallback.

## Fichiers importants

- `payload.config.ts` : configuration Payload, SQLite, collections et éditeur Lexical.
- `collections/Pages.ts` : schéma des pages éditables.
- `collections/Articles.ts` : schéma des articles.
- `collections/Media.ts` : gestion des images.
- `lib/payload.ts` : accès serveur aux pages Payload.
- `scripts/seed-pages.ts` : création des pages initiales.
- `app/(payload)/` : routes admin et API Payload.
- `app/components/homepage/HomePage.tsx` : intégration CMS actuelle de la homepage.

## Suite recommandée

1. Remplacer progressivement les autres textes codés en dur par les sections Payload.
2. Ajouter un renderer partagé pour le contenu Lexical et les images Media.
3. Connecter la liste publique du blog à la collection `Articles` avec filtre par catégorie.
4. Laisser la page détail des articles consommer le même modèle `Articles`.
5. Ajouter une règle de publication : seuls les articles `published` sont visibles publiquement.
6. Configurer un stockage média persistant avant la mise en production, car `staticDir: 'media'` est adapté au local mais pas à tous les hébergements.
7. Ajouter un adaptateur email pour les emails de connexion/réinitialisation Payload.
8. Remplacer le secret de développement par une variable secrète de production.

## Choix d'architecture

Le CMS contrôle les contenus, images et couleurs de blocs. La structure et la mise en page restent dans les composants React afin d'éviter qu'une modification cliente casse le design ou l'accessibilité.

La collection `Pages` utilise des couleurs hexadécimales libres. Il faudra ajouter un contrôle de contraste avant la production pour éviter des combinaisons illisibles.
