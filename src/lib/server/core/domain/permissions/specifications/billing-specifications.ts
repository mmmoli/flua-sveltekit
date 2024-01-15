import { AbstractSpecification } from '../../shared/specification';
import type { UserInfo } from './types';

export interface UserBillingInfo extends UserInfo {
	subscriptionId?: string | null;
}

export class UserHasActiveSubscriptionSpecification extends AbstractSpecification<UserBillingInfo> {
	public isSatisfiedBy(input: UserBillingInfo): boolean {
		return !!input.subscriptionId;
	}
}
