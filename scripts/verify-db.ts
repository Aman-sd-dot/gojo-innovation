import { prisma } from '../src/lib/database/prisma';

async function verifyDatabase() {
  console.log('='.repeat(75));
  console.log('NEON POSTGRESQL DATABASE VERIFICATION - GOJO INNOVATION');
  console.log('='.repeat(75));

  const startTime = Date.now();

  try {
    // 1. Connection check
    console.log('\n[1/5] Testing connection to Neon PostgreSQL...');
    await prisma.$connect();
    const connectLatency = Date.now() - startTime;
    console.log(`✅ Connection established successfully in ${connectLatency}ms.`);

    // 2. Query Postgres server details
    console.log('\n[2/5] Querying PostgreSQL server metadata...');
    const serverInfo = await prisma.$queryRaw<
      Array<{
        version: string;
        current_database: string;
        current_user: string;
      }>
    >`SELECT version(), current_database(), current_user;`;

    if (serverInfo.length > 0) {
      console.log(`✅ Database Name: ${serverInfo[0].current_database}`);
      console.log(`✅ Database User: ${serverInfo[0].current_user}`);
      console.log(`✅ Engine Version: ${serverInfo[0].version.split(' ')[0]} ${serverInfo[0].version.split(' ')[1]}`);
    }

    // 3. Table counts
    console.log('\n[3/5] Querying table record counts...');
    const contactCount = await prisma.contactInquiry.count();
    const userCount = await prisma.user.count();
    const newsletterCount = await prisma.newsletterSubscriber.count().catch(() => 'N/A');
    const analyticsCount = await prisma.analyticsEvent.count().catch(() => 'N/A');

    console.log(`📊 ContactInquiry records:      ${contactCount}`);
    console.log(`📊 User records:                ${userCount}`);
    console.log(`📊 NewsletterSubscriber records: ${newsletterCount}`);
    console.log(`📊 AnalyticsEvent records:      ${analyticsCount}`);

    // 4. Inspect latest records from ContactInquiry
    console.log('\n[4/5] Inspecting latest 3 Contact Inquiries...');
    const recentInquiries = await prisma.contactInquiry.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        fullName: true,
        email: true,
        subject: true,
        inquiryType: true,
        createdAt: true,
      },
    });

    if (recentInquiries.length === 0) {
      console.log('ℹ️ No records found in ContactInquiry table.');
    } else {
      recentInquiries.forEach((inq, index) => {
        console.log(`  [Record ${index + 1}] ID: ${inq.id}`);
        console.log(`    Name:       ${inq.fullName}`);
        console.log(`    Email:      ${inq.email}`);
        console.log(`    Subject:    ${inq.subject}`);
        console.log(`    Type:       ${inq.inquiryType}`);
        console.log(`    Created At: ${inq.createdAt.toISOString()}`);
      });
    }

    // 5. Test Write + Read-back Verification (CRUD probe)
    console.log('\n[5/5] Performing live CRUD write-and-verify test...');
    const testProbe = await prisma.contactInquiry.create({
      data: {
        fullName: 'DB Health Check Probe',
        email: 'probe@gojoinnovation.internal',
        subject: 'Database Verification Probe',
        message: 'Automated verification check to ensure Neon DB write operations succeed.',
        inquiryType: 'GENERAL_CORPORATE',
      },
    });

    console.log(`✅ Write Probe Created: ID = ${testProbe.id}`);

    const verifyRead = await prisma.contactInquiry.findUnique({
      where: { id: testProbe.id },
    });

    if (verifyRead && verifyRead.id === testProbe.id) {
      console.log(`✅ Read-back verified: Record matches database state.`);
    } else {
      throw new Error('Read-back verification failed: record not found.');
    }

    // Clean up probe
    await prisma.contactInquiry.delete({
      where: { id: testProbe.id },
    });
    console.log(`✅ Cleanup verified: Temporary health probe deleted successfully.`);

    const totalDuration = Date.now() - startTime;
    console.log('\n' + '='.repeat(75));
    console.log(`🎉 DATABASE STATUS: FULLY OPERATIONAL & HEALTHY (${totalDuration}ms total)`);
    console.log('='.repeat(75));
  } catch (err: unknown) {
    const error = err as Error;
    console.error('\n❌ DATABASE ERROR ENCOUNTERED:');
    console.error(error.message || error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

verifyDatabase();

