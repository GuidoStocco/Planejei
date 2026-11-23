import {create} from 'zustand';
import { Session, User } from '@supabase/supabase-js';

type AuthState = {
    session: Session | null;
    user: User | null;
    setAuth: (session: Session | null) => void;
    isLoading: boolean;
}



export const useAuthStore = create<AuthState>((set) => ({

    session: null,
    user: null,
    isLoading: true,


    setAuth:(session) => set({
        session: session,
        user: session?.user ?? null,
        isLoading: false
    })

}))