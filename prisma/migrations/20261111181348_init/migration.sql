-- CreateEnum
CREATE TYPE "PillarType" AS ENUM ('BIOHEED_PHARMACEUTICAL', 'GOJO_NUTRITION', 'GOJOME_TECHNOLOGY', 'GOJO_INNOVATION_CORP');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('CURRENT', 'IN_DEVELOPMENT', 'FUTURE_R_AND_D', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "RdStage" AS ENUM ('DISCOVERY', 'FORMULATION', 'PRE_CLINICAL', 'CLINICAL_EVALUATION', 'PILOT_DEVELOPMENT', 'COMMERCIAL_READY');

-- CreateEnum
CREATE TYPE "JobDepartment" AS ENUM ('R_AND_D', 'NUTRITION', 'TECHNOLOGY', 'DATA_AND_AI', 'PRODUCT', 'MARKETING', 'SALES', 'OPERATIONS', 'FINANCE');

-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('OPEN', 'INTERVIEWING', 'CLOSED');

-- CreateEnum
CREATE TYPE "DocumentCategory" AS ENUM ('QUARTERLY_REPORT', 'ANNUAL_REPORT', 'PRESS_RELEASE', 'CORPORATE_PRESENTATION', 'ESG_FRAMEWORK', 'ANNOUNCEMENT');

-- CreateEnum
CREATE TYPE "InquiryType" AS ENUM ('GENERAL_CORPORATE', 'BIOHEED_HEALTHCARE', 'GOJO_NUTRITION', 'GOJOME_PLATFORM', 'INVESTOR_RELATIONS', 'CAREERS_HR', 'MEDIA_PRESS', 'PARTNERSHIP');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('CONSUMER', 'HEALTHCARE_PROFESSIONAL', 'INVESTOR', 'ENTERPRISE_ADMIN');

-- CreateTable
CREATE TABLE "EcosystemPillar" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "PillarType" NOT NULL,
    "tagline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "primaryColor" TEXT NOT NULL,
    "badgeText" TEXT NOT NULL,
    "routePath" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EcosystemPillar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "status" "ProductStatus" NOT NULL DEFAULT 'CURRENT',
    "category" TEXT NOT NULL,
    "heroImage" TEXT,
    "badgeText" TEXT,
    "keyHighlights" TEXT[],
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flavour" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "colorHex" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Flavour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NutritionalFact" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "nutrient" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "dvPercent" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,

    CONSTRAINT "NutritionalFact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RdProject" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "stage" "RdStage" NOT NULL DEFAULT 'FORMULATION',
    "summary" TEXT NOT NULL,
    "methodology" TEXT,
    "expectedImpact" TEXT,
    "publishedYear" INTEGER NOT NULL DEFAULT 2026,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RdProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobOpening" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "department" "JobDepartment" NOT NULL,
    "location" TEXT NOT NULL DEFAULT 'Hyderabad, India',
    "isRemote" BOOLEAN NOT NULL DEFAULT false,
    "type" "JobType" NOT NULL DEFAULT 'FULL_TIME',
    "status" "JobStatus" NOT NULL DEFAULT 'OPEN',
    "description" TEXT NOT NULL,
    "requirements" TEXT[],
    "benefits" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobOpening_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "linkedIn" TEXT,
    "resumeUrl" TEXT,
    "coverLetter" TEXT,
    "status" TEXT NOT NULL DEFAULT 'SUBMITTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestorReport" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" "DocumentCategory" NOT NULL,
    "period" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "fileUrl" TEXT,
    "publishDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InvestorReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "author" TEXT NOT NULL DEFAULT 'GOJO Science & Innovation Council',
    "readTime" TEXT NOT NULL DEFAULT '5 min read',
    "coverImage" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactInquiry" (
    "id" TEXT NOT NULL,
    "inquiryType" "InquiryType" NOT NULL DEFAULT 'GENERAL_CORPORATE',
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "organization" TEXT,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactInquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsletterSubscriber" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'website_footer',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewsletterSubscriber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "gojoId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT,
    "fullName" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'CONSUMER',
    "consentGojoMe" BOOLEAN NOT NULL DEFAULT false,
    "consentNutrition" BOOLEAN NOT NULL DEFAULT true,
    "consentBioheed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GojoProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "nutritionScore" INTEGER DEFAULT 85,
    "dailyCalorieTarget" INTEGER DEFAULT 2100,
    "dailyProteinTarget" INTEGER DEFAULT 85,
    "dailyCalciumTarget" INTEGER DEFAULT 1000,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GojoProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalyticsEvent" (
    "id" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "userId" TEXT,
    "metadata" JSONB,
    "ipHash" TEXT,
    "userAgent" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalyticsEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EcosystemPillar_type_key" ON "EcosystemPillar"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Article_slug_key" ON "Article"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterSubscriber_email_key" ON "NewsletterSubscriber"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_gojoId_key" ON "User"("gojoId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GojoProfile_userId_key" ON "GojoProfile"("userId");

-- AddForeignKey
ALTER TABLE "Flavour" ADD CONSTRAINT "Flavour_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NutritionalFact" ADD CONSTRAINT "NutritionalFact_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "JobOpening"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GojoProfile" ADD CONSTRAINT "GojoProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalyticsEvent" ADD CONSTRAINT "AnalyticsEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
