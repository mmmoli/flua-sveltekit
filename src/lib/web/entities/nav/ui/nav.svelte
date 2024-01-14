<script lang="ts">
	import NavItem from './nav-item.svelte';
	import { navItems } from '../model/nav';
	import { navIsActive } from '../lib/nav-is-active';
	export let activeUrl: string | undefined;
	const isActive = (navUrl: string) => navIsActive(navUrl, String(activeUrl));
</script>

<nav>
	<ol class="flex flex-wrap">
		{#each navItems as navItem}
			<li class="mb-2 mr-2">
				<NavItem href={navItem.href} label={navItem.label} isActive={isActive(navItem.href)} />
			</li>
		{/each}
	</ol>
</nav>
