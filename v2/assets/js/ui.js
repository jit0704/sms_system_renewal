// publishing UI javascript
$(function () {
  // HTML include (퍼블리싱 확인용)
  if ($('[include-html]').length !== 0) {
    includeHTML();
  }

  // ui 인터렉션 호출
  cmmnUi.init();
});

const cmmnUi = {
  init() {
    cmmnUi.gnb();
  },
  gnb() {
    setTimeout(function () {
      var gnbBg = $('.navigation .bg-depth2');
      $(document).on('mouseenter', '.gnb-depth1', function () {
        $('.navigation .bg-depth2').slideDown(100);
      });
      $(document).on('mouseleave', '.gnb', function () {
        gnbBg.slideUp(200);
      });
    }, 100);
  },
};
