import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function GET() {
	const users = await prisma.user.findMany();
	return json({
		users
	});
}
