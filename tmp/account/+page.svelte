<script lang="ts">
	import { AccountPage } from '~pages/account-page';
	import type { PageData } from '../account/$types';
	export let data: PageData;
</script>

<AccountPage {data} />
