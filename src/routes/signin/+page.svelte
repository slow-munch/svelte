<script lang="ts">import { Section, Register } from 'flowbite-svelte-blocks';
	import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
</script>


<Section name="login">
	<Register href="/">
		<svelte:fragment slot="top">
			<img class="w-20 h-20 mr-2" src="logo.png" alt="logo" />
			Slow Munch
		</svelte:fragment>
		<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
			<form class="flex flex-col space-y-6" action="/">
				<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Sign In</h3>
				<Label class="space-y-2">
					<span>Email</span>
					<Input type="email" name="email" placeholder="name@company.com" required />
				</Label>
				<Label class="space-y-2">
					<span>Password</span>
					<Input type="password" name="password" placeholder="•••••" required />
				</Label>
				<Button type="submit" class="w-full1">Sign in</Button>

				<p class="mx-auto text-sm font-light text-gray-500 dark:text-gray-400">
					or use one of your social profiles
				</p>

				<Button type="button" class="kakao w-full1 bg-[#ffe500] text-black">
					Kakao
				</Button>
				<Button type="button" href="http://localhost:8080/oauth2/google/login" class="google w-full1 bg-[#f5f5f8] text-black">
					Google
				</Button>

				<div class="flex items-start">
					<a href="/" class="ml-0 text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password?</a>
					<a href="/signup" class="ml-auto font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up</a>
				</div>
			</form>
		</div>
	</Register>
</Section>

