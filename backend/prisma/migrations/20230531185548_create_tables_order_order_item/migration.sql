-- CreateTable
CREATE TABLE "orders" (
    "id" VARCHAR(150) NOT NULL,
    "table" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "draft" BOOLEAN NOT NULL DEFAULT true,
    "name" VARCHAR(100),
    "started_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "finished_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "total_time" TIMESTAMP(3),

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ordem_itens" (
    "id" VARCHAR(150) NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 0,
    "order_id" VARCHAR(150),
    "product_id" VARCHAR(150),

    CONSTRAINT "ordem_itens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ordem_itens" ADD CONSTRAINT "ordem_itens_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordem_itens" ADD CONSTRAINT "ordem_itens_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
