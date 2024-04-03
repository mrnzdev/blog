import { db, User } from 'astro:db';
import { Post } from 'astro:db';

export default async function seed() {
	await db.insert(User).values([
		{ id: 1, name: 'Alice', email: 'alice@mail.com', password: '123456' },
		{ id: 2, name: 'Bob', email: 'bob@mail.com', password: '654321' }
	]);
	await db.insert(Post).values([
		{
			title: 'First Post',
			content: 'This is the first post',
			userId: 1
		},
		{
			title: 'Second Post',
			content: 'This is the second post',
			userId: 2
		}
	]);
}
