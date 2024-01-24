<script lang="ts">
	import type { PageData } from '../account/$types';
	import { Banner } from '~entities/banner';
	import { NavLayout } from '~pages/nav-layout';
	import { BillingSection } from '~widgets/account/billing-section';
	import { ProfileSection } from '~widgets/account/profile-section';
	export let data: PageData;
	const currentUrl = data?.pathname;
</script>

<NavLayout {currentUrl}>
	<Banner heading="Account" />
	<ProfileSection />
	<BillingSection />
</NavLayout>
