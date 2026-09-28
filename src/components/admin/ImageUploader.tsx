'use client'
import React, { useState } from 'react'
import { Upload, X, Image as ImageIcon, Link as LinkIcon, RefreshCw } from 'lucide-react'
import { blogService } from '@/lib/services/blogService'

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export function ImageUploader({ value, onChange, label = 'Featured Image' }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [useUrlMode, setUseUrlMode] = useState(false);
  const [urlInput, setUrlInput] = useState(value);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const uploadedUrl = await blogService.uploadImage(file);
      onChange(uploadedUrl);
    } catch (err) {
      alert('Image upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleUrlSubmit = () => {
    if (urlInput) {
      onChange(urlInput);
      setUseUrlMode(false);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
          {label}
        </label>
        <button
          type="button"
          onClick={() => setUseUrlMode(!useUrlMode)}
          className="font-mono text-xs text-white/60 hover:text-[#4DE8DC] transition-colors flex items-center gap-1"
        >
          <LinkIcon className="w-3 h-3" />
          {useUrlMode ? 'Upload File' : 'Paste Image URL'}
        </button>
      </div>

      {useUrlMode ? (
        <div className="flex gap-2">
          <input
            type="url"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="grow px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
          />
          <button
            type="button"
            onClick={handleUrlSubmit}
            className="px-4 py-3 rounded-xl bg-[#4DE8DC] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#60F5E8] transition-colors"
          >
            Apply
          </button>
        </div>
      ) : value ? (
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/60 group aspect-video max-h-64">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Featured preview" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <label className="cursor-pointer px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5" />
              Replace
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </label>
            <button
              type="button"
              onClick={() => onChange('')}
              className="px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/40 text-red-300 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <X className="w-3.5 h-3.5" />
              Remove
            </button>
          </div>
        </div>
      ) : (
        <label className="relative flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#4DE8DC]/40 cursor-pointer transition-all">
          <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/20 flex items-center justify-center text-[#4DE8DC] mb-3">
            <Upload className="w-5 h-5" />
          </div>
          <span className="text-sm font-semibold text-white">Click or drag image to upload</span>
          <span className="text-xs text-white/50 mt-1 font-mono">PNG, JPG, WebP up to 5MB (Saved to Supabase Storage)</span>
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        </label>
      )}

      {isUploading && (
        <div className="text-xs font-mono text-[#4DE8DC] animate-pulse">
          Uploading image to Supabase Storage bucket 'blog-images'...
        </div>
      )}
    </div>
  )
}
