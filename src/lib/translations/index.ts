import i18n, { type Config, type Parser } from 'sveltekit-i18n';
import lang from './lang.json';

export const config: Config = {
	fallbackLocale: 'nl',
	translations: {
		nl: { lang },
		en: { lang }
	},
	loaders: [
		{
			locale: 'nl',
			key: 'wb',
			loader: async () => (await import('./nl/wb.json')).default
		},
		{
			locale: 'en',
			key: 'wb',
			loader: async () => (await import('./en/wb.json')).default
		},
	]
};

export const { t, loading, locales, locale, loadTranslations, setLocale } = new i18n<
	Parser.Params<{ item?: string }>
>(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));