import { useState } from 'react';
import { useApi } from '../hooks/useApi';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

export function InvoiceUpload() {
  const [file, setFile] = useState<File | null>(null);
  const { uploadInvoice, loading, error } = useApi();
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a file first",
        variant: "destructive",
      });
      return;
    }

    try {
      const result = await uploadInvoice(file);
      toast({
        title: "Success",
        description: "Invoice uploaded successfully",
      });
      console.log('Upload result:', result);
    } catch (err) {
      toast({
        title: "Error",
        description: error || "Failed to upload invoice",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Input
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          onChange={handleFileChange}
          disabled={loading}
        />
      </div>
      <Button 
        onClick={handleUpload} 
        disabled={!file || loading}
      >
        {loading ? 'Uploading...' : 'Upload Invoice'}
      </Button>
    </div>
  );
} 