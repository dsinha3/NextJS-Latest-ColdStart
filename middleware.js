import { NextResponse } from "next/server";

let isFirstInvocation = true;

export async function middleware(request) {

  const isColdStart = isFirstInvocation;
  isFirstInvocation = false; // Set to false after the first invocation

  const response = NextResponse.next();
  response.headers.set("isColdStart", isColdStart.toString());
  return response;
}