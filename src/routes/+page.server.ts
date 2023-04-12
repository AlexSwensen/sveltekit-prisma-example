import prisma from '$lib/prisma';
import type { User } from '@prisma/client';
import type { PageServerLoad } from './$types';

export const load = (async (): Promise<{ users: User[] }> => {
	const users = await prisma.user.findMany();
	return {
		users
	};
}) satisfies PageServerLoad;
