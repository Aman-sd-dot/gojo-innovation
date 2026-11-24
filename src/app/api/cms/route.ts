import { NextResponse } from 'next/server';

const ALLOWED_METHODS = ['GET'];

function methodNotAllowed() {
  return NextResponse.json(
    {
      error: 'Method Not Allowed',
      message: 'Only GET method is allowed for /api/cms',
      allowed: ALLOWED_METHODS,
    },
    {
      status: 405,
      headers: {
        Allow: ALLOWED_METHODS.join(', '),
      },
    }
  );
}

// CMS-03: Missing CMS type handler on base path /api/cms
export async function GET() {
  return NextResponse.json(
    {
      error: 'Missing CMS content type',
      message:
        'A content type parameter is required (e.g. /api/cms/pillars). Available types: pillars, products, rd, careers, investors, articles',
      availableTypes: [
        'pillars',
        'products',
        'rd',
        'careers',
        'investors',
        'articles',
      ],
    },
    { status: 400 }
  );
}

export async function POST() {
  return methodNotAllowed();
}

export async function PUT() {
  return methodNotAllowed();
}

export async function DELETE() {
  return methodNotAllowed();
}

export async function PATCH() {
  return methodNotAllowed();
}

export async function HEAD() {
  return methodNotAllowed();
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: 'GET, OPTIONS',
    },
  });
}

