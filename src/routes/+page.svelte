<script lang="ts">
  import Button from "$lib/Button.svelte";
  import Counter from "$lib/Counter.svelte";
  import Forms from "./Forms.svelte";
  import Prose from "./Prose.svelte";
  // import RightToLeftDependent from "./RightToLeftDependent.svelte";

  let red = false;
  // let rtl = true;
</script>

<div class="p-1em my-2px mx-auto">
  <Counter />

  <Prose />

  <div class="my-15">
    <div
      class:bg-red-400={red}
      class:bg-gray={!red}
      class="text-white p-3 rounded mb-3">
      My BG Color should change
    </div>
    <Button onclick={() => (red = !red)}>Change BG Color: {red ? "Gray" : "Red"}</Button>
  </div>

  <Forms />
</div>
