import { Comment } from "../../domain/entities/comment";
import {CommentRepository} from "../repository/commentRepository";

export class GetAllCommentsQuery{
    private commentRepository: CommentRepository;

    constructor(commentRepository: CommentRepository){
        this.commentRepository = commentRepository;
    }

    public async execute(request: string): Promise<Comment[]>{
        const reqId = request;

        return this.commentRepository.all(reqId);
    }
}