import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function load() {
	const users = await prisma.user.findMany();
	return {
		users
	};
}
