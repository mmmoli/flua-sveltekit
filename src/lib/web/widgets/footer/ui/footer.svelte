<script lang="ts">
	import { routes } from '~shared/config/routes';
	import { Box } from '~ui/box';
	import { Button } from '~ui/button';
	import { T } from '~ui/typography';
	const year = new Date().getFullYear();

	const aboutLink = routes.aboutPage();
</script>

<Box pattern="t">
	<footer class="flex flex-row text-muted-foreground">
		<div class="w-1/3"></div>
		<div class="flex w-1/3 items-center justify-center">
			<T.Small>Flua &copy; {year}</T.Small>
		</div>
		<div class="flex w-1/3 items-center justify-end">
			<Button href="/" variant="link" size="sm">Home</Button>
			<Button href={aboutLink} variant="link" size="sm">About</Button>
		</div>
	</footer>
</Box>
