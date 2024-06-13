<script lang="ts">
	const navItems = [
		{ route: '001', name: '001' },
		{ route: '002', name: '002' }
	];
</script>

<nav>
	<ul>
		{#each navItems as item}
			<li><a href="/{item.route}">{item.name}</a></li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		height: 4rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding-left: 1rem;
	}
	nav {
		border-bottom: 4px solid green;
	}
</style>
