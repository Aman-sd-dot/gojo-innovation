import { NextResponse } from 'next/server';
import { cms } from '@/lib/cms/client';

export async function GET(
  request: Request,
  { params }: { params: { type: string } }
) {
  const { type } = params;

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
