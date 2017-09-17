import { Identity } from './identity.model';

export class Profile {
  email: string;
  email_verified: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
  clientID: string;
  updated_at: string;
  user_id: string;
  nickname: string;
  identities: Identity[];
  created_at: string;
  sub: string;
}
