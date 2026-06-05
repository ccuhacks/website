import { redirect } from '@sveltejs/kit';

export const load = () => {
	redirect(302, 'https://discord.gg/MaDNypSN4x');
};
