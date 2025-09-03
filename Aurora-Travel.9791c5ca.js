!function(){console.log(data),Object.keys(data).forEach(t=>{let a=data[t],e=a.info,i=a.schedule,s=e.note.map(t=>`<div class="text">${t}</div>`).join(""),d=$(`
      <div class="tab-content ${"day1"===t?"active":""}" data-tab="${t}">
        <div class="day-info">
          <div class="title">${e.day} ${e.title}</div>
          <div class="date">${e.date}</div>
        </div>
        <div class="day-note">${s}</div>
        <div class="timeline"></div>
      </div>
    `);i.forEach(t=>{let a=$(`
        <div class="timeline-item">
          <div class="time-badge">${t.time}</div>
          <div class="timeline-dot"></div>
          <div class="timeline-line"></div>
          <div class="timeline-content">
            <div class="travel-card" data-item-id="${t.id}">
              <div class="card-content">
                ${t.image?`<div class="image-container"><img src="${t.image}" class="travel-image"></div>`:""}
                <div class="text-content">
                  <div class="card-header">
                    <div class="titles">
                      <h3>${t.title}</h3>
                      ${t.subtitle?`<p>${t.subtitle}</p>`:""}
                    </div>
                    ${t.expanded?`<button class="expand-btn">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z"/></g></svg>
                          </button>`:""}
                  </div>
                  <div class="expanded-content">
                    ${t.expanded&&t.expanded.map?`<a class="map-link" href="${t.expanded.map.link}" target="_blank" rel="noopener noreferrer">${t.expanded.map.text}</a>`:""}
                    ${t.expanded&&t.expanded.note?`<div class="note">${t.expanded.note}</div>`:""}
                  </div>
                </div>
              </div>
            </div>
            ${Array.isArray(t.transportation)?t.transportation.map(t=>`
                        <div class="transportation">
                          ${function(t){switch(t){case"walk":return`\u{1F463}`;case"bus":return`\u{1F68C}`;case"plane":return`\u{2708}\u{FE0F}`;case"train":return`\u{1F69D}`;default:return`\u{1F551}`}}(t.method)}
                          <span>${t.duration}</span>
                          ${t.cost?`<span class="cost">${t.cost}</span>`:""}
                        </div>
                      `).join(""):""}
          </div>
        </div>
      `);d.find(".timeline").append(a)}),$(".tabs").append(d)}),$(".map-link").prepend(`
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>
  `),$(".tab-trigger").click(function(){let t=$(this).data("tab");$(".tab-trigger").removeClass("active"),$(this).addClass("active"),$(".tab-content").removeClass("active"),$(`.tab-content[data-tab="${t}"]`).addClass("active");let a=$(this).position().left,e=$(".tab-list").width(),i=$(this).outerWidth(),s=$(".tab-list").scrollLeft()+a-e/2+i/2;$(".tab-list").animate({scrollLeft:s},200);let d=$(".main-content").offset().top;$("html, body").animate({scrollTop:d},100),history.replaceState(null,null,`#${$(this).index()+1}`)});let t=parseInt(window.location.hash.replace("#",""),10);if(!isNaN(t)){let a=$(".tab-trigger").eq(t-1);a.length&&a.trigger("click")}$(".expand-btn").click(function(t){t.stopPropagation();let a=$(this).closest(".travel-card").find(".expanded-content"),e=$(this);a.hasClass("show")?(a.removeClass("show"),e.removeClass("expanded")):(a.addClass("show"),e.addClass("expanded"))}),$(".travel-card").click(function(){$(this).find(".expand-btn").click()}),$(".image-container").click(function(t){t.stopPropagation();let a=$(this).find(".travel-image"),e=a.attr("src");a.attr("alt"),$("#modalImage").attr("src",e),$("#imageModal").addClass("show")}),$(".modal-content .close, .modal").click(function(t){t.target===this&&$("#imageModal").removeClass("show")}),$("#modalImage").click(function(t){t.stopPropagation()}),$(document).keyup(function(t){"Escape"===t.key&&$("#imageModal").removeClass("show")}),$("html").css("scroll-behavior","smooth"),$(".travel-image").on("load",function(){$(this).addClass("loaded")}),$(".travel-card").hover(function(){$(this).addClass("hovered")},function(){$(this).removeClass("hovered")}),$("#btn-info, #btn-close").click(function(t){$("body").toggleClass("open")});let a=$(".tab-list").offset().top;$(window).on("scroll",function(){$(window).scrollTop()>=a?$("body").addClass("sticky-top"):$("body").removeClass("sticky-top")})}();
//# sourceMappingURL=Aurora-Travel.9791c5ca.js.map
