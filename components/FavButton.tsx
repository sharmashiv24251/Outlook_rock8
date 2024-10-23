import React from "react";
import { Button } from "./ui/button";
import { Star, StarOff } from "lucide-react";
import { useEmailStore } from "@/store";

interface FavoriteButtonProps {
  emailId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ emailId }) => {
  const { favoriteEmails, toggleFavorite } = useEmailStore();
  const isFavorite = favoriteEmails.includes(emailId);

  return (
    <Button onClick={() => toggleFavorite(emailId)} className="rounded-full">
      {isFavorite ? (
        <>
          <StarOff className="mr-2 h-4 w-4" /> Remove from Favorites
        </>
      ) : (
        <>
          <Star className="mr-2 h-4 w-4" /> Add to Favorites
        </>
      )}
    </Button>
  );
};

export default FavoriteButton;
