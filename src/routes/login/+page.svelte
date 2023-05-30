<script lang="ts">
	import { supabase } from '$lib/supabase.js';
	import { goto } from '$app/navigation';
	import Logo from '$lib/Logo.svelte';
	import { Divider } from '@svelteuidev/core';

	let email = '',
		password = '';

	let valid = {
		emailValid: true,
		passwordValid: true
	};

	async function login() {
		if (!email) {
			valid.emailValid = false;
			return;
		}
		if (!password) {
			valid.passwordValid = false;
			return;
		}
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			alert(error);
			console.log('Error logging in: ', error.message);
		} else {
			goto('/dashboard');
		}
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="h-full w-full p-8">
	<div class="logo w-full flex justify-center">
		<a href="/" class="rounded-lg p-2 flex justify-center items-center text-white gap-2">
			<Logo size={32} />
			<h1 class="text-3xl">FundSpark</h1>
		</a>
	</div>
	<div class="flex justify-center items-center h-full">
		<div class="rounded-lg p-8 max-w-[40rem] w-full">
			<div class="content mx-16 flex h-full justify-start flex-col">
				<h1 class="text-white text-4xl mb-4">Sign In</h1>
				<div>
					<div class="flex flex-col gap-4 rounded-lg mb-8 mt-6">
						<div class="relative my-3">
							<label class="text-base text-gray-400" for="email">Email</label>
							<input
								type="email"
								class="outline-none p-2 rounded-lg w-full text-white bg-input mt-2 px-4 border border-solid border-input transition-all"
								autocomplete="off"
								name="email"
								required
								placeholder="example@gmail.com"
								class:invalid={!valid.emailValid}
								on:input={() => (valid.emailValid = true)}
								bind:value={email}
							/>
						</div>
						<div class="relative my-3 mt-6">
							<label class="text-base text-gray-400" for="password">Password</label>
							<input
								type="password"
								class="outline-none password p-2 rounded-lg w-full text-white bg-input mt-2 px-4 border border-solid border-input transition-all"
								autocomplete="off"
								name="password"
								required
								bind:value={password}
								on:input={() => (valid.passwordValid = true)}
								class:invalid={!valid.passwordValid}
							/>
						</div>
					</div>
					<div class="flex justify-end mt-4">
						<div class="flex">
							<button
								on:click={login}
								type="submit"
								class="bg-mint p-2 px-8 rounded-lg hover:bg-mintHover transition-all">Login</button
							>
						</div>
					</div>
					<Divider override={{ my: '2rem !important' }} />
					<div class="flex justify-center">
						<h1 class="text-white">
							Haven't created an account yet? <a
								href="/signup"
								class="text-mint hover:text-mintHover transition-all">Sign up</a
							>
						</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	input:focus {
		border: 1px solid #577ef2;
	}
	input::placeholder {
		color: rgba(162, 162, 163, 0.4);
	}

	.invalid {
		border-color: red;
	}
</style>
