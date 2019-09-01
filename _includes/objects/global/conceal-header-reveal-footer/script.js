const recalculatePaddings = function() {
  if (document.querySelector('.u-conceal-header')) {
    document.querySelector('.u-conceal-header').style.removeProperty('--conceal-header-fallback-height');
    document.querySelector('.u-conceal-header').style.setProperty('--conceal-header-height', document.querySelector('.o-conceal-header').offsetHeight + 'px');
  }
  if (document.querySelector('.u-reveal-footer')) {
    document.querySelector('.u-reveal-footer').style.removeProperty('--reveal-footer-fallback-height');
    document.querySelector('.u-reveal-footer').style.setProperty('--reveal-footer-height', document.querySelector('.o-reveal-footer').offsetHeight + 'px');
  }    
};

document.addEventListener('DOMContentLoaded', function(event) {
  recalculatePaddings();
});

window.addEventListener('resize', function(event) {
  recalculatePaddings();
});

window.addEventListener('orientationchange', function(event) {
  recalculatePaddings();
});
