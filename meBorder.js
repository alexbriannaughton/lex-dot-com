document.addEventListener('DOMContentLoaded', function () {
    const me = document.querySelector('#me');
    if (me.complete) {
        // Image is already loaded (cached), directly show hidden content
        imageLoaded();
      } else {
        me.addEventListener('load', imageLoaded);
      }
    function imageLoaded() {
        console.log('hey')
        const hiddenContent = document.querySelector('.hidden-until-loaded');
        hiddenContent.style.display = 'block';

    }
});