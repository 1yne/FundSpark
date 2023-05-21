<script lang="ts">
	import { supabase } from '$lib/supabase.js';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import Logo from '$lib/Logo.svelte';

	let email = '',
		password = '',
		username = '',
		currentSlide = 'email',
		firstName = '',
		lastName = '',
		verifyPassword = '';
  
  let valid = {
    emailValid: true,
    passwordValid: true,
    firstNameValid: true,
    lastNameValid: true,
    verifyPasswordValid: true,
    usernameValid: true
  }

	async function signIn() {
    if (!email) {
      valid.emailValid = false
			currentSlide = 'email';
			return;
		}
    if (!username || !firstName || !lastName) {
      valid.usernameValid = username ? true : false
      valid.firstNameValid = firstName ? true : false
      valid.lastNameValid = lastName ? true : false

			currentSlide = 'details';
			return;
		}
		if (!password || !verifyPassword || password !== verifyPassword) {
      valid.passwordValid = password ? true : false
      valid.verifyPasswordValid = verifyPassword ? true : false

			currentSlide = 'password';
			return;
		}
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
			console.log('Error signing up: ', err.message);
		} else {
			goto('/dashboard');
		}
	}
</script>

<svelte:head>
	<title>{currentSlide === 'login' ? 'Login' : 'Signup'}</title>
</svelte:head>

<div class="flex w-full h-full">
	<div class="h-full p-6 flex-grow">
		<div class="logo w-full flex justify-start">
			<a href="/" class="rounded-lg p-2 flex justify-center items-center text-white gap-2">
				<Logo size={32} />
				<h1 class="text-3xl">FundSpark</h1>
			</a>
		</div>
		{#if currentSlide === 'email'}
			<div
				class="h-full flex flex-col justify-center overflow-hidden"
				in:fly={{ x: 50, duration: 500, delay: 700 }}
				out:fly={{ x: -50, duration: 500 }}
			>
				<div class="p-6">
					<h1 class="text-white text-4xl">Let's create your account</h1>
					<div
						class="inputSignup w-full h-full flex flex-col justify-between"
						in:fly={{ x: 50, duration: 500, delay: 700 }}
						out:fly={{ x: -50, duration: 500 }}
					>
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
                    class:invalid="{!valid.emailValid}"
                    on:input={() => valid.emailValid = true}
										bind:value={email}
									/>
								</div>
							</div>
							<div class="flex justify-end">
								<div class="flex">
									<button
										on:click={() => (currentSlide = 'details')}
										type="submit"
										class="bg-mint p-2 px-8 rounded-lg hover:bg-mintHover transition-all"
										>Next</button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{:else if currentSlide === 'details'}
			<div
				class="h-full flex flex-col justify-center overflow-hidden"
				in:fly={{ x: 50, duration: 500, delay: 700 }}
				out:fly={{ x: -50, duration: 500 }}
			>
				<div class="p-6">
					<h1 class="text-white text-4xl">Add your details</h1>
					<div
						class="inputSignup w-full h-full flex flex-col justify-between"
						in:fly={{ x: 50, duration: 500, delay: 700 }}
						out:fly={{ x: -50, duration: 500 }}
					>
						<div>
							<div class="flex flex-col gap-4 rounded-lg mb-8 mt-6">
								<div class="relative my-3">
									<label class="text-base text-gray-400" for="text">First Name</label>
									<input
										type="text"
										class="outline-none p-2 rounded-lg w-full text-white bg-input mt-2 px-4 border border-solid border-input transition-all"
										autocomplete="off"
										name="text"
										required
										placeholder="John"
                    class:invalid="{!valid.firstNameValid}"
                    on:input={() => valid.firstNameValid = true}
										bind:value={firstName}
									/>
								</div>
								<div class="relative my-3">
									<label class="text-base text-gray-400" for="text">Last Name</label>
									<input
										type="text"
										class="outline-none p-2 rounded-lg w-full text-white bg-input mt-2 px-4 border border-solid border-input transition-all"
										autocomplete="off"
										name="text"
										required
										placeholder="Smith"
                    class:invalid="{!valid.lastNameValid}"
                    on:input={() => valid.lastNameValid = true}
										bind:value={lastName}
									/>
								</div>
								<div class="relative my-3">
									<label class="text-base text-gray-400" for="text">Username</label>
									<input
										type="text"
										class="outline-none p-2 rounded-lg w-full text-white bg-input mt-2 px-4 border border-solid border-input transition-all"
										autocomplete="off"
										name="text"
										required
										placeholder="john_smith"
                    class:invalid="{!valid.usernameValid}"
                    on:input={() => valid.usernameValid = true}
										bind:value={username}
									/>
								</div>
							</div>
							<div class="flex justify-between">
								<div class="flex">
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<p on:click={() => (currentSlide = 'email')} class="text-mint">Back</p>
								</div>
								<div class="flex">
									<button
										on:click={() => (currentSlide = 'password')}
										type="submit"
										class="bg-mint p-2 px-8 rounded-lg hover:bg-mintHover transition-all"
										>Next</button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{:else if currentSlide === 'password'}
			<div
				class="h-full flex flex-col justify-center overflow-hidden"
				in:fly={{ x: 50, duration: 500, delay: 700 }}
				out:fly={{ x: -50, duration: 500 }}
			>
				<div class="p-6">
					<h1 class="text-white text-4xl">Choose your password</h1>
					<div
						class="inputSignup w-full h-full flex flex-col justify-between"
						in:fly={{ x: 50, duration: 500, delay: 700 }}
						out:fly={{ x: -50, duration: 500 }}
					>
						<div>
							<div class="flex flex-col gap-4 rounded-lg mb-8 mt-6">
								<div class="relative my-3">
									<label class="text-base text-gray-400" for="password">Password</label>
									<input
										type="password"
										class="outline-none p-2 rounded-lg w-full text-white bg-input mt-2 px-4 border border-solid border-input transition-all"
										autocomplete="off"
										name="password"
										required
										bind:value={password}
                    class:invalid="{!valid.passwordValid}"
                    on:input={() => valid.passwordValid = true}
									/>
								</div>
								<div class="relative my-3">
									<label class="text-base text-gray-400" for="verify_password"
										>Verify the password</label
									>
									<input
										type="password"
										class="outline-none p-2 rounded-lg w-full text-white bg-input mt-2 px-4 border border-solid border-input transition-all"
										autocomplete="off"
										name="verify_password"
										required
										bind:value={verifyPassword}
                    class:invalid="{!valid.verifyPasswordValid}"
                    on:input={() => valid.verifyPasswordValid = true}
									/>
								</div>
							</div>
							<div class="flex justify-between">
								<div class="flex">
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<p on:click={() => (currentSlide = 'details')} class="text-mint">Back</p>
								</div>
								<div class="flex">
									<button
										on:click={signIn}
										type="submit"
										class="bg-mint p-2 px-8 rounded-lg hover:bg-mintHover transition-all"
										>Sign up</button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
	<div class="w-1/2">
		<img src="/SignUpPic.jpeg" alt="A reaching hand" class="h-full w-full object-cover" />
	</div>
</div>

<style>
	input:focus {
		background: linear-gradient(#1c1c25, #1c1c25) padding-box,
			linear-gradient(to right, #02c39a, #029e7c) border-box;
		border-radius: 8px;
		border: 1px solid transparent;
	}
	input::placeholder {
		color: rgba(162, 162, 163, 0.4);
	}

  .invalid {
    border-color: red;
  }
</style>
