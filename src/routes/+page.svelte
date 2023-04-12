<script lang="ts">
	import type { User } from '@prisma/client';
	export let data: { users: User[] };
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Users</h2>

{#each data.users as user}
	<div>
		{user.name} -- {user.email}
	</div>
{/each}
