import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const response = await fetch('/api/');
	return {
		response: await response.json(),
		time: cookies.get('time')
	};
};

export const actions: Actions = {
	time: async ({ fetch, cookies }) => {
		const response = await fetch('/api/main/time');
		const result = await response.json();
		cookies.set('time', result.time, { path: '/' });
	},
	reset: async ({ cookies }) => {
		cookies.delete('time');
	}
};
