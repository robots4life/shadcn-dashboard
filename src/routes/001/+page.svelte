<script>
	import { Button } from '$lib/components/ui/button';
	import MenusIcon from 'lucide-svelte/icons/utensils';
	import ProductsIcon from 'lucide-svelte/icons/cooking-pot';
</script>

<div id="board">
	<aside class="w-full">
		<Button href="/menus" variant="outline" class="flex w-full justify-start gap-4 text-lg">
			<MenusIcon class="h-4 w-4" />Menus</Button
		>
		<Button href="/products" variant="outline" class="flex w-full justify-start gap-4 text-lg">
			<ProductsIcon class="h-4 w-4" />Products</Button
		>
	</aside>
	<main></main>
</div>

<style>
	#board {
		display: grid;
		grid-template-columns: max(200px, 10vw) 1fr;
		height: 100vh;
	}
	aside {
		border-right: 2px solid black;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: start;
	}
</style>
