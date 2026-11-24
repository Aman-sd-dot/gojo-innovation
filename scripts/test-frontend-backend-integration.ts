// Frontend and Backend Integration Test Suite
// Verifies full integration between Next.js UI flows and Backend API Handlers

import { POST as contactPOST } from '../src/app/api/contact/route';
import { POST as careersPOST } from '../src/app/api/careers/route';
import { POST as newsletterPOST } from '../src/app/api/newsletter/route';
import { POST as analyticsPOST } from '../src/app/api/analytics/track/route';
import { GET as nutritionGET, POST as nutritionPOST } from '../src/app/api/nutrition-calc/route';
import { GET as cmsGET } from '../src/app/api/cms/[type]/route';
import { prisma } from '../src/lib/database/prisma';

interface IntegrationResult {
  suite: string;
  testCase: string;
  endpoint: string;
  status: 'PASS' | 'FAIL';
  details: string;
  latencyMs: number;
}

const results: IntegrationResult[] = [];

async function runIntegrationTests() {
  console.log('='.repeat(85));
  console.log('GOJO INNOVATION — FRONTEND & BACKEND INTEGRATION TEST SUITE');
  console.log('Testing full user journeys, UI payloads, database persistence & API responses');
  console.log('='.repeat(85));

  // --------------------------------------------------------------------------
  // FLOW 1: Contact Form User Journey (/contact)
  // --------------------------------------------------------------------------
  console.log('\n[Integration Flow 1] Contact Form UI -> /api/contact -> Neon PostgreSQL');
  {
    const start = Date.now();
    // Simulating user filling contact form on /contact
    const uiFormData = {
      fullName: 'Aarav Malhotra',
      email: 'aarav.malhotra@healthtech-innovations.in',
      phone: '+91 98112 34567',
      organization: 'HealthTech Innovations India',
      subject: 'Bioheed Clinical Partnership Inquiry',
      message: 'Exploring potential clinical trial collaborations for bioavailable micro-encapsulated calcium beverages.',
      inquiryType: 'PARTNERSHIP',
    };

    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(uiFormData),
    });

    const res = await contactPOST(req);
    const latencyMs = Date.now() - start;
    const data = await res.json();

    const isSuccess = res.status === 201 && data.success === true && !!data.referenceId;
    results.push({
      suite: 'Contact Form',
      testCase: 'Submit Valid Corporate Inquiry',
      endpoint: '/api/contact',
      status: isSuccess ? 'PASS' : 'FAIL',
      details: isSuccess ? `Saved in Neon DB (Ref: ${data.referenceId})` : `Failed with status ${res.status}`,
      latencyMs,
    });
    console.log(`${isSuccess ? '✅ PASS' : '❌ FAIL'} | Contact Form: Dispatched inquiry, DB Ref = ${data.referenceId || 'N/A'} (${latencyMs}ms)`);

    // Verify record in Database
    if (data.referenceId) {
      const dbRecord = await prisma.contactInquiry.findUnique({
        where: { id: data.referenceId },
      });
      const dbMatch = dbRecord && dbRecord.email === uiFormData.email;
      results.push({
        suite: 'Contact Form DB Sync',
        testCase: 'Database State Integrity Check',
        endpoint: 'Prisma Client / Neon DB',
        status: dbMatch ? 'PASS' : 'FAIL',
        details: dbMatch ? 'Database row matches frontend form data perfectly' : 'Database record mismatch',
        latencyMs: 0,
      });
      console.log(`${dbMatch ? '✅ PASS' : '❌ FAIL'} | DB Integrity: Record verified directly in PostgreSQL`);

      // Cleanup test inquiry to keep DB clean
      await prisma.contactInquiry.delete({ where: { id: data.referenceId } });
      console.log('🧹 Cleanup: Test contact record cleaned up successfully.');
    }
  }

  // --------------------------------------------------------------------------
  // FLOW 2: Careers Job Application Journey (/careers)
  // --------------------------------------------------------------------------
  console.log('\n[Integration Flow 2] Job Application Modal -> /api/careers');
  {
    const start = Date.now();
    // Simulating applicant applying for "Lead Formulation Scientist" on /careers
    const applicationPayload = {
      jobId: 'JOB-01',
      jobTitle: 'Lead Formulation Scientist',
      fullName: 'Dr. Sunita Rao',
      email: 'sunita.rao@pharmaresearch.ac.in',
      phone: '+91 97234 56789',
      linkedIn: 'https://linkedin.com/in/drsunitarao',
      coverNote: 'Extensive background in lipid-based nano-emulsions and nutraceutical formulation.',
    };

    const req = new Request('http://localhost:3000/api/careers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(applicationPayload),
    });

    const res = await careersPOST(req);
    const latencyMs = Date.now() - start;
    const data = await res.json();

    const isSuccess = res.status === 200 && data.success === true && !!data.applicantId;
    results.push({
      suite: 'Careers Flow',
      testCase: 'Candidate Job Application Submission',
      endpoint: '/api/careers',
      status: isSuccess ? 'PASS' : 'FAIL',
      details: isSuccess ? `Applicant Registered: ${data.applicantId}` : `Status ${res.status}`,
      latencyMs,
    });
    console.log(`${isSuccess ? '✅ PASS' : '❌ FAIL'} | Careers Form: Application recorded (${data.applicantId}) (${latencyMs}ms)`);
  }

  // --------------------------------------------------------------------------
  // FLOW 3: Footer Newsletter Subscription (Global UI -> /api/newsletter)
  // --------------------------------------------------------------------------
  console.log('\n[Integration Flow 3] Footer Subscription Bar -> /api/newsletter');
  {
    const start = Date.now();
    const newsletterPayload = {
      email: 'investor.digest@capital-health.com',
    };

    const req = new Request('http://localhost:3000/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newsletterPayload),
    });

    const res = await newsletterPOST(req);
    const latencyMs = Date.now() - start;
    const data = await res.json();

    const isSuccess = res.status === 200 && data.success === true;
    results.push({
      suite: 'Newsletter Flow',
      testCase: 'Footer Email Subscription',
      endpoint: '/api/newsletter',
      status: isSuccess ? 'PASS' : 'FAIL',
      details: isSuccess ? data.message : `Status ${res.status}`,
      latencyMs,
    });
    console.log(`${isSuccess ? '✅ PASS' : '❌ FAIL'} | Newsletter: Subscriber registered successfully (${latencyMs}ms)`);
  }

  // --------------------------------------------------------------------------
  // FLOW 4: Telemetry Event Pipeline (trackEvent -> /api/analytics/track)
  // --------------------------------------------------------------------------
  console.log('\n[Integration Flow 4] Telemetry & User Interactions -> /api/analytics/track');
  {
    const start = Date.now();
    const telemetryPayload = {
      action: 'explore_maharaja_drink',
      category: 'PRODUCT_INTERACTION',
      label: 'the-maharajas-drink-200ml',
      value: 1,
      metadata: { referrer: '/products', viewport: 'desktop' },
      timestamp: new Date().toISOString(),
    };

    const req = new Request('http://localhost:3000/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(telemetryPayload),
    });

    const res = await analyticsPOST(req);
    const latencyMs = Date.now() - start;
    const data = await res.json();

    const isSuccess = res.status === 200 && data.success === true && data.recorded === true;
    results.push({
      suite: 'Analytics Telemetry',
      testCase: 'Frontend Event Beacon Ingestion',
      endpoint: '/api/analytics/track',
      status: isSuccess ? 'PASS' : 'FAIL',
      details: isSuccess ? 'Telemetry event ingested' : `Status ${res.status}`,
      latencyMs,
    });
    console.log(`${isSuccess ? '✅ PASS' : '❌ FAIL'} | Analytics: Event ingested successfully (${latencyMs}ms)`);
  }

  // --------------------------------------------------------------------------
  // FLOW 5: GojoMe Nutrition Engine (/gojome UI -> /api/nutrition-calc)
  // --------------------------------------------------------------------------
  console.log('\n[Integration Flow 5] GojoMe Food Logging Simulator -> /api/nutrition-calc');
  {
    // Step 5A: Fetch Verified Food Library
    const startGet = Date.now();
    const reqGet = new Request('http://localhost:3000/api/nutrition-calc');
    const resGet = await nutritionGET(reqGet);
    const latencyGet = Date.now() - startGet;
    const dataGet = await resGet.json();

    const isGetSuccess = resGet.status === 200 && Array.isArray(dataGet.items) && dataGet.items.length >= 5;
    results.push({
      suite: 'GojoMe Engine',
      testCase: 'Fetch Verified Nutrition Database',
      endpoint: 'GET /api/nutrition-calc',
      status: isGetSuccess ? 'PASS' : 'FAIL',
      details: `${dataGet.items?.length || 0} verified food items loaded`,
      latencyMs: latencyGet,
    });
    console.log(`${isGetSuccess ? '✅ PASS' : '❌ FAIL'} | GojoMe: Retrieved ${dataGet.items?.length} items from database (${latencyGet}ms)`);

    // Step 5B: Multi-item Calculation Journey
    // Meal: 1 Can of Maharaja's Drink + 1 Sprouted Moong Salad
    const startCalc = Date.now();
    const mealOrder = {
      items: [
        { id: 'gojo-vanilla-can', quantity: 1 },
        { id: 'sprouted-moong-salad', quantity: 1 },
      ],
    };

    const reqCalc = new Request('http://localhost:3000/api/nutrition-calc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mealOrder),
    });

    const resCalc = await nutritionPOST(reqCalc);
    const latencyCalc = Date.now() - startCalc;
    const dataCalc = await resCalc.json();

    const expectedCalories = 280; // 160 + 120
    const expectedProtein = 19.8;  // 12 + 7.8
    const expectedCalcium = 415;   // 350 + 65
    const expectedFibre = 8.7;     // 3.5 + 5.2

    const isCalcCorrect =
      resCalc.status === 200 &&
      dataCalc.totals?.calories === expectedCalories &&
      dataCalc.totals?.proteinGrams === expectedProtein &&
      dataCalc.totals?.calciumMg === expectedCalcium &&
      dataCalc.totals?.fibreGrams === expectedFibre;

    results.push({
      suite: 'GojoMe Engine',
      testCase: 'Calculate Multi-Item Meal Nutrition',
      endpoint: 'POST /api/nutrition-calc',
      status: isCalcCorrect ? 'PASS' : 'FAIL',
      details: `Totals: ${dataCalc.totals?.calories} kcal, ${dataCalc.totals?.proteinGrams}g protein, ${dataCalc.totals?.calciumMg}mg calcium`,
      latencyMs: latencyCalc,
    });
    console.log(`${isCalcCorrect ? '✅ PASS' : '❌ FAIL'} | GojoMe Calc: Exact totals computed [${dataCalc.totals?.calories} cal, ${dataCalc.totals?.proteinGrams}g P, ${dataCalc.totals?.calciumMg}mg Ca] (${latencyCalc}ms)`);
  }

  // --------------------------------------------------------------------------
  // FLOW 6: CMS Content Hydration (/api/cms/[type] -> Frontend Pages)
  // --------------------------------------------------------------------------
  console.log('\n[Integration Flow 6] Headless CMS Content Hydration -> /api/cms/[type]');
  {
    const cmsTypes = ['pillars', 'products', 'rd', 'careers', 'investors', 'articles'];
    for (const type of cmsTypes) {
      const start = Date.now();
      const req = new Request(`http://localhost:3000/api/cms/${type}`);
      const res = await cmsGET(req, { params: Promise.resolve({ type }) });
      const latencyMs = Date.now() - start;
      const data = await res.json();

      const isSuccess = res.status === 200 && data.success === true && !!data.data;
      results.push({
        suite: 'CMS Hydration',
        testCase: `Load CMS Content: ${type}`,
        endpoint: `/api/cms/${type}`,
        status: isSuccess ? 'PASS' : 'FAIL',
        details: isSuccess ? 'Content payload hydrated' : `Status ${res.status}`,
        latencyMs,
      });
      console.log(`${isSuccess ? '✅ PASS' : '❌ FAIL'} | CMS [${type}]: Data hydrated (${latencyMs}ms)`);
    }
  }

  // --------------------------------------------------------------------------
  // Summary Report
  // --------------------------------------------------------------------------
  console.log('\n' + '='.repeat(85));
  console.log('INTEGRATION TEST SUMMARY');
  console.log('='.repeat(85));

  const total = results.length;
  const passed = results.filter((r) => r.status === 'PASS').length;
  const failed = results.filter((r) => r.status === 'FAIL').length;

  results.forEach((r, idx) => {
    const icon = r.status === 'PASS' ? '✅ PASS' : '❌ FAIL';
    console.log(`${(idx + 1).toString().padStart(2, '0')}. ${icon} | [${r.suite.padEnd(16)}] | ${r.testCase.padEnd(35)} | ${r.endpoint.padEnd(24)} | ${r.details}`);
  });

  console.log('='.repeat(85));
  console.log(`TOTAL FLOWS TESTED: ${total} | PASSED: ${passed} | FAILED: ${failed}`);
  console.log('='.repeat(85));
}

runIntegrationTests()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

