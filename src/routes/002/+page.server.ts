import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { type Actions, fail } from '@sveltejs/kit';

// validation schema should be in the backend together with business logic
// import { profileFormSchema } from "./profile-form.svelte";
import { profileFormSchema } from '$lib/schema/productValidation.js';

import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(profileFormSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(profileFormSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		return {
			form
		};
	}
};
