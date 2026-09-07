import { ModelBuildData } from '../types';

export function downloadLDrawFile(model: ModelBuildData) {
  const ldrContent = `0 ${model.name} - Custom Brick Model
0 Name: ${model.id}.ldr
0 Author: BrickForge Modular Labs
0 !LICENSE Redistributable under CCAL version 2.0
0 BFC CERTIFY CCW
0 // Target Stud Dimensions: 38 Stud Height
0 // Pieces: ${model.pieceCount} Real ABS Parts

0 STEP
1 71 0 0 0 1 0 0 0 1 0 0 0 1 3020.dat
1 71 20 0 0 1 0 0 0 1 0 0 0 1 3020.dat
1 71 -20 0 0 1 0 0 0 1 0 0 0 1 3020.dat

0 STEP
1 19 0 -8 0 1 0 0 0 1 0 0 0 1 3001.dat
1 19 0 -8 20 1 0 0 0 1 0 0 0 1 3001.dat
1 19 0 -8 -20 1 0 0 0 1 0 0 0 1 3001.dat

0 STEP
1 0 0 -16 0 1 0 0 0 1 0 0 0 1 3003.dat
1 71 20 -16 0 1 0 0 0 1 0 0 0 1 3003.dat
1 71 -20 -16 0 1 0 0 0 1 0 0 0 1 3003.dat

0 STEP
1 0 0 -24 10 0 0 1 0 1 0 -1 0 0 3941.dat
1 0 0 -24 20 0 0 1 0 1 0 -1 0 0 3941.dat

0 // BrickForge End of File
`;

  const blob = new Blob([ldrContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${model.name.toLowerCase().replace(/\s+/g, '_')}_${model.id}.ldr`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadBOMCsv(model: ModelBuildData) {
  const headers = 'Element ID,Part Name,Color,Quantity,LDraw ID,Category\n';
  const rows = [
    '300126,Brick 2x4,Medium Nougat / Tan,18,3001,Basic Bricks',
    '300326,Brick 2x2,Medium Nougat / Tan,12,3003,Basic Bricks',
    '302026,Plate 2x4,Medium Nougat / Tan,8,3020,Plates',
    '3001222,Brick 2x4,Bright Pink,22,3001,Basic Bricks',
    '3003222,Brick 2x2,Bright Pink,16,3003,Basic Bricks',
    '3020222,Plate 2x4,Bright Pink,14,3020,Plates',
    '300126,Brick 2x4,Black,14,3001,Basic Bricks',
    '300326,Brick 2x2,Black,12,3003,Basic Bricks',
    '394126,Round Brick 2x2,Black,6,3941,Cylindrical',
    '306926,Tile 1x2 with Groove,Black,10,3069,Flat Tiles',
  ].join('\n');

  const content = headers + rows;
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${model.name.toLowerCase().replace(/\s+/g, '_')}_parts_list.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadAssemblyPdf(model: ModelBuildData) {
  // Create a clean printable assembly sheet in a new window or trigger print
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to open the printable assembly guide.');
    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${model.name} - Assembly Guide</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #1b1b1e; max-width: 800px; margin: 0 auto; }
          .header { border-bottom: 3px solid #b91000; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: flex-end; }
          h1 { margin: 0 0 8px 0; font-size: 28px; color: #1b1b1e; }
          .badge { background: #ffdf99; color: #251a00; padding: 4px 10px; border-radius: 9999px; font-weight: bold; font-size: 12px; }
          .specs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 30px; background: #f6f2f7; padding: 16px; border-radius: 12px; }
          .spec-item { text-align: center; }
          .spec-val { font-size: 24px; font-weight: 800; color: #b91000; }
          .spec-lbl { font-size: 11px; text-transform: uppercase; color: #5d403a; font-weight: bold; }
          .step-card { border: 1px solid #e4e1e6; border-radius: 12px; padding: 16px; margin-bottom: 16px; page-break-inside: avoid; }
          .step-num { display: inline-block; background: #ffc72c; color: #6f5400; padding: 4px 10px; border-radius: 8px; font-weight: bold; margin-right: 12px; }
          .step-title { font-size: 16px; font-weight: bold; }
          .step-desc { font-size: 14px; color: #5d403a; margin-top: 6px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1>${model.name}</h1>
            <p style="margin: 0; color: #5d403a;">Set #${model.id} • Physical ABS Assembly Guide</p>
          </div>
          <span class="badge">Builder Tier: ${model.tier}</span>
        </div>
        <div class="specs">
          <div class="spec-item">
            <div class="spec-val">${model.pieceCount}</div>
            <div class="spec-lbl">Total Parts</div>
          </div>
          <div class="spec-item">
            <div class="spec-val">${model.uniqueTypes}</div>
            <div class="spec-lbl">Unique Elements</div>
          </div>
          <div class="spec-item">
            <div class="spec-val">${model.buildSteps}</div>
            <div class="spec-lbl">Build Steps</div>
          </div>
        </div>
        <h2>Assembly Stages</h2>
        ${model.steps
          .map(
            (s) => `
          <div class="step-card">
            <div>
              <span class="step-num">Step ${s.stepNumber.toString().padStart(2, '0')}</span>
              <span class="step-title">${s.title}</span>
            </div>
            <p class="step-desc">${s.description} (${s.piecesUsed} pieces used)</p>
          </div>
        `,
          )
          .join('')}
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
}
