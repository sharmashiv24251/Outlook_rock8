import { create } from "zustand";
import { persist } from "zustand/middleware";

interface EmailStore {
  readEmails: string[];
  favoriteEmails: string[];
  markAsRead: (emailId: string) => void;
  toggleFavorite: (emailId: string) => void;
}

export const useEmailStore = create<EmailStore>()(
  persist(
    (set) => ({
      readEmails: [],
      favoriteEmails: [],
      markAsRead: (emailId) =>
        set((state) => ({
          readEmails: state.readEmails.includes(emailId)
            ? state.readEmails
            : [...state.readEmails, emailId],
        })),
      toggleFavorite: (emailId) =>
        set((state) => ({
          favoriteEmails: state.favoriteEmails.includes(emailId)
            ? state.favoriteEmails.filter((id) => id !== emailId)
            : [...state.favoriteEmails, emailId],
        })),
    }),
    {
      name: "email-storage",
    }
  )
);
