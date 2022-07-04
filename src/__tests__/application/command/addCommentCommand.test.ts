import {Comment} from "../../../domain/entities/comment"
import {AddCommentCommand} from "../../../application/command/addCommentCommand"
import { fakeCommentRepository } from "../../../infrastructure/persistence/fake/repositories/fakeCommentRepository"

const commentRepository = new fakeCommentRepository()
const addCommentCommand = new AddCommentCommand(commentRepository)

describe('Add Comment', () => {
    it('Adicionando comment 01', async () => {
        const comment: Comment = {
            productId: '01',
            text: 'primeiro comentario', 
            postDate: new Date(),
            userId: '01',
            userName: 'Diego'
        }
        const response = await addCommentCommand.execute(comment)

        expect(response).toEqual(comment)
    })
})
