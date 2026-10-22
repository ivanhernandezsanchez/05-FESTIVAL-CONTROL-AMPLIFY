import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

const dataConfig = (outputs as { data?: { url?: string } }).data;
export const backendConfigured = Boolean(dataConfig?.url);

if (backendConfigured) {
  Amplify.configure(outputs);
}
