import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreatePostDto } from '../create-post.dto';

@Controller('post')
export class PostController {
    @Get()
    getPosts(){
        let posts={
            user: 'Lalith',
            qualification: 'BE',
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
