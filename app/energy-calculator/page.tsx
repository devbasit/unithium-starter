"use client";

import React, { useMemo, useRef, useState } from "react";
import ApplianceForm from "@/app/components/calculators/ApplianceForm";
import {
  Appliance,
  calculateDailyWh,
  sizePortablePowerStation,
  sizeInverter,
  sizeSolarArray,
} from "@/lib/power-math";

export default function EnergyCalculatorPage() {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const quoteRef = useRef<HTMLDivElement | null>(null);

  const results = useMemo(() => {
    const dailyWh = calculateDailyWh(appliances);
    const peakWatts = appliances.reduce((max, app) => Math.max(max, app.wattage * (app.quantity || 1)), 0);
    return {
      dailyWh,
      portableSize: sizePortablePowerStation(dailyWh),
      inverterSize: sizeInverter(peakWatts),
      solarSize: sizeSolarArray(dailyWh),
    };
  }, [appliances]);

  const [downloadTime, setDownloadTime] = useState<string | null>(null);
  const [clientName, setClientName] = useState<string>('');
  const [clientCompany, setClientCompany] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');

  const removeDevice = (index: number) => {
    setAppliances((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDownload = async () => {
    if (!quoteRef.current) return;
    // set timestamp, wait a frame so DOM updates before capture
    const ts = new Date();
    const formatted = ts.toLocaleString();
    setDownloadTime(formatted);
    await new Promise((res) => requestAnimationFrame(res));

    // dynamic imports to avoid SSR issues
    const { toPng } = await import('html-to-image');
    const { jsPDF } = await import('jspdf');

    const elem = quoteRef.current;
    const imgData = await toPng(elem, { cacheBust: true });
    const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight() - 40; // margins

    // get image dimensions by creating an Image
    const img = new Image();
    img.src = imgData;
    await new Promise((res) => (img.onload = res));
    const imgWidth = pageWidth - 40;
    const imgHeight = (img.height * imgWidth) / img.width;

    // calculate number of pages
    const numPages = Math.ceil(imgHeight / pageHeight);

    for (let i = 0; i < numPages; i++) {
      if (i > 0) pdf.addPage();
      const yPos = 20 - i * pageHeight;
      pdf.addImage(imgData, 'PNG', 20, yPos, imgWidth, imgHeight);
    }

    pdf.save('unithium-quote.pdf');
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-2">Unithium Power Calculator</h1>
      <p className="text-slate-600 mb-6">Professionally engineered to HSE and EEE standards.</p>

      <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-gray-600">Client name (optional)</label>
          <input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Full name" className="mt-1 w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-xs text-gray-600">Company (optional)</label>
          <input value={clientCompany} onChange={(e) => setClientCompany(e.target.value)} placeholder="Company" className="mt-1 w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-xs text-gray-600">Email (optional)</label>
          <input value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="email@example.com" className="mt-1 w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-xs text-gray-600">Phone (optional)</label>
          <input value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} placeholder="+234..." className="mt-1 w-full p-2 border rounded" />
        </div>
      </section>

      <ApplianceForm onAdd={(app) => setAppliances((s) => [...s, app])} />

      <div className="mt-6" ref={quoteRef}>
        <div className="bg-white p-6 rounded-lg shadow print:p-4">
          {/* Header inside quote - will appear in PDF */}
          <div className="flex items-start justify-between border-b pb-3">
            <div className="flex items-center gap-3">
              <img src="/unithium-logo-text-rc-nobg.png" alt="Unithium" className="h-12" />
              <div className="text-sm font-semibold">
                Unithium Energy Systems LTD - Lagos, Nigeria
              </div>
            </div>
            <div className="text-right text-xs text-gray-600">
              <div>Quote</div>
              <div>{new Date().toLocaleDateString()}</div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <h2 className="text-lg font-semibold">Quote Summary</h2>
            <p className="text-sm text-gray-500">Downloadable summary of your sizing</p>
          </div>

          <div className="mt-4">
            {appliances.length === 0 && <p className="text-sm text-gray-600">No devices added yet.</p>}

            {/* client details if provided */}
            {(clientName || clientCompany || clientEmail || clientPhone) && (
              <div className="mb-3 p-3 border rounded text-sm">
                {clientName && <div><strong>Client:</strong> {clientName}</div>}
                {clientCompany && <div><strong>Company:</strong> {clientCompany}</div>}
                {clientEmail && <div><strong>Email:</strong> {clientEmail}</div>}
                {clientPhone && <div><strong>Phone:</strong> {clientPhone}</div>}
              </div>
            )}

            {appliances.map((app, i) => (
              <div key={i} className="flex justify-between items-center border-b py-2 text-sm">
                <div>
                  <div className="font-medium">{app.name}</div>
                  <div className="text-xs text-gray-500">{app.quantity} × {app.wattage}W • {app.hoursPerDay} h/day</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-mono">{app.wattage * app.quantity} W</div>
                  <button type="button" onClick={() => removeDevice(i)} className="text-sm text-red-600 hover:underline">Remove</button>
                </div>
              </div>
            ))}

            {appliances.length > 0 && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded">
                  <div className="text-xs text-blue-700 uppercase">Daily Energy</div>
                  <div className="text-2xl font-bold">{results.dailyWh} Wh</div>
                </div>
                <div className="p-4 bg-yellow-50 rounded">
                  <div className="text-xs text-yellow-700 uppercase">Inverter Size</div>
                  <div className="text-2xl font-bold">{results.inverterSize} W</div>
                </div>
                <div className="p-4 bg-green-50 rounded">
                  <div className="text-xs text-green-700 uppercase">Solar Size</div>
                  <div className="text-2xl font-bold">{results.solarSize} W</div>
                </div>
              </div>
            )}

            {/* footer inside quote - appears in PDF */}
            <div className="mt-6 border-t pt-3 text-xs text-gray-600 flex justify-between">
              <div>Lagos, Nigeria</div>
              <div>Generated: {downloadTime ?? '-'}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={handleDownload}
          disabled={appliances.length === 0}
          className="bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50"
        >
          Download Quote (PDF)
        </button>
        <button
          onClick={() => setAppliances([])}
          className="border px-4 py-2 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
}