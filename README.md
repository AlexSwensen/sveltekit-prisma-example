# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Prisma setup
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
