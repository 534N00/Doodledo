import { createClient } from '@supabase/supabase-js';

// Supabase object
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) { console.log("Signout error: ", error.message); }
    else { console.log("Signout successful"); }
};

export const signUpUser = async (email, password, password2, screenName) =>  {
    if (password != password2) {
        console.error("Passwords do not match"); return;
    }
    if (password.length < 8) { console.error("Password must be at least 8 characters long."); return; }
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });
    if (error) {
        console.error("Error signing up: ", error.message);
        return;
    }
    console.log(data);
    // Insert screen name into database
    const { error: insertError } = await supabase.from('Users').insert([{ screen_name: screenName, UID: data.user.id }]);
    if (insertError) {
        console.error("Error inserting screen name: ", insertError.message);
        return;
    }
    console.log("Sign up successful");
};

export const signInWtihEmail = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });
    if (error) {
        console.error("Error signing in: ", error.message);
        return;
    }
    console.log(data);
    console.log(supabase.auth.getUser());
    console.log(supabase.auth.getSession());
    // supabase.auth already caches user and session info for us
    //"src\\assets\\testPFP.jpg"
};