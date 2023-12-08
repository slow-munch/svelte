<script lang="ts">
	import { Section, Register } from 'flowbite-svelte-blocks';
	import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
</script>


<Section name="login">
	<Register href="/">
		<svelte:fragment slot="top">
			<img class="w-20 h-20 mr-2" src="logo.png" alt="logo" />
			Slow Munch
		</svelte:fragment>
		<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
			<form class="flex flex-col space-y-6" action="#">
				<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Sign Up</h3>
				<Label class="space-y-2">
					<span>Email</span>
					<Input type="email" name="email" placeholder="name@company.com" required />
				</Label>
				<Label class="space-y-2">
					<span>Password</span>
					<Input type="password" name="password" placeholder="•••••" required />
				</Label>

				<div class="flex">
					<Checkbox class="text-gray-500" required>I agree to The Terms of Services and Privacy Policy.</Checkbox>
				</div>

				<Button type="submit" class="w-full1">Continue</Button>
				<p class="mx-auto text-sm font-bold text-gray-400 dark:text-gray-400">
					Have an Account? <a href="/signin" class="font-bold text-primary-600 hover:underline dark:text-primary-500">Sign In</a>
				</p>
			</form>
		</div>
	</Register>
</Section>

