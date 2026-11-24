import { NextResponse } from 'next/server';
import { cms } from '@/lib/cms/client';

const ALLOWED_METHODS = ['GET'];

function methodNotAllowed() {
  return NextResponse.json(
    {
      error: 'Method Not Allowed',
      message: 'Only GET method is allowed for /api/cms/[type]',
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

// CMS-06: Explicit 405 handlers with Allow header for all non-GET methods
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

// CMS-01 & CMS-02: GET handler
export async function GET(
  request: Request,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;

  try {
    switch (type) {
      case 'pillars': {
        const data = await cms.getEcosystemPillars();
        return NextResponse.json({ success: true, data });
      }
      case 'products': {
        const flagship = await cms.getFlagshipProduct();
        const future = await cms.getFutureNutritionPortfolio();
        return NextResponse.json({ success: true, data: { flagship, future } });
      }
      case 'rd': {
        const data = await cms.getRdProjects();
        return NextResponse.json({ success: true, data });
      }
      case 'careers': {
        const data = await cms.getCareers();
        return NextResponse.json({ success: true, data });
      }
      case 'investors': {
        const data = await cms.getInvestorReports();
        return NextResponse.json({ success: true, data });
      }
      case 'articles': {
        const data = await cms.getBlogPosts();
        return NextResponse.json({ success: true, data });
      }
      default:
        return NextResponse.json(
          { error: `Unknown content type: ${type}` },
          { status: 404 }
        );
    }
  } catch (error) {
    console.error(`Error querying CMS endpoint for ${type}:`, error);
    return NextResponse.json(
      { error: 'CMS internal processing error' },
      { status: 500 }
    );
  }
}
