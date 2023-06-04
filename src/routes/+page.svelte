<script lang="ts">
	import type { PageServerData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageServerData;

	$: ({ time } = data);
</script>

<h1>Sveltekit + Flask Starter</h1>
<pre>{JSON.stringify(data.response, null, 2)}</pre>
<form
	action="?/time"
	method="POST"
	use:enhance={() => {
		return async function ({ update }) {
			//To prevent updating the form
			update({ reset: false });
		};
	}}
>
	{#if time}
		<h1>{time}</h1>
	{/if}
	<div>
		<button type="submit"> Get Current Time </button>
		<button formaction="?/reset">Reset To Null</button>
	</div>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
	div {
		display: flex;
		gap: 10px;
	}
	button {
		padding: 10px;
		border-radius: 5px;
		border: none;
		background-color: var(--color-theme-1);
		color: #fff;
		cursor: pointer;
		width: 200px;
	}
	button:nth-child(2) {
		background-color: var(--color-theme-2);
	}
</style>
