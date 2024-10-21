import { NextURL } from 'next/dist/server/web/next-url';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {  
    const {pathname, origin} = request.nextUrl;

    if((pathname === "/dashboard" || pathname === "/cart") && !request.cookies.get("userData")?.value ) {
        const loginUrl = new NextURL("/login", origin)
        return NextResponse.redirect(loginUrl)
    } else {
        return NextResponse.next();
    }
}

