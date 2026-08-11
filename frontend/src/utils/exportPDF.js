import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportEmergencyPDF(emergencies) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Smart Hospital Emergency Report", 14, 18);

  doc.setFontSize(11);
  doc.text(
    `Generated: ${new Date().toLocaleString()}`,
    14,
    26
  );

  autoTable(doc, {
    startY: 35,
    head: [[
      "ID",
      "Patient",
      "Age",
      "Priority",
      "Doctor",
      "Status",
      "Time",
    ]],

    body: emergencies.map((e) => [
      e.id,
      e.patient,
      e.age,
      e.priority,
      e.doctor,
      e.status,
      e.time,
    ]),
  });

  doc.save("Emergency_Report.pdf");
}