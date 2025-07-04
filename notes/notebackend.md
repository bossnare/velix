# Uplivrr Backend Notes

**NestJS**: scalability
**PostgreSQL**: data integrity
**Supabase**: real-time features

REHEFA Prisma dia ataovo amin'ny proj root ilay dossier Prisma fa aza atao anaty src/, amizay look like a scalable app [haha(...)]... mitovy Symfony ihany.

model User {
    id Int @id @default(autoincrement())
    username String?
    email String? @unique
    createdAt DateTime @default(now())
}
