import { type NextRequest } from "next/server"
import { headers,cookies } from "next/headers"

export async function GET(request : NextRequest){
    const requestHeader =  new Headers(request.headers)
    cookies().set("resultPage","2")

    
    console.log(headers().get("Content-Type"))
    console.log(headers().get("Authorization"))
    console.log(cookies().get("resultPage"))
    console.log(cookies().get("theme"));

    return new Response("This is Api from api file")
}