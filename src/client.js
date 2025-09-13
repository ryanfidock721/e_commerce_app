import {createClient} from '@supabase/supabase-js'

export const supabase = createClient(
    "https://lbwgmqvvtmvjfagdrwzk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxid2dtcXZ2dG12amZhZ2Ryd3prIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2ODE2MzgsImV4cCI6MjA3MzI1NzYzOH0.AIMtGWnH9OTpqL7VjV816ywBQ8G43va-0nV0sgQVAQE"
)