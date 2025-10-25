export interface VerificationToken {
  id: string;
  token: string;
  identifier: string;
  expires: string;
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: string;
  user?: User;
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
  oauth_token_secret: string | null;
  oauth_token: string | null;
  user?: User;
}

export interface User {
  id: string;
  name: string;
  email: string | null;
  password: string | null;
  emailVerified: string | null;
  image: string | null;
  sessions?: Session[];
  accounts?: Account[];
}
