-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "images" JSONB NOT NULL,
    "colors" TEXT[],
    "quantities" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "discountPercent" INTEGER,
    "discountEnd" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" TEXT,
    "description" TEXT,
    "specs" JSONB,
    "comments" JSONB NOT NULL DEFAULT '[]',
    "colorQuantities" JSONB,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
