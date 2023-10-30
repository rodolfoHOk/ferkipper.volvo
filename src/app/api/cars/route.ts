import { NextRequest, NextResponse } from 'next/server';

import jsonData from '../../../../public/api/cars.json';

export async function GET(request: NextRequest) {
  return NextResponse.json(jsonData);
}
