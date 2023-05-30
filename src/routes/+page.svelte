<script lang="ts">
	import Logo from '$lib/Logo.svelte';
	import { io } from '@svelteuidev/composables';
	import { fly } from 'svelte/transition';

	let visible: boolean;
	const handleChange = ({ detail }:{ detail: any }) => {
		visible = detail.inView;
	};
</script>

<svelte:head>
	<title>FundSpark</title>
</svelte:head>

<div class="h-full p-6 bg-[url('/heroBG.svg')] bg-no-repeat bg-cover bg-center">
	<div class="logo w-full flex justify-start mb-6">
		<a href="/" class="rounded-lg p-2 flex justify-center items-center text-white gap-2">
			<Logo size={32} />
			<h1 class="text-3xl">FundSpark</h1>
		</a>
	</div>
	<div class="w-full flex justify-center">
		<div
			class="flex flex-col gap-8 max-w-[48rem] w-full text-white text-center"
			use:io={{ threshold: 1 }}
			on:change={handleChange}
		>
			{#if visible}
				<h1 class="text-8xl" in:fly={{ y: 50, duration: 500 }}>
					Connecting kindness, changing lives.
				</h1>
				<p class="text-xl" in:fly={{ y: 50, duration: 500, delay: 200 }}>
					FundSpark is a revolutionary crowdfunding platform that harnesses the power of collective
					generosity to fuel dreams, support causes, and transform lives.
				</p>
				<div class="flex justify-center" in:fly={{ y: 50, duration: 500, delay: 400 }}>
					<a
						href="/signup"
						class="p-4 bg-accent text-black text-lg flex rounded-lg px-6 hover:bg-accentHover transition-all"
						>Get Started</a
					>
				</div>
			{/if}
		</div>
	</div>
</div>
