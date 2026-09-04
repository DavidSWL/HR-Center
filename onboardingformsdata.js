// Blank, print-only onboarding reference documents, transcribed verbatim
// from the real SouthWest Landscape onboarding packet (English + Spanish
// PDFs supplied by David). None of these capture or save any data — they
// exist only so the onboarding packet (docgen.html's "Load onboarding
// packet") can print the complete paper packet for a new hire to sign by
// hand, same as the checklist and Job Description already in that packet.
//
// Form W-4 (2019 revision) and DE 4 (Rev. 56, 1-26) ARE included below
// (the 'w4form' and 'de4form' entries), at David's explicit request —
// but as print-only references to the real PDFs he supplied
// (forms/w4-2019.pdf, forms/de4.pdf), not as re-typed HTML. Nothing on
// either form is filled in or saved electronically; the packet just
// links to the exact, unaltered PDF so it can be opened and printed.
// Replace those two PDF files (same filenames) when either agency
// issues a new revision — nothing here needs to change to pick it up.
//
// Still deliberately NOT included (see CLAUDE.md / conversation with David):
//   - Form I-9 — required by federal law to live in a separate file, not
//     this system. Unlike W-4/DE-4 above, this isn't a staleness risk
//     David accepted — the source packet never contained an I-9 at all
//     (checked all 40 pages), so there's no real form text to transcribe.
//     Recreating a federal immigration form from memory instead of a
//     real source document isn't something to do quietly; flagged back
//     to David rather than guessed at.
//   - DMV Employer Pull Notice authorization — an external DMV form
//     (INF 1101/1102/1103), not an SWL document.
//   - Application for Employment — a pre-hire document; not something
//     handed to someone who has already been hired.
//   - Resume — not an HR-generated document.
//   - "Laptop Agreement" — listed on the paper checklist but no actual
//     Laptop Agreement page exists anywhere in either source PDF, so
//     there is no real text to transcribe. Flagged to David; left off
//     rather than invented.
//
// The Employment-At-Will and Arbitration Agreement's Spanish text does
// not exist in the source packet (every other document has a matching
// Spanish page; this one doesn't). At David's direction the Spanish
// version below is a translation done for this app, not a translation
// that came from SWL's own paperwork — a short note to that effect is
// printed on the Spanish copy so nobody mistakes it for company-issued
// bilingual paperwork of equal legal standing to the English original.

// Small inline blank-line marker for fields inside a paragraph (e.g. "Rate
// of Pay: $____ per ____"). Self-contained here — this file has no other
// dependency on docgen.html, and shouldn't need one just for this.
function fblank(width) {
  return `<span class="fblank" style="min-width:${width || 130}px"></span>`;
}

