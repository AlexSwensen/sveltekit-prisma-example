<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex flex-col items-center justify-center">
	<div class="mb-10">
		<div class="rounded-lg bg-slate-700 p-10 text-slate-100 dark:bg-slate-500 dark:text-slate-100">
			<h1 class="text-6xl">Welcome to SvelteKit...</h1>
			<h2 class="mb-5 text-4xl">With Prisma!</h2>
			<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
			<p>We use Tailwind css on this page!</p>
		</div>
	</div>

	<div class="rounded-lg bg-slate-700 p-5 text-slate-100 dark:bg-slate-500 dark:text-slate-100">
		<h2 class="text-lg font-bold">List of Users:</h2>

		<ul class="list-inside list-disc">
			{#each data.users as user}
				<li>
					{user.name} - {user.email}
				</li>
			{/each}
		</ul>
	</div>
</div>
