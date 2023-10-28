import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {

    return NextResponse.json([{
        name: "Ankit Kumar", id: 1, price: 1000
    }, {
        name: "Ankit Kumar 1", id: 2, price: 2000
    }, {
        name: "Ankit Kumar 3", id: 3, price: 3000
    }])
}


export async function POST(request: NextRequest) {

    const body = await request.json()
    console.log(body, "bodybody")
    const validation = schema.safeParse(body)
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })
    return NextResponse.json({ id: 10, name: body.name, price: body.price })
}