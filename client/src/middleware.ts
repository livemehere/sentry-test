import { NextRequest, NextResponse } from "next/server";

/* express 의 미들웨어와 동일하다(next 가 조금 묻어있는것 빼고) */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  return response;
}
