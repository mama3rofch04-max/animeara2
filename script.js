/* ====== قاعدة بيانات أنميات — 30 عنصر ====== */
/* ملاحظة: روابط الفيديو هنا تجريبية (نفس ملف تجريبي). استبدلها بروابط الفيديو الحقيقية أو CDN عندما تكون جاهز */
const animeDB = [
  { id:"naruto", title:"Naruto", img:"https://i.imgur.com/3V8V7j9.jpg",
    synopsis:"قصة ناروتو ورحلته ليصبح الهوكاجي.", genres:["اكشن","مغامرات"], episodes:[
      {ep:1,title:"بداية الرحلة",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"},
      {ep:220,title:"نقطة التحول",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"onepiece", title:"One Piece", img:"https://i.imgur.com/8Km9tLL.jpg",
    synopsis:"لوفي وطاقمه في رحلة للكنز الأعظم.", genres:["مغامرات","كوميديا"], episodes:[
      {ep:1,title:"أنا لوفي!",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"},
      {ep:1052,title:"المعركة الكبرى",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"aot", title:"Attack on Titan", img:"https://i.imgur.com/u6lZt3y.jpg",
    synopsis:"الإنسانية تحارب العمالقة من وراء الجدران.", genres:["اكشن","دراما"], episodes:[
      {ep:1,title:"العملاق الأول",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"},
      {ep:28,title:"النهائي",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"demon", title:"Demon Slayer", img:"https://i.imgur.com/tGbaZCY.jpg",
    synopsis:"تانجيرو وصراعه مع الشياطين.", genres:["اكشن","فانتازيا"], episodes:[
      {ep:1,title:"بداية المهمة",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"},
      {ep:12,title:"قوة اللهب",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"mha", title:"My Hero Academia", img:"https://i.imgur.com/2WZt6tS.jpg",
    synopsis:"طلاب يسعون ليصبحوا أبطالًا.", genres:["اكشن","مدرسي"], episodes:[
      {ep:1,title:"البطل الجديد",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"bleach", title:"Bleach", img:"https://i.imgur.com/4AiXzf8.jpg",
    synopsis:"إيشيغو وقوى الروح.", genres:["اكشن","خارق"], episodes:[
      {ep:1,title:"روح الموت",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"deathnote", title:"Death Note", img:"https://i.imgur.com/6Z2T5uF.jpg",
    synopsis:"دفتر الموت وتحقيق العدالة.", genres:["دراما","غموض"], episodes:[
      {ep:1,title:"الدفتر",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"hunter", title:"Hunter x Hunter", img:"https://i.imgur.com/7YQp8eX.jpg",
    synopsis:"قصة غون وصراعه لإيجاد أبيه.", genres:["مغامرات","اكشن"], episodes:[
      {ep:1,title:"انطلاق الرحلة",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"tokyo", title:"Tokyo Ghoul", img:"https://i.imgur.com/aZCqYqF.jpg",
    synopsis:"نصف إنسان نصف غول وصراع داخلي.", genres:["رعب","دراما"], episodes:[
      {ep:1,title:"التحول",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"jujutsu", title:"Jujutsu Kaisen", img:"https://i.imgur.com/ZvZ9m2H.jpg",
    synopsis:"مطاردة الأرواح واللعنات.", genres:["اكشن","فانتازيا"], episodes:[
      {ep:1,title:"لعنة بدأت",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"spy", title:"Spy x Family", img:"https://i.imgur.com/xXqkG7c.jpg",
    synopsis:"عائلة غير عادية لأجل مهمة سرية.", genres:["كوميديا","اكشن"], episodes:[
      {ep:1,title:"مهمة الاندماج",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"onepunch", title:"One Punch Man", img:"https://i.imgur.com/Y3GQw5J.jpg",
    synopsis:"بطل يغلب الجميع بضربة واحدة.", genres:["اكشن","كوميديا"], episodes:[
      {ep:1,title:"بداية السخرية",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"fullmetal", title:"Fullmetal Alchemist", img:"https://i.imgur.com/0hXH9tK.jpg",
    synopsis:"توأمان يبحثان عن الحجر الفلسفي.", genres:["مغامرات","دراما"], episodes:[
      {ep:1,title:"الرموز الأولى",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"cowboy", title:"Cowboy Bebop", img:"https://i.imgur.com/q6m7h7N.jpg",
    synopsis:"صيد الجوائز عبر الفضاء.", genres:["سفري","اكشن"], episodes:[
      {ep:1,title:"القبض على اللص",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"hunterxhunter", title:"HxH (قديمة)", img:"https://i.imgur.com/7YQp8eX.jpg",
    synopsis:"نسخة إضافية من Hunter x Hunter.", genres:["مغامرات"], episodes:[
      {ep:1,title:"بدايات",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"gintama", title:"Gintama", img:"https://i.imgur.com/2Yz9T4r.jpg",
    synopsis:"كوميديا وسخرية مع لمسة ساموراي.", genres:["كوميديا","اكشن"], episodes:[
      {ep:1,title:"فوضى ساموراي",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"rezero", title:"Re:Zero", img:"https://i.imgur.com/1K4hK0W.jpg",
    synopsis:"عودة في الزمن ومحاولات البقاء.", genres:["فانتازيا","دراما"], episodes:[
      {ep:1,title:"البداية الجديدة",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"steins", title:"Steins;Gate", img:"https://i.imgur.com/3d4Qz5Z.jpg",
    synopsis:"السفر عبر الزمن والمصائر المتشابكة.", genres:["خيال علمي","دراما"], episodes:[
      {ep:1,title:"رسالة زمنية",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"haikyuu", title:"Haikyuu!!", img:"https://i.imgur.com/9o3k8Z7.jpg",
    synopsis:"كرة الطائرة وروح الفريق.", genres:["رياضة","دراما"], episodes:[
      {ep:1,title:"قمة الفريق",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"clannad", title:"Clannad", img:"https://i.imgur.com/4nX3YwZ.jpg",
    synopsis:"دراما رومانسية مؤثرة.", genres:["دراما","رومانسية"], episodes:[
      {ep:1,title:"لقاء مصيري",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"toradora", title:"Toradora", img:"https://i.imgur.com/5rQmQ4P.jpg",
    synopsis:"رومانسية مدرسة ونكات.", genres:["رومانسية","كوميديا"], episodes:[
      {ep:1,title:"لقاء المدرسة",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"parasite", title:"Parasyte", img:"https://i.imgur.com/6wTzQ3l.jpg",
    synopsis:"غزو طفيليات وصراع للبقاء.", genres:["رعب","خارق"], episodes:[
      {ep:1,title:"الاختراق",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"mob", title:"Mob Psycho 100", img:"https://i.imgur.com/wQ0VZ2o.jpg",
    synopsis:"قوى نفسية ومواقف كوميدية.", genres:["اكشن","كوميديا"], episodes:[
      {ep:1,title:"القوة الهائلة",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"vinland", title:"Vinland Saga", img:"https://i.imgur.com/4rPlY1Q.jpg",
    synopsis:"سرد ملحمي عن الفايكنج.", genres:["تاريخي","دراما"], episodes:[
      {ep:1,title:"نيران الشمال",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"chainsaw", title:"Chainsaw Man", img:"https://i.imgur.com/7aPj9hL.jpg",
    synopsis:"مزيج من رعب وإثارة.", genres:["اكشن","رعب"], episodes:[
      {ep:1,title:"مزيج المرعب",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"samurai", title:"Samurai Champloo", img:"https://i.imgur.com/fkQw5bL.jpg",
    synopsis:"رحلة ساموراي مع موسيقى الهيب هوب.", genres:["سفري","اكشن"], episodes:[
      {ep:1,title:"لقاء الطرق",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"yuyu", title:"Yu Yu Hakusho", img:"https://i.imgur.com/8bXq9cN.jpg",
    synopsis:"قتالات الروح وعالم الأرواح.", genres:["اكشن","خارق"], episodes:[
      {ep:1,title:"الاستدعاء",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"goblin", title:"Goblin Slayer", img:"https://i.imgur.com/0lZ1r7O.jpg",
    synopsis:"حكاية قاتل الغوبلن الشرس.", genres:["فانتازيا","اكشن"], episodes:[
      {ep:1,title:"بداية المهمة",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"dororo", title:"Dororo", img:"https://i.imgur.com/6X7kBvQ.jpg",
    synopsis:"سفر ومواجهة للشر الروحي.", genres:["تاريخي","خارق"], episodes:[
      {ep:1,title:"الطفرة",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]},
  { id:"blackclover", title:"Black Clover", img:"https://i.imgur.com/Hy9bq1y.jpg",
    synopsis:"سحر ومنافسة للوصول للقمة.", genres:["فانتازيا","اكشن"], episodes:[
      {ep:1,title:"تحدي السحر",video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}]}
];
/* ====== helpers ====== */
const el=(t,cls='',attrs={})=>{const e=document.createElement(t); if(cls) e.className=cls; for(const k in attrs) if(attrs[k]!==undefined) e.setAttribute(k, attrs[k]); return e; }

/* render functions */
function renderLatest(){
  const latestGrid = document.getElementById('latest-grid'); latestGrid.innerHTML='';
  animeDB.forEach(a=>{
    const last = a.episodes[a.episodes.length-1];
    const card = el('div','anime-card');
    const img = el('img','anime-thumb',{src:a.img,alt:a.title});
    const body = el('div','anime-body');
    const h = el('h3','anime-title'); h.textContent = a.title;
    const meta = el('div','anime-meta'); meta.textContent = `آخر: حلقة ${last.ep}`;
    const btn = el('button','watch-btn'); btn.textContent='مشاهدة';
    btn.addEventListener('click', ()=> openModal({ title:`${a.title} — حلقة ${last.ep}`, meta:last.title, video:last.video }) );
    body.append(h,meta,btn);
    card.append(img,body);
    latestGrid.appendChild(card);
  });
}

function renderAll(filterGenre=''){
  const allGrid = document.getElementById('all-grid'); allGrid.innerHTML='';
  const list = filterGenre ? animeDB.filter(a=> a.genres.includes(filterGenre) ) : animeDB;
  list.forEach(a=>{
    const card = el('div','anime-card');
    const img = el('img','anime-thumb',{src:a.img,alt:a.title});
    const body = el('div','anime-body');
    const h = el('h3','anime-title'); h.textContent = a.title;
    const meta = el('div','anime-meta'); meta.textContent = a.genres.join(' • ');
    const btn = el('button','watch-btn'); btn.textContent='عرض التفاصيل';
    btn.addEventListener('click', ()=> showDetail(a.id) );
    body.append(h,meta,btn);
    card.append(img,body);
    allGrid.appendChild(card);
  });
}

function renderFeatured(){
  const f = document.getElementById('featured-card'); f.innerHTML='';
  const a = animeDB[0];
  if(!a) return;
  const img = el('img'); img.src=a.img;
  const info = el('div','featured-info');
  const h = el('h3'); h.textContent = a.title;
  const p = el('p','meta'); p.textContent = a.synopsis;
  const btn = el('button','play'); btn.textContent='شغّل الحلقة الأخيرة';
  btn.addEventListener('click', ()=> {
    const last = a.episodes[a.episodes.length-1];
    openModal({ title:`${a.title} — حلقة ${last.ep}`, meta:last.title, video:last.video });
  });
  info.append(h,p,btn);
  f.append(img,info);
}

function showDetail(id){
  const item = animeDB.find(x=>x.id===id); if(!item) return;
  document.getElementById('detail-view').style.display='block';
  document.getElementById('all').style.display='none';
  document.getElementById('latest').style.display='none';
  document.getElementById('detail-card').innerHTML='';
  const card = el('div','detail-card');
  const img = el('img'); img.src=item.img;
  const meta = el('div','detail-meta');
  const h = el('h2'); h.textContent=item.title;
  const p = el('p'); p.textContent=item.synopsis;
  const tags = el('div'); tags.textContent = 'النوع: ' + item.genres.join(', ');
  meta.append(h,p,tags);
  card.append(img,meta);
  document.getElementById('detail-card').appendChild(card);
  const epsWrap = document.getElementById('episodes-list'); epsWrap.innerHTML='';
  const title = el('h3'); title.textContent='قائمة الحلقات';
  epsWrap.appendChild(title);
  item.episodes.slice().reverse().forEach(ep=>{
    const row = el('div','episode');
    const left = el('div'); left.textContent = `الحلقة ${ep.ep} — ${ep.title}`;
    const right = el('div');
    const play = el('button','btn small'); play.textContent='مشاهدة';
    play.addEventListener('click', ()=> openModal({ title:`${item.title} — حلقة ${ep.ep}`, meta:ep.title, video:ep.video }) );
    right.appendChild(play);
    row.append(left,right);
    epsWrap.appendChild(row);
  });
}

/* modal player */
function openModal(item){
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('modal-video');
  document.getElementById('modal-title').textContent = item.title || 'عنوان';
  document.getElementById('modal-desc').textContent = item.meta || '';
  video.src = item.video || '';
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
  video.play().catch(()=>{});
}
function closeModal(){
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('modal-video');
  video.pause(); video.src='';
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}

/* search + filter */
function populateGenres(){
  const set = new Set();
  animeDB.forEach(a=> a.genres.forEach(g=> set.add(g)));
  const sel = document.getElementById('genre-filter');
  set.forEach(g=>{
    const opt = document.createElement('option'); opt.value=g; opt.textContent=g; sel.appendChild(opt);
  });
}
function searchAndRender(q){
  q = q.trim().toLowerCase();
  if(!q){ renderAll(); renderLatest(); return; }
  const res = animeDB.filter(a=> a.title.toLowerCase().includes(q) || a.synopsis.toLowerCase().includes(q) || a.genres.join(' ').toLowerCase().includes(q) );
  document.getElementById('all-grid').innerHTML='';
  res.forEach(a=>{
    const card = el('div','anime-card');
    const img = el('img','anime-thumb',{src:a.img});
    const body = el('div','anime-body');
    const h = el('h3','anime-title'); h.textContent = a.title;
    const meta = el('div','anime-meta'); meta.textContent = a.genres.join(' • ');
    const btn = el('button','watch-btn'); btn.textContent='عرض التفاصيل';
    btn.addEventListener('click', ()=> showDetail(a.id) );
    body.append(h,meta,btn);
    card.append(img,body);
    document.getElementById('all-grid').appendChild(card);
  });
}

/* theme toggle */
function toggleTheme(){
  const root = document.documentElement;
  if(root.style.getPropertyValue('--bg') === '#071129' || !root.style.getPropertyValue('--bg')){
    root.style.setProperty('--bg','#f6f7fb');
    root.style.setProperty('--card','#ffffff');
    root.style.setProperty('--muted','#4a4a4a');
    document.body.style.color = '#071129';
  } else {
    root.style.setProperty('--bg','#071129');
    root.style.setProperty('--card','#0f1724');
    root.style.setProperty('--muted','#b7c7d9');
    document.body.style.color = '#fff';
  }
}

/* init */
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
  renderFeatured();
  renderLatest();
  renderAll();
  populateGenres();

  document.getElementById('close-modal').addEventListener('click', closeModal);
  document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
  document.getElementById('search-input').addEventListener('input', e=> searchAndRender(e.target.value));
  document.getElementById('genre-filter').addEventListener('change', e=> {
    const val = e.target.value;
    renderAll(val);
  });
  document.getElementById('back-to-list').addEventListener('click', ()=>{
    document.getElementById('detail-view').style.display='none';
    document.getElementById('all').style.display='block';
    document.getElementById('latest').style.display='block';
  });
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});
