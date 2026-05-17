/**
 * page-loader.js
 * Fetches data.json and renders the content section for each worksbynrfz page.
 * Each HTML page must have data-page="<slug>" on the <html> element and
 * a <div id="wbn-content"></div> placeholder where the content will be injected.
 */
(function () {
  'use strict';

  var slug = new URLSearchParams(window.location.search).get('p') ||
              document.documentElement.dataset.page;
  if (!slug) return;

  // Provide a no-op cover updater until data loads (called by dark-mode script)
  window._wbnUpdateCover = function () {};

  var dataPromise = fetch('data.json')
    .then(function (r) {
      if (!r.ok) throw new Error('Failed to load data.json: ' + r.status);
      return r.json();
    });

  /* ── Helpers ─────────────────────────────────────────── */

  function buildTabLinks(links) {
    if (!links || !links.length) return '';
    return links.map(function (l) {
      return '<li><a href="' + l.href + '"><i class="' + l.icon + '"></i>&nbsp; ' + l.label + '</a></li>';
    }).join('\n            ');
  }

  function buildCarouselCells(images) {
    return images.map(function (url, i) {
      var id = slug + (i + 1);
      return (
        '<div class="carousel-cell">' +
        '<a href="' + url + '" class="portfolio-img" data-gallery="carousel" id="' + id + '">' +
        '<img class="img-fluid" src="' + url + '" alt="' + id + '-img" draggable="false">' +
        '</a></div>'
      );
    }).join('');
  }

  /* ── Render ───────────────────────────────────────────── */

  function renderPage(d) {
    var coverId = d.coverId || 'cv-tdc';
    var isDark = document.body.classList.contains('dark-mode');
    var coverImg = (isDark && d.coverImageDark) ? d.coverImageDark : d.coverImage;
    var pageUrl = 'https://nurafianzulkifli.com/worksbynrfz/project.html?p=' + slug;
    var encodedTitle = encodeURIComponent(d.title);

    // Update browser tab title
    document.title = d.title + ' | WBN';

    var bannerHtml = '';
    var imagesHtml = '';

    if (d.contentType === 'banner' && d.images && d.images.length) {
      var bannerUrl = d.images[0];
      bannerHtml =
        '<br>' +
        '<div class="banner text-center wow fadeIn" data-wow-delay="150ms">' +
        '<a href="' + bannerUrl + '" class="portfolio-img">' +
        '<img src="' + bannerUrl + '" class="img-fluid" alt="cover-page">' +
        '</a></div>';
    } else if (d.contentType === 'carousel' && d.images && d.images.length) {
      imagesHtml =
        '<div class="wrapper">' +
        '<div class="carousel" id="delays-carousel">' +
        buildCarouselCells(d.images) +
        '</div></div>';
    }

    var html =
      '<!-- Title/Breadcrumbs -->\n' +
      '<section class="about-me-sum clearfix">\n' +
      '  <div class="wbnrfz_eicw">\n' +
      '    <div class="page-header-section">\n' +
      '      <div class="container-xxl container-mobile container-mobile-header">\n' +
      '        <div class="breadcrumb-wrapper">\n' +
      '          <nav aria-label="breadcrumb" class="breadcrumb-desktop" style="display:none;">\n' +
      '            <ol class="breadcrumb">\n' +
      '              <li class="breadcrumb-item"><a href="../index.html"><i class="fa-regular fa-house"></i></a></li>\n' +
      '              <li class="breadcrumb-item"><a href="../menu.html"><i class="fa-regular fa-bars"></i></a></li>\n' +
      '              <li class="breadcrumb-item"><a href="../works-by-nrfz.html"><i class="fa-regular fa-pen-paintbrush"></i></a></li>\n' +
      '            </ol>\n' +
      '          </nav>\n' +
      '          <div class="page-title-wrapper">\n' +
      '            <h1 class="page-title-single">' + d.title + '</h1>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="scrollable-tabs-container">\n' +
      '        <div class="left-arrow"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg></div>\n' +
      '        <ul>\n' +
      '          ' + buildTabLinks(d.links) + '\n' +
      '        </ul>\n' +
      '        <div class="right-arrow active"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></div>\n' +
      '      </div>\n' +
      '      <hr>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</section>\n' +
      '\n' +
      '<!-- Cover Header -->\n' +
      '<section class="breadcrumb-area-eicw-cover bg-img bg-overlay" id="' + coverId + '" style="background-image: url(\'' + coverImg + '\'); height: ' + (d.coverHeight || '75vh') + ';">\n' +
      '  <div class="container h-100"><div class="row h-100 align-items-center"><div class="col-12"></div></div></div>\n' +
      '</section>\n' +
      '\n' +
      '<!-- Details Section -->\n' +
      '<section class="about-me-summ clearfix">\n' +
      '  <div class="wbnrfz_details_section wow fadeIn" data-wow-delay="100ms">\n' +
      '    <div class="container">\n' +
      '      <div class="row justify-content-center">\n' +
      '        <div class="col-lg-12">\n' +
      '          <div class="container container-xxl container-mobile">\n' +
      '            <div class="row">\n' +
      '              <div class="col-md-6 col-lg-4 box-indiv">\n' +
      '                <div class="port-summary port-cat text-center mb-80 wow fadeIn" data-wow-delay="100ms">\n' +
      '                  <div class="summ-icon"><i class="fa-solid fa-list"></i></div>\n' +
      '                  <h3 style="font-size: 18px; font-weight: bolder;">Category</h3>\n' +
      '                  <h4 style="font-size: 13px;">' + d.category + '</h4>\n' +
      '                </div>\n' +
      '              </div>\n' +
      '              <div class="col-md-6 col-lg-4 box-indiv">\n' +
      '                <div class="port-summary port-year text-center mb-80 wow fadeIn" data-wow-delay="100ms">\n' +
      '                  <div class="summ-icon"><i class="fa-solid fa-calendar"></i></div>\n' +
      '                  <h3 style="font-size: 18px; font-weight: bolder;">Project Year</h3>\n' +
      '                  <h4 style="font-size: 13px;">' + d.year + '</h4>\n' +
      '                </div>\n' +
      '              </div>\n' +
      '              <div class="col-md-6 col-lg-4 box-indiv">\n' +
      '                <div class="port-summary port-share text-center mb-80 wow fadeIn" data-wow-delay="100ms">\n' +
      '                  <div class="summ-icon"><i class="fa-solid fa-share-from-square"></i></div>\n' +
      '                  <h3 style="font-size: 18px; font-weight: bolder;">Share Project</h3>\n' +
      '                  <div class="social_links">\n' +
      '                    <a href="https://www.facebook.com/sharer/sharer.php?u=' + pageUrl + '" title="Facebook"><i class="fa-brands fa-facebook"></i></a>\n' +
      '                    <a href="https://x.com/intent/post?url=' + pageUrl + '&text=' + encodedTitle + '" title="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a>\n' +
      '                    <a href="#" class="clipboard" onclick="copyToClipboard(this)" title="Copy Link"><i class="fa-solid fa-link-horizontal"></i></a>\n' +
      '                  </div>\n' +
      '                </div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="details_info">\n' +
      '          <div class="row justify-content-center">\n' +
      '            <div class="col-lg-12">\n' +
      '              <div class="info justify-content-center">\n' +
      '                <p id="wbn-desc-p">' + d.description + '</p>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      bannerHtml + '\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</section>\n' +
      imagesHtml;

    var root = document.getElementById('wbn-content');
    if (!root) return;
    root.innerHTML = html;

    // Align description: center for single-line, left for multi-line
    document.fonts.ready.then(function () {
      var p = document.getElementById('wbn-desc-p');
      if (!p) return;
      var lineHeight = parseFloat(window.getComputedStyle(p).lineHeight);
      p.style.textAlign = p.scrollHeight <= Math.ceil(lineHeight * 1.1) ? 'center' : 'left';
    });

    // Update cover function so theme toggle works after render
    window._wbnUpdateCover = function () {
      var el = document.getElementById(coverId);
      if (!el) return;
      var dark = document.body.classList.contains('dark-mode');
      var img = (dark && d.coverImageDark) ? d.coverImageDark : d.coverImage;
      el.style.backgroundImage = "url('" + img + "')";
    };

    // Re-init Flickity for carousel pages
    if (d.contentType === 'carousel') {
      var carouselEl = document.getElementById('delays-carousel');
      if (carouselEl && window.Flickity) {
        var cells = carouselEl.querySelectorAll('.carousel-cell');
        new window.Flickity(carouselEl, {
          cellAlign: 'center',
          contain: true,
          pageDots: false,
          groupCells: false,
          wrapAround: false,
          draggable: true,
          selectedAttraction: 0.025,
          friction: 0.28,
          prevNextButtons: cells.length > 2
        });
      }
    }

    // Re-init magnificPopup lightbox for portfolio images
    if (window.jQuery && window.jQuery.fn.magnificPopup) {
      window.jQuery('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true,
          preload: [0, 2],
          navigateByImgClick: true,
          tPrev: 'Previous',
          tNext: 'Next'
        }
      });
    }

    // Re-init scrollable tabs arrow navigation
    reinitTabs();
  }

  /* ── Tabs re-init (mirrors dstabs.js logic) ──────────── */

  function reinitTabs() {
    var tabsList = document.querySelector('.scrollable-tabs-container ul');
    var leftArrow = document.querySelector('.scrollable-tabs-container .left-arrow');
    var rightArrow = document.querySelector('.scrollable-tabs-container .right-arrow');
    if (!tabsList || !leftArrow || !rightArrow) return;

    function manageArrows() {
      var sl = tabsList.scrollLeft;
      var overflow = tabsList.scrollWidth - tabsList.clientWidth;
      leftArrow.style.display = sl > 0 ? '' : 'none';
      rightArrow.style.display = overflow - sl > 1 ? '' : 'none';
    }

    leftArrow.addEventListener('click', function () { tabsList.scrollLeft -= 200; manageArrows(); });
    rightArrow.addEventListener('click', function () { tabsList.scrollLeft += 200; manageArrows(); });
    tabsList.addEventListener('scroll', manageArrows);
    manageArrows();
  }

  /* ── Bootstrap ───────────────────────────────────────── */

  document.addEventListener('DOMContentLoaded', function () {
    dataPromise
      .then(function (data) {
        var d = data[slug];
        if (!d) {
          console.error('[page-loader] No entry for slug "' + slug + '" in data.json');
          return;
        }
        renderPage(d);
      })
      .catch(function (err) {
        console.error('[page-loader] ' + err.message);
      });
  });

})();
