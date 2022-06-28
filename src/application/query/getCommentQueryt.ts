import { CommentRepository } from "../repository/commentRepository";
import { Comment } from "../../domain/entities/comment";

export class GetCommentQuery{
    private commentRepository: CommentRepository;

    constructor(commentRepository: CommentRepository){
        this.commentRepository = commentRepository;
    }

    public async execute(request: string): Promise<Comment>{
        const reqId = request;

        return this.commentRepository.get(reqId);
    }
}