import { defineDb, defineTable, column, NOW } from 'astro:db';

const User = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		name: column.text({ unique: true }),
		email: column.text({ unique: true }),
		password: column.text(),
		createdAt: column.date({ default: NOW }),
		updatedAt: column.date({ default: NOW })
	}
});

const Post = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text({ unique: true }),
		userId: column.number(),
		content: column.text(),
		createdAt: column.date({ default: NOW }),
		updatedAt: column.date({ default: NOW })
	},
	foreignKeys: [
		{
			columns: ['userId'],
			references: () => [User.columns.id]
		}
	]
});

export default defineDb({
	tables: { User, Post }
});
