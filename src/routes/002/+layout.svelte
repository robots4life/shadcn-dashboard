<script lang="ts">
	import SidebarNav from './(components)/sidebar-nav.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	// import FormsLight from '$lib/img/examples/forms-light.png?enhanced';
	// import FormsDark from '$lib/img/examples/forms-dark.png?enhanced';

	const sidebarNavItems = [
		{
			title: 'Profile',
			href: '/002'
		},
		// {
		// 	title: 'Account',
		// 	href: '/002/account'
		// }
		// {
		// 	title: 'Appearance',
		// 	href: '/002/appearance'
		// },
		// {
		// 	title: 'Notifications',
		// 	href: '/002/notifications'
		// },
		{
			title: 'Display',
			href: '/002/display'
		}
	];
</script>

<!-- <div class="md:hidden">
	<enhanced:img src={FormsLight} alt="Forms" class="block dark:hidden" />
	<enhanced:img src={FormsDark} alt="Forms" class="hidden dark:block" />
</div> -->
<div class="hidden space-y-6 p-10 pb-16 md:block">
	<div class="space-y-0.5">
		<h2 class="text-2xl font-bold tracking-tight">Settings</h2>
		<p class="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
	</div>
	<Separator class="my-6" />
	<div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
		<aside class="-mx-4 lg:w-1/5">
			<SidebarNav items={sidebarNavItems} />
		</aside>
		<div class="flex-1 lg:max-w-2xl">
			<slot />
		</div>
	</div>
</div>
