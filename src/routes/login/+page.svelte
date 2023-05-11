<script lang="ts">
	import { supabase } from '$lib/supabase.js';
	import Email from 'carbon-icons-svelte/lib/Email.svelte';
	import Password from 'carbon-icons-svelte/lib/Password.svelte';
	import Username from 'carbon-icons-svelte/lib/StringText.svelte';
	import { goto } from '$app/navigation';

	let email = '',
		password = '',
		username = '';

	async function signIn() {
		const { data, error: err } = await supabase.auth.signUp({
			email,
			password
		});
		fetch('/api/createUserData', {
			body: JSON.stringify({
				username,
				id: data.user?.id
			}),
			method: 'POST'
		});
		if (err) {
			alert(err);
		} else {
			goto('/dashboard');
		}
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex w-full h-full">
	<div class="w-5/12">
		<img src="/SignUpPic.jpeg" alt="A reaching hand" class="h-full w-full object-cover" />
	</div>
	<div class="h-full p-8 flex-grow">
		<div class="w-full h-full rounded-lg p-8">
			<div class="content mx-16 flex h-full justify-center flex-col">
				<h1 class="text-white text-4xl mb-4 font-mont">Welcome</h1>
				<p class="text-white text-lg mb-8">
					Create an account or log in to get started using FundSpark
				</p>
				<div class="flex flex-col gap-4 rounded-lg mb-8 mt-6">
					<div class="relative my-3">
						<input
							type="email"
							class="[0_35px_35px_rgba(2 195 154 1)] outline-none p-2 rounded-lg w-full text-white bg-[#141414] border-t-0 border-x-0 border-b-mint border-2 border-solid"
							autocomplete="off"
							name="email"
							required
							bind:value={email}
						/>
						<label
							class="label text-base text-gray-400 absolute pointer-events-none top-2 left-11 transition-all"
							for="email">Email</label
						>
						<label
							for="email"
							class="icon text-base text-gray-400 absolute pointer-events-none top-2 left-3 transition-all"
							><Email size={24} /></label
						>
					</div>
					<div class="relative my-3 mt-6">
						<input
							type="password"
							class="outline-none p-2 password rounded-lg w-full text-white bg-[#141414] border-t-0 border-x-0 border-b-mint border-2 border-solid"
							autocomplete="off"
							name="password"
							required
							bind:value={password}
						/>
						<label
							class="label text-base text-gray-400 absolute pointer-events-none top-2 left-11 transition-all"
							for="password">Password</label
						>
						<label
							for="password"
							class="icon text-base text-gray-400 absolute pointer-events-none top-2 left-3 transition-all"
							><Password size={24} /></label
						>
					</div>
					<div class="relative my-3 mt-6">
						<input
							type="text"
							class="outline-none p-2 rounded-lg w-full text-white bg-[#141414] border-t-0 border-x-0 border-b-mint border-2 border-solid"
							autocomplete="off"
							name="text"
							required
							bind:value={username}
						/>
						<label
							class="label text-base text-gray-400 absolute pointer-events-none top-2 left-11 transition-all"
							for="text">Username</label
						>
						<label
							for="text"
							class="icon text-base text-gray-400 absolute pointer-events-none top-2 left-3 transition-all"
							><Username size={24} /></label
						>
					</div>
				</div>
				<div class="flex justify-end">
					<div class="flex">
						<button
							on:click={signIn}
							type="submit"
							class="bg-mint p-2 px-8 rounded-lg hover:bg-mintHover transition-all">Login</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	input:focus + .label,
	input:valid + .label {
		top: -25px;
		bottom: 0px;
		left: 0px;
		font-size: 1rem;
		opacity: 1;
		color: white;
	}

	@keyframes dissapear {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@keyframes appear {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.password {
		font: large Verdana, sans-serif;
		letter-spacing: 1px;
	}

	.icon {
		animation: appear 0.2s forwards;
	}

	input:focus ~ .icon,
	input:valid ~ .icon {
		animation: dissapear 0.2s forwards;
	}

	input {
		filter: drop-shadow(0 0.3rem 0.8rem #02c39a);
	}
</style>
