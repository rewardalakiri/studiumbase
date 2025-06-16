"use client";

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@repo/ui/components/file-upload-dropzone";
import { useSupabaseUpload } from "@repo/ui/hooks/use-supabase-upload";
import { createBrowserClient } from "@repo/supabase-config";

export default function Home() {
  const props = useSupabaseUpload({
    bucketName: "test",
    path: "test",
    allowedMimeTypes: ["image/*"],
    maxFiles: 2,
    maxFileSize: 1000 * 1000 * 10, // 10MB,
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-[500px]">
        <Dropzone {...props}>
          <DropzoneEmptyState />
          <DropzoneContent />
        </Dropzone>
      </div>
    </div>
  );
}
