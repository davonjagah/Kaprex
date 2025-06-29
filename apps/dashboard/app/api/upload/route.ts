import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const config = { api: { bodyParser: false } };

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as Blob | null;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Determine whether this is an image or a generic file
    const mimeType = file.type || "application/octet-stream";
    const isImage = mimeType.startsWith("image/");

    // Convert to base64 Data URI (preserves mime type)
    const arrayBuffer = await file.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");
    const dataUri = `data:${mimeType};base64,${base64}`;

    // Upload: images as images (with SVG support), everything else as raw
    const uploadOpts: Record<string, string | boolean> = {
      resource_type: isImage ? "image" : "raw",
    };
    if (mimeType === "image/svg+xml") {
      uploadOpts.format = "svg";
    }

    const result = await cloudinary.uploader.upload(dataUri, uploadOpts);
    return NextResponse.json({ url: result.secure_url });
  } catch (err: unknown) {
    console.error("Upload error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Upload failed" },
      { status: 500 },
    );
  }
}
