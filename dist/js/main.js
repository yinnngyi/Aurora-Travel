!function(){console.log(data),Object.keys(data).forEach(a=>{let t=data[a],e=t.info,i=t.schedule,s=e.note.map(a=>`<div class="text">${a}</div>`).join(""),d=$(`
      <div class="tab-content ${"day1"===a?"active":""}" data-tab="${a}">
        <div class="day-info">
          <div class="title">${e.day} ${e.title}</div>
          <div class="date">${e.date}</div>
        </div>
        <div class="day-note">${s}</div>
        <div class="timeline"></div>
      </div>
    `);i.forEach(a=>{let t=$(`
        <div class="timeline-item">
          <div class="time-badge">${a.time}</div>
          <div class="timeline-dot"></div>
          <div class="timeline-line"></div>
          <div class="timeline-content">
            <div class="travel-card" data-item-id="${a.id}">
              <div class="card-content">
                ${a.image?`<div class="image-container"><img src="${a.image}" class="travel-image"></div>`:""}
                <div class="text-content">
                  <div class="card-header">
                    <div class="titles">
                      <h3>${a.title}</h3>
                      ${a.subtitle?`<p>${a.subtitle}</p>`:""}
                    </div>
                    ${a.expanded?`<button class="expand-btn">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z"/></g></svg>
                          </button>`:""}
                  </div>
                  <div class="expanded-content">
                    ${a.expanded&&a.expanded.map?`<a class="map-link" href="${a.expanded.map.link}" target="_blank" rel="noopener noreferrer">${a.expanded.map.text}</a>`:""}
                    ${a.expanded&&a.expanded.note?`<div class="note">${a.expanded.note}</div>`:""}
                  </div>
                </div>
              </div>
            </div>
            ${Array.isArray(a.transportation)?a.transportation.map(a=>`
                        <div class="transportation">
                          ${function(a){switch(a){case"walk":return`\u{1F463}`;case"bus":return`\u{1F68C}`;case"plane":return`\u{2708}\u{FE0F}`;case"train":return`\u{1F69D}`;default:return`\u{1F551}`}}(a.method)}
                          <span>${a.duration}</span>
                          ${a.cost?`<span class="cost">${a.cost}</span>`:""}
                        </div>
                      `).join(""):""}
          </div>
        </div>
      `);d.find(".timeline").append(t)}),$(".tabs").append(d)}),$(".map-link").prepend(`
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>
  `),$(".tab-trigger").click(function(){let a=$(this).data("tab");$(".tab-trigger").removeClass("active"),$(this).addClass("active"),$(".tab-content").removeClass("active"),$(`.tab-content[data-tab="${a}"]`).addClass("active"),history.replaceState(null,null,`#${$(this).index()+1}`)});let a=parseInt(window.location.hash.replace("#",""),10);if(!isNaN(a)){let t=$(".tab-trigger").eq(a-1);t.length&&t.trigger("click")}$(".expand-btn").click(function(a){a.stopPropagation();let t=$(this).closest(".travel-card").find(".expanded-content"),e=$(this);t.hasClass("show")?(t.removeClass("show"),e.removeClass("expanded")):(t.addClass("show"),e.addClass("expanded"))}),$(".travel-card").click(function(){$(this).find(".expand-btn").click()}),$(".image-container").click(function(a){a.stopPropagation();let t=$(this).find(".travel-image"),e=t.attr("src");t.attr("alt"),$("#modalImage").attr("src",e),$("#imageModal").addClass("show")}),$(".modal-content .close, .modal").click(function(a){a.target===this&&$("#imageModal").removeClass("show")}),$("#modalImage").click(function(a){a.stopPropagation()}),$(document).keyup(function(a){"Escape"===a.key&&$("#imageModal").removeClass("show")}),$("html").css("scroll-behavior","smooth"),$(".travel-image").on("load",function(){$(this).addClass("loaded")}),$(".travel-card").hover(function(){$(this).addClass("hovered")},function(){$(this).removeClass("hovered")}),$("#btn-info, #btn-close").click(function(a){$("body").toggleClass("open")});let t=$(".tab-list"),e=t.offset().top;$(window).on("scroll",function(){$(window).scrollTop()>=e?t.addClass("sticky-top"):t.removeClass("sticky-top")})}();
//# sourceMappingURL=main.js.map
