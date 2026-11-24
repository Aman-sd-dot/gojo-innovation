import { NextResponse } from 'next/server';
import { VERIFIED_NUTRITION_DATABASE } from '@/data/mockData';

const ALLOWED_METHODS = ['GET', 'POST'];

function methodNotAllowed() {
  return NextResponse.json(
    {
      error: 'Method Not Allowed',
      message: 'Only GET and POST methods are allowed for /api/nutrition-calc',
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

// NU-12: Explicit 405 handlers with Allow header for all non-GET/POST methods
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
      Allow: 'GET, POST, OPTIONS',
    },
  });
}

// NU-01, NU-02, NU-03: GET handler
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const foodId = searchParams.get('id');

  if (foodId) {
    const item = VERIFIED_NUTRITION_DATABASE.find((f) => f.id === foodId);
    if (!item) {
      return NextResponse.json({ error: 'Food item not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, item });
  }

  return NextResponse.json({
    success: true,
    count: VERIFIED_NUTRITION_DATABASE.length,
    items: VERIFIED_NUTRITION_DATABASE,
  });
}

// NU-04 to NU-11: POST calculation handler
export async function POST(request: Request) {
  try {
    let body: Record<string, unknown>;

    let rawText: string;
    try {
      rawText = await request.text();
    } catch {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    if (!rawText || !rawText.trim()) {
      return NextResponse.json(
        { error: 'Expected items array for calculation' },
        { status: 400 }
      );
    }

    try {
      body = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    // NU-08: Missing items field
    if (
      !body ||
      typeof body !== 'object' ||
      Array.isArray(body) ||
      !('items' in body) ||
      !Array.isArray(body.items)
    ) {
      return NextResponse.json(
        { error: 'Expected items array for calculation' },
        { status: 400 }
      );
    }

    const items = body.items as Array<{ id?: string; quantity?: number }>;

    // NU-07: Empty items array
    if (items.length === 0) {
      return NextResponse.json(
        { error: 'Items array cannot be empty' },
        { status: 400 }
      );
    }

    // Security: Maximum array length constraint (DoS / CPU starvation prevention)
    if (items.length > 50) {
      return NextResponse.json(
        { error: 'Maximum 50 items allowed per calculation request' },
        { status: 400 }
      );
    }

    let totalCalories = 0;
    let totalProtein = 0;
    let totalCalcium = 0;
    let totalFibre = 0;

    for (const item of items) {
      if (!item || typeof item !== 'object') {
        return NextResponse.json(
          { error: 'Each item in the array must be an object with an id and quantity' },
          { status: 400 }
        );
      }

      const { id, quantity } = item;

      // Validate ID presence
      if (!id || typeof id !== 'string' || !id.trim()) {
        return NextResponse.json(
          { error: 'Item id is required and must be a valid string' },
          { status: 400 }
        );
      }

      const trimmedId = id.trim();

      // NU-09: Invalid item ID
      const match = VERIFIED_NUTRITION_DATABASE.find((f) => f.id === trimmedId);
      if (!match) {
        return NextResponse.json(
          { error: `Food item not found: ${trimmedId}` },
          { status: 404 }
        );
      }

      // NU-10 & NU-11: Zero or Negative quantity
      const qty = quantity === undefined ? 1 : quantity;

      if (
        typeof qty !== 'number' ||
        isNaN(qty) ||
        !Number.isFinite(qty) ||
        qty <= 0
      ) {
        return NextResponse.json(
          {
            error: `Invalid quantity for item "${trimmedId}". Quantity must be a positive number greater than 0`,
          },
          { status: 400 }
        );
      }

      if (qty > 1000) {
        return NextResponse.json(
          {
            error: `Invalid quantity for item "${trimmedId}". Maximum quantity allowed per item is 1000`,
          },
          { status: 400 }
        );
      }

      totalCalories += match.calories * qty;
      totalProtein += match.proteinGrams * qty;
      totalCalcium += match.calciumMg * qty;
      totalFibre += match.fibreGrams * qty;
    }

    return NextResponse.json({
      success: true,
      totals: {
        calories: Math.round(totalCalories),
        proteinGrams: parseFloat(totalProtein.toFixed(1)),
        calciumMg: Math.round(totalCalcium),
        fibreGrams: parseFloat(totalFibre.toFixed(1)),
      },
      verifiedCompliance: '100% ICMR & Bioheed Analytical Standard',
    });
  } catch (error) {
    console.error('Error calculating nutrition:', error);
    return NextResponse.json(
      { error: 'Internal server error calculating nutrition' },
      { status: 500 }
    );
  }
}
