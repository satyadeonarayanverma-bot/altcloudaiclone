/**
 * Mobile Menu Fix v4 – Bulletproof hamburger menu
 * Fixes: hamburger position in top-right of black header bar
 */
(function () {
    'use strict';

    var style = document.createElement('style');
    style.id = 'mobile-menu-fix-styles';
    style.textContent = [
        '@media only screen and (max-width: 767px) {',

        /* ── HEADER BAR LAYOUT: logo left, hamburger right ── */
        '  .elementor-element-3550465 > .e-con-inner {',
        '    display: flex !important;',
        '    flex-direction: row !important;',
        '    flex-wrap: nowrap !important;',
        '    align-items: center !important;',
        '    justify-content: space-between !important;',
        '    width: 100% !important;',
        '    position: relative !important;',
        '  }',

        /* Logo widget: stay left, shrink on small screens */
        '  .elementor-element-3550465 .elementor-widget-site-logo {',
        '    flex: 0 1 auto !important;',
        '    max-width: 60% !important;',
        '  }',

        /* Nav widget: push to right, don\'t wrap */
        '  .elementor-element-3550465 .elementor-widget-navigation-menu {',
        '    flex: 1 1 auto !important;',
        '    display: flex !important;',
        '    justify-content: flex-end !important;',
        '    align-items: center !important;',
        '    min-width: 0 !important;',
        '  }',

        /* The hfe-nav-menu wrapper: flex-end for hamburger */
        '  .elementor-element-3550465 .hfe-nav-menu.hfe-layout-horizontal {',
        '    display: flex !important;',
        '    justify-content: flex-end !important;',
        '    align-items: center !important;',
        '    width: 100% !important;',
        '  }',

        /* ── HAMBURGER TOGGLE: visible, right-aligned ── */
        '  .hfe-layout-horizontal .hfe-nav-menu__toggle,',
        '  .hfe-layout-vertical .hfe-nav-menu__toggle,',
        '  .hfe-nav-menu .hfe-nav-menu__toggle,',
        '  div.hfe-nav-menu__toggle.elementor-clickable,',
        '  div.hfe-nav-menu__toggle {',
        '    visibility: visible !important;',
        '    opacity: 1 !important;',
        '    display: flex !important;',
        '    cursor: pointer;',
        '    padding: 8px;',
        '    z-index: 10000;',
        '    align-items: center;',
        '    position: relative;',
        '  }',
        '  .hfe-nav-menu__toggle .hfe-nav-menu-icon {',
        '    display: flex !important;',
        '    align-items: center;',
        '  }',
        '  .hfe-nav-menu__toggle .hfe-nav-menu-icon svg {',
        '    width: 28px !important;',
        '    height: 28px !important;',
        '    fill: #ffffff !important;',
        '    display: block !important;',
        '  }',

        /* ── NAV MENU: hidden by default on mobile ── */
        '  nav.hfe-nav-menu__layout-horizontal {',
        '    display: none !important;',
        '    visibility: hidden !important;',
        '    opacity: 0 !important;',
        '    height: 0 !important;',
        '    overflow: hidden !important;',
        '  }',

        /* ── NAV MENU: open state ── */
        '  nav.hfe-nav-menu__layout-horizontal.mobile-menu-open {',
        '    display: block !important;',
        '    visibility: visible !important;',
        '    opacity: 1 !important;',
        '    height: auto !important;',
        '    overflow: visible !important;',
        '    position: fixed !important;',
        '    top: 0 !important;',
        '    left: 0 !important;',
        '    right: 0 !important;',
        '    bottom: 0 !important;',
        '    width: 100vw !important;',
        '    background: rgba(10, 10, 10, 0.97) !important;',
        '    z-index: 99999 !important;',
        '    padding: 70px 0 20px !important;',
        '    overflow-y: auto !important;',
        '    animation: mobileMenuFade 0.2s ease-out;',
        '  }',
        '  @keyframes mobileMenuFade {',
        '    from { opacity: 0; }',
        '    to   { opacity: 1; }',
        '  }',

        /* Stack menu items vertically */
        '  nav.mobile-menu-open ul.hfe-nav-menu {',
        '    display: flex !important;',
        '    flex-direction: column !important;',
        '    width: 100% !important;',
        '    flex-wrap: nowrap !important;',
        '  }',
        '  nav.mobile-menu-open li.menu-item {',
        '    width: 100% !important;',
        '    border-bottom: 1px solid rgba(255,255,255,0.08);',
        '  }',
        '  nav.mobile-menu-open li.menu-item:last-child {',
        '    border-bottom: none;',
        '  }',
        '  nav.mobile-menu-open li a.hfe-menu-item {',
        '    padding: 16px 24px !important;',
        '    color: #ffffff !important;',
        '    font-size: 16px !important;',
        '    display: flex !important;',
        '    justify-content: space-between !important;',
        '    align-items: center !important;',
        '  }',
        '  nav.mobile-menu-open li a.hfe-menu-item:hover {',
        '    background: rgba(255,255,255,0.06);',
        '  }',

        /* Sub-menu styling */
        '  nav.mobile-menu-open .sub-menu {',
        '    position: static !important;',
        '    visibility: hidden !important;',
        '    opacity: 0 !important;',
        '    height: 0 !important;',
        '    overflow: hidden !important;',
        '    width: 100% !important;',
        '    background: rgba(255,255,255,0.03) !important;',
        '    box-shadow: none !important;',
        '    transition: none !important;',
        '    min-width: unset !important;',
        '  }',
        '  nav.mobile-menu-open .sub-menu.mobile-sub-open {',
        '    visibility: visible !important;',
        '    opacity: 1 !important;',
        '    height: auto !important;',
        '    overflow: visible !important;',
        '    padding: 0 !important;',
        '    display: block !important;',
        '  }',
        '  nav.mobile-menu-open .sub-menu a.hfe-sub-menu-item {',
        '    padding: 14px 24px 14px 40px !important;',
        '    color: #b0b0b0 !important;',
        '    font-size: 15px !important;',
        '    display: block !important;',
        '  }',
        '  nav.mobile-menu-open .sub-menu a.hfe-sub-menu-item:hover {',
        '    color: #ffffff !important;',
        '    background: rgba(255,255,255,0.04);',
        '  }',

        /* Sub-arrow indicator */
        '  nav.mobile-menu-open .hfe-menu-toggle.sub-arrow {',
        '    display: flex !important;',
        '    padding: 10px 16px !important;',
        '    cursor: pointer;',
        '    transition: transform 0.2s ease;',
        '  }',
        '  nav.mobile-menu-open .hfe-menu-toggle.sub-arrow.rotated {',
        '    transform: rotate(180deg);',
        '  }',
        '  nav.mobile-menu-open .hfe-menu-toggle.sub-arrow i.fa::before {',
        '    content: "▾" !important;',
        '    font-family: inherit !important;',
        '    color: #888 !important;',
        '    font-size: 16px !important;',
        '    font-style: normal !important;',
        '  }',

        /* Close button inside the fullscreen menu */
        '  .mobile-menu-close-btn {',
        '    position: fixed !important;',
        '    top: 16px !important;',
        '    right: 16px !important;',
        '    z-index: 100000 !important;',
        '    width: 40px !important;',
        '    height: 40px !important;',
        '    display: none;',
        '    align-items: center !important;',
        '    justify-content: center !important;',
        '    cursor: pointer;',
        '    background: rgba(255,255,255,0.1);',
        '    border: none;',
        '    border-radius: 8px;',
        '    padding: 8px;',
        '  }',
        '  .mobile-menu-close-btn.visible {',
        '    display: flex !important;',
        '  }',
        '  .mobile-menu-close-btn svg {',
        '    width: 20px;',
        '    height: 20px;',
        '    fill: #ffffff;',
        '  }',

        '}',

        /* Desktop: force normal display */
        '@media only screen and (min-width: 768px) {',
        '  div.hfe-nav-menu__toggle {',
        '    display: none !important;',
        '  }',
        '  nav.hfe-nav-menu__layout-horizontal {',
        '    display: block !important;',
        '    visibility: visible !important;',
        '    opacity: 1 !important;',
        '    height: auto !important;',
        '  }',
        '  .mobile-menu-close-btn {',
        '    display: none !important;',
        '  }',
        '}'
    ].join('\n');
    document.head.appendChild(style);

    /* ── Init on DOM ready ── */
    function initMobileMenu() {

        var toggles = document.querySelectorAll('.hfe-nav-menu__toggle');
        if (!toggles.length) return;

        toggles.forEach(function (toggle) {

            /* Force inline styles on mobile */
            if (window.innerWidth <= 767) {
                toggle.style.setProperty('display', 'flex', 'important');
                toggle.style.setProperty('visibility', 'visible', 'important');
                toggle.style.setProperty('opacity', '1', 'important');
            }

            var wrapper = toggle.closest('.hfe-nav-menu') ||
                toggle.closest('.elementor-widget-container');
            if (!wrapper) return;

            var navMenu = wrapper.querySelector('nav.hfe-nav-menu__layout-horizontal') ||
                wrapper.querySelector('nav');
            if (!navMenu) return;

            /* Icon references */
            var iconContainer = toggle.querySelector('.hfe-nav-menu-icon');
            var openIcon = iconContainer ? iconContainer.querySelector('svg.e-fas-align-justify') : null;

            /* Create a fullscreen close button (outside the menu) */
            var closeBtn = document.querySelector('.mobile-menu-close-btn');
            if (!closeBtn) {
                closeBtn = document.createElement('button');
                closeBtn.className = 'mobile-menu-close-btn';
                closeBtn.setAttribute('aria-label', 'Close menu');
                closeBtn.innerHTML = '<svg viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.19 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.19 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>';
                document.body.appendChild(closeBtn);
            }

            var isOpen = false;

            /* ── Toggle click handler ── */
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (!isOpen) openMenu();
            });

            closeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                closeMenu();
            });

            function openMenu() {
                isOpen = true;
                navMenu.classList.add('mobile-menu-open');
                closeBtn.classList.add('visible');
                document.body.style.overflow = 'hidden'; // prevent body scroll
            }

            function closeMenu() {
                isOpen = false;
                navMenu.classList.remove('mobile-menu-open');
                closeBtn.classList.remove('visible');
                document.body.style.overflow = '';

                /* Close all sub-menus */
                var openSubs = navMenu.querySelectorAll('.sub-menu.mobile-sub-open');
                for (var i = 0; i < openSubs.length; i++) {
                    openSubs[i].classList.remove('mobile-sub-open');
                }
                var rotatedArrows = navMenu.querySelectorAll('.sub-arrow.rotated');
                for (var j = 0; j < rotatedArrows.length; j++) {
                    rotatedArrows[j].classList.remove('rotated');
                }
            }

            /* ── Sub-menu toggle logic ── */
            var subArrows = wrapper.querySelectorAll('.hfe-menu-toggle.sub-arrow');
            subArrows.forEach(function (arrow) {
                arrow.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var parentLi = arrow.closest('li.hfe-has-submenu') || arrow.closest('li.menu-item-has-children');
                    if (!parentLi) return;

                    var subMenu = parentLi.querySelector('.sub-menu');
                    if (!subMenu) return;

                    if (subMenu.classList.contains('mobile-sub-open')) {
                        subMenu.classList.remove('mobile-sub-open');
                        arrow.classList.remove('rotated');
                    } else {
                        subMenu.classList.add('mobile-sub-open');
                        arrow.classList.add('rotated');
                    }
                });
            });

            /* ── Resize handler ── */
            window.addEventListener('resize', function () {
                if (window.innerWidth > 767 && isOpen) {
                    closeMenu();
                }
                if (window.innerWidth <= 767) {
                    toggle.style.setProperty('display', 'flex', 'important');
                    toggle.style.setProperty('visibility', 'visible', 'important');
                    toggle.style.setProperty('opacity', '1', 'important');
                } else {
                    toggle.style.removeProperty('display');
                    toggle.style.removeProperty('visibility');
                    toggle.style.removeProperty('opacity');
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
})();
