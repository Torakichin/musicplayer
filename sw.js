const CACHE_NAME = 'music-player-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './pict_stop.png',
  './pict_play.png',
  // 音楽ファイルもキャッシュに含める（ファイル名が増えたらここに追加）
  './music/BLUE TEARS_JUDY AND MARY.mp3',
  './music/breakfast_Mrs. GREEN APPLE.mp3',
  './music/DEPARTURES_globe.mp3',
  './music/LOVER SOUL_JUDY AND MARY.mp3',
  './music/あいのうた_Swallowtail Butterfly.mp3',
  './music/ギブス_椎名林檎.mp3',
  './music/きらり_藤井風.mp3',
  './music/ダンスホール_Mrs. GREEN APPLE.mp3',
  './music/なんなん_藤井風.mp3',
  './music/ライラック_Mrs. GREEN APPLE.mp3',
  './music/花_藤井風.mp3',
  './music/幸福論_椎名林檎.mp3',
  './music/新宝島_サカナクション.mp3',
  './music/青と夏_Mrs. GREEN APPLE.mp3',
  './music/僕と花_サカナクション.mp3',
  './music/夜の踊り子_サカナクション.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});