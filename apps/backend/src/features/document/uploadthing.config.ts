// uploadthing.config.ts
import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const uploadRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "4MB" } })
    .middleware(async () => {
      return { uploadedAt: new Date().toISOString() };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { 
        uploadedAt: metadata.uploadedAt,  // Now it's a string
        fileUrl: file.url,
        fileKey: file.key,
      };
    })
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;