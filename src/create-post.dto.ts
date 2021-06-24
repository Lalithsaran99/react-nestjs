export class CreatePostDto{
    user: string;
    qualification: string;
    address_set: [{
        line1: string,
        line2: string,
        city: string,
        state: string,
        country: string,
        zip: string,
    }];
    coach_blog: string;
    coach_desc: string;
}