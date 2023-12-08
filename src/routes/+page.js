// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
import {onMount} from 'svelte';

async function getData() {
    onMount(async () => {
        const response = await fetch(
            'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
            {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
                    'x-rapidapi-key': 'YOUR_API_KEY',
                },
            }
        );
        const data = await response.json();
    });
}
