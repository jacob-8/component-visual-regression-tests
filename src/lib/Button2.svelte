<script>
  export let name

  let buttonText = 'Button'

  function handleClick() {
    buttonText = 'Button Clicked'
  }
</script>

<h1>Hello {name}!</h1>

<button class="text-lg" on:click="{handleClick}">{buttonText}s</button>

<style>
  button {
    color: red;
  }
</style>