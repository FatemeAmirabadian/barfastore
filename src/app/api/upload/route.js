import { NextResponse } from "next/server";
import { uploadFile } from "../../../../lib/s3";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files");
    const file = files.length > 0 ? files[0] : formData.get("file");

    if (!file) throw new Error("No file sent");

    if (files.length > 1) {
      const urls = [];
      for (const file of files) {
        const url = await uploadFile({
          name: file.name,
          type: file.type,
          data: Buffer.from(await file.arrayBuffer()),
        });
        urls.push(url);
      }
      return NextResponse.json({ success: true, urls });
    }
    // اگر یک فایل هست
    else {
      const url = await uploadFile({
        name: file.name,
        type: file.type,
        data: Buffer.from(await file.arrayBuffer()),
      });
      return NextResponse.json({ success: true, url });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: err.message });
  }
}
