import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const search = searchParams.get("search") || "";
    const page = (searchParams.get("page") as any) || 1;

    const limit = 12;
    console.log(page);
    const url = `https://dummyjson.com/posts/search?q=${search}&limit=${limit}&skip=${
      (page - 1) * limit
    }`;
    console.log(url);
    const { data: result } = await axios.get(url);

    return NextResponse.json(
      {
        message: "Posts fetched successfully",
        data: result.posts,
        statusCode: 200,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      const statusCode = error.response?.status || 500;
      return NextResponse.json(
        {
          statusCode: statusCode,
          message: error.message || "Error is coming from PublicAPI",
          success: false,
        },
        { status: statusCode }
      );
    } else if (error instanceof Error) {
      return NextResponse.json(
        {
          statusCode: 500,
          message: error.message || "Error loading posts",
          success: false,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          statusCode: 500,
          message: "Error loading posts",
          success: false,
        },
        { status: 500 }
      );
    }
  }
}
