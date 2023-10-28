import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    //NextRequest helps us to avoid cache
    return NextResponse.json([{
        name: "Ankit Kumar", id: 1
    }, {
        name: "Arun Kumar", id: 2
    }])
}


export async function POST(request: NextRequest) {
    const { name } = await request.json();
    if (!name)
        return NextResponse.json({ error: "Please enter the Valid Name" }, { status: 400 })
    return NextResponse.json({ id: new Date(), name: name || "" });
}
