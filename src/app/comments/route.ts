import { Comments } from "./data"
import { NextRequest } from "next/server";


export async function GET(request : NextRequest){
    // console.log(request)
    const searchParamas = request.nextUrl.searchParams
    // console.log(searchParamas) {query = first}
    const query = searchParamas.get("query")
    // console.log(query)  first

    const filterArray = query ?
    Comments.filter(Comment => Comment.cmnt.includes(query))
    :Comments

     return Response.json(filterArray)
}



export async function POST(request : Request){

   
    // this is loacal variable 
    const Comment = await request.json();
    const newComment = {
        id : Comments.length +1,
        //getting data from response
        cmnt : Comment.cmnt,
    };

// this is pushing of this comment in comments Datas
    Comments.push(newComment);

    //This is sending of the response of to the json file 
    return new Response(JSON.stringify(newComment),
    {
        headers :{ "Content-Type": "application/json" },
        status :201,
    });
}

