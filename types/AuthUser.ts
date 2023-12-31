export type AuthUser = {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    hashedPassword: string | null;
    createdAt: Date;
    updatedAt: Date;
  }