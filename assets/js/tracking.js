// Script de Rastreamento de Cliques de Afiliados - SexyAI
function trackClick(offerName) {
    // 1. Log local para testes no navegador (pressione F12 para ver)
    console.log(`[SexyAI Tracking] Clique registrado na oferta: ${offerName} em ${new Date().toISOString()}`);

    // 2. Integração futura: Google Analytics 4 (GA4)
    // Se você adicionar o Google Analytics no futuro, o evento será enviado automaticamente para lá
    if (typeof gtag !== 'undefined') {
        gtag('event', 'affiliate_click', {
            'event_category': 'Affiliate',
            'event_label': offerName,
            'value': 1
        });
    }

    // 3. Integração futura: Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('trackCustom', 'AffiliateClick', { offer: offerName });
    }
}

