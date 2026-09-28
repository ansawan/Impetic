'use client'
import React, { useRef, useState, useEffect } from 'react'
import {
  Bold, Italic, Underline, Heading1, Heading2, Heading3,
  List, ListOrdered, Quote, Code, Image as ImageIcon,
  Link as LinkIcon, Table, Video, RotateCcw, Maximize2, Minimize2, Eye
} from 'lucide-react'
import { blogService } from '@/lib/services/blogService'

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export function RichTextEditor({ value, onChange, placeholder = 'Write rich blog content here...' }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showCodeView, setShowCodeView] = useState(false);
  const [rawHtml, setRawHtml] = useState(value);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value && !showCodeView) {
      editorRef.current.innerHTML = value || '';
    }
    setRawHtml(value || '');
  }, [value, showCodeView]);

  const handleInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      setRawHtml(html);
      onChange(html);
    }
  };

  const execCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value);
    handleInput();
  };

  const addLink = () => {
    const url = prompt('Enter URL link:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  const addImage = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e: any) => {
      const file = e.target?.files?.[0];
      if (file) {
        try {
          setIsUploading(true);
          const imageUrl = await blogService.uploadImage(file);
          execCommand('insertImage', imageUrl);
        } catch (err) {
          alert('Failed to upload image');
        } finally {
          setIsUploading(false);
        }
      }
    };
    input.click();
  };

  const addYoutube = () => {
    const url = prompt('Enter YouTube video URL or ID:');
    if (url) {
      let videoId = url;
      if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1]?.split('&')[0];
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
      }
      const embedHtml = `<div class="aspect-video my-6 rounded-2xl overflow-hidden"><iframe class="w-full h-full" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div><p></p>`;
      execCommand('insertHTML', embedHtml);
    }
  };

  const addTable = () => {
    const tableHtml = `
      <table class="w-full my-6 border-collapse border border-white/20 text-left text-sm">
        <thead>
          <tr class="bg-white/10">
            <th class="border border-white/20 p-3 font-mono text-[#4DE8DC]">Feature</th>
            <th class="border border-white/20 p-3 font-mono text-[#4DE8DC]">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-white/20 p-3">Item 1</td>
            <td class="border border-white/20 p-3">Value 1</td>
          </tr>
          <tr>
            <td class="border border-white/20 p-3">Item 2</td>
            <td class="border border-white/20 p-3">Value 2</td>
          </tr>
        </tbody>
      </table><p></p>
    `;
    execCommand('insertHTML', tableHtml);
  };

  const addCodeBlock = () => {
    const codeHtml = `<pre class="p-4 rounded-xl bg-black/80 border border-white/15 font-mono text-xs text-[#4DE8DC] overflow-x-auto my-4"><code>// Insert code snippet here...</code></pre><p></p>`;
    execCommand('insertHTML', codeHtml);
  };

  const toggleHeading = (tag: string) => {
    execCommand('formatBlock', `<${tag}>`);
  };

  return (
    <div
      className={`border border-white/15 rounded-2xl bg-black/40 backdrop-blur-md overflow-hidden transition-all ${
        isFullscreen ? 'fixed inset-4 z-50 flex flex-col bg-[#0D1417]' : 'relative w-full'
      }`}
    >
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1.5 p-3 bg-white/[0.04] border-b border-white/10 select-none">
        <button
          type="button"
          onClick={() => toggleHeading('h2')}
          title="Heading 2"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
        >
          <Heading1 className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => toggleHeading('h3')}
          title="Heading 3"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
        >
          <Heading2 className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => toggleHeading('h4')}
          title="Heading 4"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
        >
          <Heading3 className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-white/15 mx-1" />

        <button
          type="button"
          onClick={() => execCommand('bold')}
          title="Bold"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => execCommand('italic')}
          title="Italic"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => execCommand('underline')}
          title="Underline"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
        >
          <Underline className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-white/15 mx-1" />

        <button
          type="button"
          onClick={() => execCommand('insertUnorderedList')}
          title="Bullet List"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => execCommand('insertOrderedList')}
          title="Numbered List"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => toggleHeading('blockquote')}
          title="Quote"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
        >
          <Quote className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-white/15 mx-1" />

        <button
          type="button"
          onClick={addLink}
          title="Insert Link"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={addImage}
          disabled={isUploading}
          title="Upload Image"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors disabled:opacity-50"
        >
          <ImageIcon className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={addCodeBlock}
          title="Code Block"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
        >
          <Code className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={addTable}
          title="Insert Table"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
        >
          <Table className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={addYoutube}
          title="Embed YouTube Video"
          className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
        >
          <Video className="w-4 h-4" />
        </button>

        <div className="ml-auto flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setShowCodeView(!showCodeView)}
            title="Toggle HTML Code View"
            className={`p-2 rounded-lg transition-colors ${
              showCodeView ? 'bg-[#4DE8DC]/20 text-[#4DE8DC]' : 'text-white hover:bg-white/10'
            }`}
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            title="Toggle Fullscreen"
            className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-[#4DE8DC] transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Editor Content Box */}
      {showCodeView ? (
        <textarea
          value={rawHtml}
          onChange={(e) => {
            setRawHtml(e.target.value);
            onChange(e.target.value);
          }}
          className="w-full h-80 p-4 font-mono text-xs bg-black text-[#4DE8DC] focus:outline-none resize-y"
          placeholder="Raw HTML code..."
        />
      ) : (
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          className={`w-full p-6 text-base text-[#EAF6F5] leading-relaxed focus:outline-none overflow-y-auto prose prose-invert max-w-none ${
            isFullscreen ? 'grow min-h-[400px]' : 'min-h-[280px] max-h-[600px]'
          }`}
          style={{ minHeight: '260px' }}
        />
      )}

      {isUploading && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center text-sm font-mono text-[#4DE8DC]">
          Uploading image to Supabase Storage...
        </div>
      )}
    </div>
  )
}
