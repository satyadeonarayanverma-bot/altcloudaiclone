/**
 * Mobile Menu Fix – Comprehensive hamburger menu for all pages
 * Handles: toggle visibility, menu expand/collapse, sub-menu toggles, close icon swap
 */
document.addEventListener('DOMContentLoaded', function () {

    /* ── 1. Inject CSS overrides to guarantee hamburger visibility on mobile ── */
    const style = document.createElement('style');
    style.textContent = `
        /* Force hamburger icon visible on mobile (≤767px) */
        @media only screen and (max-width: 767px) {
            .hfe-nav-menu__toggle {
                visibility: visible !important;
                opacity: 1 !important;
                display: flex !important;
                cursor: pointer;
                padding: 8px;
                margin-left: auto;
                z-index: 10000;
            }
            .hfe-nav-menu__toggle .hfe-nav-menu-icon svg {
                width: 28px;
                height: 28px;
                fill: #ffffff;
            }
            /* Hide horizontal nav by default on mobile */
            .hfe-nav-menu__layout-horizontal {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                height: 0 !important;
                overflow: hidden !important;
            }
            /* When menu is open */
            .hfe-nav-menu__layout-horizontal.mobile-menu-open {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
                height: auto !important;
                overflow: visible !important;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                width: 100%;
                background: #0a0a0a;
                z-index: 9999;
                padding: 10px 0;
                box-shadow: 0 8px 24px rgba(0,0,0,0.4);
                animation: menuSlideDown 0.25s ease-out;
            }
            @keyframes menuSlideDown {
                from { opacity: 0; transform: translateY(-10px); }
                to   { opacity: 1; transform: translateY(0); }
            }
            /* Stack menu items vertically */
            .hfe-nav-menu__layout-horizontal.mobile-menu-open .hfe-nav-menu {
                display: flex !important;
                flex-direction: column !important;
                width: 100% !important;
            }
            .hfe-nav-menu__layout-horizontal.mobile-menu-open .hfe-nav-menu li.menu-item {
                width: 100% !important;
                border-bottom: 1px solid rgba(255,255,255,0.08);
            }
            .hfe-nav-menu__layout-horizontal.mobile-menu-open .hfe-nav-menu li.menu-item:last-child {
                border-bottom: none;
            }
            .hfe-nav-menu__layout-horizontal.mobile-menu-open .hfe-nav-menu li a.hfe-menu-item {
                padding: 14px 20px !important;
                color: #ffffff !important;
                font-size: 15px !important;
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
            }
            .hfe-nav-menu__layout-horizontal.mobile-menu-open .hfe-nav-menu li a.hfe-menu-item:hover {
                background: rgba(255,255,255,0.06);
            }
            /* Sub-menu styling */
            .hfe-nav-menu__layout-horizontal.mobile-menu-open .sub-menu {
                position: static !important;
                visibility: hidden !important;
                opacity: 0 !important;
                height: 0 !important;
                overflow: hidden !important;
                width: 100% !important;
                background: rgba(255,255,255,0.03) !important;
                box-shadow: none !important;
                transition: none !important;
            }
            .hfe-nav-menu__layout-horizontal.mobile-menu-open .sub-menu.mobile-sub-open {
                visibility: visible !important;
                opacity: 1 !important;
                height: auto !important;
                overflow: visible !important;
                padding: 0 !important;
            }
            .hfe-nav-menu__layout-horizontal.mobile-menu-open .sub-menu a.hfe-sub-menu-item {
                padding: 12px 20px 12px 36px !important;
                color: #b0b0b0 !important;
                font-size: 14px !important;
                display: block !important;
            }
            .hfe-nav-menu__layout-horizontal.mobile-menu-open .sub-menu a.hfe-sub-menu-item:hover {
                color: #ffffff !important;
                background: rgba(255,255,255,0.04);
            }
            /* Sub-arrow indicator */
            .hfe-nav-menu__layout-horizontal.mobile-menu-open .hfe-menu-toggle.sub-arrow {
                display: flex !important;
                padding: 10px 16px !important;
                cursor: pointer;
                transition: transform 0.2s ease;
            }
            .hfe-nav-menu__layout-horizontal.mobile-menu-open .hfe-menu-toggle.sub-arrow.rotated {
                transform: rotate(180deg);
            }
            .hfe-nav-menu__layout-horizontal.mobile-menu-open .hfe-menu-toggle.sub-arrow i.fa::before {
                content: '▾';
                font-family: inherit;
                color: #888;
                font-size: 14px;
            }
            /* Make the header container position relative for absolute dropdown */
            .e-con.e-parent[data-settings*="sticky"] {
                position: relative !important;
            }
        }
        /* On desktop, ensure normal horizontal display */
        @media only screen and (min-width: 768px) {
            .hfe-nav-menu__toggle {
                display: none !important;
            }
            .hfe-nav-menu__layout-horizontal {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
                height: auto !important;
            }
        }
    `;
    document.head.appendChild(style);

    /* ── 2. Find all hamburger toggle instances ── */
    const toggles = document.querySelectorAll('.hfe-nav-menu__toggle');

    toggles.forEach(toggle => {
        const wrapper = toggle.closest('.hfe-nav-menu');
        if (!wrapper) return;

        /* Find the nav element (the horizontal layout nav) */
        const navMenu = wrapper.querySelector('nav.hfe-nav-menu__layout-horizontal') ||
            wrapper.querySelector('.hfe-nav-menu__layout-horizontal');
        if (!navMenu) return;

        /* Icon references */
        const iconContainer = toggle.querySelector('.hfe-nav-menu-icon');
        const openIcon = iconContainer ? iconContainer.querySelector('svg.e-fas-align-justify') : null;

        /* Create close (X) icon */
        let closeIcon = iconContainer ? iconContainer.querySelector('.mobile-menu-fix-close') : null;
        if (!closeIcon && iconContainer) {
            closeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            closeIcon.setAttribute("aria-hidden", "true");
            closeIcon.setAttribute("class", "e-font-icon-svg mobile-menu-fix-close");
            closeIcon.setAttribute("viewBox", "0 0 352 512");
            closeIcon.innerHTML = '<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.19 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.19 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>';
            closeIcon.style.display = 'none';
            closeIcon.style.width = '20px';
            closeIcon.style.height = '20px';
            closeIcon.style.fill = '#ffffff';
            iconContainer.appendChild(closeIcon);
        }

        let isOpen = false;

        /* ── 3. Toggle click handler ── */
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            isOpen = !isOpen;

            if (isOpen) {
                navMenu.classList.add('mobile-menu-open');
                toggle.classList.add('hfe-active', 'hfe-active-menu');
                if (openIcon) openIcon.style.display = 'none';
                if (closeIcon) closeIcon.style.display = 'block';
            } else {
                closeMenu();
            }
        });

        function closeMenu() {
            isOpen = false;
            navMenu.classList.remove('mobile-menu-open');
            toggle.classList.remove('hfe-active', 'hfe-active-menu');
            if (openIcon) openIcon.style.display = 'block';
            if (closeIcon) closeIcon.style.display = 'none';

            /* Close all sub-menus too */
            navMenu.querySelectorAll('.sub-menu.mobile-sub-open').forEach(sm => {
                sm.classList.remove('mobile-sub-open');
            });
            navMenu.querySelectorAll('.sub-arrow.rotated').forEach(arrow => {
                arrow.classList.remove('rotated');
            });
        }

        /* ── 4. Sub-menu toggle logic ── */
        const subArrows = wrapper.querySelectorAll('.hfe-menu-toggle.sub-arrow');
        subArrows.forEach(arrow => {
            arrow.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                const parentLi = arrow.closest('li.hfe-has-submenu');
                if (!parentLi) return;

                const subMenu = parentLi.querySelector('.sub-menu');
                if (!subMenu) return;

                const isSubOpen = subMenu.classList.contains('mobile-sub-open');
                if (isSubOpen) {
                    subMenu.classList.remove('mobile-sub-open');
                    arrow.classList.remove('rotated');
                } else {
                    subMenu.classList.add('mobile-sub-open');
                    arrow.classList.add('rotated');
                }
            });
        });

        /* ── 5. Close menu when clicking outside ── */
        document.addEventListener('click', function (e) {
            if (isOpen && !wrapper.contains(e.target)) {
                closeMenu();
            }
        });

        /* ── 6. Close menu on window resize to desktop ── */
        window.addEventListener('resize', function () {
            if (window.innerWidth > 767 && isOpen) {
                closeMenu();
            }
        });
    });
});
