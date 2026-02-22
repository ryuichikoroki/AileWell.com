'use strict';

(function () {
    const HEADER = `
<header x-data="{ open: false }" data-header
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md text-white transition-all duration-300"
    style="background:rgba(12,35,64,0.96);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-[72px]">
            <a href="index.html" class="text-xl lg:text-2xl font-bold tracking-wide font-display shrink-0">AileWell</a>
            <nav class="hidden lg:flex items-center gap-1">
                <a href="index.html"   data-nav="index.html"   class="nav-link-effect px-4 py-2 text-sm font-medium text-white/90 rounded-lg hover:bg-white/10 transition-colors">トップ</a>
                <a href="about.html"   data-nav="about.html"   class="nav-link-effect px-4 py-2 text-sm font-medium text-white/90 rounded-lg hover:bg-white/10 transition-colors">会社概要</a>
                <a href="service.html" data-nav="service.html" class="nav-link-effect px-4 py-2 text-sm font-medium text-white/90 rounded-lg hover:bg-white/10 transition-colors">事業・サービス</a>
                <a href="news.html"    data-nav="news.html"    class="nav-link-effect px-4 py-2 text-sm font-medium text-white/90 rounded-lg hover:bg-white/10 transition-colors">ニュース</a>
                <a href="recruit.html" data-nav="recruit.html" class="nav-link-effect px-4 py-2 text-sm font-medium text-white/90 rounded-lg hover:bg-white/10 transition-colors">採用情報</a>
                <a href="access.html"  data-nav="access.html"  class="nav-link-effect px-4 py-2 text-sm font-medium text-white/90 rounded-lg hover:bg-white/10 transition-colors">アクセス</a>
            </nav>
            <div class="flex items-center gap-3">
                <a href="contact.html" class="hidden sm:inline-flex items-center px-5 py-2.5 bg-white text-[#1d6fd8] text-sm font-bold rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">お問い合わせ</a>
                <button @click="open = !open" class="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" :aria-expanded="open" aria-label="メニューを開く">
                    <i x-show="!open" class="fa-solid fa-bars text-lg"></i>
                    <i x-show="open"  class="fa-solid fa-xmark text-lg" x-cloak></i>
                </button>
            </div>
        </div>
    </div>
    <div x-show="open"
         x-transition:enter="transition ease-out duration-200"
         x-transition:enter-start="opacity-0 -translate-y-2"
         x-transition:enter-end="opacity-100 translate-y-0"
         x-transition:leave="transition ease-in duration-150"
         x-transition:leave-start="opacity-100 translate-y-0"
         x-transition:leave-end="opacity-0 -translate-y-2"
         x-cloak
         class="lg:hidden backdrop-blur-md border-t border-white/10"
         style="background:rgba(8,28,54,0.98);">
        <nav class="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <a href="index.html"   data-nav-m="index.html"   class="px-4 py-3 text-white/90 font-medium rounded-lg hover:bg-white/10 transition-colors">トップ</a>
            <a href="about.html"   data-nav-m="about.html"   class="px-4 py-3 text-white/90 font-medium rounded-lg hover:bg-white/10 transition-colors">会社概要</a>
            <a href="service.html" data-nav-m="service.html" class="px-4 py-3 text-white/90 font-medium rounded-lg hover:bg-white/10 transition-colors">事業・サービス</a>
            <a href="news.html"    data-nav-m="news.html"    class="px-4 py-3 text-white/90 font-medium rounded-lg hover:bg-white/10 transition-colors">ニュース</a>
            <a href="recruit.html" data-nav-m="recruit.html" class="px-4 py-3 text-white/90 font-medium rounded-lg hover:bg-white/10 transition-colors">採用情報</a>
            <a href="access.html"  data-nav-m="access.html"  class="px-4 py-3 text-white/90 font-medium rounded-lg hover:bg-white/10 transition-colors">アクセス</a>
            <a href="contact.html" class="sm:hidden mt-2 px-4 py-3 bg-white text-[#1d6fd8] font-bold rounded-lg text-center">お問い合わせ</a>
        </nav>
    </div>
</header>`;

    const FOOTER = `
<footer class="bg-[#0d1929] text-white/90 relative z-[1]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 md:pb-16 border-b border-white/10">
            <div class="lg:col-span-1">
                <a href="index.html" class="text-xl font-bold text-white font-display">AileWell</a>
                <p class="text-white/50 text-sm mt-2">通信で、未来をつなぐ</p>
            </div>
            <div>
                <p class="text-xs font-bold tracking-[0.15em] text-white/40 uppercase mb-4">企業情報</p>
                <nav class="flex flex-col gap-3">
                    <a href="about.html"   class="text-white/75 text-sm hover:text-white transition-colors">会社概要</a>
                    <a href="service.html" class="text-white/75 text-sm hover:text-white transition-colors">事業・サービス</a>
                    <a href="news.html"    class="text-white/75 text-sm hover:text-white transition-colors">ニュース</a>
                    <a href="recruit.html" class="text-white/75 text-sm hover:text-white transition-colors">採用情報</a>
                </nav>
            </div>
            <div>
                <p class="text-xs font-bold tracking-[0.15em] text-white/40 uppercase mb-4">サポート</p>
                <nav class="flex flex-col gap-3">
                    <a href="contact.html" class="text-white/75 text-sm hover:text-white transition-colors">お問い合わせ</a>
                    <a href="access.html"  class="text-white/75 text-sm hover:text-white transition-colors">アクセス</a>
                    <a href="privacy.html" class="text-white/75 text-sm hover:text-white transition-colors">プライバシーポリシー</a>
                </nav>
            </div>
            <div>
                <p class="text-xs font-bold tracking-[0.15em] text-white/40 uppercase mb-4">Contact</p>
                <div class="flex flex-col gap-3 text-sm text-white/75">
                    <a href="contact.html" class="inline-flex items-center gap-2 hover:text-white transition-colors">
                        <i class="fa-solid fa-envelope text-xs"></i> お問い合わせ
                    </a>
                </div>
            </div>
        </div>
        <div class="py-6 md:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p class="text-white/40 text-xs">&copy; AileWell. All Rights Reserved.</p>
            <button onclick="window.scrollTo({top:0,behavior:'smooth'})"
                class="text-white/40 hover:text-white/70 transition-colors text-xs flex items-center gap-1"
                aria-label="ページトップに戻る">
                <i class="fa-solid fa-arrow-up"></i> PAGE TOP
            </button>
        </div>
    </div>
</footer>`;

    const headerEl = document.getElementById('site-header');
    if (headerEl) headerEl.outerHTML = HEADER;

    const footerEl = document.getElementById('site-footer');
    if (footerEl) footerEl.outerHTML = FOOTER;

    // アクティブなナビリンクを現在のページに基づいてマーク
    const current = location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('[data-nav]').forEach(a => {
        if (a.dataset.nav === current) {
            a.classList.add('active');
            a.style.color = 'rgba(255,255,255,1)';
        }
    });

    document.querySelectorAll('[data-nav-m]').forEach(a => {
        if (a.dataset.navM === current) {
            a.style.background = 'rgba(255,255,255,0.15)';
            a.style.color = 'rgba(255,255,255,1)';
        }
    });
})();
