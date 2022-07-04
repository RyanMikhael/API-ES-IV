import { Comment } from "../../domain/entities/comment";
import { CommentRepository } from "../repository/commentRepository";


interface AddCommentRequestModel{
    id?: string;
    productId: string;
    text: string;
    postDate: Date;
    userId: string;
    userName: string;
}

export class AddCommentCommand{
    private commentRepository: CommentRepository;

    constructor(commentRepository: CommentRepository){
        this.commentRepository = commentRepository;
    }

    public async execute(request: AddCommentRequestModel): Promise<String>{
        const newComment = request as Comment;

        const id = this.commentRepository.create(newComment);

        return id;
    }
}