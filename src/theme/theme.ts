import type { PartialDeep } from 'type-fest';
import { deepmerge } from '../utils/deepmerge';
import type { TFlattenAsCSSVar } from '../utils/flatten_css_var';

export const DefaultTheme = {
	
	color : {
		primary : {
			'h' : '96',
			's' : '50',
			'l' : '50',
			'' : 'hsl($.h, $.s%, $.l%)',
			50 : 'hsl($.h, $.s%, 90%)',
			900 : 'hsl($.h, $.s, 10%)',
			'darker' : '#5c9d8b'
		},
		
		secondary : {
			'' : 'lab(71, -24, 28)'
		},

		neutral : {

		},

		info : {
			'' : 'hsl(218, 41%, 56%)',
			500 : 'hsl(218, 46%, 48%)',
			700 : 'hsl(218, 58%, 15%)',
			900 : 'hsl(218, 60%, 8%)'
		},

		success : {
			'' : 'hsl(96, 72%, 68%)',
			500 : 'hsl(96, 73%, 50%)',
			700 : 'hsl(96, 75%, 16%)',
			900 : 'hsl(96, 78%, 8%)',
		},

		error : {
			'' : 'hsl(3, 100%, 76%)',
			500 : 'hsl(3, 90%, 70%)',
			700 : 'hsl(358, 85%, 21%)',
			900 : 'hsl(358, 85%, 8%)'
		},
	},

	text : {
		color : {
			'on-surface' : {
				'' : 'var(--color-primary-900)',
				1 : '#404040',
				2 : '#3a3a3a',
				3 : '#202020'
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

	surface: ['transparent', 'rgba(0,0,0,0.05)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.15)', 'rgba(0,0,0,0.2)'],

	transition : {
		duration : {
			'' : '250ms',
			slower : '700ms',
			slow : '400ms',
			fast : '150ms',
			faster : '100ms'
		}
	},

	icon : {

	},



	// Components
	titlebar : {
		height: 'clamp(30px, 5vh, 60px)'
	},


	'icon-button' : {
		bg : 'var(--surface-1)',
		color: 'var(--text-color-on-surface-1)',
		hover : {
			color: 'var(--text-color-on-surface-2)',
			bg : 'var(--surface-2)'
		}
	},

};

export type TSculptorTheme = typeof DefaultTheme;

export function customizeTheme<T extends PartialDeep<TSculptorTheme> & TFlattenAsCSSVar>(options: T) {
	return deepmerge(DefaultTheme, options);
}
