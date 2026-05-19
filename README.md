# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
src/
├── components/
├── pages/
│   ├── auth/
│   │   └── LoginPage.tsx
│   └── home/
│       └── HomePage.tsx 
├── routes/
│   └── AppRouter.tsx
├── services/
├── hooks/
├── context/
├── layouts/
│   └── MainLayout.tsx
├── types/
├── utils/
├── theme/
├── assets/
├── App.css
├── App.tsx
├── index.css
└── main.tsx




project-root/
├── .bundle/
├── __tests__/
├── android/
├── ios/
├── server/
├── src/
│   ├── components/
│   │   ├── AddressModal.tsx
│   │   ├── BannerCard.tsx
│   │   ├── BecomeArtisanModal.tsx
│   │   ├── BottomNav.tsx
│   │   ├── MainHeader.tsx
│   │   ├── MinecraftSplash.tsx
│   │   ├── PaymentModal.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostCommentsModal.tsx
│   │   ├── PostLikersModal.tsx
│   │   ├── ProductOwnerControls.tsx
│   │   ├── ProductReviews.tsx
│   │   ├── ReportModal.tsx
│   │   ├── SuccessRegistrationModal.tsx
│   │   ├── TermsModal.tsx
│   │   └── WelcomeModal.tsx
│   │
│   ├── config/
│   │   └── developer.ts
│   │
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   ├── CartContext.tsx
│   │   ├── ChatContext.tsx
│   │   ├── CommunityContext.tsx
│   │   ├── ConfigContext.tsx
│   │   ├── FavoritesContext.tsx
│   │   ├── LikedPostsContext.tsx
│   │   ├── NotificationsContext.tsx
│   │   ├── StoreContext.tsx
│   │   └── ToastContext.tsx
│   │
│   ├── hooks/
│   │   └── useProductDetail.ts
│   │
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   │
│   ├── screens/
│   │   ├── artisan/
│   │   │   ├── ArtisanClassesScreen.tsx
│   │   │   ├── ArtisanStatsScreen.tsx
│   │   │   ├── ProductsScreen.tsx
│   │   │   ├── PublishProductScreen.tsx
│   │   │   └── SalesScreen.tsx
│   │   │
│   │   ├── auth/
│   │   │   ├── ForgotPasswordScreen.tsx
│   │   │   ├── LoginScreen.tsx
│   │   │   └── RegisterScreen.tsx
│   │   │
│   │   ├── chat/
│   │   │   ├── ChatScreen.tsx
│   │   │   └── ChatsListScreen.tsx
│   │   │
│   │   ├── community/
│   │   │   ├── LikedPostsScreen.tsx
│   │   │   ├── PostDetailScreen.tsx
│   │   │   ├── PublishPostScreen.tsx
│   │   │   └── TutorialsScreen.tsx
│   │   │
│   │   ├── orders/
│   │   │   ├── InvoiceScreen.tsx
│   │   │   ├── OrderDetailsScreen.tsx
│   │   │   └── PurchasesScreen.tsx
│   │   │
│   │   ├── profile/
│   │   │   ├── AccountSettingsScreen.tsx
│   │   │   ├── AddressesScreen.tsx
│   │   │   └── PaymentMethodsScreen.tsx
│   │   │
│   │   ├── shop/
│   │   │   ├── ArtesanoProfileScreen.tsx
│   │   │   ├── CartScreen.styles.ts
│   │   │   ├── CartScreen.tsx
│   │   │   ├── FavoritesScreen.tsx
│   │   │   ├── MarketplaceScreen.tsx
│   │   │   ├── ProductDetailScreen.styles.ts
│   │   │   └── ProductDetailScreen.tsx
│   │   │
│   │   └── system/
│   │       ├── EduModuleScreen.tsx
│   │       ├── HomeScreen.tsx
│   │       ├── MaintenanceScreen.tsx
│   │       ├── NotificationsScreen.tsx
│   │       ├── PausedScreen.tsx
│   │       ├── SuspendedScreen.tsx
│   │       └── TerrorScreen.tsx
│   │
│   ├── services/
│   │   ├── auth.ts
│   │   ├── banners.ts
│   │   ├── cache.ts
│   │   ├── chat.ts
│   │   ├── commerce.ts
│   │   ├── db.ts
│   │   ├── firebaseConnection.js
│   │   ├── moderation.ts
│   │   ├── notifications.ts
│   │   ├── posts.ts
│   │   ├── products.ts
│   │   ├── reviews.ts
│   │   ├── storage.ts
│   │   ├── supabaseConnection.ts
│   │   └── users.ts
│   │
│   ├── theme/
│   │   └── index.ts
│   │
│   ├── types/
│   │   ├── env.d.ts
│   │   └── index.ts
│   │
│   └── utils/
│       └── crypto.ts
│
├── web/
│   ├── public/
│   │   └── index.html
│   ├── .firebaserc
│   ├── .gitignore
│   └── firebase.json
│
├── .env.template
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
├── .watchmanconfig
├── App.tsx
├── Gemfile
├── app.json
├── babel.config.js
├── fix_padding.js
├── index.js
├── jest.config.js
├── metro.config.js
├── package-lock.json
├── package.json
├── query
├── readme.md
├── transform_safe_area.js
└── tsconfig.json



# Instalaciones y comandos npm hasta el moento:
npm create vite@latest
npm install react-router-dom
npm install tailwindcss @tailwindcss/vite
npm install react-icons

npm install sonner

npm run dev (este es para correr el server)
