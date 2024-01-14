<script lang="ts">
	import { NavLayout } from '~pages/nav-layout';
	import { Banner } from '~entities/banner';
	import { ProfileSection } from '~widgets/account/profile-section';
	import { BillingSection } from '~widgets/account/billing-section';

	import type { PageData } from '../../../../../routes/account/$types';

	export let data: PageData;
	const currentUrl = data?.pathname;
</script>

<NavLayout {currentUrl}>
	<Banner heading="Account" />
	<ProfileSection />
	<BillingSection />
</NavLayout>
