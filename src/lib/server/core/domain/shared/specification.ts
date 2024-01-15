export interface Specification<T> {
	isSatisfiedBy(candidate: T): boolean;
	and(other: Specification<T>): Specification<T>;
	not(): Specification<T>;
}

export abstract class AbstractSpecification<T> implements Specification<T> {
	public abstract isSatisfiedBy(hand: T): boolean;

	public and(other: Specification<T>): AndSpecification<T> {
		return new AndSpecification(this, other);
	}

	public not(): NotSpecification<T> {
		return new NotSpecification(this);
	}
}

export class AndSpecification<T> extends AbstractSpecification<T> {
	private left: Specification<T>;
	private right: Specification<T>;

	public constructor(one: Specification<T>, other: Specification<T>) {
		super();
		this.left = one;
		this.right = other;
	}

	public isSatisfiedBy(candidate: T) {
		return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate);
	}
}

export class NotSpecification<T> extends AbstractSpecification<T> {
	private wrapped: Specification<T>;

	public constructor(wrapped: Specification<T>) {
		super();
		this.wrapped = wrapped;
	}

	public isSatisfiedBy(candidate: T) {
		return !this.wrapped.isSatisfiedBy(candidate);
	}
}
