import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsController } from './announcements.controller';
import { AnnouncementRepository } from './repositories/announcement.repository';
import { AnnouncementPrismaRepository } from './repositories/announcement.prisma.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CommentsModule } from '../comments/comments.module';

@Module({
	controllers: [
		AnnouncementsController
	],
	providers: [
		AnnouncementsService,
		PrismaService,
		{
			provide: AnnouncementRepository,
			useClass: AnnouncementPrismaRepository
		}
	],
	imports: [CommentsModule]
})
export class AnnouncementsModule { }
