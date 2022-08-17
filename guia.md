
## iniciando projeto
    expo init mypizza --npm (escolher minimal)

## criar 
    tsconfig.json

## renomar o App.js para App.tsx

## depois rodar código :
    expo start (escolher yes)

## executar esse comando pra evitar erro de pedir pra instalar typscript sendo que já foi instalado 
npm install -g expo-cli


## mapiando path
yarn add babel-plugin-module-resolver -D

## instalando esse trem 
react-native-reanimated

## deixar babel.config.js assim : 
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.js', 
            '.json', 
          ],
          alias: {
            '@components' : './src/components',
            '@screens' : './src/screens',
            '@assets' : './src/assets',
          }
        }
      ]
    ]
  };
};

# deixar tsconfig.json assim :
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": "./",
    "paths": {
      "@src/*": [
        "./src/*"
      ],
      "@components/*": [
        "./src/components/*"
      ],
      "@screens/*": [
        "./src/screens/*"
      ],
      "@assets/*": [
        "./src/assets/*"
      ],
      "@hooks/*": [
        "./src/hooks/*"
      ],
      "@utils/*": [
        "./src/utils/*"
      ],
    }
  },
}

# instalando fonts
expo install @expo-google-fonts/dm-sans @expo-google-fonts/dm-serif-display

# tela de login
<!-- expo install expo-app-loading --> depreciada
expo install expo-splash-screen
usar conforme doc https://docs.expo.dev/versions/latest/sdk/splash-screen/


    

# instalando styled-components
yarn add styled-components

# instalar tipagem do styled-components
yarn add @types/styled-components-react-native -D

## instalar firebase, mas antes segue tutorial de como configurar firebase
https://efficient-sloth-d85.notion.site/Instala-o-e-Configura-o-Firebase-939e568bc5d240f8949a6ab1cafadd43

yarn add @react-native-firebase/firestore
yarn add @react-native-firebase/auth
yarn add @react-native-firebase/storage


## criar um tema global
só importar os arquivos da pasta theme

## instalar  linear gradient
expo install expo-linear-gradient

## instalar react-native-gesture-handler pq n vem mais por padrao eu acho 
yarn add react-native-gesture-handler

## instalando ajudador do ios
yarn add react-native-iphone-x-helper

## nao usar codigo abaixo 
$npm update
$npm install
$node node_modules/node-sass/scripts/install.js
$npm rebuild node-sass

cd android && ./gradlew clean && ./gradlew :app:bundleRelease

cd android
./gradlew -v

react-native init ProjectName --version="0.59.9" --template="typescript"