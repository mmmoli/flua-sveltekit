import { type IResult } from 'rich-domain';

export interface PermissionServiceTrait {
	userCanRequestRoom(): Promise<IResult<boolean>>;
	userCanViewRoom(): Promise<IResult<boolean>>;
	userCanEditRoom(): Promise<IResult<boolean>>;
}
