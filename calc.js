// CLEARWOOD MENU: aturan harga dan fungsi hitung (tanpa tampilan).
// Dipakai oleh index.html dan diuji oleh tests.html.
var MENU = [
  { id: 'laksa',  name: 'Laksa Clearwood',  price: 37500, unit: 'porsi', stall: true,  food: true },
  { id: 'siomay', name: 'Siomay Karituang', price: 25000, unit: 'porsi', stall: true,  food: true },
  { id: 'bakso',  name: 'Bakso Clearwood',  price: 27500, unit: 'porsi', stall: true,  food: true },
  { id: 'drinks', name: 'Credo Drinks',     price: 25000, unit: 'porsi', stall: true,  food: false },
  { id: 'aqua',   name: 'Aqua 330 ml',      price: 5000,  unit: 'botol', stall: false, food: false }
];
var MIN_ORDER = 10000000, SC_PER_STALL = 300000, FOODSTALL_MIN = 150, AQUA_MIN = 100;
var ARISAN = { laksa: 100, siomay: 100, bakso: 0, drinks: 130, aqua: 100 };
var TRANSPORT_FEE = 500000, ORIGIN = 'Credo Art Space, Jatibening Bekasi';

function rp(n) { return 'Rp ' + Math.round(n).toLocaleString('id-ID'); }
function byId(id) { return MENU.filter(function (m) { return m.id === id; })[0]; }

// Urutan wajib: (1) qty x harga, (2) subtotal per menu, (3) service charge bila di bawah minimum, (4) total.
// state: { mode, qty (fleksibel), foodPick, foodQty, aquaQty }
function calculate(st) {
  var q = {};
  if (st.mode === 'arisan') q = ARISAN;
  else if (st.mode === 'fleksibel') q = st.qty;
  else { MENU.forEach(function (m) { if (st.picks[m.id]) q[m.id] = st.fq[m.id]; }); q.aqua = st.aquaQty; }
  var lines = MENU.filter(function (m) { return (q[m.id] || 0) > 0; })
    .map(function (m) { return { item: m, qty: q[m.id], sub: q[m.id] * m.price }; });
  var subtotal = lines.reduce(function (s, l) { return s + l.sub; }, 0);
  var stalls = lines.filter(function (l) { return l.item.stall; }).length;
  var sc = 0, issues = [];
  if (st.mode === 'fleksibel' && subtotal > 0 && subtotal < MIN_ORDER) sc = SC_PER_STALL * stalls;
  if (st.mode === 'foodstall') {
    if (!stalls) issues.push('Pilih minimal 1 stall.');
    lines.forEach(function (l) {
      if (l.item.stall && l.qty < FOODSTALL_MIN) issues.push(l.item.name + ' minimal ' + FOODSTALL_MIN + ' porsi. Kurang ' + (FOODSTALL_MIN - l.qty) + ' porsi lagi.');
    });
    if (st.aquaQty > 0 && st.aquaQty < AQUA_MIN) issues.push('Aqua sebagai tambahan minimal ' + AQUA_MIN + ' botol. Kurang ' + (AQUA_MIN - st.aquaQty) + ' botol lagi.');
  }
  var transport = st.far && subtotal > 0 ? TRANSPORT_FEE : 0;
  return { lines: lines, subtotal: subtotal, stalls: stalls, sc: sc, transport: transport, total: subtotal + sc + transport, issues: issues };
}

