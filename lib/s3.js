import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({
  endpoint: process.env.ARVAN_ENDPOINT,
  region: process.env.ARVAN_REGION,
  credentials: {
    accessKeyId: process.env.ARVAN_ACCESS_KEY_ID,
    secretAccessKey: process.env.ARVAN_SECRET_ACCESS_KEY,
  },
});

export async function uploadFile(file) {
  const params = {
    Bucket: process.env.ARVAN_BUCKET_NAME,
    Key: `categories/${Date.now()}-${file.name}`,
    Body: file.data,
    ContentType: file.type,
    ACL: "public-read",
  };

  try {
    await client.send(new PutObjectCommand(params));

    // لینک عمومی فایل
    //   const url = `https://${process.env.ARVAN_BUCKET_NAME}.${process.env.ARVAN_REGION}.arvanstorage.ir/${params.Key}`;
    const url = `https://${process.env.ARVAN_BUCKET_NAME}.s3.${process.env.ARVAN_REGION}.arvanstorage.ir/${params.Key}`;
    console.log("Uploaded URL:", url);
    return url;
  } catch (err) {
    console.error("S3 Upload Error:", err);
    throw err;
  }
}

export async function uploadMultipleFiles(files) {
    const uploadedUrls = [];
  
    for (const file of files) {
      const params = {
        Bucket: process.env.ARVAN_BUCKET_NAME,
        Key: `products/${Date.now()}-${Math.random().toString(36).substring(2)}-${file.name}`,
        Body: file.data || Buffer.from(await file.arrayBuffer()),
        ContentType: file.type,
        ACL: "public-read",
      };
  
      try {
        await client.send(new PutObjectCommand(params));
        const url = `https://${process.env.ARVAN_BUCKET_NAME}.s3.${process.env.ARVAN_REGION}.arvanstorage.ir/${params.Key}`;
        uploadedUrls.push(url);
      } catch (err) {
        console.error("❌ S3 Upload Error:", err);
        throw err;
      }
    }
  
    return uploadedUrls;
  }