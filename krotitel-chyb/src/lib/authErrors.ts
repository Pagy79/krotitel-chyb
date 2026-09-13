const MAP: Record<string, string> = {
  "Invalid login credentials": "Nesprávný e-mail nebo heslo.",
  "User already registered": "Účet s tímto e-mailem už existuje. Zkus se přihlásit.",
  "Email not confirmed": "Nejdřív potvrď e-mail — zkontroluj schránku.",
  "Password should be at least 6 characters": "Heslo musí mít alespoň 6 znaků.",
  "Unable to validate email address: invalid format": "Zadej platnou e-mailovou adresu.",
  "For security purposes, you can only request this after some time.":
    "Z bezpečnostních důvodů to zkus znovu až za chvíli.",
  "New password should be different from the old password.": "Nové heslo musí být jiné než původní.",
  "Auth session missing!": "Odkaz na obnovu hesla vypršel. Požádej o nový e-mail.",
};

export function translateAuthError(message: string) {
  return MAP[message] || message;
}
