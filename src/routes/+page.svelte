<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex flex-col justify-center items-center">
	<div class="mb-10">
		<div class="rounded-lg bg-slate-700 p-10 text-slate-100 dark:bg-slate-500 dark:text-slate-100">
			<h1 class="text-6xl">Welcome to SvelteKit</h1>
			<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
			<p>We use Tailwind css on this page!</p>
		</div>
	</div>

	<div class="bg-slate-700 text-slate-100 rounded-lg p-5 dark:bg-slate-500 dark:text-slate-100">
		<h2 class="font-bold text-lg">List of Users:</h2>

		<ul class="list-disc list-inside">
			{#each data.users as user}
				<li>
					{user.name} -- {user.email}
				</li>
			{/each}
		</ul>
	</div>
</div>
