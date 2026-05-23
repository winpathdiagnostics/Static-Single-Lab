/**
 * =========================================================
 * PRIVACY POLICY DATA
 * =========================================================
 */
const PRIVACY_POLICY_CONTENT = `
    <h2 class="text-2xl font-black mb-4">Privacy Policy</h2>
    <p class="mb-4">At Winpath Diagnostics, we value your privacy...</p>
    <p>We collect minimal data to ensure your health reports are delivered accurately.</p>
`;

// Helper to inject into the privacy view
function loadPrivacyPolicy() {
    const container = document.getElementById('privacy-content-container');
    if (container) container.innerHTML = PRIVACY_POLICY_CONTENT;
}
