declare module 'pngjs' {
	import { PNGOptions as _PNGOptions } from 'pngjs2';
	export * from 'pngjs2';

	export interface PNGOptions extends _PNGOptions {
		bgColor?: { red: number; green: number; blue: number };
	}
}
