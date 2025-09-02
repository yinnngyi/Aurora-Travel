(function () {
  console.log(data);

  Object.keys(data).forEach(dayKey => {
    const dayData = data[dayKey];
    const dayInfo = dayData.info;
    const dayItems = dayData.schedule;

    const noteHtml = dayInfo.note
      .map(text => `<div class="text">${text}</div>`)
      .join('');

    const $tabContent = $(`
      <div class="tab-content ${
        dayKey === 'day1' ? 'active' : ''
      }" data-tab="${dayKey}">
        <div class="day-info">
          <div class="title">${dayInfo.day} ${dayInfo.title}</div>
          <div class="date">${dayInfo.date}</div>
        </div>
        <div class="day-note">${noteHtml}</div>
        <div class="timeline"></div>
      </div>
    `);

    function getTransportationIcon(method) {
      switch (method) {
        case 'walk':
          return `👣`;
        case 'bus':
          return `🚌`;
        case 'plane':
          return `✈️`;
        case 'train':
          return `🚝`;
        default:
          return `🕑`;
      }
    }

    // 對每個 item 建立 timeline-item
    dayItems.forEach(item => {
      const $item = $(`
        <div class="timeline-item">
          <div class="time-badge">${item.time}</div>
          <div class="timeline-dot"></div>
          <div class="timeline-line"></div>
          <div class="timeline-content">
            <div class="travel-card" data-item-id="${item.id}">
              <div class="card-content">
                ${
                  item.image
                    ? `<div class="image-container"><img src="${item.image}" class="travel-image"></div>`
                    : ''
                }
                <div class="text-content">
                  <div class="card-header">
                    <div class="titles">
                      <h3>${item.title}</h3>
                      ${item.subtitle ? `<p>${item.subtitle}</p>` : ''}
                    </div>
                    ${
                      item.expanded
                        ? `<button class="expand-btn">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z"/></g></svg>
                          </button>`
                        : ''
                    }
                  </div>
                  <div class="expanded-content">
                    ${
                      item.expanded && item.expanded.map
                        ? `<a class="map-link" href="${item.expanded.map.link}" target="_blank" rel="noopener noreferrer">${item.expanded.map.text}</a>`
                        : ''
                    }
                    ${
                      item.expanded && item.expanded.note
                        ? `<div class="note">${item.expanded.note}</div>`
                        : ''
                    }
                  </div>
                </div>
              </div>
            </div>
            ${
              Array.isArray(item.transportation)
                ? item.transportation
                    .map(t => {
                      return `
                        <div class="transportation">
                          ${getTransportationIcon(t.method)}
                          <span>${t.duration}</span>
                          ${t.cost ? `<span class="cost">${t.cost}</span>` : ''}
                        </div>
                      `;
                    })
                    .join('')
                : ''
            }
          </div>
        </div>
      `);

      $tabContent.find('.timeline').append($item);
    });

    // 插入到頁面中（你可以指定插入位置）
    $('.tabs').append($tabContent); // 假設你有一個容器叫 #tabs-container
  });

  $('.map-link').prepend(`
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>
  `);

  $('.tab-trigger').click(function () {
    const targetTab = $(this).data('tab');

    $('.tab-trigger').removeClass('active');
    $(this).addClass('active');

    $('.tab-content').removeClass('active');
    $(`.tab-content[data-tab="${targetTab}"]`).addClass('active');

    // 更新網址錨點（可選）
    history.replaceState(null, null, `#${$(this).index() + 1}`);
  });

  // 初始錨點解析
  const hash = window.location.hash.replace('#', '');
  const tabIndex = parseInt(hash, 10);

  if (!isNaN(tabIndex)) {
    const $targetBtn = $('.tab-trigger').eq(tabIndex - 1);
    if ($targetBtn.length) {
      $targetBtn.trigger('click');
    }
  }

  // Expand/collapse functionality
  $('.expand-btn').click(function (e) {
    e.stopPropagation();

    const $card = $(this).closest('.travel-card');
    const $expandedContent = $card.find('.expanded-content');
    const $expandBtn = $(this);

    if ($expandedContent.hasClass('show')) {
      // Collapse
      $expandedContent.removeClass('show');
      $expandBtn.removeClass('expanded');
    } else {
      // Expand
      $expandedContent.addClass('show');
      $expandBtn.addClass('expanded');
    }
  });

  // Card click to expand/collapse
  $('.travel-card').click(function () {
    const $expandBtn = $(this).find('.expand-btn');
    $expandBtn.click();
  });

  // Image modal functionality
  $('.image-container').click(function (e) {
    e.stopPropagation();

    const $img = $(this).find('.travel-image');
    const src = $img.attr('src');
    const alt = $img.attr('alt');

    $('#modalImage').attr('src', src);
    $('#imageModal').addClass('show');
  });

  // Close modal
  $('.modal-content .close, .modal').click(function (e) {
    if (e.target === this) {
      $('#imageModal').removeClass('show');
    }
  });

  // Prevent modal close when clicking on image
  $('#modalImage').click(function (e) {
    e.stopPropagation();
  });

  // ESC key to close modal
  $(document).keyup(function (e) {
    if (e.key === 'Escape') {
      $('#imageModal').removeClass('show');
    }
  });

  // Smooth scrolling for better UX
  $('html').css('scroll-behavior', 'smooth');

  // Add loading state for images
  $('.travel-image').on('load', function () {
    $(this).addClass('loaded');
  });

  // Add hover effects for better interaction feedback
  $('.travel-card').hover(
    function () {
      $(this).addClass('hovered');
    },
    function () {
      $(this).removeClass('hovered');
    }
  );

  $('#btn-info, #btn-close').click(function (e) {
    $('body').toggleClass('open');
  });

  const $main = $('.tab-list');
  const initialOffsetTop = $main.offset().top;

  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();

    if (scrollTop >= initialOffsetTop) {
      $main.addClass('sticky-top');
    } else {
      $main.removeClass('sticky-top');
    }
  });
})();