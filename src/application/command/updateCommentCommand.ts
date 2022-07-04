import { Comment } from "../../domain/entities/comment";
import { CommentRepository } from "../repository/commentRepository";

interface  UpdateCommentRequestModel{
     id: string;
     productId: string;
     text: string;
     postDate: Date;
     userId: string;
     userName: string;
}

export class UpdateCommentCommand{
     private commentRepository: CommentRepository;

     constructor(commentRepository: CommentRepository){
          this.commentRepository = commentRepository;
     }

     public async execute(request: UpdateCommentRequestModel): Promise<object>{
          const modifiedComment = request as Comment;

          const reqId = modifiedComment.id;

          const modInfo = this.commentRepository.change(modifiedComment, reqId);

          return modInfo;
     }
}