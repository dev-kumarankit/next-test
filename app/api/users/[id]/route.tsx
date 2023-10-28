import { NextRequest, NextResponse } from "next/server";


export function GET(request: NextRequest, { params }: { params: { id: number } }) {
    //NextRequest helps us to avoid cache
    if (params.id > 10)
        return NextResponse.json({ error: "User Not Found" }, { status: 404 })

    return NextResponse.json({
        name: "Ankit Kumar", id: `${params.id}`
    })
}
export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
    const { name } = await request.json();
    if (!name)
        return NextResponse.json({ error: "Please enter the Valid Name" }, { status: 400 })
    if (params.id > 10)
        return NextResponse.json({ error: "Please enter the Valid id" }, { status: 400 })
    return NextResponse.json({ id: new Date(), name: (name || "") + params.id });
}

export async function Delete(request: NextRequest, { params }: { params: { id: number } }) {
    if (params.id > 10)
        return NextResponse.json({ error: "User not found" }, { status: 400 })
    return NextResponse.json({ message: "User Deleted successfully" });
}