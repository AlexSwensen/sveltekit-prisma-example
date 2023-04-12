# SvelteKit Prisma Example

A simple POC i threw together to see what it would take to get Prisma and Sveltekit working together.

## first steps:

copy `.env.example` to `.env` and fill in the values (if any)

## Prisma setup

By default, this project uses sqlite for simplicity.

Initialize your local dev db with the following commands:

```bash
npx prisma generate
npx prisma db push
```

You can now create a user in prisma studio if you wish.
```
npx prisma studio
```

once you have a user, you can run the app with `npm run dev`

The home page should show you a list of user emails.
## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
