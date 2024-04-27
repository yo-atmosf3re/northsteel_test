import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useLoginState, getLoginState] = buildSelector((state: StateSchema) => state?.loginForm);
