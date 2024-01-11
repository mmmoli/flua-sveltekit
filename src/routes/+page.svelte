<script>
	import { toast } from 'svelte-sonner';
	import { Button } from '~ui/button';
</script>

<h1>Home</h1>

<p>You want <a data-sveltekit-preload-code="hover" href="dash/">Dashboard</a></p>

<Button on:click={() => toast('Hello world')}>Show toast</Button>
