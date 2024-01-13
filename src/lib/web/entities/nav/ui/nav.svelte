<script lang="ts">
	import { page } from '$app/stores';
	import NavItem from './nav-item.svelte';
	import { navItems } from '../model/nav';
	import { isActive } from '../lib/is-active';
	export let activeUrl: string = $page.url.pathname;
</script>

<nav>
	<ol class="flex flex-col space-y-2">
		{#each navItems as navItem}
			<li>
				<NavItem
					href={navItem.href}
					label={navItem.label}
					isActive={isActive(navItem.href, activeUrl)}
				/>
			</li>
		{/each}
	</ol>
</nav>
