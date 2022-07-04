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

    public async all(string): Promise<Comment[]>{
        return this.commentRef
    }

    public async create(Comment): Promise<String>{
        return Comment
    }

    public async change(Comment,string): Promise<object>{
        return Comment
    }

    public async get(id): Promise<Comment> {
        return this.commentRef[id]
    }
}
