import { z } from 'zod';
import Constants from 'expo-constants';

const extra = Constants?.expoConfig?.extra || Constants?.manifest?.extra;

const envSchema = z.object({
  oneSignalAppId: z.string().min(1, 'ONE_SIGNAL_APP_ID é obrigatório'),
});

const _env = envSchema.safeParse(extra);

if (!_env.success) {
  console.error('⚠️ Erro nas variáveis de ambiente:', _env.error.format());
  throw new Error('Variáveis de ambiente inválidas. Corrija o app.config.ts ou .env');
}

export type Env = z.infer<typeof envSchema>
export const env = _env.data;