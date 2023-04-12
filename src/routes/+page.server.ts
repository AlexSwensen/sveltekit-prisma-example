import prisma from '$lib/prisma';
import type { User } from '@prisma/client';
import { json } from '@sveltejs/kit';

export async function load(): Promise<{ users: User[] }> {
	const users = await prisma.user.findMany();
	return {
		users
	};
}