export const ONBOARDING_FORMS = [

// ---------------------------------------------------------------- 1 --
{
  key: 'emergency',
  title: { en: 'Emergency Form', es: 'Formulario de Emergencia' },
  blocks: [
    { t: 'section', en: 'Employee Information', es: 'Información del Empleado' },
    { t: 'grid', cols: 2,
      cellsEn: [
        { label: 'Employee Name' }, { label: 'Employee ID' },
        { label: 'Address', span: true },
        { label: 'Phone Number' }, { label: 'Date of Birth' },
      ],
      cellsEs: [
        { label: 'Nombre del Empleado' }, { label: 'ID del Empleado' },
        { label: 'Dirección', span: true },
        { label: 'Número de Teléfono' }, { label: 'Fecha de Nacimiento' },
      ] },
    { t: 'section', en: 'Emergency Contact #1', es: 'Contacto de Emergencia #1' },
    { t: 'grid', cols: 3,
      cellsEn: [ { label: 'Name' }, { label: 'Phone Number' }, { label: 'Relationship to Employee' } ],
      cellsEs: [ { label: 'Nombre' }, { label: 'Número de Teléfono' }, { label: 'Relación con el Empleado' } ] },
    { t: 'section', en: 'Emergency Contact #2', es: 'Contacto de Emergencia #2' },
    { t: 'grid', cols: 3,
      cellsEn: [ { label: 'Name' }, { label: 'Phone Number' }, { label: 'Relationship to Employee' } ],
      cellsEs: [ { label: 'Nombre' }, { label: 'Número de Teléfono' }, { label: 'Relación con el Empleado' } ] },
    { t: 'section', en: 'Employee Certification', es: 'Certificación del Empleado' },
    { t: 'sig', fieldsEn: ['Employee Signature', 'Date'], fieldsEs: ['Firma del Empleado', 'Fecha'] },
  ],
},

// -------------------------------------------------------------- 1b --
// Print-only reference to the real Form W-4 PDF David supplied — never
// re-typed as HTML, and never filled in or signed electronically. See
// forms/w4-2019.pdf.
{
  key: 'w4form',
  title: { en: "Form W-4 (2019) — Employee's Withholding Allowance Certificate", es: 'Formulario W-4 (2019) — Certificado de Exención de Retención del Empleado' },
  blocks: [
    { t: 'callout',
      en: 'This is the real IRS Form W-4 (2019 revision), attached below as a separate PDF so it prints exactly as issued — nothing on it is filled in or saved electronically in this app.',
      es: 'Este es el Formulario W-4 real del IRS (revisión de 2019), adjunto abajo como un PDF separado para que se imprima exactamente como fue emitido — nada en él se completa ni se guarda electrónicamente en esta aplicación.' },
    { t: 'pdflink', href: 'forms/w4-2019.pdf',
      en: 'Open Form W-4 (2019) PDF to print', es: 'Abrir el PDF del Formulario W-4 (2019) para imprimir',
      printEn: 'Form W-4 (2019) — printed separately from forms/w4-2019.pdf.', printEs: 'Formulario W-4 (2019) — impreso por separado desde forms/w4-2019.pdf.' },
  ],
},

// -------------------------------------------------------------- 1c --
// Print-only reference to the real DE 4 PDF David supplied — never
// re-typed as HTML, and never filled in or signed electronically. See
// forms/de4.pdf.
{
  key: 'de4form',
  title: { en: "DE 4 — Employee's Withholding Allowance Certificate (California)", es: 'DE 4 — Certificado de Exenciones de Retención del Empleado (California)' },
  blocks: [
    { t: 'callout',
      en: 'This is the real EDD Form DE 4 (Rev. 56, 1-26), attached below as a separate PDF so it prints exactly as issued — nothing on it is filled in or saved electronically in this app.',
      es: 'Este es el Formulario DE 4 real del EDD (Rev. 56, 1-26), adjunto abajo como un PDF separado para que se imprima exactamente como fue emitido — nada en él se completa ni se guarda electrónicamente en esta aplicación.' },
    { t: 'pdflink', href: 'forms/de4.pdf',
      en: 'Open DE 4 PDF to print', es: 'Abrir el PDF del DE 4 para imprimir',
      printEn: 'DE 4 — printed separately from forms/de4.pdf.', printEs: 'DE 4 — impreso por separado desde forms/de4.pdf.' },
  ],
},

// ---------------------------------------------------------------- 2 --
{
  key: 'directdeposit',
  title: { en: 'Authorization for Direct Deposit', es: 'Autorización de Depósito Directo' },
  blocks: [
    { t: 'section', en: 'Bank Information', es: 'Información Bancaria' },
    { t: 'grid', cols: 2,
      cellsEn: [ { label: 'Bank Name' }, { label: 'Type of Account', value: '□ Checking&nbsp;&nbsp;&nbsp;□ Savings' }, { label: 'Bank Address' }, { label: 'City / State' } ],
      cellsEs: [ { label: 'Nombre del Banco' }, { label: 'Tipo de Cuenta', value: '□ Corriente&nbsp;&nbsp;&nbsp;□ Ahorros' }, { label: 'Dirección del Banco' }, { label: 'Ciudad / Estado' } ] },
    { t: 'section', en: 'Bank Account Information', es: 'Información de la Cuenta Bancaria' },
    { t: 'grid', cols: 2,
      cellsEn: [ { label: 'Routing Number' }, { label: 'Account Number' } ],
      cellsEs: [ { label: 'Número de Ruta' }, { label: 'Número de Cuenta' } ] },
    { t: 'fine', en: '(Please attach a copy of a voided check to this form)', es: '(Por favor adjunte una copia de un cheque a este formulario)' },
    { t: 'section', en: 'Authorization Agreement', es: 'Acuerdo de Autorización' },
    { t: 'p', en: 'I hereby authorize SouthWest Landscape Inc. to deposit my net pay at the financial institution named above. I understand that SouthWest Landscape Inc. may cause my account to be adjusted to the extent necessary to correct any over-deposit. I agree to hold the above named financial institution harmless for any erroneous deposits or adjustments not caused by the financial institution.',
      es: 'Por la presente autorizo a SouthWest Landscape Inc. a depositar mi pago neto en la institución financiera nombrada arriba. Entiendo que SouthWest Landscape Inc. puede hacer que mi cuenta sea ajustada en la medida necesaria para corregir cualquier depósito excesivo. Acepto eximir de responsabilidad a la institución financiera antes mencionada por cualquier depósito erróneo o ajuste no causado por la institución financiera.' },
    { t: 'p', en: 'It is understood that this agreement may be terminated by me at any time by written notification to SouthWest Landscape Inc. Any such notification to SouthWest Landscape Inc. shall be effective only with respect to entries initiated by SouthWest Landscape Inc. after receipt of such notification and a reasonable opportunity to act on it. Any such notification to the receiving Bank by the employee is unacceptable. The receiving Bank may terminate this agreement by written notice to the employee for just cause.',
      es: 'Se entiende que este acuerdo puede ser terminado por mí en cualquier momento mediante notificación escrita a SouthWest Landscape Inc. Cualquier notificación a SouthWest Landscape Inc. surtirá efecto únicamente respecto a las entradas iniciadas por SouthWest Landscape Inc. después de recibir dicha notificación y una oportunidad razonable para actuar en consecuencia. Cualquier notificación al Banco receptor por parte del empleado no será aceptable. El Banco receptor puede terminar este acuerdo mediante notificación escrita al empleado por causa justificada.' },
    { t: 'section', en: 'Employee Acknowledgment', es: 'Reconocimiento del Empleado' },
    { t: 'grid', cols: 2,
      cellsEn: [ { label: 'Employee Name' }, { label: 'Social Security No.' }, { label: 'Employee Signature' }, { label: 'Date' } ],
      cellsEs: [ { label: 'Nombre del Empleado' }, { label: 'Número de Seguro Social' }, { label: 'Firma del Empleado' }, { label: 'Fecha' } ] },
    { t: 'fine', en: 'Please allow 2 pay periods of testing prior to the direct deposit commencement to verify the information indicated above. During the testing periods, you will receive a paycheck.',
      es: 'Por favor permita 2 períodos de pago de prueba antes del inicio del depósito directo para verificar la información indicada arriba. Durante los períodos de prueba, usted recibirá un cheque de pago.' },
  ],
},

// ---------------------------------------------------------------- 3 --
{
  key: 'employeepackage',
  title: { en: 'Employee Package — Acknowledgment of Company Property', es: 'Paquete de Empleo — Reconocimiento de Propiedad de la Compañía' },
  blocks: [
    { t: 'grid', cols: 1, cellsEn: [{ label: 'Department' }], cellsEs: [{ label: 'Departamento' }] },
    { t: 'section', en: 'Items Provided by the Company', es: 'Artículos Proporcionados por la Compañía' },
    { t: 'list', check: true,
      itemsEn: ['Company Hat', 'Safety Vest with Company Logo', 'Company Shirts (3) to start, once introductory period is completed (2)', 'PPE – Gloves', 'PPE – Safety Glasses', 'PPE – Hearing Protection', 'Company Fuel Card'],
      itemsEs: ['Gorra de la Compañía', 'Chaleco de Seguridad con Logo de la Compañía', 'Camisas de la Compañía (3) al iniciar, una vez completado el período introductorio (2)', 'EPP – Guantes', 'EPP – Gafas de Seguridad', 'EPP – Protección Auditiva', 'Tarjeta de Combustible de la Compañía'] },
    { t: 'section', en: 'Acknowledgment', es: 'Reconocimiento' },
    { t: 'p', en: 'I acknowledge the receipt of the above checked items. I understand that the company issued items are for company use only. Any loss or use charges other than for company business will be the responsibility of the employee.',
      es: 'Reconozco haber recibido los artículos marcados anteriormente. Entiendo que los artículos proporcionados por la compañía son para uso exclusivo de la compañía. Cualquier pérdida o cargo por uso distinto al negocio de la compañía será responsabilidad del empleado.' },
    { t: 'fine', en: 'Note: References to an introductory period above relate only to timing of certain benefits, such as uniform issuance, and do not create a contract of employment or alter the at-will nature of employment.',
      es: 'Nota: Las referencias al período introductorio anteriores se relacionan únicamente con el momento de ciertos beneficios, como la entrega de uniformes, y no crean un contrato de empleo ni alteran la naturaleza de empleo a voluntad.' },
    { t: 'p', en: 'Employees assigned a company-provided cell phone must use it primarily for business purposes. Personal use must be limited to emergencies. Employees are responsible for any charges resulting from personal use exceeding assigned minutes or plan limits.',
      es: 'Los empleados a quienes se les asigne un teléfono celular proporcionado por la compañía deben usarlo principalmente para fines comerciales. El uso personal debe limitarse a emergencias. Los empleados son responsables de cualquier cargo resultante del uso personal que exceda los minutos asignados o los límites del plan.' },
    { t: 'section', en: 'Employee Acknowledgment', es: 'Reconocimiento del Empleado' },
    { t: 'sig', fieldsEn: ['Employee Name', 'Employee Signature', 'Date'], fieldsEs: ['Nombre del Empleado', 'Firma del Empleado', 'Fecha'] },
  ],
},

// ---------------------------------------------------------------- 4 --
{
  key: 'noticetoemployee',
  title: { en: 'Notice to Employee', es: 'Aviso al Empleado' },
  blocks: [
    { t: 'p', en: `Company: SouthWest Landscape, Inc. &nbsp; Employee: ${fblank(260)}`,
      es: `Compañía: SouthWest Landscape, Inc. &nbsp; Empleado: ${fblank(260)}` },
    { t: 'p', en: 'For good consideration, the Company employs the Employee on the following terms and conditions.', es: 'Por una contraprestación válida, la Compañía emplea al Empleado bajo los siguientes términos y condiciones.' },
    { t: 'p', en: '<b>1. At-Will Employment:</b> I understand that my employment with the Company is for an unspecified duration and constitutes "At-Will Employment". I also understand that any representation to the contrary is unauthorized and not valid unless obtained in writing and signed by an authorized representative of the Company. I also acknowledge that this employment may be terminated at any time, with or without good cause, or for any or no cause, at the option either of the Company or Employee, with or without notice.',
      es: '<b>1. Empleo a Voluntad (At-Will):</b> Entiendo que mi empleo con la Compañía es por un período indefinido y constituye un empleo "a voluntad" (At-Will Employment). También entiendo que cualquier representación en contrario no está autorizada ni es válida a menos que conste por escrito y esté firmada por un representante autorizado de la Compañía. Reconozco además que este empleo puede ser terminado en cualquier momento, con o sin causa justificada, o por cualquier causa o sin causa, a opción de la Compañía o del Empleado, con o sin previo aviso.' },
    { t: 'p', en: `<b>2. Rate of Pay.</b> The Company shall pay the Employee a Salary of ${fblank(140)} Per ${fblank(110)}, for the services of the Employee, payable at regular payroll periods. The pay schedule is once weekly on Friday after twelve o'clock in the afternoon.`,
      es: `<b>2. Tasa de Pago:</b> La Compañía pagará al Empleado un salario de ${fblank(140)} por ${fblank(110)}, por los servicios del Empleado, pagadero en los períodos regulares de nómina. El calendario de pago es semanal, los viernes después de las doce del mediodía.` },
    { t: 'p', en: `<b>3. Duties and Position.</b> The Company hires the Employee in the capacity of ${fblank(220)}. The Employee's duties may be reasonably modified at the Company's discretion.`,
      es: `<b>3. Puesto y Funciones:</b> La Compañía contrata al Empleado en la capacidad de ${fblank(220)}. Las funciones del Empleado podrán ser razonablemente modificadas a discreción de la Compañía.` },
    { t: 'p', en: '<b>4. Conflicting Employment.</b> During employment, the Employee agrees not to engage in any outside work, business, or activity that creates an actual conflict of interest with the Company, competes with the Company\'s business, or interferes with the Employee\'s ability to perform their job duties.',
      es: '<b>4. Empleo en Conflicto:</b> Durante su empleo, el Empleado acepta no participar en ningún trabajo, negocio o actividad externa que cree un conflicto de interés real con la Compañía, compita con el negocio de la Compañía, o interfiera con la capacidad del Empleado para desempeñar sus funciones laborales.' },
    { t: 'p', en: '<b>5. Assistance In Litigation.</b> The Employee shall upon reasonable notice furnish such information and proper assistance to the company as it may reasonably require in connection with any litigation in which it is, or may become, a party either during or after employment.',
      es: '<b>5. Asistencia en Litigios:</b> El Empleado, previa notificación razonable, proporcionará a la Compañía la información y asistencia adecuada que razonablemente se requiera en relación con cualquier litigio en el que la Compañía sea o pueda llegar a ser parte, ya sea durante o después del empleo.' },
    { t: 'p', en: '<b>6. Dispute Resolution.</b> Any arbitration agreement between the Employee and the Company governing employment-related disputes is set forth exclusively in the SouthWest Landscape, Inc. Employment-At-Will and Arbitration Agreement, executed separately by the Employee. This Notice does not itself create or modify any arbitration terms.',
      es: '<b>6. Resolución de Disputas:</b> Cualquier acuerdo de arbitraje entre el Empleado y la Compañía que rija las disputas relacionadas con el empleo se establece exclusivamente en el Acuerdo de Empleo a Voluntad y Arbitraje de SouthWest Landscape, Inc., firmado por separado por el Empleado. Este Aviso no crea ni modifica por sí mismo ningún término de arbitraje.' },
    { t: 'p', en: '<b>7. Limited Effect Of Waiver By Company.</b> Should the Company waive breach of any provision of this agreement by the Employee, that waiver will not operate or be construed as a waiver of further breach by the Employee.',
      es: '<b>7. Alcance Limitado de la Renuncia por Parte de la Compañía:</b> Si la Compañía renuncia a un incumplimiento por parte del Empleado de cualquier disposición de este acuerdo, dicha renuncia no operará ni se interpretará como una renuncia a futuros incumplimientos por parte del Empleado.' },
    { t: 'p', en: '<b>8. Oral Modification Not Binding.</b> This instrument is the agreement of the Company and the Employee. Oral changes have no effect. It may be altered only by a written agreement signed by both the Company and the Employee.',
      es: '<b>8. Modificaciones Orales No Vinculantes:</b> Este documento constituye el acuerdo completo entre la Compañía y el Empleado. Las modificaciones orales no tienen validez. Este acuerdo solo podrá modificarse mediante un documento escrito firmado tanto por la Compañía como por el Empleado.' },
    { t: 'p', en: '<b>9. Regular Payday.</b> Every Friday after 12:00 p.m.', es: '<b>9. Día Regular de Pago:</b> Todos los viernes después de las 12:00 p.m.' },
    { t: 'section', en: "Workers' Compensation Information", es: 'Información de Compensación para Trabajadores' },
    { t: 'grid', cols: 3,
      cellsEn: [ { label: 'Carrier', value: "Fireman's Fund Company" }, { label: 'Address', value: 'PO Box 13340, Sacramento, CA 95813' }, { label: 'Policy No.', value: 'WC81009716' } ],
      cellsEs: [ { label: 'Aseguradora', value: "Fireman's Fund Company" }, { label: 'Dirección', value: 'PO Box 13340, Sacramento, CA 95813' }, { label: 'Número de Póliza', value: 'WC81009716' } ] },
  ],
},

// ---------------------------------------------------------------- 5 --
{
  key: 'paidsickleave',
  title: { en: 'Paid Sick Leave Notice', es: 'Aviso de Licencia por Enfermedad Pagada' },
  blocks: [
    { t: 'p', en: 'Unless exempt, the employee identified on this notice is entitled to minimum requirements for paid sick leave under California State law (effective July 1, 2015, as it relates to eligibility), which provides that an employee:',
      es: 'A menos que sea exento, el empleado identificado en este aviso tiene derecho a los requisitos mínimos de licencia por enfermedad pagada conforme a la ley del Estado de California (vigente desde el 1 de julio de 2015, en lo relacionado con la elegibilidad), lo cual establece que el empleado:' },
    { t: 'list',
      itemsEn: ['May accrue paid sick leave and may request and use up to 3 days or 24 hours of accrued paid sick leave per year.',
        'May not be terminated or retaliated against for using or requesting the use of accrued paid sick leave; and',
        'Has the right to file a complaint against an employer who retaliates or discriminates against an employee for requesting or using accrued sick days, attempting to exercise the right to accrued paid sick days, or filing a complaint or alleging a violation of Article 1.5, Section 245 et seq. of the California Labor Code.'],
      itemsEs: ['Puede acumular licencia por enfermedad pagada y puede solicitar y usar hasta 3 días o 24 horas de licencia por enfermedad pagada acumulada por año.',
        'No puede ser despedido ni sufrir represalias por usar o solicitar el uso de licencia por enfermedad pagada acumulada; y',
        'Tiene el derecho de presentar una queja contra un empleador que tome represalias o discrimine contra un empleado por solicitar o usar días de enfermedad acumulados, intentar ejercer el derecho a días de enfermedad pagados acumulados, o presentar una queja o alegar una violación del Artículo 1.5, sección 245 y siguientes del Código Laboral de California.'] },
    { t: 'p', en: 'The following applies to the employee identified on this notice:', es: 'Lo siguiente aplica al empleado identificado en este aviso:' },
    { t: 'list',
      itemsEn: ['□ Accrues paid sick leave only pursuant to the minimum requirements stated in Labor Code 245 et seq., with no other employer policy providing additional or different terms for accrual and use of paid sick leave.',
        '□ Accrues paid sick leave pursuant to the employer\'s policy which satisfies or exceeds the accrual, carryover, and use requirements of Labor Code 246.',
        '☑ Employer provides no less than 24 hours (or 3 days) of paid sick leave at the beginning of each 12-month period.'],
      itemsEs: ['□ Acumula licencia por enfermedad pagada únicamente conforme a los requisitos mínimos establecidos en el Código Laboral 245 y siguientes, sin ninguna otra política del empleador que proporcione términos adicionales o diferentes para la acumulación y el uso de licencia por enfermedad pagada.',
        '□ Acumula licencia por enfermedad pagada conforme a la política del empleador, la cual cumple o excede los requisitos de acumulación, traslado y uso establecidos en el Código Laboral 246.',
        '☑ El empleador proporciona no menos de 24 horas (o 3 días) de licencia por enfermedad pagada al inicio de cada período de 12 meses.'] },
    { t: 'section', en: 'Acknowledgment of Receipt', es: 'Acuse de Recibo' },
    { t: 'sig', fieldsEn: ["Signed this day of", "Employee's Signature", 'Company Signature / Title'], fieldsEs: ['Firmado este día de', 'Firma del Empleado', 'Firma de la Compañía / Título'] },
    { t: 'fine', en: 'Corporate Office: 2205 S. Standard Avenue, Santa Ana California 92707. Mailing Address: P.O. Box 15611, Santa Ana California 92735. Phone (714) 545-1084 · Fax (714) 545-2109',
      es: 'Oficina Corporativa: 2205 S. Standard Avenue, Santa Ana, California 92707. Dirección Postal: P.O. Box 15611, Santa Ana, California 92735. Teléfono (714) 545-1084 · Fax (714) 545-2109' },
  ],
},

// ---------------------------------------------------------------- 6 --
{
  key: 'mpn',
  title: { en: 'Acknowledgement of Receipt of MPN Information', es: 'Acuse de Recibo de Información sobre la Red de Proveedores Médicos (MPN)' },
  blocks: [
    { t: 'p', en: "I acknowledge that I have received information regarding my employer's use of a Medical Provider Network for Worker's Compensation claims, including a notification outlining the MPN and information about continuity of care.",
      es: 'Reconozco que he recibido información respecto al uso por parte de mi empleador de una Red de Proveedores Médicos (MPN) para reclamaciones de Compensación al Trabajador, incluyendo una notificación que describe la MPN y la información sobre la continuidad de la atención médica.' },
    { t: 'section', en: 'Employee Certification', es: 'Certificación del Empleado' },
    { t: 'sig', fieldsEn: ["Employee's Name", "Employee's Signature", 'Date'], fieldsEs: ['Nombre del Empleado', 'Firma del Empleado', 'Fecha'] },
  ],
},

// ---------------------------------------------------------------- 7 --
{
  key: 'confidentiality',
  title: { en: 'Confidentiality and Trade Secrets Agreement', es: 'Acuerdo de Confidencialidad y Secretos Comerciales' },
  blocks: [
    { t: 'p', en: `Company: SouthWest Landscape, Inc. &nbsp; Employee: ${fblank(260)}`, es: `Compañía: SouthWest Landscape, Inc. &nbsp; Empleado: ${fblank(260)}` },
    { t: 'p', en: 'The Company will provide the Employee with access to confidential and proprietary information necessary for the performance of their duties. This agreement ensures that such information is protected both during and after employment.',
      es: 'La Compañía proporcionará al Empleado acceso a información confidencial y de propiedad exclusiva necesaria para el desempeño de sus funciones. Este acuerdo garantiza que dicha información esté protegida tanto durante como después del empleo.' },
    { t: 'p', en: '<b>Definition of Confidential Information:</b> "Confidential Information" means any non-public information belonging to the Company, including but not limited to customer lists and contact details, pricing, proposals, financial information, trade secrets, technical data, business strategies, formulas, designs, training materials, software, and any other data not generally known outside the Company. Confidential information does not include information that is or becomes public through no fault of the Employee; is lawfully obtained from a third party without restriction; or is independently developed without use of Company information.',
      es: '<b>Definición de Información Confidencial:</b> "Información Confidencial" significa cualquier información no pública perteneciente a la Compañía, incluyendo, entre otros, listas de clientes y datos de contacto, precios, propuestas, información financiera, secretos comerciales, datos técnicos, estrategias de negocio, fórmulas, diseños, materiales de capacitación, software y cualquier otro dato no generalmente conocido fuera de la Compañía.' },
    { t: 'p', en: '<b>Employee Obligations:</b> During and after employment, the Employee agrees to: use Confidential information solely for the benefit of the Company; not disclose, copy, or allow access to any unauthorized person or entity; protect all Company data with reasonable care and return all materials upon request or termination.',
      es: '<b>Obligaciones del Empleado:</b> Durante y después del empleo, el Empleado se compromete a: usar la Información Confidencial únicamente en beneficio de la Compañía; no divulgar, copiar, ni permitir el acceso a ninguna persona o entidad no autorizada; proteger todos los datos de la Compañía con cuidado razonable y devolver todos los materiales cuando se solicite o al finalizar el empleo.' },
    { t: 'p', en: '<b>Return of Company Property:</b> Upon termination of employment, the Employee must return all Company property, including documents, equipment, electronic files, and any reproductions containing Confidential Information.',
      es: '<b>Devolución de Propiedad de la Compañía:</b> Al finalizar el empleo, el Empleado debe devolver toda la propiedad de la Compañía, incluyendo documentos, equipo, archivos electrónicos y cualquier reproducción que contenga Información Confidencial.' },
    { t: 'p', en: '<b>Third-Party Information:</b> The Employee acknowledges that the Company may receive confidential information from clients or vendors. The Employee agrees to protect such information and comply with any obligations the Company owes to those third parties.',
      es: '<b>Información de Terceros:</b> El Empleado reconoce que la Compañía puede recibir información confidencial de clientes o proveedores. El Empleado acepta proteger dicha información y cumplir con cualquier obligación que la Compañía tenga con esos terceros.' },
    { t: 'p', en: '<b>No Improper Use of Prior Employer Information:</b> The Employee agrees not to disclose or use confidential or proprietary information belonging to any prior employer or third party while performing work for the Company.',
      es: '<b>No Uso Indebido de Información de un Empleador Anterior:</b> El Empleado acepta no divulgar ni usar información confidencial o de propiedad exclusiva perteneciente a cualquier empleador anterior o tercero mientras trabaje para la Compañía.' },
    { t: 'p', en: '<b>No Conflict of Interest:</b> During employment, the Employee will not engage in outside work, business, or services that conflict with the Company\'s interest, interfere with job performance, or use Company resources without prior written approval.',
      es: '<b>Sin Conflicto de Interés:</b> Durante el empleo, el Empleado no participará en trabajos, negocios o servicios externos que entren en conflicto con los intereses de la Compañía, interfieran con su desempeño laboral, o utilicen los recursos de la Compañía sin aprobación previa por escrito.' },
    { t: 'p', en: '<b>Notification of New Employer:</b> If the Employee leaves the company, the Employee authorizes the Company to notify any future employer regarding this Agreement to ensure compliance with confidentiality obligations.',
      es: '<b>Notificación a Nuevo Empleador:</b> Si el Empleado deja la compañía, el Empleado autoriza a la Compañía a notificar a cualquier futuro empleador sobre este Acuerdo para asegurar el cumplimiento de las obligaciones de confidencialidad.' },
    { t: 'p', en: "<b>Employee Rights Preserved:</b> Nothing in this Agreement restricts the Employee's right to discuss wages, hours, or working conditions with coworkers, to engage in activity protected under the National Labor Relations Act, or to report suspected violations of law to a government agency or in a court filing under seal.",
      es: '<b>Derechos Preservados del Empleado:</b> Nada en este Acuerdo restringe el derecho del Empleado a discutir salarios, horarios o condiciones de trabajo con sus compañeros, a participar en actividades protegidas bajo la Ley Nacional de Relaciones Laborales (NLRA), o a reportar sospechas de violaciones de la ley a una agencia gubernamental o en un documento judicial presentado bajo sello.' },
    { t: 'p', en: '<b>Protected Disclosures (Defend Trade Secrets Act Notice):</b> Under federal law, an individual may not be held criminally or civilly liable for disclosing a trade secret that is made: (1) in confidence to a federal, state, or local government official, or to an attorney, solely for the purpose of reporting or investigating a suspected violation of law; or (2) in a complaint or other document filed in a lawsuit or other proceeding, if such filing is made under seal.',
      es: '<b>Divulgaciones Protegidas (Aviso de la Ley de Defensa de Secretos Comerciales):</b> Bajo la ley federal, una persona no puede ser considerada penal o civilmente responsable por divulgar un secreto comercial que se haga: (1) en confianza a un funcionario del gobierno federal, estatal o local, o a un abogado, únicamente con el propósito de reportar o investigar una presunta violación de la ley; o (2) en una demanda u otro documento presentado en una demanda u otro procedimiento, si dicha presentación se realiza bajo sello.' },
    { t: 'p', en: '<b>Duration:</b> The obligations concerning Confidential Information continue indefinitely, or until such information becomes public through lawful means.',
      es: '<b>Duración:</b> Las obligaciones relacionadas con la Información Confidencial continúan indefinidamente, o hasta que dicha información se vuelva pública por medios lícitos.' },
    { t: 'p', en: '<b>Entire Agreement:</b> This agreement constitutes an entire understanding between the parties concerning confidentiality and trade secrets. Any modification must be in writing and signed by both parties.',
      es: '<b>Acuerdo Completo:</b> Este acuerdo constituye el entendimiento completo entre las partes con respecto a la confidencialidad y los secretos comerciales. Cualquier modificación debe hacerse por escrito y ser firmada por ambas partes.' },
    { t: 'section', en: 'Employee Acknowledgment', es: 'Reconocimiento del Empleado' },
    { t: 'p', en: 'I have read and understood this Agreement and agree to comply with its terms.', es: 'He leído y entendido este Acuerdo y estoy de acuerdo en cumplir con sus términos.' },
    { t: 'grid', cols: 2,
      cellsEn: [ { label: 'Authorized Company Representative (Print Name)' }, { label: 'Employee (Print Name)' },
        { label: "Authorized Company Representative's Signature" }, { label: "Employee's Signature" }, { label: 'Date (Month/Day/Year)', span: true } ],
      cellsEs: [ { label: 'Representante Autorizado de la Compañía (Nombre en Letra de Molde)' }, { label: 'Empleado (Nombre en Letra de Molde)' },
        { label: 'Firma del Representante Autorizado de la Compañía' }, { label: 'Firma del Empleado' }, { label: 'Fecha (Mes/Día/Año)', span: true } ] },
    { t: 'fine', en: 'Distribution: Original to Personnel File, Copy to Employee on Request', es: 'Distribución: Original para el Expediente de Personal, Copia para el Empleado a Solicitud' },
  ],
},

// ---------------------------------------------------------------- 8 --
{
  key: 'atwillarbitration',
  title: { en: 'SouthWest Landscape, Inc. Employment-At-Will and Arbitration Agreement', es: 'SouthWest Landscape, Inc. Acuerdo de Empleo a Voluntad y Arbitraje' },
  blocks: [
    { t: 'callout',
      en: 'A Spanish translation of this agreement does not exist in SWL\'s original paperwork. The Spanish text below was translated for this app and has not been reviewed by an attorney — the English original is the governing document. If a Spanish-speaking employee needs this explained, use the English copy alongside a live interpreter rather than relying on this translation alone.',
      es: 'Este acuerdo no cuenta con una traducción al español en los documentos originales de SWL. El texto en español a continuación fue traducido para esta aplicación y no ha sido revisado por un abogado — el documento en inglés es el que rige. Si un empleado de habla hispana necesita que se le explique, use la copia en inglés junto con un intérprete en vivo en lugar de basarse únicamente en esta traducción.' },
    { t: 'p', en: '<b>1. At-Will Employment.</b> I acknowledge that my employment, position, and compensation at SouthWest Landscape, Inc. (the "Company") are at-will, shall be for no specific duration, and may be changed or terminated at will. Both I and the Company have the right to terminate my employment at any time, with or without cause. By signing below, I certify that I understand that employment at-will is the sole and entire agreement between myself and the Company concerning the duration of my employment and the circumstances under which my employment may be terminated. It supersedes all prior agreements, understandings, and representations concerning the duration of my employment with the Company and/or the circumstances under which my employment may be terminated.',
      es: '<b>1. Empleo a Voluntad.</b> Reconozco que mi empleo, puesto y compensación en SouthWest Landscape, Inc. (la "Compañía") son a voluntad, no tienen una duración específica, y pueden ser modificados o terminados a voluntad. Tanto yo como la Compañía tenemos el derecho de terminar mi empleo en cualquier momento, con o sin causa. Al firmar a continuación, certifico que entiendo que el empleo a voluntad es el único y completo acuerdo entre la Compañía y yo respecto a la duración de mi empleo y las circunstancias bajo las cuales mi empleo puede ser terminado. Este acuerdo reemplaza todos los acuerdos, entendimientos y declaraciones anteriores sobre la duración de mi empleo con la Compañía y/o las circunstancias bajo las cuales mi empleo puede ser terminado.' },
    { t: 'p', en: '<b>2. Agreement to Arbitrate.</b> The Company and I agree to utilize binding individual arbitration as the sole and exclusive means to resolve all disputes that may arise out of or be related in any way to my employment, including but not limited to the termination of my employment and my compensation. The Company and I each waive and relinquish our rights to bring a claim against the other in a court of law. Both the Company and I agree that any claim or controversy that I may have against the Company (or its owners, directors, officers, managers, employees, or agents), shall be resolved exclusively by binding arbitration under the Federal Arbitration Act ("FAA"), in conformity with the procedures of the California Arbitration Act. The FAA applies to this Agreement because the Company\'s business involves interstate commerce. This Agreement covers all employment-related disputes, including claims of discrimination, harassment, retaliation, unpaid wages, breach of contract, and wrongful termination, whether based on tort, contract, statute, equity, or any other theory under state or federal law. Excluded are claims under the National Labor Relations Act before the NLRB, workers\' compensation and EDD claims, and any claims not subject to arbitration. Filing with the DFEH or EEOC is permitted; any claim pursued after exhausting those remedies remains subject to this Agreement.',
      es: '<b>2. Acuerdo de Arbitraje.</b> La Compañía y yo acordamos utilizar el arbitraje individual vinculante como el único y exclusivo medio para resolver todas las disputas que puedan surgir de, o estar relacionadas de cualquier manera con, mi empleo, incluyendo pero no limitado a la terminación de mi empleo y mi compensación. Tanto la Compañía como yo renunciamos a nuestro derecho de presentar un reclamo contra la otra parte en un tribunal de justicia. Ambas partes acordamos que cualquier reclamo o controversia que yo pueda tener contra la Compañía (o sus propietarios, directores, funcionarios, gerentes, empleados o agentes) se resolverá exclusivamente mediante arbitraje vinculante bajo la Ley Federal de Arbitraje ("FAA"), en conformidad con los procedimientos de la Ley de Arbitraje de California. La FAA aplica a este Acuerdo porque el negocio de la Compañía involucra comercio interestatal. Este Acuerdo cubre todas las disputas relacionadas con el empleo, incluyendo reclamos de discriminación, acoso, represalias, salarios no pagados, incumplimiento de contrato y terminación injustificada, ya sea basados en agravio, contrato, estatuto, equidad, o cualquier otra teoría bajo la ley estatal o federal. Se excluyen los reclamos bajo la Ley Nacional de Relaciones Laborales ante el NLRB, los reclamos de compensación de trabajadores y del EDD, y cualquier reclamo no sujeto a arbitraje. Se permite presentar una queja ante el DFEH o la EEOC; cualquier reclamo que se persiga después de agotar esos recursos permanece sujeto a este Acuerdo.' },
    { t: 'p', en: '<b>3. Waiver of Jury Trial.</b> By entering into this Agreement, both I and the Company expressly waive our respective rights to a trial by jury for any claim either party may have against the other. I understand this waiver is a material term of my employment and of this Agreement.',
      es: '<b>3. Renuncia al Juicio con Jurado.</b> Al celebrar este Acuerdo, tanto la Compañía como yo renunciamos expresamente a nuestros respectivos derechos a un juicio con jurado por cualquier reclamo que cualquiera de las partes pueda tener contra la otra. Entiendo que esta renuncia es un término material de mi empleo y de este Acuerdo.' },
    { t: 'p', en: '<b>4. Individual Claims Only; Class and Collective Action Waiver.</b> All claims shall be brought solely in an individual capacity. This Agreement does not permit consolidation, joinder, or any class, collective, or representative action, and no arbitrator shall have authority to order any such proceeding. I waive any right to bring an action on a class, collective, representative, or other similar basis.',
      es: '<b>4. Solo Reclamos Individuales; Renuncia a Acciones Colectivas y de Clase.</b> Todos los reclamos deberán presentarse únicamente a título individual. Este Acuerdo no permite la consolidación, unión de partes, ni ninguna acción de clase, colectiva o representativa, y ningún árbitro tendrá autoridad para ordenar dicho procedimiento. Renuncio a cualquier derecho de presentar una acción de clase, colectiva, representativa o de base similar.' },
    { t: 'p', en: '<b>5. Private Attorneys General Act (PAGA).</b> To the maximum extent permitted by law, any individual PAGA claim shall be arbitrated under this Agreement, and I expressly waive the right to bring a representative PAGA claim on behalf of other employees. The arbitrator has no authority to consolidate PAGA claims or conduct a representative proceeding. If the representative PAGA waiver is found unenforceable, that claim shall be stayed in court pending arbitration of my individual PAGA claim; only that unenforceable portion is severed, and the remainder of this Section stays in full force.',
      es: '<b>5. Ley de Procuradores Generales Privados (PAGA).</b> En la máxima medida permitida por la ley, cualquier reclamo individual bajo PAGA se someterá a arbitraje conforme a este Acuerdo, y renuncio expresamente al derecho de presentar un reclamo representativo bajo PAGA en nombre de otros empleados. El árbitro no tiene autoridad para consolidar reclamos PAGA ni llevar a cabo un procedimiento representativo. Si se determina que la renuncia representativa de PAGA no es exigible, dicho reclamo quedará suspendido en el tribunal en espera del arbitraje de mi reclamo individual bajo PAGA; solo esa porción no exigible será separada, y el resto de esta Sección permanecerá en pleno vigor.' },
    { t: 'p', en: '<b>6. Arbitration Procedures & Costs.</b> The arbitrator shall be a retired California Superior Court Judge or another qualified individual mutually agreed upon, subject to disqualification on the same grounds as a sitting judge, and shall have judicial immunity from civil liability when acting in that capacity. All rules of pleading, evidence, summary judgment, and CCP § 631.8 apply; all proceedings are privileged under Cal. Civil Code § 47(b); and awards shall include a written reasoned opinion. Both parties may be represented by counsel. The arbitrator may award any remedy available in a court of law, including damages, injunctive relief, and attorneys\' fees where authorized by statute, but shall apply controlling law only and may not invoke notions of "just cause" or any other non-legal basis. The Company bears all arbitration fees and costs beyond what the employee would pay in California Superior Court; each party pays its own attorneys\' fees unless a prevailing-party fee statute applies, in which case the arbitrator may award reasonable fees and costs as provided by law.',
      es: '<b>6. Procedimientos y Costos del Arbitraje.</b> El árbitro será un juez jubilado de la Corte Superior de California u otra persona calificada mutuamente acordada, sujeto a descalificación por los mismos motivos que aplicarían a un juez en funciones, y tendrá inmunidad judicial de responsabilidad civil al actuar en esa capacidad. Se aplicarán todas las reglas de alegatos, evidencia, juicio sumario, y la sección 631.8 del CCP; todos los procedimientos son privilegiados bajo la sección 47(b) del Código Civil de California; y los laudos incluirán una opinión razonada por escrito. Ambas partes pueden estar representadas por un abogado. El árbitro puede otorgar cualquier remedio disponible en un tribunal de justicia, incluyendo daños, medidas cautelares, y honorarios de abogados cuando lo autorice la ley, pero deberá aplicar únicamente la ley vigente y no podrá invocar nociones de "causa justa" ni ninguna otra base no legal. La Compañía asume todos los honorarios y costos de arbitraje más allá de lo que el empleado pagaría en la Corte Superior de California; cada parte paga sus propios honorarios de abogado a menos que un estatuto de honorarios para la parte prevaleciente aplique, en cuyo caso el árbitro podrá otorgar honorarios y costos razonables según lo dispuesto por la ley.' },
    { t: 'p', en: '<b>7. Pre-Arbitration Process.</b> Before arbitrating, the parties shall: (a) Informal Meeting: meet in good faith with the employee\'s manager and a Company representative (all discussions confidential and treated as settlement negotiations); then if unresolved, (b) Mediation: mediate through CPR; then if still unresolved, (c) Arbitration: submit to final binding arbitration under this Agreement.',
      es: '<b>7. Proceso Previo al Arbitraje.</b> Antes de proceder al arbitraje, las partes deberán: (a) Reunión Informal: reunirse de buena fe con el gerente del empleado y un representante de la Compañía (todas las conversaciones son confidenciales y se tratarán como negociaciones de acuerdo); luego, si no se resuelve, (b) Mediación: mediar a través de CPR; luego, si aún no se resuelve, (c) Arbitraje: someterse a arbitraje final y vinculante conforme a este Acuerdo.' },
    { t: 'p', en: '<b>8. Entire Agreement & Severability.</b> This Agreement is the entire agreement between myself and the Company regarding dispute resolution, the length of my employment, and the reasons for termination, and supersedes all prior agreements on these issues, including any prior arbitration agreements. If any term, provision, or portion of this Agreement is determined to be void or unenforceable, it shall be severed and the remainder of this Agreement shall be fully enforceable.',
      es: '<b>8. Acuerdo Completo y Divisibilidad.</b> Este Acuerdo es el acuerdo completo entre la Compañía y yo respecto a la resolución de disputas, la duración de mi empleo, y los motivos de terminación, y reemplaza todos los acuerdos anteriores sobre estos temas, incluyendo cualquier acuerdo de arbitraje previo. Si algún término, disposición o parte de este Acuerdo se determina que es nulo o no exigible, será separado y el resto de este Acuerdo permanecerá completamente exigible.' },
    { t: 'callout', en: 'BY SIGNING BELOW, I CONFIRM THAT I HAVE READ, UNDERSTAND, AND AGREE TO BE LEGALLY BOUND BY THIS AGREEMENT, INCLUDING THE REQUIREMENT TO ARBITRATE ALL EMPLOYMENT DISPUTES AND THE WAIVER OF MY RIGHT TO A TRIAL BY JURY. I FURTHER ACKNOWLEDGE THAT I HAVE RECEIVED AND READ THE TEAM MEMBER HANDBOOK.',
      es: 'AL FIRMAR A CONTINUACIÓN, CONFIRMO QUE HE LEÍDO, ENTIENDO, Y ACEPTO QUEDAR LEGALMENTE OBLIGADO POR ESTE ACUERDO, INCLUYENDO EL REQUISITO DE SOMETER A ARBITRAJE TODAS LAS DISPUTAS LABORALES Y LA RENUNCIA A MI DERECHO A UN JUICIO CON JURADO. ADEMÁS, RECONOZCO QUE HE RECIBIDO Y LEÍDO EL MANUAL DEL MIEMBRO DEL EQUIPO.' },
    { t: 'grid', cols: 2,
      cellsEn: [ { label: 'Print Full Name' }, { label: 'Company Representative (Print Name)' }, { label: 'Employee Signature' }, { label: 'Company Representative Signature' }, { label: 'Date (Month/Day/Year)', span: true } ],
      cellsEs: [ { label: 'Nombre Completo en Letra de Molde' }, { label: 'Representante de la Compañía (Nombre en Letra de Molde)' }, { label: 'Firma del Empleado' }, { label: 'Firma del Representante de la Compañía' }, { label: 'Fecha (Mes/Día/Año)', span: true } ] },
  ],
},

// ---------------------------------------------------------------- 9 --
{
  key: 'handbookack',
  title: { en: 'Acknowledgment of Receipt of Employee Handbook', es: 'Acuse de Recibo del Manual del Empleado' },
  blocks: [
    { t: 'p', en: 'If I am a nonexempt employee, I understand that I will be authorized and permitted to take an unpaid, duty-free meal period of no less than 30 minutes whenever I exceed five hours in a work day. The meal period must begin prior to completing my fifth hour of work unless I am scheduled to work six (6) hours or less, and we agree in writing that the meal period may be waived. I understand I am authorized and permitted a second unpaid, duty-free meal period of thirty minutes whenever I work for a period of more than 10 hours in any workday.',
      es: 'Si soy un empleado no exento, entiendo que estaré autorizado y se me permitirá tomar un período de comida sin pago y libre de tareas de no menos de 30 minutos cada vez que exceda las cinco horas en un día laboral. El período de comida debe comenzar antes de completar mi quinta hora de trabajo, a menos que esté programado para trabajar seis (6) horas o menos y acordemos por escrito que se puede renunciar al período de comida. Entiendo que estoy autorizado y se me permite un segundo período de comida sin pago y libre de tareas de treinta minutos cada vez que trabaje por un período de más de 10 horas en cualquier día laboral.' },
    { t: 'p', en: 'If I am a nonexempt employee, I also understand that I am authorized and permitted to take one, ten-minute paid rest break for every four hours worked or major fraction thereof. I further understand that the rest period should be taken as close to the middle of each work period as possible.',
      es: 'Si soy un empleado no exento, también entiendo que estoy autorizado y se me permite tomar un descanso pagado de diez minutos por cada cuatro horas trabajadas o fracción mayor de las mismas. Además entiendo que el período de descanso debe tomarse lo más cerca posible de la mitad de cada período de trabajo.' },
    { t: 'p', en: 'I understand that I can report any workplace concerns, problems, and suggestions with my immediate Supervisor, Human Resource representative, or management. If the nature of the matter is such that I would prefer not to discuss it with a particular person, I may discuss it with any level of management without fear of reprisal.',
      es: 'Entiendo que puedo reportar cualquier inquietud, problema o sugerencia en el lugar de trabajo a mi Supervisor inmediato, representante de Recursos Humanos o gerencia. Si la naturaleza del asunto es tal que preferiría no discutirlo con una persona en particular, puedo discutirlo con cualquier nivel de gerencia sin temor a represalias.' },
    { t: 'p', en: 'I also acknowledge that this Employee Handbook supersedes and replaces any other employee handbook or similar document that may have been previously distributed. I further acknowledge that my employment is at-will and is not for a specified period of time and can be terminated at any time for any or no reason, with or without cause or notice.',
      es: 'También reconozco que este Manual del Empleado reemplaza y sustituye a cualquier otro manual del empleado o documento similar que se haya distribuido previamente. Además reconozco que mi empleo es a voluntad y no es por un período de tiempo especificado, y puede ser terminado en cualquier momento por cualquier razón o sin ella, con o sin causa o aviso.' },
    { t: 'p', en: 'By my signature below, I acknowledge that I have received a copy of this Employee Handbook. I also acknowledge that I have read and understand the contents of the Employee Handbook, and I (check one) □ do &nbsp; □ do not want to discuss the handbook or any particular policies, benefits, or procedures described in it with my Supervisor or another Company official.',
      es: 'Con mi firma a continuación, reconozco que he recibido una copia de este Manual del Empleado. También reconozco que he leído y entiendo el contenido del Manual del Empleado, y (marque una opción) □ sí deseo &nbsp; □ no deseo discutir el manual o cualquier política, beneficio o procedimiento particular descrito en él con mi Supervisor u otro funcionario de la Compañía.' },
    { t: 'section', en: 'Employee Certification', es: 'Certificación del Empleado' },
    { t: 'sig', fieldsEn: ['Print Name', 'Employee Signature', 'Date'], fieldsEs: ['Nombre en Letra de Molde', 'Firma del Empleado', 'Fecha'] },
  ],
},

// --------------------------------------------------------------- 10 --
{
  key: 'handbookackcopy',
  title: { en: 'Acknowledgment of Receipt of Employee Handbook (Copy for Personnel File)', es: 'Acuse de Recibo del Manual del Empleado (Copia para el Expediente)' },
  // Identical content to #9 — the real packet includes this signed twice,
  // one copy for the employee and one for the personnel file.
  blocks: [
    { t: 'p', en: 'If I am a nonexempt employee, I understand that I will be authorized and permitted to take an unpaid, duty-free meal period of no less than 30 minutes whenever I exceed five hours in a work day. The meal period must begin prior to completing my fifth hour of work unless I am scheduled to work six (6) hours or less, and we agree in writing that the meal period may be waived. I understand I am authorized and permitted a second unpaid, duty-free meal period of thirty minutes whenever I work for a period of more than 10 hours in any workday.',
      es: 'Si soy un empleado no exento, entiendo que estaré autorizado y se me permitirá tomar un período de comida sin pago y libre de tareas de no menos de 30 minutos cada vez que exceda las cinco horas en un día laboral. El período de comida debe comenzar antes de completar mi quinta hora de trabajo, a menos que esté programado para trabajar seis (6) horas o menos y acordemos por escrito que se puede renunciar al período de comida. Entiendo que estoy autorizado y se me permite un segundo período de comida sin pago y libre de tareas de treinta minutos cada vez que trabaje por un período de más de 10 horas en cualquier día laboral.' },
    { t: 'p', en: 'If I am a nonexempt employee, I also understand that I am authorized and permitted to take one, ten-minute paid rest break for every four hours worked or major fraction thereof. I further understand that the rest period should be taken as close to the middle of each work period as possible.',
      es: 'Si soy un empleado no exento, también entiendo que estoy autorizado y se me permite tomar un descanso pagado de diez minutos por cada cuatro horas trabajadas o fracción mayor de las mismas. Además entiendo que el período de descanso debe tomarse lo más cerca posible de la mitad de cada período de trabajo.' },
    { t: 'p', en: 'I understand that I can report any workplace concerns, problems, and suggestions with my immediate Supervisor, Human Resource representative, or management. If the nature of the matter is such that I would prefer not to discuss it with a particular person, I may discuss it with any level of management without fear of reprisal.',
      es: 'Entiendo que puedo reportar cualquier inquietud, problema o sugerencia en el lugar de trabajo a mi Supervisor inmediato, representante de Recursos Humanos o gerencia. Si la naturaleza del asunto es tal que preferiría no discutirlo con una persona en particular, puedo discutirlo con cualquier nivel de gerencia sin temor a represalias.' },
    { t: 'p', en: 'I also acknowledge that this Employee Handbook supersedes and replaces any other employee handbook or similar document that may have been previously distributed. I further acknowledge that my employment is at-will and is not for a specified period of time and can be terminated at any time for any or no reason, with or without cause or notice.',
      es: 'También reconozco que este Manual del Empleado reemplaza y sustituye a cualquier otro manual del empleado o documento similar que se haya distribuido previamente. Además reconozco que mi empleo es a voluntad y no es por un período de tiempo especificado, y puede ser terminado en cualquier momento por cualquier razón o sin ella, con o sin causa o aviso.' },
    { t: 'p', en: 'By my signature below, I acknowledge that I have received a copy of this Employee Handbook. I also acknowledge that I have read and understand the contents of the Employee Handbook, and I (check one) □ do &nbsp; □ do not want to discuss the handbook or any particular policies, benefits, or procedures described in it with my Supervisor or another Company official.',
      es: 'Con mi firma a continuación, reconozco que he recibido una copia de este Manual del Empleado. También reconozco que he leído y entiendo el contenido del Manual del Empleado, y (marque una opción) □ sí deseo &nbsp; □ no deseo discutir el manual o cualquier política, beneficio o procedimiento particular descrito en él con mi Supervisor u otro funcionario de la Compañía.' },
    { t: 'section', en: 'Employee Certification', es: 'Certificación del Empleado' },
    { t: 'sig', fieldsEn: ['Print Name', 'Employee Signature', 'Date'], fieldsEs: ['Nombre en Letra de Molde', 'Firma del Empleado', 'Fecha'] },
  ],
},

// --------------------------------------------------------------- 11 --
{
  key: 'discriminationack',
  title: { en: 'Acknowledgment of Receipt of Discrimination, Harassment and Retaliation Prevention Policy', es: 'Acuse de Recibo de la Política de Prevención de Discriminación, Acoso y Represalias' },
  blocks: [
    { t: 'p', en: 'We are an Equal Employment Opportunity employer. In order to provide equal opportunities to all individuals, employment decisions are based on merit, qualifications, skills and performance.',
      es: 'Somos un empleador que ofrece Igualdad de Oportunidades de Empleo. Para brindar igualdad de oportunidades a todas las personas, las decisiones de empleo se basan en el mérito, las calificaciones, las habilidades y el desempeño.' },
    { t: 'p', en: 'Conduct prohibited by these policies is unacceptable in the workplace and in any work-related setting, such as during business trips, business meetings and business-related social events.',
      es: 'La conducta prohibida por estas políticas es inaceptable en el lugar de trabajo y en cualquier entorno relacionado con el trabajo, como durante viajes de negocios, reuniones de negocios y eventos sociales relacionados con el trabajo.' },
    { t: 'p', en: 'We have a strict policy against discrimination, harassment and retaliation of any type and our goal is to provide a work environment free from discrimination, harassment, and retaliation as well as other disrespectful or other unprofessional conduct based on any protected class, or any combination of two or more protected classes: race (including natural hairstyles), color, religion (including religious dress and grooming practices), national origin, age (40 and over), medical condition, physical or mental disability, marital status, sex (including sexual harassment, sex stereotypes and pregnancy, childbirth and related medical conditions), sexual orientation, reproductive health decision making, ancestry, genetic information/characteristics, gender, gender identity, gender expression, transgender, military and veteran status, off duty and off-site cannabis use, an employee\'s status, or a family member\'s status as a crime victim, or any other characteristic or activity protected by law.',
      es: 'Tenemos una política estricta contra la discriminación, el acoso y las represalias de cualquier tipo, y nuestro objetivo es proporcionar un ambiente de trabajo libre de discriminación, acoso y represalias, así como de otra conducta irrespetuosa o poco profesional basada en cualquier clase protegida, o cualquier combinación de dos o más clases protegidas: raza (incluyendo peinados naturales), color, religión (incluyendo vestimenta y prácticas de aseo religiosas), origen nacional, edad (40 años o más), condición médica, discapacidad física o mental, estado civil, sexo (incluyendo acoso sexual, estereotipos de sexo y embarazo, parto y condiciones médicas relacionadas), orientación sexual, toma de decisiones sobre salud reproductiva, ascendencia, información/características genéticas, género, identidad de género, expresión de género, transgénero, condición militar y de veterano, uso de cannabis fuera del horario y del lugar de trabajo, la condición de un empleado o de un familiar como víctima de un delito, o cualquier otra característica o actividad protegida por la ley.' },
    { t: 'p', en: 'We also prohibit discrimination, harassment, retaliation, disrespectful or unprofessional conduct based on the perception that anyone has any or a combination of the above characteristics or is associated with a person who has or is perceived to have any or a combination of those characteristics.',
      es: 'También prohibimos la discriminación, el acoso, las represalias, la conducta irrespetuosa o poco profesional basada en la percepción de que alguien tiene alguna o una combinación de las características anteriores o está asociado con una persona que tiene o se percibe que tiene alguna o una combinación de esas características.' },
    { t: 'p', en: '<b>Harassment Prohibited.</b> Our policy prohibiting harassment applies to all persons involved in operations of the company. It covers harassment of any employee, unpaid intern, volunteer, applicant, contractor, vendor, or any person who has a business, service, or a professional relationship with us. Harassment prohibited by this policy is not limited to sexual harassment but includes harassment against any of the categories described above.',
      es: '<b>Acoso Prohibido.</b> Nuestra política que prohíbe el acoso se aplica a todas las personas involucradas en las operaciones de la compañía. Cubre el acoso de cualquier empleado, pasante no remunerado, voluntario, solicitante, contratista, proveedor, o cualquier persona que tenga una relación comercial, de servicio o profesional con nosotros. El acoso prohibido por esta política no se limita al acoso sexual, sino que incluye el acoso contra cualquiera de las categorías descritas anteriormente.' },
    { t: 'p', en: 'Harassment can be: Verbal (derogatory jokes or comments, epithets, slurs, unwanted invitations, comments, messages, social media posts, any communication through any type of electronic media that is harassing or discriminatory); Visual (displays of derogatory or sexually oriented written or graphic material, posters, photography, digital material, gestures); Physical (assault, unwanted touching, intentionally blocking someone\'s movement); Threatening, intimidating or hostile acts; Negative stereotyping.',
      es: 'El acoso puede ser: Verbal (chistes o comentarios despectivos, epítetos, insultos, invitaciones no deseadas, comentarios, mensajes, publicaciones en redes sociales, cualquier comunicación a través de cualquier tipo de medio electrónico que sea acosador o discriminatorio); Visual (exhibición de material escrito o gráfico despectivo o de naturaleza sexual, carteles, fotografías, material digital, gestos); Físico (agresión, contacto no deseado, bloquear intencionalmente el movimiento de alguien); Actos amenazantes, intimidantes u hostiles; Estereotipos negativos.' },
    { t: 'p', en: 'Additionally, abusive conduct, defined as any conduct of an employer or employee in the workplace, with malice, that a reasonable person would find hostile, offensive, and unrelated to an employer\'s legitimate business interests is not tolerated.',
      es: 'Además, no se tolerará la conducta abusiva, definida como cualquier conducta de un empleador o empleado en el lugar de trabajo, con malicia, que una persona razonable consideraría hostil, ofensiva y no relacionada con los intereses comerciales legítimos de un empleador.' },
    { t: 'p', en: '<b>Discrimination Prohibited.</b> We do not discriminate in employment opportunities or practices on the basis of any protected class. This policy governs all aspects of employment, including hiring, promotion, job assignment, compensation, discipline, access to benefits, training, termination or other aspects of employment.',
      es: '<b>Discriminación Prohibida.</b> No discriminamos en las oportunidades o prácticas de empleo por motivo de ninguna clase protegida. Esta política rige todos los aspectos del empleo, incluyendo la contratación, promoción, asignación de trabajo, compensación, disciplina, acceso a beneficios, capacitación, terminación u otros aspectos del empleo.' },
    { t: 'p', en: '<b>Non-Retaliation.</b> It is also prohibited for supervisors, managers and co-workers, as well as third parties such as vendors or customers, to retaliate against an employee because the employee has complained about discrimination, harassment, retaliation, abusive conduct, or participated in an investigation, proceeding or hearing based on such a complaint. Retaliation is a serious violation of this policy.',
      es: '<b>No Represalias.</b> También está prohibido que los supervisores, gerentes y compañeros de trabajo, así como terceros como proveedores o clientes, tomen represalias contra un empleado porque el empleado se haya quejado de discriminación, acoso, represalias, conducta abusiva, o haya participado en una investigación, procedimiento o audiencia basada en dicha queja. Las represalias son una violación grave de esta política.' },
    { t: 'p', en: '<b>Complaint Procedure.</b> If you are comfortable doing so, talk to the person whose behavior is bothering you and ask the person to stop. Regardless, it is imperative that you report any discrimination, harassment, or retaliation directly to your Supervisor or any member of management or human resources as soon as possible after the incident. Please provide as many details of the incident as possible. Supervisors must report any incidents or complaints of discrimination, harassment, or retaliation that are brought to their attention or that they know or should have known occurred.',
      es: '<b>Procedimiento de Quejas.</b> Si se siente cómodo haciéndolo, hable con la persona cuyo comportamiento le molesta y pídale que se detenga. De cualquier manera, es imperativo que reporte cualquier discriminación, acoso o represalia directamente a su Supervisor o a cualquier miembro de la gerencia o de recursos humanos tan pronto como sea posible después del incidente. Por favor proporcione tantos detalles del incidente como sea posible. Los supervisores deben reportar cualquier incidente o queja de discriminación, acoso o represalias que se les presente o que sepan o deberían haber sabido que ocurrió.' },
    { t: 'p', en: 'A prompt, fair, thorough and objective investigation of the complaint will be conducted by an impartial and qualified person. Upon completion of the investigation, and where warranted, appropriate corrective action will be taken to eliminate the discrimination, harassment, sexual harassment, or retaliation, up to and including termination.',
      es: 'Una investigación pronta, justa, exhaustiva y objetiva de la queja será realizada por una persona imparcial y calificada. Al completar la investigación, y cuando esté justificado, se tomará la acción correctiva apropiada para eliminar la discriminación, el acoso, el acoso sexual o las represalias, hasta e incluyendo la terminación.' },
    { t: 'p', en: 'You may also bring your complaint to the federal or state agency that investigates or prosecutes complaints. A complaint of discrimination, harassment or retaliation may be filed with the California Civil Rights Department ("CRD") at (800) 884-1684, or for the hard of hearing (TTY) (800) 700-2320, or visit calcivilrights.ca.gov. A complaint may also be filed with the Equal Employment Opportunity Commission (EEOC) at (800) 669-4000, or for the hard of hearing (800) 669-6820, or visit www.eeoc.gov.',
      es: 'También puede presentar su queja ante la agencia federal o estatal que investiga o procesa quejas. Una queja de discriminación, acoso o represalias puede presentarse ante el Departamento de Derechos Civiles de California ("CRD") al (800) 884-1684, o para personas con dificultades auditivas (TTY) (800) 700-2320, o visite calcivilrights.ca.gov. También puede presentarse ante la Comisión para la Igualdad de Oportunidades en el Empleo (EEOC) al (800) 669-4000, o para personas con dificultades auditivas (800) 669-6820, o visite www.eeoc.gov.' },
    { t: 'section', en: 'Acknowledgment', es: 'Acuse de Recibo' },
    { t: 'p', en: 'By my signature below, I acknowledge that I have received a copy of this Discrimination, Harassment and Retaliation Prevention Policy, and (check one) □ do &nbsp; □ do not want to discuss this policy with my Supervisor or another Company official.',
      es: 'Con mi firma a continuación, reconozco que he recibido una copia de esta Política de Prevención de Discriminación, Acoso y Represalias, y (marque una opción) □ sí deseo &nbsp; □ no deseo discutir esta política con mi Supervisor u otro funcionario de la Compañía.' },
    { t: 'sig', fieldsEn: ['Print Name', 'Employee Signature', 'Date'], fieldsEs: ['Nombre en Letra de Molde', 'Firma del Empleado', 'Fecha'] },
  ],
},

// --------------------------------------------------------------- 12 --
{
  key: 'discriminationackcopy',
  title: { en: 'Acknowledgment of Receipt of Discrimination, Harassment and Retaliation Prevention Policy (Copy for Personnel File)', es: 'Acuse de Recibo de la Política de Prevención de Discriminación, Acoso y Represalias (Copia para el Expediente)' },
  // Identical content to #11 — signed twice in the real packet, one copy
  // for the employee and one for the personnel file.
  blocks: [
    { t: 'p', en: 'We are an Equal Employment Opportunity employer. In order to provide equal opportunities to all individuals, employment decisions are based on merit, qualifications, skills and performance.',
      es: 'Somos un empleador que ofrece Igualdad de Oportunidades de Empleo. Para brindar igualdad de oportunidades a todas las personas, las decisiones de empleo se basan en el mérito, las calificaciones, las habilidades y el desempeño.' },
    { t: 'p', en: 'Conduct prohibited by these policies is unacceptable in the workplace and in any work-related setting, such as during business trips, business meetings and business-related social events.',
      es: 'La conducta prohibida por estas políticas es inaceptable en el lugar de trabajo y en cualquier entorno relacionado con el trabajo, como durante viajes de negocios, reuniones de negocios y eventos sociales relacionados con el trabajo.' },
    { t: 'p', en: 'We have a strict policy against discrimination, harassment and retaliation of any type based on any protected class, or any combination of two or more protected classes: race (including natural hairstyles), color, religion, national origin, age (40 and over), medical condition, physical or mental disability, marital status, sex (including sexual harassment, sex stereotypes and pregnancy), sexual orientation, reproductive health decision making, ancestry, genetic information, gender, gender identity, gender expression, transgender, military and veteran status, off duty and off-site cannabis use, or any other characteristic protected by law.',
      es: 'Tenemos una política estricta contra la discriminación, el acoso y las represalias de cualquier tipo basada en cualquier clase protegida, o cualquier combinación de dos o más clases protegidas: raza (incluyendo peinados naturales), color, religión, origen nacional, edad (40 años o más), condición médica, discapacidad física o mental, estado civil, sexo (incluyendo acoso sexual, estereotipos de sexo y embarazo), orientación sexual, toma de decisiones sobre salud reproductiva, ascendencia, información genética, género, identidad de género, expresión de género, transgénero, condición militar y de veterano, uso de cannabis fuera del horario y del lugar de trabajo, o cualquier otra característica protegida por la ley.' },
    { t: 'p', en: '<b>Harassment Prohibited.</b> Our policy prohibiting harassment applies to all persons involved in operations of the company, including employees, unpaid interns, volunteers, applicants, contractors, and vendors.',
      es: '<b>Acoso Prohibido.</b> Nuestra política que prohíbe el acoso se aplica a todas las personas involucradas en las operaciones de la compañía, incluyendo empleados, pasantes no remunerados, voluntarios, solicitantes, contratistas y proveedores.' },
    { t: 'p', en: '<b>Discrimination Prohibited.</b> We do not discriminate in employment opportunities or practices on the basis of any protected class. This policy governs all aspects of employment.',
      es: '<b>Discriminación Prohibida.</b> No discriminamos en las oportunidades o prácticas de empleo por motivo de ninguna clase protegida. Esta política rige todos los aspectos del empleo.' },
    { t: 'p', en: '<b>Non-Retaliation.</b> Retaliation against an employee for complaining about discrimination, harassment, or abusive conduct, or for participating in an investigation, is a serious violation of this policy.',
      es: '<b>No Represalias.</b> Las represalias contra un empleado por quejarse de discriminación, acoso o conducta abusiva, o por participar en una investigación, son una violación grave de esta política.' },
    { t: 'p', en: '<b>Complaint Procedure.</b> Report any discrimination, harassment, or retaliation directly to your Supervisor or any member of management or human resources as soon as possible after the incident. A prompt, fair, thorough and objective investigation will be conducted, and appropriate corrective action will be taken where warranted, up to and including termination.',
      es: '<b>Procedimiento de Quejas.</b> Reporte cualquier discriminación, acoso o represalia directamente a su Supervisor o a cualquier miembro de la gerencia o de recursos humanos tan pronto como sea posible después del incidente. Se realizará una investigación pronta, justa, exhaustiva y objetiva, y se tomará la acción correctiva apropiada cuando esté justificado, hasta e incluyendo la terminación.' },
    { t: 'p', en: 'You may also bring your complaint to the California Civil Rights Department ("CRD") at (800) 884-1684, or visit calcivilrights.ca.gov, or to the Equal Employment Opportunity Commission (EEOC) at (800) 669-4000, or visit www.eeoc.gov.',
      es: 'También puede presentar su queja ante el Departamento de Derechos Civiles de California ("CRD") al (800) 884-1684, o visite calcivilrights.ca.gov, o ante la Comisión para la Igualdad de Oportunidades en el Empleo (EEOC) al (800) 669-4000, o visite www.eeoc.gov.' },
    { t: 'section', en: 'Acknowledgment', es: 'Acuse de Recibo' },
    { t: 'p', en: 'By my signature below, I acknowledge that I have received a copy of this Discrimination, Harassment and Retaliation Prevention Policy, and (check one) □ do &nbsp; □ do not want to discuss this policy with my Supervisor or another Company official.',
      es: 'Con mi firma a continuación, reconozco que he recibido una copia de esta Política de Prevención de Discriminación, Acoso y Represalias, y (marque una opción) □ sí deseo &nbsp; □ no deseo discutir esta política con mi Supervisor u otro funcionario de la Compañía.' },
    { t: 'sig', fieldsEn: ['Print Name', 'Employee Signature', 'Date'], fieldsEs: ['Nombre en Letra de Molde', 'Firma del Empleado', 'Fecha'] },
  ],
},

// --------------------------------------------------------------- 13 --
{
  key: 'adrprocedures',
  title: { en: 'SouthWest Landscape, Inc. Alternative Dispute Resolution Procedures', es: 'Procedimientos de Resolución Alternativa de Disputas de SouthWest Landscape, Inc.' },
  blocks: [
    { t: 'p', en: 'SouthWest Landscape, Inc. (hereinafter "the Company") utilizes a system of alternative dispute resolution in order to resolve claims or controversies between the Company and the Employee (collectively, "the Parties"). This Agreement ("Agreement") governs the procedures that shall be followed by the parties when resolving disputes.',
      es: 'SouthWest Landscape, Inc. (en adelante "la Compañía") utiliza un sistema de resolución alternativa de disputas para resolver reclamos o controversias entre la Compañía y el Empleado (colectivamente, "las Partes"). Este Acuerdo ("Acuerdo") rige los procedimientos que las partes deberán seguir al resolver disputas.' },
    { t: 'p', en: 'The Company and Employee (collectively, the "parties") hereby agree that, except for exclusively monetary claims of less than Five Thousand Dollars ($5,000.00), any and all claims or controversies between the parties (or between Employee and any present or former officer, director, agent, or employee of the Company or any parent, subsidiary, or other entity affiliated with the Company) relating in any manner to the employment or the termination of the employment of Employee shall be resolved as follows:',
      es: 'La Compañía y el Empleado (colectivamente, las "partes") acuerdan por la presente que, excepto por reclamos exclusivamente monetarios de menos de Cinco Mil Dólares ($5,000.00), todo reclamo o controversia entre las partes (o entre el Empleado y cualquier funcionario, director, agente o empleado actual o anterior de la Compañía o de cualquier matriz, subsidiaria u otra entidad afiliada a la Compañía) relacionado de cualquier manera con el empleo o la terminación del empleo del Empleado se resolverá de la siguiente manera:' },
    { t: 'p', en: '<b>1. Informal Meeting.</b> The parties shall attempt in good faith to resolve any disputes in an informal meeting ("Meeting") at which Employee shall be present with his or her Manager. A designated Company representative shall also be present at this Meeting. All negotiations pursuant to this clause are confidential and shall be treated as compromise and settlement negotiations for purposes of applicable rules of evidence.',
      es: '<b>1. Reunión Informal.</b> Las partes intentarán de buena fe resolver cualquier disputa en una reunión informal ("Reunión") en la cual el Empleado estará presente con su Gerente. Un representante designado de la Compañía también estará presente en esta Reunión. Todas las negociaciones conforme a esta cláusula son confidenciales y se tratarán como negociaciones de compromiso y acuerdo para efectos de las reglas de evidencia aplicables.' },
    { t: 'p', en: '<b>2. Mediation.</b> If the dispute cannot be settled through the process described in (1) above, the parties agree to try in good faith to settle the dispute by mediation under the International Institute for Conflict Prevention and Resolution ("CPR"). The Parties will select a mediator from the CPR Panels of Distinguished Neutrals. The Company agrees to pay for the costs of mediation.',
      es: '<b>2. Mediación.</b> Si la disputa no puede resolverse mediante el proceso descrito en (1) anterior, las partes acuerdan intentar de buena fe resolver la disputa mediante mediación bajo el Instituto Internacional para la Prevención y Resolución de Conflictos ("CPR"). Las Partes seleccionarán un mediador de los Paneles de Neutrales Distinguidos de CPR. La Compañía acepta pagar los costos de la mediación.' },
    { t: 'p', en: '<b>3. Arbitration.</b> If, after exhausting (1) and (2) above, the parties have not resolved the dispute, the parties shall submit to final and binding arbitration in accordance with the International Institute for Conflict Prevention & Resolution Rules for Non-Administered Arbitration. Claims subject to arbitration shall include, but are not limited to, claims based on any federal, state or local law, statute, or regulation (including but not limited to any claims of discrimination, harassment, retaliation or other conduct in violation of or arising under Title VII of the Civil Rights Act of 1964, the Age Discrimination in Employment Act, the Americans With Disabilities Act, the Family and Medical Leave Act, the California Fair Employment and Housing Act, and the California Family Rights Act), any claims for unpaid wages, commissions, bonuses, stock options or other employment compensation, any claims for breach of contract or covenant, any claims of wrongful termination, any claims arising under common law, and any tort claims. Claims for unemployment benefits, workers\' compensation benefits, and claims under the National Labor Relations Act are not subject to arbitration under this Agreement. This Agreement does not prevent Employee from filing an administrative charge of discrimination with a federal, state, or local agency, or cooperating with any such agency\'s investigation.',
      es: '<b>3. Arbitraje.</b> Si, después de agotar (1) y (2) anteriores, las partes no han resuelto la disputa, las partes se someterán a arbitraje final y vinculante de conformidad con las Reglas de Arbitraje No Administrado del Instituto Internacional para la Prevención y Resolución de Conflictos. Los reclamos sujetos a arbitraje incluirán, entre otros, reclamos basados en cualquier ley, estatuto o regulación federal, estatal o local (incluyendo, entre otros, reclamos de discriminación, acoso, represalias u otra conducta que viole el Título VII de la Ley de Derechos Civiles de 1964, la Ley de Discriminación por Edad en el Empleo, la Ley de Estadounidenses con Discapacidades, la Ley de Licencia Familiar y Médica, la Ley de Empleo y Vivienda Justos de California, y la Ley de Derechos Familiares de California), cualquier reclamo por salarios, comisiones, bonos, opciones sobre acciones u otra compensación laboral no pagada, cualquier reclamo por incumplimiento de contrato o pacto, cualquier reclamo de terminación injustificada, cualquier reclamo bajo el derecho consuetudinario, y cualquier reclamo por agravio. Los reclamos de beneficios de desempleo, beneficios de compensación de trabajadores, y reclamos bajo la Ley Nacional de Relaciones Laborales no están sujetos a arbitraje bajo este Acuerdo. Este Acuerdo no impide que el Empleado presente un cargo administrativo de discriminación ante una agencia federal, estatal o local, ni que coopere con la investigación de dicha agencia.' },
    { t: 'p', en: 'All claims subject to this agreement shall be submitted to and determined exclusively by binding arbitration under the Federal Arbitration Act, in conformity with procedures of the California Arbitration Act, provided that the arbitrator shall be a retired California Superior Court judge, subject to disqualification on the same grounds as would apply to a sitting judge. All rules of pleading, discovery, evidence, and rights to summary judgment or judgment under Code of Civil Procedure section 631.8 apply as they would in a California court.',
      es: 'Todos los reclamos sujetos a este acuerdo se presentarán y determinarán exclusivamente mediante arbitraje vinculante bajo la Ley Federal de Arbitraje, en conformidad con los procedimientos de la Ley de Arbitraje de California, siempre que el árbitro sea un juez jubilado de la Corte Superior de California, sujeto a descalificación por los mismos motivos que aplicarían a un juez en funciones. Todas las reglas de alegatos, descubrimiento, evidencia y derechos a juicio sumario o sentencia bajo la sección 631.8 del Código de Procedimiento Civil se aplican como lo harían en una corte de California.' },
    { t: 'p', en: 'Resolution of the dispute shall be based solely upon the law governing the claims and defenses pleaded; the arbitrator may not invoke any other basis, including notions of "just cause." All awards shall include the arbitrator\'s written reasoned opinion and, at either party\'s written request within ten (10) days after issuance, shall be subject to review by a second arbitrator applying the same standard as an appellate court reviewing a civil judgment.',
      es: 'La resolución de la disputa se basará únicamente en la ley que rige los reclamos y defensas presentados; el árbitro no puede invocar ninguna otra base, incluyendo nociones de "causa justa". Todos los laudos incluirán la opinión razonada por escrito del árbitro y, a solicitud escrita de cualquiera de las partes dentro de los diez (10) días posteriores a su emisión, estarán sujetos a revisión por un segundo árbitro que aplicará el mismo estándar que una corte de apelaciones al revisar una sentencia civil.' },
    { t: 'p', en: 'Company and Employee each have the right to be represented by an attorney during any proceeding under this Agreement. Each party shall pay its own costs and attorney\'s fees, unless a party prevails on a statutory claim entitling the prevailing party to fees and/or costs, in which case the arbitrator may award reasonable fees and costs as provided by law. The employee is responsible only for the filing fees and costs they would have paid had the matter been filed in California Superior Court; SouthWest Landscape Inc. is responsible for all filing fees and arbitrator\'s fees above and beyond that amount.',
      es: 'La Compañía y el Empleado tienen derecho a estar representados por un abogado durante cualquier procedimiento bajo este Acuerdo. Cada parte pagará sus propios costos y honorarios de abogado, a menos que una parte prevalezca en un reclamo estatutario que le otorgue derecho a honorarios y/o costos, en cuyo caso el árbitro podrá otorgar honorarios y costos razonables según lo dispuesto por la ley. El empleado será responsable únicamente de los honorarios de presentación y costos que habría pagado si el asunto se hubiera presentado en la Corte Superior de California; SouthWest Landscape Inc. es responsable de todos los honorarios de presentación y honorarios del árbitro por encima de esa cantidad.' },
    { t: 'callout', en: "EMPLOYEE SPECIFICALLY ACKNOWLEDGES THAT BY EXECUTING THIS AGREEMENT, EMPLOYEE WAIVES THE RIGHT TO A JURY TRIAL AS TO ALL ISSUES REGARDING EMPLOYEE'S EMPLOYMENT OR TERMINATION OF EMPLOYMENT. IN ADDITION, EMPLOYEE ACKNOWLEDGES THAT BY EXECUTING THIS AGREEMENT, EMPLOYEE WAIVES THEIR RIGHT TO FILE CLAIMS OF DISCRIMINATION WITH ANY AGENCY OR COURT BUT WILL SUBMIT ANY SUCH CLAIMS TO ARBITRATION.",
      es: 'EL EMPLEADO RECONOCE ESPECÍFICAMENTE QUE AL FIRMAR ESTE ACUERDO, EL EMPLEADO RENUNCIA AL DERECHO A UN JUICIO CON JURADO EN TODOS LOS ASUNTOS RELACIONADOS CON EL EMPLEO O LA TERMINACIÓN DEL EMPLEO DEL EMPLEADO. ADEMÁS, EL EMPLEADO RECONOCE QUE AL FIRMAR ESTE ACUERDO, EL EMPLEADO RENUNCIA A SU DERECHO A PRESENTAR RECLAMOS DE DISCRIMINACIÓN ANTE CUALQUIER AGENCIA O TRIBUNAL, PERO SOMETERÁ DICHOS RECLAMOS A ARBITRAJE.' },
    { t: 'section', en: 'Signatures', es: 'Firmas' },
    { t: 'grid', cols: 2,
      cellsEn: [ { label: 'Authorized Company Representative (Print Name)' }, { label: 'Employee (Print Name)' },
        { label: "Authorized Company Representative's Signature" }, { label: "Employee's Signature" }, { label: 'Date (Month/Day/Year)', span: true } ],
      cellsEs: [ { label: 'Representante Autorizado de la Compañía (Nombre en Letra de Molde)' }, { label: 'Empleado (Nombre en Letra de Molde)' },
        { label: 'Firma del Representante Autorizado de la Compañía' }, { label: 'Firma del Empleado' }, { label: 'Fecha (Mes/Día/Año)', span: true } ] },
    { t: 'fine', en: 'Distribution: Original to Personnel File, Copy to Employee', es: 'Distribución: Original para el Expediente de Personal, Copia para el Empleado' },
  ],
},

// --------------------------------------------------------------- 14 --
{
  key: 'pesticidetrainingrecord',
  title: { en: 'Pesticide Safety Training Record', es: 'Registro de Capacitación de Seguridad de Pesticidas' },
  blocks: [
    { t: 'grid', cols: 2, cellsEn: [{ label: 'Employee' }, { label: 'Date' }], cellsEs: [{ label: 'Empleado' }, { label: 'Fecha' }] },
    { t: 'section', en: 'Personal Protective Equipment (PPE)', es: 'Equipo de Protección Personal (EPP)' },
    { t: 'p', en: 'Applicators and handlers must wear long sleeved shirt and long pants, work boots with socks, eye protection, and chemical resistant gloves at all times when handling, mixing, and applying pesticides.',
      es: 'Los aplicadores y manipuladores deben usar camisa de manga larga y pantalón largo, botas de trabajo con calcetines, protección ocular y guantes resistentes a productos químicos en todo momento al manipular, mezclar y aplicar pesticidas.' },
    { t: 'section', en: 'Procedure on Personal Protective Equipment — Violations Committed by Employees', es: 'Procedimiento sobre Equipo de Protección Personal — Violaciones Cometidas por Empleados' },
    { t: 'p', en: 'Under the Department of Pesticide Regulation pesticide worker safety regulations, the employer has primary responsibility for safety in the workplace. However, these regulations recognize that the employee also has a responsibility for utilizing personal protective equipment as required by label and regulation. The County Agricultural Commissioner will enforce Section 6131 of the California Code of Regulations.',
      es: 'Bajo las regulaciones de seguridad para trabajadores del Departamento de Regulación de Pesticidas, el empleador tiene la responsabilidad principal de la seguridad en el lugar de trabajo. Sin embargo, estas regulaciones reconocen que el empleado también tiene la responsabilidad de utilizar el equipo de protección personal según lo requiera la etiqueta y la regulación. El Comisionado Agrícola del Condado hará cumplir la Sección 6131 del Código de Regulaciones de California.' },
    { t: 'p', en: 'Employees found handling, mixing, or applying pesticide without utilizing personal protective equipment (PPE) required by label or regulations will be subject to the following actions by the Company and may be subject to fine action by the County Agricultural Commissioner.',
      es: 'Los empleados que sean encontrados manipulando, mezclando o aplicando pesticidas sin utilizar el equipo de protección personal (EPP) requerido por la etiqueta o las regulaciones estarán sujetos a las siguientes acciones por parte de la Compañía y pueden estar sujetos a una multa por parte del Comisionado Agrícola del Condado.' },
    { t: 'section', en: 'Company Disciplinary Action Policy', es: 'Política de Acción Disciplinaria de la Compañía' },
    { t: 'p', en: '<b>First Violation:</b> Written warning in employee file. Must complete written training review prior to handling pesticides.',
      es: '<b>Primera Violación:</b> Advertencia por escrito en el expediente del empleado. Debe completar una revisión de capacitación por escrito antes de manipular pesticidas.' },
    { t: 'p', en: '<b>Second Violation:</b> Written warning in employee file. One day suspension without pay. Must complete written training review prior to handling pesticides.',
      es: '<b>Segunda Violación:</b> Advertencia por escrito en el expediente del empleado. Suspensión de un día sin goce de sueldo. Debe completar una revisión de capacitación por escrito antes de manipular pesticidas.' },
    { t: 'p', en: '<b>Third Violation:</b> Employee will be terminated with cause for repeated violations.',
      es: '<b>Tercera Violación:</b> El empleado será despedido con causa justificada por violaciones repetidas.' },
    { t: 'fine', en: 'This disciplinary schedule reflects the Company\'s typical response to PPE violations of increasing severity. It does not create a contract of employment or alter the at-will nature of employment. The Company reserves the right to skip any step, including proceeding directly to suspension or termination, based on the severity of the violation or risk posed to the employee or others.',
      es: 'Este calendario disciplinario refleja la respuesta típica de la Compañía ante violaciones de EPP de gravedad creciente. No crea un contrato de empleo ni altera la naturaleza de empleo a voluntad. La Compañía se reserva el derecho de omitir cualquier paso, incluyendo proceder directamente a la suspensión o despido, según la gravedad de la violación o el riesgo que represente para el empleado o para otros.' },
    { t: 'section', en: 'Certification', es: 'Certificación' },
    { t: 'grid', cols: 2,
      cellsEn: [ { label: "Trainer's Name / Signature" }, { label: 'Date' }, { label: 'Employee Name / Signature' }, { label: 'Date' } ],
      cellsEs: [ { label: 'Nombre del Capacitador / Firma' }, { label: 'Fecha' }, { label: 'Nombre del Empleado / Firma' }, { label: 'Fecha' } ] },
  ],
},

// --------------------------------------------------------------- 15 --
{
  key: 'pesticidetrainingsheet',
  title: { en: 'Pesticide Safety Training Record Sheet', es: 'Hoja de Registro de Capacitación de Seguridad de Pesticidas' },
  blocks: [
    { t: 'section', en: 'Employee & Trainer Information', es: 'Información del Empleado y Capacitador' },
    { t: 'grid', cols: 2,
      cellsEn: [ { label: 'Employee Name' }, { label: 'Employee Signature' }, { label: "Employer's Name" }, { label: "Employer's Signature" }, { label: "Trainer's Signature", span: true } ],
      cellsEs: [ { label: 'Nombre del Empleado' }, { label: 'Firma del Empleado' }, { label: 'Nombre del Empleador' }, { label: 'Firma del Empleador' }, { label: 'Firma del Capacitador', span: true } ] },
    { t: 'p', en: 'Assigned Job Duties: □ Mixer/Loader &nbsp; □ Service/Repair &nbsp; □ Flagger &nbsp; □ Applicator &nbsp; □ Other:', es: 'Funciones Asignadas: □ Mezclador/Cargador &nbsp; □ Servicio/Reparación &nbsp; □ Banderero &nbsp; □ Aplicador &nbsp; □ Otro:' },
    { t: 'section', en: 'Training Requirements', es: 'Requisitos de Capacitación' },
    { t: 'table', small: true,
      headersEn: ['Topic', 'All Pesticides', 'Pesticide 1', 'Pesticide 2', 'Pesticide 3', 'Pesticide 4', "Trainer's Initials", "Employee's Initials", 'Date'],
      headersEs: ['Tema', 'Todos', 'Pesticida 1', 'Pesticida 2', 'Pesticida 3', 'Pesticida 4', 'Iniciales Capacitador', 'Iniciales Empleado', 'Fecha'],
      rows: [
        { en: ['Wear Clean Work Clothes Daily — provided and cleaned by employer for Category I and II pesticides (PSIS A-7)'], es: ['Use Ropa de Trabajo Limpia Diariamente — proporcionada y limpiada por el empleador para pesticidas de Categoría I y II (PSIS A-7)'] },
        { en: ['Safe Handling Procedures — how to open and lift containers, pour, and operate mixing and application equipment'], es: ['Procedimientos de Manejo Seguro — cómo abrir y levantar contenedores, verter, y operar el equipo de mezcla y aplicación'] },
        { en: ['Triple Rinsing — how and when to triple rinse containers; proper disposal (PSIS A-2)'], es: ['Triple Enjuague — cómo y cuándo enjuagar tres veces los contenedores; eliminación adecuada (PSIS A-2)'] },
        { en: ['Drift — how to confine spray to target area; avoiding contamination of people, animals, waterways, sensitive areas'], es: ['Deriva — cómo confinar la aspersión al área objetivo; cómo evitar la contaminación de personas, animales, vías fluviales, áreas sensibles'] },
        { en: ['Storage — how to confine spray to target area; avoiding contamination of people, animals, waterways, sensitive areas'], es: ['Almacenamiento — cómo confinar la aspersión al área objetivo; cómo evitar la contaminación de personas, animales, vías fluviales, áreas sensibles'] },
        { en: ['Personal Hygiene — washing hands before eating, smoking, drinking, using the bathroom; shower thoroughly at end of day'], es: ['Higiene Personal — lavarse las manos antes de comer, fumar, beber, usar el baño; ducharse completamente al terminar el día'] },
        { en: ['Label — signal words, precautionary statements, first aid instructions, application rate, mixing/application instructions (PSIS A-3, A-1)'], es: ['Etiqueta — palabras de señal, declaraciones de precaución, instrucciones de primeros auxilios, tasa de aplicación, instrucciones de mezcla y aplicación (PSIS A-3, A-1)'] },
        { en: ['Personal Protective Equipment — proper use and care of coveralls, gloves, goggles, boots, aprons and other equipment (PSIS A-5)'], es: ['Equipo de Protección Personal — uso y cuidado adecuado de overoles, guantes, gafas, botas, delantales y otro equipo (PSIS A-5)'] },
        { en: ['Respiratory Equipment — fitting, use, and maintenance (PSIS A-5, respirator manufacturer recommendation)'], es: ['Equipo Respiratorio — ajuste, uso y mantenimiento (PSIS A-5, recomendación del fabricante del respirador)'] },
        { en: ['Engineering Controls — when and how to use enclosed cabs, closed mixing systems, other equipment (PSIS A-3, A-1)'], es: ['Controles de Ingeniería — cuándo y cómo usar cabinas cerradas, sistemas de mezcla cerrados y otro equipo (PSIS A-3, A-1)'] },
        { en: ['First Aid and Decontamination — removal of contaminated clothing, washing affected skin, rinsing eyes (PSIS A-4)'], es: ['Primeros Auxilios y Descontaminación — retiro de ropa contaminada, lavado de piel afectada, enjuague de ojos (PSIS A-4)'] },
        { en: ['Emergency Procedures — handling nonroutine tasks or emergencies such as spill, leak, or fire (see MSDS)'], es: ['Procedimientos de Emergencia — manejo de tareas no rutinarias o emergencias como derrames, fugas o incendios (ver MSDS)'] },
        { en: ['Emergency Medical Information — posting of clinic/physician/ER contact info; policy for reporting injuries (PSIS A-4)'], es: ['Información Médica de Emergencia — publicación de información de contacto de clínica/médico/sala de emergencias; política para reportar lesiones (PSIS A-4)'] },
        { en: ['Immediate Symptoms and Long-Term Health Effects — routes of exposure, symptoms, long-term effects (label and MSDS)'], es: ['Síntomas Inmediatos y Efectos a Largo Plazo — vías de exposición, síntomas, efectos a largo plazo (etiqueta y MSDS)'] },
        { en: ['Medical Supervision — which pesticides require it, when, and general provisions (PSIS B-1, B-2, B-4)'], es: ['Supervisión Médica — qué pesticidas la requieren, cuándo, y disposiciones generales (PSIS B-1, B-2, B-4)'] },
        { en: ['Laws and Regulations — applicable laws and the importance of compliance (PSIS A-6)'], es: ['Leyes y Regulaciones — leyes aplicables y la importancia del cumplimiento (PSIS A-6)'] },
        { en: ['Employee Rights — right to information on pesticide exposure; protection from retaliation for exercising these rights (PSIS A-8)'], es: ['Derechos del Empleado — derecho a información sobre exposición a pesticidas; protección contra represalias por ejercer estos derechos (PSIS A-8)'] },
        { en: ['Location of Documents — Hazard Communication Program, labels, PSIS, use records, medical records (PSIS A-8)'], es: ['Ubicación de Documentos — Programa de Comunicación de Riesgos, etiquetas, PSIS, registros de uso, registros médicos (PSIS A-8)'] },
      ] },
  ],
},

// --------------------------------------------------------------- 16 --
{
  key: 'gpstracking',
  title: { en: 'GPS Tracking Policy Acknowledgment Form', es: 'Formulario de Reconocimiento de la Política de Rastreo GPS' },
  blocks: [
    { t: 'p', en: 'At SouthWest Landscape, Inc., GPS tracking technology is installed in company-owned vehicles and select equipment to improve safety, efficiency, and accountability. This policy ensures that all employees who operate GPS-enabled company vehicles or equipment understand how and why tracking is used.',
      es: 'En SouthWest Landscape, Inc., la tecnología de rastreo GPS está instalada en vehículos propiedad de la compañía y en equipo seleccionado para mejorar la seguridad, eficiencia y responsabilidad. Esta política asegura que todos los empleados que operen vehículos o equipo de la compañía con GPS entiendan cómo y por qué se utiliza el rastreo.' },
    { t: 'section', en: 'Purpose of GPS Tracking', es: 'Propósito del Rastreo GPS' },
    { t: 'list', itemsEn: ['Enhance employee safety', 'Track vehicle mileage for maintenance', 'Locate vehicles in case of theft', 'Comply with insurance requirements', 'Verify jobsite activity and reporting', 'Aid in accident investigations'],
      itemsEs: ['Mejorar la seguridad del empleado', 'Rastrear el kilometraje del vehículo para mantenimiento', 'Localizar vehículos en caso de robo', 'Cumplir con los requisitos de seguro', 'Verificar la actividad y los informes del sitio de trabajo', 'Ayudar en investigaciones de accidentes'] },
    { t: 'section', en: 'Scope of Tracking', es: 'Alcance del Rastreo' },
    { t: 'list', itemsEn: ['Real-time location and route history', 'Start/stop times and idle durations', 'Driving behaviors related to speed and safety', 'Equipment usage, where applicable'],
      itemsEs: ['Ubicación en tiempo real e historial de rutas', 'Horas de inicio/parada y tiempos inactivos', 'Comportamientos de manejo relacionados con velocidad y seguridad', 'Uso del equipo, cuando corresponda'] },
    { t: 'section', en: 'Employee Responsibilities', es: 'Responsabilidades del Empleado' },
    { t: 'list', itemsEn: ['Use company vehicles/equipment for authorized work purposes only', 'Comply with traffic and safety laws', 'Do not tamper with or disable GPS devices', 'Notify your supervisor of any GPS-related concerns'],
      itemsEs: ['Usar los vehículos/equipo de la compañía únicamente para fines de trabajo autorizados', 'Cumplir con las leyes de tránsito y seguridad', 'No manipular ni desactivar los dispositivos GPS', 'Notificar a su supervisor sobre cualquier inquietud relacionada con el GPS'] },
    { t: 'section', en: 'Privacy Notice', es: 'Aviso de Privacidad' },
    { t: 'list', itemsEn: ['Tracking is limited to company-owned vehicles and equipment during work-related use', 'Personal vehicles and personal time are not tracked', 'Data is used strictly for operational and safety purposes', 'Employees should have no expectation of privacy when using company vehicles or equipment'],
      itemsEs: ['El rastreo se limita a vehículos y equipo propiedad de la compañía durante el uso relacionado con el trabajo', 'Los vehículos personales y el tiempo personal no son rastreados', 'Los datos se utilizan estrictamente para fines operativos y de seguridad', 'Los empleados no deben tener ninguna expectativa de privacidad al usar vehículos o equipo de la compañía'] },
    { t: 'p', en: 'Acknowledgment: I have received, read, and understood the GPS Tracking Policy. I agree to comply and understand that violations may result in disciplinary action, up to and including termination.',
      es: 'Reconocimiento: He recibido, leído y entendido la Política de Rastreo GPS. Acepto cumplir y entiendo que las violaciones pueden resultar en acción disciplinaria, hasta e incluyendo la terminación del empleo.' },
    { t: 'section', en: 'Certification', es: 'Certificación' },
    { t: 'sig', fieldsEn: ['Employee Signature', 'Date'], fieldsEs: ['Firma del Empleado', 'Fecha'] },
  ],
},

// --------------------------------------------------------------- 17 --
{
  key: 'photorelease',
  title: { en: 'Photo Release Waiver', es: 'Exención de Divulgación de Fotografías' },
  blocks: [
    { t: 'p', en: '<b>Consent to Use of Likeness:</b> I hereby grant SouthWest Landscape, its affiliates, subsidiaries, licensees, successors, and assigns (collectively, the "Company") the irrevocable, worldwide, royalty-free, and perpetual right to use, reproduce, display, distribute, publish, and create derivative works of my photograph, image, likeness, and job title (collectively, the "Likeness") in any media now known or hereafter devised, including but not limited to print, digital, social media, and video formats.',
      es: '<b>Consentimiento para el Uso de Imagen:</b> Por la presente otorgo a SouthWest Landscape, sus afiliados, subsidiarias, licenciatarios, sucesores y cesionarios (colectivamente, la "Compañía") el derecho irrevocable, mundial, libre de regalías y perpetuo de usar, reproducir, exhibir, distribuir, publicar y crear obras derivadas de mi fotografía, imagen, semejanza y puesto de trabajo (colectivamente, la "Imagen") en cualquier medio ahora conocido o creado en el futuro, incluyendo pero no limitado a formatos impresos, digitales, de redes sociales y de video.' },
    { t: 'p', en: '<b>Purpose of Use:</b> The Company may use the Likeness for promotional, marketing, advertising, and informational purposes, including but not limited to the Company\'s website ("Meet Our Team" section), social media channels, brochures, presentations, and other materials.',
      es: '<b>Propósito del Uso:</b> La Compañía puede usar la Imagen para fines promocionales, de mercadotecnia, publicitarios e informativos, incluyendo pero no limitado al sitio web de la Compañía (sección "Conozca a Nuestro Equipo"), canales de redes sociales, folletos, presentaciones y otros materiales.' },
    { t: 'p', en: '<b>No Compensation:</b> I understand and agree that I will not receive any monetary compensation or other remuneration for the use of my Likeness.',
      es: '<b>Sin Compensación:</b> Entiendo y acepto que no recibiré compensación monetaria ni ninguna otra remuneración por el uso de mi Imagen.' },
    { t: 'p', en: '<b>Waiver of Rights:</b> The Company agrees to obtain my approval before using any photographs or images of me for the purposes described herein. I retain the right to select which photographs of my likeness may be used.',
      es: '<b>Renuncia de Derechos:</b> La Compañía acepta obtener mi aprobación antes de usar cualquier fotografía o imagen mía para los fines descritos en este documento. Conservo el derecho de seleccionar qué fotografías de mi imagen pueden ser utilizadas.' },
    { t: 'p', en: '<b>Revocation:</b> I understand that I may revoke this consent at any time by providing written notice to the Company. Revocation will not affect any prior use of my Likeness.',
      es: '<b>Revocación:</b> Entiendo que puedo revocar este consentimiento en cualquier momento mediante notificación por escrito a la Compañía. La revocación no afectará ningún uso anterior de mi Imagen.' },
    { t: 'p', en: '<b>Privacy and Confidentiality:</b> The Company agrees to limit the use of my personal information to my name, job title, and Likeness and will not disclose other personal data without my further consent.',
      es: '<b>Privacidad y Confidencialidad:</b> La Compañía acepta limitar el uso de mi información personal a mi nombre, puesto de trabajo e Imagen, y no divulgará otros datos personales sin mi consentimiento adicional.' },
    { t: 'p', en: '<b>Acknowledgment:</b> I acknowledge that I have read and fully understand this Consent and Release Form. I understand the nature and purpose of the consent I am giving and that by signing this form I am voluntarily allowing the Company to use my Likeness as described above.',
      es: '<b>Reconocimiento:</b> Reconozco que he leído y entiendo completamente este Formulario de Consentimiento y Renuncia. Entiendo la naturaleza y el propósito del consentimiento que estoy otorgando y que al firmar este formulario estoy permitiendo voluntariamente que la Compañía use mi Imagen según lo descrito anteriormente.' },
    { t: 'section', en: 'Employee Certification', es: 'Certificación del Empleado' },
    { t: 'grid', cols: 2,
      cellsEn: [ { label: 'Employee Name (Print)' }, { label: 'Manager/Supervisor Name (Print)' }, { label: 'Employee Signature' }, { label: 'Manager/Supervisor Signature' }, { label: 'Date' }, { label: 'Date' } ],
      cellsEs: [ { label: 'Nombre del Empleado (Letra de Molde)' }, { label: 'Nombre del Gerente/Supervisor (Letra de Molde)' }, { label: 'Firma del Empleado' }, { label: 'Firma del Gerente/Supervisor' }, { label: 'Fecha' }, { label: 'Fecha' } ] },
  ],
},

// --------------------------------------------------------------- 18 --
{
  key: 'vehiclepolicy',
  title: { en: 'Company Vehicle Use & Care Policy', es: 'Política de Uso y Cuidado del Vehículo de la Compañía' },
  blocks: [
    { t: 'p', en: '<b>Company Vehicles.</b> SouthWest Landscape may assign Company vehicles to certain employees for business purposes. Vehicle use is a privilege, not a right, and may be revoked at any time.',
      es: '<b>Vehículos de la Compañía.</b> SouthWest Landscape puede asignar vehículos de la Compañía a ciertos empleados para fines comerciales. El uso del vehículo es un privilegio, no un derecho, y puede ser revocado en cualquier momento.' },
    { t: 'p', en: "<b>Authorized Drivers.</b> Only employees who hold a valid California Driver's License and have Company authorization and maintain a clean driving record may operate a Company vehicle. No one else is permitted to drive Company vehicles under any circumstances.",
      es: '<b>Conductores Autorizados.</b> Solo los empleados que posean una licencia de conducir válida de California y cuenten con autorización de la Compañía y mantengan un historial de manejo limpio pueden operar un vehículo de la Compañía. Ninguna otra persona tiene permitido conducir vehículos de la Compañía bajo ninguna circunstancia.' },
    { t: 'p', en: "<b>Eligibility — DMV Pull Notice.</b> Prior to being granted driving privileges, all candidates for a driving position must pass a DMV motor vehicle record (MVR) pull conducted through the Company's insurance carrier. Driving privileges are contingent on a satisfactory result. The Company reserves the right to periodically re-pull MVRs to confirm continued eligibility, and driving privileges may be suspended or revoked if a subsequent pull reveals a disqualifying record.",
      es: '<b>Elegibilidad — Aviso de Verificación del DMV.</b> Antes de que se otorguen privilegios de manejo, todos los candidatos para un puesto de manejo deben pasar una verificación del registro de manejo (MVR) del DMV realizada a través de la aseguradora de la Compañía. Los privilegios de manejo están sujetos a un resultado satisfactorio. La Compañía se reserva el derecho de volver a verificar periódicamente los MVR para confirmar la elegibilidad continua, y los privilegios de manejo pueden ser suspendidos o revocados si una verificación posterior revela un historial descalificador.' },
    { t: 'p', en: '<b>Permitted Use.</b> Company vehicles are provided for business use, including work-related travel and commuting between home and work for employees assigned a vehicle. Passengers are limited to employees with prior approval. Use of the vehicle for other personal purposes — errands, personal trips, or any non-work-related travel — requires prior written authorization from ownership/executive management and is granted on an individual, limited basis at the Company\'s sole discretion. Authorization may be modified or revoked at any time without notice. Personal use beyond business travel and commuting, without such authorization, is strictly prohibited.',
      es: '<b>Uso Permitido.</b> Los vehículos de la Compañía se proporcionan para uso comercial, incluyendo viajes relacionados con el trabajo y traslados entre el hogar y el trabajo para empleados que tengan un vehículo asignado. Los pasajeros se limitan a empleados con aprobación previa. El uso del vehículo para otros fines personales — mandados, viajes personales, o cualquier viaje no relacionado con el trabajo — requiere autorización previa por escrito de la propiedad/gerencia ejecutiva y se otorga de forma individual y limitada a discreción exclusiva de la Compañía. La autorización puede ser modificada o revocada en cualquier momento sin previo aviso. El uso personal más allá del viaje comercial y el traslado, sin dicha autorización, está estrictamente prohibido.' },
    { t: 'section', en: 'Prohibited Uses Include', es: 'Usos Prohibidos Incluyen' },
    { t: 'list', check: true,
      itemsEn: ['Towing, overloading, or transporting unauthorized materials', 'Carrying hitchhikers or non-employees', 'Operating under the influence of alcohol, drugs, or impairing medications', 'Using handheld devices while driving (hands-free only)'],
      itemsEs: ['Remolcar, sobrecargar o transportar materiales no autorizados', 'Llevar autoestopistas o personas que no sean empleados', 'Operar bajo la influencia de alcohol, drogas o medicamentos que alteren la capacidad', 'Usar dispositivos manuales mientras conduce (solo manos libres)'] },
    { t: 'p', en: 'Compliance. Drivers must observe all traffic laws and Company safety policies. Any accidents, tickets, violations, or vehicle damage must be reported immediately to management. The Company assumes no responsibility for fines, penalties, or costs resulting from employee negligence.',
      es: 'Cumplimiento. Los conductores deben observar todas las leyes de tránsito y las políticas de seguridad de la Compañía. Cualquier accidente, multa, infracción o daño al vehículo debe reportarse inmediatamente a la gerencia. La Compañía no asume responsabilidad por multas, sanciones o costos resultantes de la negligencia del empleado.' },
    { t: 'p', en: 'Vehicle Care & Maintenance. The Company covers all repairs and routine maintenance. Drivers are responsible for performing pre-use and post-use visual inspections, reporting mechanical issues promptly, keeping the vehicle clean inside and out, and participating in scheduled vehicle inspections. Smoking inside Company vehicles is prohibited.',
      es: 'Cuidado y Mantenimiento del Vehículo. La Compañía cubre todas las reparaciones y el mantenimiento rutinario. Los conductores son responsables de realizar inspecciones visuales antes y después del uso, reportar problemas mecánicos de inmediato, mantener el vehículo limpio por dentro y por fuera, y participar en las inspecciones programadas del vehículo. Fumar dentro de los vehículos de la Compañía está prohibido.' },
    { t: 'p', en: 'Gasoline Credit Cards. Fuel cards are issued for Company vehicles and are to be used only for fuel purchases. Use of a Company gas card for personal items, food, or beverage is strictly prohibited and may result in discipline.',
      es: 'Tarjetas de Crédito de Gasolina. Las tarjetas de combustible se emiten para vehículos de la Compañía y deben usarse únicamente para compras de combustible. El uso de una tarjeta de gasolina de la Compañía para artículos personales, comida o bebida está estrictamente prohibido y puede resultar en medidas disciplinarias.' },
    { t: 'p', en: 'Policy Compliance. Violations such as unauthorized use, unsafe driving, poor vehicle care, unauthorized passengers, or operating under the influence may result in disciplinary action, up to and including termination.',
      es: 'Cumplimiento de la Política. Las violaciones tales como uso no autorizado, manejo inseguro, mal cuidado del vehículo, pasajeros no autorizados, u operar bajo la influencia pueden resultar en acción disciplinaria, hasta e incluyendo la terminación.' },
    { t: 'section', en: 'Vehicle Access Policy Table', es: 'Tabla de Política de Acceso a Vehículos' },
    { t: 'table',
      headersEn: ['Position Title', 'Type of Vehicle', 'Gas Card'], headersEs: ['Puesto', 'Tipo de Vehículo', 'Tarjeta de Gasolina'],
      rows: [
        { en: ['Vice President', 'SUV, Sedan, or ½ ton pickup', 'Yes'], es: ['Vicepresidente', 'SUV, Sedán, o camioneta de ½ tonelada', 'Sí'] },
        { en: ['Director', 'SUV, Sedan, or ½ ton pickup', 'Yes'], es: ['Director', 'SUV, Sedán, o camioneta de ½ tonelada', 'Sí'] },
        { en: ['Project Manager', 'Compact Sedan or small SUV', 'Yes'], es: ['Gerente de Proyecto', 'Sedán compacto o SUV pequeño', 'Sí'] },
        { en: ['Marketing', 'Compact Sedan or small SUV', 'Yes'], es: ['Mercadotecnia', 'Sedán compacto o SUV pequeño', 'Sí'] },
        { en: ['Client Representative', 'Compact Sedan or small SUV', 'Yes'], es: ['Representante de Clientes', 'Sedán compacto o SUV pequeño', 'Sí'] },
        { en: ['Operations Management', '½ ton pickup or equivalent', 'Yes'], es: ['Gerencia de Operaciones', 'Camioneta de ½ tonelada o equivalente', 'Sí'] },
        { en: ['Irrigation Technicians', '½ ton pickup or minivan', 'Yes'], es: ['Técnicos de Irrigación', 'Camioneta de ½ tonelada o minivan', 'Sí'] },
      ] },
    { t: 'fine', en: 'Management reserves the right to change vehicle assignments or make exceptions at any time. Personal use of a Company vehicle beyond business travel and commuting is not standard and requires separate written authorization as described above. Take-home vehicle assignments for Irrigation Technicians are offered at the Company\'s discretion and are optional for the employee. An Irrigation Technician who prefers not to commute in a Company vehicle may store it at the designated yard or lot at the end of their shift instead.',
      es: 'La gerencia se reserva el derecho de cambiar las asignaciones de vehículos o hacer excepciones en cualquier momento. El uso personal de un vehículo de la Compañía más allá del viaje comercial y el traslado no es estándar y requiere autorización por escrito por separado según lo descrito anteriormente. Las asignaciones de vehículos para llevar a casa a los Técnicos de Irrigación se ofrecen a discreción de la Compañía y son opcionales para el empleado. Un Técnico de Irrigación que prefiera no trasladarse en un vehículo de la Compañía puede guardarlo en el patio o lote designado al final de su turno.' },
    { t: 'section', en: 'Employee Acknowledgment', es: 'Reconocimiento del Empleado' },
    { t: 'p', en: 'Employees assigned a Company vehicle must sign this acknowledgment confirming that they understand and agree to comply with all terms of this policy.',
      es: 'Los empleados a quienes se les asigne un vehículo de la Compañía deben firmar este acuse de recibo confirmando que entienden y aceptan cumplir con todos los términos de esta política.' },
    { t: 'sig', fieldsEn: ['Print Name', 'Employee Signature', 'Date'], fieldsEs: ['Nombre en Letra de Molde', 'Firma del Empleado', 'Fecha'] },
  ],
},

// --------------------------------------------------------------- 19 --
{
  key: 'attendancepolicy',
  title: { en: 'Attendance & Punctuality Policy Acknowledgment', es: 'Acuse de Recibo de la Política de Asistencia y Puntualidad' },
  blocks: [
    { t: 'p', en: 'Reliable and punctual attendance is an essential requirement for every position at SouthWest Landscape. This policy outlines expectations for reporting absences, tardiness, and following the Company\'s call-in procedures.',
      es: 'La asistencia confiable y puntual es un requisito esencial para todos los puestos en SouthWest Landscape. Esta política describe las expectativas para reportar ausencias, tardanzas, y seguir los procedimientos de notificación de la Compañía.' },
    { t: 'section', en: 'Key Points', es: 'Puntos Clave' },
    { t: 'list', check: true,
      itemsEn: [
        'Employees are expected to arrive on time and be prepared to begin work on their scheduled shift.',
        'If you are late or absent, you must notify your supervisor or administrative office staff before your shift begins, or as soon as reasonably possible.',
        'Acceptable notification methods: phone call (leave voicemail if no answer), text message, or email.',
        'Simply attempting to call without leaving a message or notifying after your shift begins without a valid reason will be treated as a failure to notify.',
        'Planned absences should be arranged with your supervisor in advance when possible.',
        'Failure to notify is considered a no-call/no-show. Three (3) consecutive missed workdays, or two (2) separate no-call/no-show instances, may be treated as voluntary resignation unless the absence is legally protected.',
        'Absences covered under law (California Paid Sick Leave, FMLA, CFRA, PDL, Jury Duty, etc.) will not be considered violations of this policy.',
        'Repeated or excessive tardiness or unexcused absences may lead to corrective action, up to and including termination.',
        'Emergency & Unsafe Work Conditions: Employees will not face discipline or retaliation for refusing to report to work or for leaving a worksite only if they have a reasonable belief in an imminent and serious threat to their health or safety, and the conditions cannot be addressed through normal reporting procedures. Examples may include officially declared natural disasters, criminal acts, or government-issued evacuation orders. Employees are expected to report unsafe conditions immediately to a supervisor or management.',
      ],
      itemsEs: [
        'Se espera que los empleados lleguen a tiempo y estén preparados para comenzar a trabajar en su turno programado.',
        'Si llega tarde o está ausente, debe notificar a su supervisor o al personal administrativo de la oficina antes de que comience su turno, o tan pronto como sea razonablemente posible.',
        'Métodos de notificación aceptables: llamada telefónica (dejar mensaje de voz si no contestan), mensaje de texto, o correo electrónico.',
        'Simplemente intentar llamar sin dejar un mensaje, o notificar después de que comience su turno sin una razón válida, se tratará como una falta de notificación.',
        'Las ausencias planificadas deben coordinarse con su supervisor con anticipación cuando sea posible.',
        'La falta de notificación se considera un no aviso/no presentación. Tres (3) días de trabajo perdidos consecutivos, o dos (2) casos separados de no aviso/no presentación, pueden tratarse como renuncia voluntaria, a menos que la ausencia esté protegida legalmente.',
        'Las ausencias cubiertas por la ley (Licencia por Enfermedad Pagada de California, FMLA, CFRA, PDL, Jurado, etc.) no se considerarán violaciones de esta política.',
        'Las tardanzas repetidas o excesivas, o las ausencias injustificadas, pueden dar lugar a acción correctiva, hasta e incluyendo la terminación.',
        'Emergencias y Condiciones de Trabajo Inseguras: Los empleados no enfrentarán disciplina ni represalias por negarse a presentarse a trabajar o por abandonar un sitio de trabajo, únicamente si tienen una creencia razonable de una amenaza inminente y grave a su salud o seguridad, y las condiciones no pueden abordarse mediante los procedimientos normales de notificación. Los ejemplos pueden incluir desastres naturales declarados oficialmente, actos delictivos, o órdenes de evacuación emitidas por el gobierno. Se espera que los empleados reporten condiciones inseguras de inmediato a un supervisor o a la gerencia.',
      ] },
    { t: 'p', en: 'I acknowledge that I have received, read, and understand SouthWest Landscape\'s Attendance & Punctuality Policy. I understand that reliable attendance is a condition of employment and that failure to comply with this policy may result in corrective action, up to and including termination.',
      es: 'Reconozco que he recibido, leído y entiendo la Política de Asistencia y Puntualidad de SouthWest Landscape. Entiendo que la asistencia confiable es una condición de empleo y que el incumplimiento de esta política puede resultar en acción correctiva, hasta e incluyendo la terminación.' },
    { t: 'section', en: 'Employee Acknowledgment', es: 'Acuse de Recibo del Empleado' },
    { t: 'sig', fieldsEn: ['Employee Name (Print)', 'Employee Signature', 'Date'], fieldsEs: ['Nombre del Empleado (Letra de Molde)', 'Firma del Empleado', 'Fecha'] },
  ],
},

// --------------------------------------------------------------- 20 --
{
  key: 'eeo1',
  title: { en: 'Equal Employment Opportunity (EEO-1) — Employee Self-Identification Form', es: 'Igualdad de Oportunidades de Empleo (EEO-1) — Formulario de Autoidentificación del Empleado' },
  blocks: [
    { t: 'section', en: 'Employee Information', es: 'Información del Empleado' },
    { t: 'grid', cols: 2, cellsEn: [{ label: 'Full Name' }, { label: 'Job Title' }], cellsEs: [{ label: 'Nombre Completo' }, { label: 'Puesto' }] },
    { t: 'p', en: 'What is your gender? □ Male &nbsp; □ Female &nbsp; □ I choose not to self-identify', es: '¿Cuál es su género? □ Masculino &nbsp; □ Femenino &nbsp; □ Prefiero no autoidentificarme' },
    { t: 'section', en: 'Race / Ethnicity — Please mark the category with which you primarily identify', es: 'Raza / Etnicidad — Marque la categoría con la que se identifica principalmente' },
    { t: 'list',
      itemsEn: [
        '□ Hispanic or Latino: a person of Cuban, Mexican, Chicano, Puerto Rican, South or Central American, or other Spanish culture or origin, regardless of race.',
        '□ White (Not Hispanic or Latino): a person having origins in any of the original peoples of Europe, the Middle East, or North Africa.',
        '□ Black or African American (Not Hispanic or Latino): a person having origins in any of the black racial groups of Africa.',
        '□ Asian (Not Hispanic or Latino): a person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent.',
        '□ Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino): a person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands.',
        '□ American Indian or Alaska Native (Not Hispanic or Latino): a person having origins in any of the original peoples of North and South America, and who maintains tribal affiliation or community attachment.',
        '□ Two or More Races (Not Hispanic or Latino): a person who primarily identifies with two or more of the above race/ethnicity categories.',
        '□ I do not wish to disclose.',
      ],
      itemsEs: [
        '□ Hispano o Latino: una persona de origen o cultura cubana, mexicana, chicana, puertorriqueña, sudamericana o centroamericana, u otra cultura u origen español, sin importar la raza.',
        '□ Blanco (No Hispano o Latino): una persona que tiene orígenes en cualquiera de los pueblos originarios de Europa, Medio Oriente o Norte de África.',
        '□ Negro o Afroamericano (No Hispano o Latino): una persona que tiene orígenes en cualquiera de los grupos raciales negros de África.',
        '□ Asiático (No Hispano o Latino): una persona que tiene orígenes en cualquiera de los pueblos originarios del Lejano Oriente, Sudeste Asiático o el subcontinente indio.',
        '□ Nativo de Hawái u Otro Isleño del Pacífico (No Hispano o Latino): una persona que tiene orígenes en cualquiera de los pueblos originarios de Hawái, Guam, Samoa u otras Islas del Pacífico.',
        '□ Indio Americano o Nativo de Alaska (No Hispano o Latino): una persona que tiene orígenes en cualquiera de los pueblos originarios de Norte y Sudamérica, y que mantiene afiliación tribal o vínculo comunitario.',
        '□ Dos o Más Razas (No Hispano o Latino): una persona que se identifica principalmente con dos o más de las categorías de raza/etnicidad anteriores.',
        '□ No deseo revelar esta información.',
      ] },
    { t: 'fine', en: 'The Equal Employment Opportunity Commission (EEOC) requires organizations with 100 or more employees to complete an EEO-1 report each year. Your employer invites you to self-identify gender and race/ethnicity. Completion of this data is VOLUNTARY and will not affect your opportunity for employment, or terms or conditions of employment. This form will be used for EEO-1 reporting purposes only and will be kept separate from all other personnel records, accessed only by Human Resources.',
      es: 'La Comisión para la Igualdad de Oportunidades en el Empleo (EEOC) requiere que las organizaciones con 100 o más empleados completen un informe EEO-1 cada año. Su empleador le invita a autoidentificar su género y raza/etnicidad. Completar esta información es VOLUNTARIO y no afectará su oportunidad de empleo, ni los términos o condiciones de su empleo. Este formulario se usará únicamente para fines de informes EEO-1 y se mantendrá separado de todos los demás registros de personal, con acceso único por parte de Recursos Humanos.' },
    { t: 'section', en: 'Certification', es: 'Certificación' },
    { t: 'sig', fieldsEn: ['Signature', 'Date'], fieldsEs: ['Firma', 'Fecha'] },
    { t: 'fine', en: 'Refusal to complete this form will not subject you to any adverse treatment. This form will be used for governmental reporting purposes only. If we have not received your completed form, the Company will interpret that to mean you have declined self-identification and will be required to obtain the necessary information from visual identification and/or other available information. Thank you for your participation.',
      es: 'Negarse a completar este formulario no lo sujetará a ningún trato adverso. Este formulario se usará únicamente para fines de informes gubernamentales. Si no hemos recibido su formulario completado, la Compañía interpretará que usted ha decidido no autoidentificarse y será necesario obtener la información requerida mediante identificación visual y/u otra información disponible. Gracias por su participación.' },
  ],
},

];
