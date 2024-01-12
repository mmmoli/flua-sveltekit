import Root from './logomark.svelte';
import { tv, type VariantProps } from 'tailwind-variants';

const logomarkVariants = tv({
	variants: {
		size: {
			sm: 'w-4',
			md: 'w-8',
			lg: 'w-11'
		}
	},
	defaultVariants: {
		size: 'sm'
	}
});

type Size = VariantProps<typeof logomarkVariants>['size'];

type Props = {
	size?: Size;
	class?: string;
};

export { Root as Logomark, type Props, type Props as LogomarkProps, logomarkVariants };
