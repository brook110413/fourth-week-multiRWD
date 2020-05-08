$(document).ready(function () {

  // 漢堡選單 開始
  $('.hamIcon').click(function (e) {
    e.preventDefault();
    $('.menu').toggleClass('active');
  });
  // 漢堡選單 結束

  // fqa選單 開始
  $('.faq-list-item p').hide();
  $('.faq-list-item').click(function (e) {
    e.preventDefault();
    $(this).find('p').slideToggle();
    $(this).find('p').parent().siblings().find('p').slideUp();
    $(this).toggleClass('active').siblings().removeClass('active');
  });
  // faq選單 結束
});