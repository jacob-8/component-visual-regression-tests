<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let units = "";

	let count = 0;

	const dispatch = createEventDispatcher();

	const increment = () => {
		++count;
		dispatch("changed", { count });
	};

	const decrement = () => {
		--count;
		dispatch("changed", { count });
	};
</script>

<div class="flex font-bold text-5xl space-x-3 p-2 justify-center">
	<button on:click={decrement}>-</button>

	<div class="text-7xl">{count}{units}</div>

	<button on:click={increment}>+</button>
</div>
