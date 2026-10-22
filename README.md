# FESTIVAL CONTROL · Expo + AWS Amplify Gen 2

Aplicación de operaciones del festival con una API de Amplify Data (AWS AppSync) y persistencia en DynamoDB. El modelo `FestivalEvent` se define en `amplify/data/resource.ts`; la aplicación usa esa API para listar, crear, editar, cambiar el estado y eliminar eventos.

## Preparar el backend

Requisitos: Node.js 18.16 o superior y credenciales AWS configuradas en el entorno.

```bash
npm install
npx ampx sandbox
```

El sandbox despliega recursos aislados de desarrollo y genera `amplify_outputs.json`. Déjalo ejecutándose mientras pruebas la app. La tabla se inicializa con los cuatro eventos de ejemplo si está vacía.

```bash
npm run web
```

Para desplegar desde una rama en Amplify Hosting, configura las credenciales y usa el build de `amplify.yml`; el job debe ejecutar el despliegue del backend antes de compilar el frontend. Para entornos de CI/CD, conecta el backend a la rama y configura `npx ampx pipeline-deploy --branch $AWS_BRANCH --app-id $AWS_APP_ID` en la fase de backend.

## Acceso de demostración

La API permite acceso CRUD mediante una API key pública con duración de 30 días, sin inicio de sesión, para que el ejercicio sea fácil de probar. Es apropiado para datos de demostración; para datos privados, cambia la regla de autorización en `amplify/data/resource.ts` y añade autenticación.

Si todavía no se ejecutó el sandbox, la interfaz permanece en modo local y muestra cómo conectar el backend. Los cambios locales no persisten al recargar.

## Comandos

```bash
npm run web
npm run build:web
npm run typecheck
```
