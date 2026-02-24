import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vuhmrusddjbiekldxdrm.supabase.co';
const supabaseKey = 'sb_publishable_lmj2ODP8UJnHkBAwBaxfvg_bbheIGO4';

export const supabase = createClient(supabaseUrl, supabaseKey);
