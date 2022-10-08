const form = document.querySelector('form');
const input = document.querySelector('input');
var Button = document.getElementById('3');

form.addEventListener('submit', async event => {
  event.preventDefault();
  window.navigator.serviceWorker
    .register(__uv$config.sw, {
      scope: '/'
    })
    .then(() => {
      let url = input.value.trim();
      if (!isUrl(url)) url = 'https://duckduckgo.com/' + url;
      else if (!(url.startsWith('https://') || url.startsWith('http://')))
        url = 'http://' + url;

      const blank = window.open('about:blank', '_blank');
      const url2 =
        'https://mathchemistryforstudents.ml' +
        __uv$config.prefix +
        __uv$config.encodeUrl(url);
      const doc = blank.document;
      const iframe = doc.createElement('iframe');
      const style = iframe.style;
      const img = doc.createElement('link');
      doc.title = 'MichaelHTML';
      img.rel = 'icon';
      img.href = 'https://ssl.gstatic.com/classroom/favicon.png';
      iframe.src = url2;
      style.position = 'fixed';
      style.border = style.width = 'none';
      style.width = style.height = '100%';
      style.top = style.bottom = style.left = style.right = 0;
      doc.body.appendChild(iframe);
    });
});

function isUrl(val = '') {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes('.') && val.substr(0, 1) !== ' ')
  )
    return true;
  return false;
}
