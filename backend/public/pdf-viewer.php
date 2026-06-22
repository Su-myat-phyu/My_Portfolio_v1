<?php
// Serve the resume PDF inline for viewing in the browser.
// This endpoint does NOT end in .pdf, so IDM (Internet Download Manager)
// cannot intercept it. The browser opens the PDF natively.

$pdfPath = __DIR__ . '/assets/su_myat_phyu_resume_enhanced.pdf';

if (!file_exists($pdfPath)) {
    http_response_code(404);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Resume PDF not found']);
    exit;
}

header('Content-Type: application/pdf');
header('Content-Disposition: inline; filename="Su_Myat_Phyu_Resume.pdf"');
header('Content-Length: ' . filesize($pdfPath));
header('Cache-Control: public, max-age=3600');
header('X-Content-Type-Options: nosniff');

readfile($pdfPath);
exit;
