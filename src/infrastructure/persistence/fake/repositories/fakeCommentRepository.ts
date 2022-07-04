import { Comment } from "../../../../domain/entities/comment";
import { CommentRepository } from "../../../../application/repository/commentRepository";

export class fakeCommentRepository implements CommentRepository{
    private commentRef: Comment[] = []

    constructor(){
        const comment01 = new Comment()

        Object.assign(comment01, {
            productId: '01',
            text: 'primeiro comentario', 
            postDate: new Date(),
            userId: '01',
            userName: 'Diego'
        })
    }

    public async all(productId: string): Promise<Comment[]>{
        throw new Error('...')
    }

    public async create(obj:Comment): Promise<String>{
        throw new Error('...')
    }

    public async change(obj: Comment, id: string): Promise<object>{
        throw new Error('...')
    }

    public async get(id: string): Promise<Comment> {
        throw new Error('...')
    }
}