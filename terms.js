/**
 * =========================================================
 * TERMS OF SERVICE DATA
 * =========================================================
 */
const TERMS_OF_SERVICE_CONTENT = `
    <h2 class="text-2xl font-black mb-4">Terms of Service</h2>
    <p class="mb-4">By booking a test with Winpath, you agree to our terms...</p>
    <p>All laboratory services are subject to standard clinical protocols.</p>
`;

// Helper to inject into the terms view
function loadTermsOfService() {
    const container = document.getElementById('terms-content-container');
    if (container) container.innerHTML = TERMS_OF_SERVICE_CONTENT;
}
