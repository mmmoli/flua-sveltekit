import { tv, type VariantProps } from 'tailwind-variants';

export const typographyVariants = tv({
	variants: {
		type: {
			h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
			h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
			h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
			p: 'leading-7 [&:not(:first-child)]:mt-6',
			lead: 'text-xl text-muted-foreground',
			small: 'text-sm font-medium leading-none'
		}
	}
});

type Type = VariantProps<typeof typographyVariants>['type'];

export type Props = {
	type?: Type;
};
