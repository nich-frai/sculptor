import type { PartialDeep } from 'type-fest';
import { deepmerge } from '../utils/deepmerge';

export const DefaultTheme = {

	'item-height' : '3rem',
	color: {
		primary: {
			'h': '165',
			's': '75%',
			'l': '25%',
			'': 'hsl($.h, $.s, $.l)',
			50: 'hsl($.h, $.s, 90%)',
			900: 'hsl($.h, $.s, 10%)',
			'darker': '#5c9d8b'
		},

		secondary: {
			'': 'lab(71, -24, 28)'
		},

		neutral: {

		},

		info: {
			'': 'hsl(218, 41%, 56%)',
			200: 'hsl(218, 26%, 78%)',
			500: 'hsl(218, 46%, 48%)',
			700: 'hsl(218, 58%, 15%)',
			900: 'hsl(218, 60%, 8%)'
		},

		success: {
			'': 'hsl(96, 72%, 68%)',
			200: 'hsl(96, 37%, 79%)',
			500: 'hsl(96, 73%, 50%)',
			700: 'hsl(96, 75%, 16%)',
			900: 'hsl(96, 78%, 8%)',
		},

		error: {
			'': 'hsl(3, 100%, 76%)',
			500: 'hsl(3, 90%, 70%)',
			700: 'hsl(358, 85%, 21%)',
			900: 'hsl(358, 85%, 8%)'
		},
	},

	text: {
		color: {
			'on-surface': {
				'': 'var(--color-primary-900)',
				1: '#404040',
				2: '#3a3a3a',
				3: '#202020'
			},
			'on-contrast-surface' : {
				'': 'var(--color-primary-50)',
				1: '#f8f8f8',
				2: '#f0f0f0',
				3: '#e9e9e9'
			}
		}
	},

	radius: [
		'0px',
		'3px',
		'5px',
		'7px',
		'10px'
	],

	surface: {
		0: 'transparent',
		1: 'rgba(0,0,0,0.05)',
		2: 'rgba(0,0,0,0.1)',
		3: 'rgba(0,0,0,0.15)',
		4: 'rgba(0,0,0,0.2)',
		contrast: {
			0: 'rgba(30,30,30,0.6)',
			1: 'rgba(30,30,30,0.7)',
			2: 'rgba(30,30,30,0.8)',
			3: 'rgba(30,30,30,0.9)',
			4: 'rgba(30,30,30,1)'
		}
	},

	transition: {
		duration: {
			'': '250ms',
			slower: '700ms',
			slow: '400ms',
			fast: '150ms',
			faster: '100ms'
		}
	},

	icon: {

	},

	// Components
	titlebar: {
		bg : 'var(--surface-1)',
		height: 'clamp(30px, 5vh, 60px)'
	},


	'icon-button': {
		bg: 'var(--surface-1)',
		color: 'var(--text-color-on-surface-1)',
		hover: {
			color: 'var(--text-color-on-surface-2)',
			bg: 'var(--surface-2)'
		}
	},

	'vertical-separator': {
		width: '2px',
		height: '100%',
	},

	'list-item' : {
		subtitle : {
			size : '0.8em',
			weight : '100',
			color: 'var(--text-color-on-surface-1)'
		}
	}

};

export type TSculptorTheme = typeof DefaultTheme;

export function customizeTheme<T extends PartialDeep<TSculptorTheme>>(options: T): TSculptorTheme {
	return deepmerge(DefaultTheme, options) as TSculptorTheme;
}
