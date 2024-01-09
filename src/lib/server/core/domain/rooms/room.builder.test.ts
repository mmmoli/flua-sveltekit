import { expect, test, describe, beforeEach } from 'vitest';
import { RoomBuilder } from './room.builder';
import { RoomName } from './room-name.value-object';
import { RoomStatus } from './room-status.value-object';
import { RoomSlug } from './room-slug.value-object';

describe('RoomBuilder', () => {
	let builder: RoomBuilder;

	beforeEach(() => {
		builder = new RoomBuilder({
			ownerId: 'fake-owner-id'
		});
	});

	test('exists', () => {
		const result = builder.build();
		expect(result.isOk()).toBeTruthy();
	});

	test('can set an ID', () => {
		const id = 'fake-id';
		const room = builder.withId(id).build().value();
		expect(room.id.value()).toBe(id);
	});

	test('can set a name', () => {
		const nameStr = 'fake-name';
		const name = RoomName.create({ value: nameStr }).value();
		const builder = new RoomBuilder({
			ownerId: 'fake-owner-id'
		}).withName(nameStr);
		const room = builder.build().value();
		expect(room.get('name').isEqual(name)).toBeTruthy();
	});

	test('can set an status', () => {
		const status = RoomStatus.create({
			label: 'locked'
		}).value();
		const room = builder.withStatus({ label: 'locked' }).build().value();
		expect(room.status.isEqual(status)).toBeTruthy();
	});

	test('can set createdAt', () => {
		const createdAt = new Date();
		const room = builder.withCreatedAt(createdAt).build().value();
		expect(room.get('createdAt')).toBe(createdAt);
	});

	test('can set updatedAt', () => {
		const updatedAt = new Date();
		const room = builder.withUpdatedAt(updatedAt).build().value();
		expect(room.get('updatedAt')).toBe(updatedAt);
	});

	test('can set a slug', () => {
		const slugString = 'fake-slug';
		const slug = RoomSlug.create({
			value: slugString
		}).value();
		const room = builder.withSlug(slugString).build().value();
		expect(room.get('slug').isEqual(slug)).toBeTruthy();
	});
});
