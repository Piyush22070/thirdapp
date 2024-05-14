import { Comments } from "../data"
import { redirect } from "next/navigation";
//updating the git 
// to get the specific comments from the array
export async function GET(
    _request : Request,
    { params } : { params : { id : string } }
    )
{
     if( parseInt(params.id) > Comments.length ){
        redirect("/comments/notfound")
     }   
    const Comment = Comments.find(Comment => Comment.id === parseInt(params.id))
    return Response.json(Comment)
}

//This is Updated comments 
export async function PATCH(request : Request, {params}:{params:{id:string}}){
    const body = await request.json()
    const { cmnt } =  body
    const index = Comments.findIndex(comment => comment.id === parseInt(params.id))
    Comments[index].cmnt = cmnt
    return Response.json(Comments[index])
}

// this is delete function
export async function DELETE(request:Request ,{params}:{params:{id:string}}){
    const index = Comments.findIndex(comment => comment.id === parseInt(params.id))
    Comments.splice(index,1)
    return Response.json(Comments)
}