import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePostDto } from './create-post.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 @Get()
    getPosts(){
        let posts={
            user: '',
            qualification: '',
            address_set: [{
                line1: '',
                line2: '',
                city: '',
                state: '',
                country:'',
                zip: '',
            }],
            coach_blog: '',
            coach_desc: ''
        }
        return posts;
    }

    @Post()
    create(@Body() CreatePostDto: CreatePostDto){

        console.log(CreatePostDto);
        
    }
}
