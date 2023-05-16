import { prepareStylesSSR } from '@svelteuidev/core';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(prepareStylesSSR);