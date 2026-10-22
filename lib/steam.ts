/**
 * TODO: replace with the real Steam app ID before launch. Until then every
 * "Wishlist on Steam" button points at a placeholder store page.
 */
export const STEAM_APP_ID = "APPID";

/** Steam store link with campaign tags so we can see which button was clicked. */
export function steamUrl(placement: string): string {
  return `https://store.steampowered.com/app/${STEAM_APP_ID}/?utm_source=studiosite&utm_medium=web&utm_campaign=coming_soon&utm_content=${placement}`;
}
