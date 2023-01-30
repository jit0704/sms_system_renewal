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
    cmmnUi.modal();
    cmmnUi.userForm();
  },
  gnb() {
    setTimeout(function () {
      var gnbBg = $('.navigation .bg-depth2');
      var gnbDepth2 = $('.gnb-depth2');
      $(document).on('mouseenter', '.gnb-depth1', function () {
        gnbBg.slideDown(100);
        if (!$('.gnb').is('.type2')) {
          gnbDepth2.removeClass('active');
          $(this).next('.gnb-depth2').addClass('active');
        } else {
          gnbDepth2.addClass('active');
        }
      });
      $(document).on('mouseleave', '.navigation', function () {
        gnbBg.slideUp(200);
        gnbDepth2.removeClass('active');
      });
    }, 100);
  },
  modal() {
    $('.btn-modal-open').on('click', function () {
      $(this).modal({
        closeExisting: false,
        clickClose: false,
        fadeDuration: 100,
      });
      return false;
    });
  },
  userForm() {
    $('.radio-chk-display input').on('change', function () {
      isChked($('[data-ui="divide-used"]'), $('[data-ui="divide-unused"]'));
      isChked($('[data-ui="divide-unused"]'), $('[data-ui="divide-used"]'));
      isChked($('[data-ui="time-used"]'), $('[data-ui="time-unused"]'));
      isChked($('[data-ui="time-unused"]'), $('[data-ui="time-used"]'));
    });

    // 디폴트 체크 값 설정
    $('.user-form-choice > .radio-chk-display input').prop('checked', true).trigger('change');

    function isChked($targetEl, $anotherEl) {
      if ($targetEl.is(':checked')) {
        $targetEl.prop('checked', true).parent().removeClass('disabled');
        $targetEl.parent().siblings('input').attr('disabled', false);
        $anotherEl.prop('checked', false).parent().addClass('disabled');
        $anotherEl.parent('.disabled').siblings('input').attr('disabled', true);
      }
    }

    // 약관 링크 텍스트 활성화
    $('.term-list input').on('change', function () {
      var isChk = $(this).is(':checked');
      var linkTxt = $(this).parent().next();
      isChk ? linkTxt.addClass('active') : linkTxt.removeClass('active');
    });
  },
};
