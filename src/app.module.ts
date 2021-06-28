import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoachModule } from './coach/coach.module';

@Module({
  imports: [
      MongooseModule.forRoot(
          'mongodb+srv://lalith:Lalith1999@@cluster0.xsote.mongodb.net/coach?retryWrites=true&w=majority'
          ),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    CoachModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}