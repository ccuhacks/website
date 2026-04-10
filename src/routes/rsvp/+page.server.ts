import { redirect } from '@sveltejs/kit';

export const load = () => {
	redirect(302, 'https://ccuhacks.fillout.com/rsvp');
};
