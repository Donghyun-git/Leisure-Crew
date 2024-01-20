import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create()(
  persist(
    (set) => ({
      accesstoken: '',
      setUserInfo: (state) =>
        set({
          ...state,
        }),
      setAccessToken: (accesstoken) =>
        set({
          accesstoken,
        }),
      removeUserInfo: () =>
        set(
          ({ setAccessToken, setUserInfo, removeUserInfo }) => ({
            setAccessToken,
            setUserInfo,
            removeUserInfo,
          }),
          true,
        ),
    }),
    {
      name: 'auth',
    },
  ),
);
