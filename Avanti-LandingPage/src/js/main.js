document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DE BUSCA ---
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResult = document.getElementById('searchResult');

    function handleSearch() {
        const termo = searchInput.value.trim();
        if (termo) {
            searchResult.innerHTML = `Você buscou por: <strong>'${termo}'</strong>`;
            searchResult.classList.remove('hidden');
        } else {
            searchResult.classList.add('hidden');
        }
    }

    // Trava de segurança: só adiciona os eventos se a busca existir na tela
    if (searchBtn && searchInput && searchResult) {
        searchBtn.addEventListener('click', handleSearch);

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchBtn.contains(e.target)) {
                searchResult.classList.add('hidden');
            }
        });
    }

    // --- 2. INICIALIZAÇÃO DO SWIPER (CARROSSEL INDEPENDENTE) ---
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(container => {
        const swiperEl = container.querySelector('.mySwiper');
        const nextBtn = container.querySelector('.swiper-button-next');
        const prevBtn = container.querySelector('.swiper-button-prev');
        const paginationEl = container.querySelector('.swiper-pagination');

        if (swiperEl) {
            new Swiper(swiperEl, {
                // CORREÇÃO: Começa com 2 cards por padrão (para celulares)
                slidesPerView: 2, 
                spaceBetween: 10,
                
                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },
                
                pagination: {
                    el: paginationEl,
                    clickable: true,
                },
                
                // Responsividade (a partir de qual tamanho de tela muda)
                breakpoints: {
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 5, spaceBetween: 24 }, // Desktop
                },
            });
        }
    });

    // --- 3. LÓGICA DO RODAPÉ EXPANSÍVEL (MOBILE) ---
    const footerTitles = document.querySelectorAll('.footer-title');

    footerTitles.forEach(title => {
        title.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const lista = title.nextElementSibling; 
                if (lista) {
                    lista.classList.toggle('expandido');
                }
            }
        });
    });

    // --- 4. LÓGICA DO MENU HAMBÚRGUER ---
    const btnMobile = document.getElementById('btnMobile');
    const mainNav = document.querySelector('.main-nav');

    if (btnMobile && mainNav) {
        btnMobile.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
    
});