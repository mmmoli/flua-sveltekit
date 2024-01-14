import Root from './box.svelte';
import { tv, type VariantProps } from 'tailwind-variants';

const boxVariants = tv({
	base: 'border-foreground flex flex-col',
	variants: {
		thickness: {
			none: 'border-0',
			thin: 'border-2'
		},
		padding: {
			none: 'p0',
			md: 'p-3',
			lg: 'p-8'
		}
	},
	defaultVariants: {
		padding: 'md',
		thickness: 'thin'
	}
});

type Thickness = VariantProps<typeof boxVariants>['thickness'];
type Padding = VariantProps<typeof boxVariants>['padding'];

type BoxPatterns = 'trbl' | 't' | 'r' | 'b' | 'l' | 'trl' | 'brl';

type Props = {
	thickness?: Thickness;
	padding?: Padding;
	pattern?: BoxPatterns;
	class?: string;
};

export { Root, type Props, Root as Box, type BoxPatterns, type Props as BoxProps, boxVariants };
