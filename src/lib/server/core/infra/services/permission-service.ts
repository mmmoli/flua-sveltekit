import { type IResult, Ok } from 'rich-domain';
import type { PermissionServiceTrait } from '../../domain/permissions';
import type { RoomRepoTrait } from '../../domain/rooms';
import { roomRepo } from '../db';

export interface PermissionServiceDeps {
	roomRepo: RoomRepoTrait;
}

export class PermissionService implements PermissionServiceTrait {
	constructor(protected readonly deps: PermissionServiceDeps) {}

	async userCanRequestRoom(): Promise<IResult<boolean>> {
		return Ok(true);
	}

	async userCanViewRoom(): Promise<IResult<boolean>> {
		return Ok(true);
	}

	async userCanEditRoom(): Promise<IResult<boolean>> {
		return Ok(true);
	}
}

export const permissionService = new PermissionService({
	roomRepo
});
