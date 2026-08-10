/* Force-download for resource links marked .js-download.
   The plain `download` attribute is ignored for cross-origin / file:// URLs,
   so when the site is served over http(s) we fetch the file as a blob and
   save it, guaranteeing a download instead of in-browser navigation. */
document.addEventListener('click', function (e) {
  var link = e.target.closest('a.js-download');
  if (!link) return;

  // fetch() needs http(s); on file:// it is blocked, so fall back to the
  // native `download` attribute (which the browser already handles).
  if (location.protocol !== 'http:' && location.protocol !== 'https:') return;

  e.preventDefault();
  var url = link.getAttribute('href');
  var name = link.getAttribute('download') || url.split('/').pop();

  fetch(url)
    .then(function (r) { return r.blob(); })
    .then(function (blob) {
      var a = document.createElement('a');
      var obj = URL.createObjectURL(blob);
      a.href = obj;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(obj);
    })
    .catch(function () { window.location.href = url; }); // last-resort fallback
});
