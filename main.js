function vel() {
    const s = document.getElementById('sp1text');
    const t = document.getElementById('ti1text');
    const typeSpe = document.getElementById('typeSpe');
    const typeTim = document.getElementById('typeTim');
    if (typeSpe.value === 'meter' && typeTim.value === 'sec') {
        const result =  `v = ${s.value / t.value} m/s`;
        document.getElementById('vel1ans').innerHTML = result;
    } else if (typeSpe.value === 'km' && typeTim.value === 'h') {
        const result =  `v = ${s.value / t.value} km/h`;
        document.getElementById('vel1ans').innerHTML = result;
    } else {
        alert('Please, for M/S use Meter and Seconds and for Km/H use Kilometer and Hour')
    };
};
function time() {
    const s = document.getElementById('sp2text');
    const v = document.getElementById('vel1text');
    const typeSpe = document.getElementById('typeSpe1');
    const typeVel = document.getElementById('typeVel');
    if (typeSpe.value === 'km' && typeVel.value === 'kmh') {
        const result = `t = ${s.value / v.value} h`;
        document.getElementById('ti1ans').innerHTML = result;
    } else if (typeSpe.value === 'meter' && typeVel.value === 'ms') {
        const result = `t = ${s.value / v.value} s`;
        document.getElementById('ti1ans').innerHTML = result;
    } else {
        alert('Please, for t[s] use seconds and M/s and for t[h] use Kilometers and Km/h')
    };
};
function speed() {
    const t = document.getElementById('ti2text');
    const v = document.getElementById('vel2text');
    const typeTim = document.getElementById('typeTim1');
    const typeVel = document.getElementById('typeVel1');
    if (typeTim1.value === 'sec' && typeVel.value === 'ms') {
        const result = `s = ${t.value * v.value} Meters`;
        document.getElementById('sp1ans').innerHTML = result;
    } else if (typeTim.value === 'h' && typeVel.value === 'kmh') {
        const result = `s = ${t.value * v.value} Kilometers`;
        document.getElementById('sp1ans').innerHTML = result;
    } else {
        alert('Please, for s[m] use Meters and Seconds and for s[km] use Kilometers and hours (im not that smart)');
    };
};
function kmh() {
    const ms = document.getElementById('ms1');
    const result = `${ms.value * 3.6} Km/h`;
    document.getElementById('kmh1').innerHTML = result;
};
function ms() {
    const kmh = document.getElementById('kmh2');
    const result = `${kmh.value / 3.6} M/s`;
    document.getElementById('ms2').innerHTML = result;
};
function wikiVel() {
    window.open('https://en.wikipedia.org/wiki/Velocity', '_blank');
};
function wikiTime() {
    window.open('https://en.wikipedia.org/wiki/Time_in_physics', '_blank');
};
function wikiDis() {
    window.open('https://www.khanacademy.org/science/physics/one-dimensional-motion/displacement-velocity-time/a/what-is-displacement', '_blank');
};
function wikiMs() {
    window.open('https://www.techtarget.com/whatis/definition/meter-per-second-m-s-or-m-sec', '_blank');
};
function wikiKmh() {
    window.open('https://en.wikipedia.org/wiki/Kilometres_per_hour', '_blank');
};
