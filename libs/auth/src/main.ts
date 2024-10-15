import 'reflect-metadata';

import 'module-alias/register';
import { authStore } from '@libs/auth/presentation/store/auth.store';

authStore.subscribe(console.log);
authStore.getState().Login('example@domain.com', 'PAssW0r*d!');
