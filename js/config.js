// EmailJS Configuration
// IMPORTANT: These credentials are public keys and safe to expose
// However, you should configure domain restrictions in your EmailJS dashboard
// Go to: https://dashboard.emailjs.com/admin/account
// Under "Security" tab, add your domain to the whitelist

const EMAILJS_CONFIG = {
    publicKey: "ZIEy_2eO1OBqu6JTO",  // Your public key (safe to expose)
    serviceId: "service_f6zqejd",
    templateId: "template_7iqtw2i"
};

// Initialize EmailJS
(function () {
    emailjs.init(EMAILJS_CONFIG.publicKey);
})();
