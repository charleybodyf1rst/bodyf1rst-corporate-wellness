"use client";

import { Printer, Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PrintDocumentProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  lastUpdated?: string;
}

export function PrintDocument({ title, subtitle, children, lastUpdated }: PrintDocumentProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          /* Hide site chrome */
          nav,
          header,
          footer,
          .no-print,
          .print-controls {
            display: none !important;
          }

          /* Reset page styling */
          html,
          body {
            background: white !important;
            color: black !important;
            font-size: 12pt !important;
            line-height: 1.5 !important;
          }

          /* Document container */
          .print-document {
            background: white !important;
            color: black !important;
            padding: 0.5in !important;
            margin: 0 !important;
            max-width: 100% !important;
          }

          /* Typography */
          .print-document h1 {
            font-size: 24pt !important;
            color: black !important;
            border-bottom: 2px solid #333 !important;
            padding-bottom: 12pt !important;
            margin-bottom: 24pt !important;
          }

          .print-document h2 {
            font-size: 16pt !important;
            color: black !important;
            margin-top: 24pt !important;
            margin-bottom: 12pt !important;
            page-break-after: avoid !important;
          }

          .print-document h3 {
            font-size: 14pt !important;
            color: black !important;
            margin-top: 18pt !important;
            margin-bottom: 8pt !important;
            page-break-after: avoid !important;
          }

          .print-document p,
          .print-document li {
            font-size: 11pt !important;
            color: black !important;
            orphans: 3 !important;
            widows: 3 !important;
          }

          /* Tables */
          .print-document table {
            border-collapse: collapse !important;
            width: 100% !important;
            margin: 12pt 0 !important;
            page-break-inside: avoid !important;
          }

          .print-document th,
          .print-document td {
            border: 1px solid #333 !important;
            padding: 6pt 8pt !important;
            font-size: 10pt !important;
            color: black !important;
            background: white !important;
          }

          .print-document th {
            background: #f0f0f0 !important;
            font-weight: bold !important;
          }

          /* Links */
          .print-document a {
            color: black !important;
            text-decoration: underline !important;
          }

          /* Page breaks */
          .page-break {
            page-break-before: always !important;
          }

          .avoid-break {
            page-break-inside: avoid !important;
          }

          /* Signature section */
          .signature-section {
            page-break-inside: avoid !important;
            margin-top: 36pt !important;
          }

          .signature-line {
            border-bottom: 1px solid black !important;
            width: 250pt !important;
            margin: 8pt 0 !important;
          }

          /* Letterhead */
          .print-letterhead {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            border-bottom: 2px solid #f97316 !important;
            padding-bottom: 12pt !important;
            margin-bottom: 24pt !important;
          }

          .print-letterhead-logo {
            display: flex !important;
            align-items: center !important;
            gap: 8pt !important;
          }

          .print-letterhead-logo-icon {
            width: 24pt !important;
            height: 24pt !important;
            background: linear-gradient(135deg, #f97316, #d97706) !important;
            border-radius: 4pt !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            color: white !important;
            font-weight: bold !important;
            font-size: 10pt !important;
          }

          .print-letterhead-name {
            font-size: 18pt !important;
            font-weight: bold !important;
            color: black !important;
          }

          .print-letterhead-info {
            text-align: right !important;
            font-size: 9pt !important;
            color: #666 !important;
          }

          /* Footer on each page */
          @page {
            margin: 0.75in;
            @bottom-center {
              content: "Page " counter(page) " of " counter(pages);
              font-size: 9pt;
              color: #666;
            }
          }
        }

        /* Screen styles for document preview */
        @media screen {
          .print-letterhead {
            display: none;
          }
        }
      `}</style>

      {/* Screen-only controls */}
      <div className="print-controls no-print sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-sm border-b border-white/5 py-4">
        <div className="mx-auto max-w-4xl px-6 flex items-center justify-between">
          <Link
            href="/documents"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Documents
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium"
            >
              <Printer className="w-4 h-4" />
              Print / Save as PDF
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Document content */}
      <div className="print-document min-h-screen bg-[#0a0a0a] py-12 px-6">
        <div className="mx-auto max-w-4xl bg-white/[0.02] rounded-xl p-8 md:p-12 border border-white/5">
          {/* Print-only letterhead */}
          <div className="print-letterhead">
            <div className="print-letterhead-logo">
              <div className="print-letterhead-logo-icon">B1</div>
              <span className="print-letterhead-name">BodyF1RST</span>
            </div>
            <div className="print-letterhead-info">
              <div>BodyF1RST, Inc.</div>
              <div>Austin, Texas</div>
              <div>www.bodyf1rst.com</div>
            </div>
          </div>

          {/* Document header */}
          <div className="mb-8 pb-6 border-b border-white/10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
            {subtitle && <p className="text-lg text-white/60">{subtitle}</p>}
            {lastUpdated && (
              <p className="text-sm text-white/40 mt-2">Last Updated: {lastUpdated}</p>
            )}
          </div>

          {/* Document body */}
          <div className="prose prose-invert prose-orange max-w-none">
            {children}
          </div>
        </div>
      </div>

      {/* Print instructions (screen only) */}
      <div className="no-print bg-[#050505] border-t border-white/5 py-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-3">How to Save as PDF</h3>
            <ol className="text-white/70 space-y-2 text-sm">
              <li>1. Click the &ldquo;Print / Save as PDF&rdquo; button above</li>
              <li>2. In the print dialog, select &ldquo;Save as PDF&rdquo; as your destination</li>
              <li>3. Choose your save location and click Save</li>
            </ol>
            <p className="text-white/50 text-xs mt-4">
              Tip: For best results, use Chrome or Edge browser. The document is optimized for A4/Letter paper size.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
