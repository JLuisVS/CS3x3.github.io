//Programa para resolver sistemas 3*3
let vars = {
    detSist: 0,
    detA: 0,
    detB: 0,
    detC: 0
}

let dSis = {

};

let da = {

};

let db = {

};

let dc = {

};

let di = {

};

function getA() {
    let k = 1;
    for (let i = 0; i <= 3; i++) {
        try {
            da[i] = document.getElementById(k + 'a').value;
            k = k + 1;

            if (da[i] == null || da[i] == '') {
                da[i] = 0;
            }

        } catch (e) {
            return
        }
    }
}

function getB() {
    let k = 1;
    for (let i = 0; i <= 3; i++) {
        try {
            db[i] = document.getElementById(k + 'b').value;
            k = k + 1;

            if (db[i] == null || db[i] == '') {
                db[i] = 0;
            }

        } catch (e) {
            return
        }
    }
}

function getC() {
    let k = 1;
    for (let i = 0; i <= 3; i++) {
        try {
            dc[i] = document.getElementById(k + 'c').value;
            k = k + 1;

            if (dc[i] == null || dc[i] == '') {
                dc[i] = 0;
            }

        } catch (e) {
            return
        }
    }
}

function getInde() {
    let k = 1;
    for (let i = 0; i <= 3; i++) {
        try {
            di[i] = document.getElementById(k + 'i').value;
            k = k + 1;

            if (di[i] == null || di[i] == '') {
                di[i] = 0;
            }

        } catch (e) {
            return
        }
    }
}

function parseArrays() {
    for (let i = 0; i < Object.keys(da).length; i++) {
        da[i] = parseInt(da[i]);
    }

    for (let i = 0; i < Object.keys(db).length; i++) {
        db[i] = parseInt(db[i]);
    }

    for (let i = 0; i < Object.keys(dc).length; i++) {
        dc[i] = parseInt(dc[i]);
    }

    for (let i = 0; i < Object.keys(di).length; i++) {
        di[i] = parseInt(di[i]);
    }
}

function createDsis() {
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 3; k++) {

            if (i == 0) {
                if (k == 0) {
                    dSis[i + ', ' + k] = da[0]
                } else if (k == 1) {
                    dSis[i + ', ' + k] = db[0]
                } else if (k == 2) {
                    dSis[i + ', ' + k] = dc[0]
                }
            } else if (i == 1) {
                if (k == 0) {
                    dSis[i + ', ' + k] = da[1]

                } else if (k == 1) {
                    dSis[i + ', ' + k] = db[1]

                } else if (k == 2) {
                    dSis[i + ', ' + k] = dc[1]

                }
            } else if (i == 2) {
                if (k == 0) {
                    dSis[i + ', ' + k] = da[2]

                } else if (k == 1) {
                    dSis[i + ', ' + k] = db[2]

                } else if (k == 2) {
                    dSis[i + ', ' + k] = dc[2]

                }
            } else if (i == 3) {
                if (k == 0) {
                    dSis[i + ', ' + k] = da[0]

                } else if (k == 1) {
                    dSis[i + ', ' + k] = db[0]

                } else if (k == 2) {
                    dSis[i + ', ' + k] = dc[0]

                }
            } else if (i == 4) {
                if (k == 0) {
                    dSis[i + ', ' + k] = da[1]

                } else if (k == 1) {
                    dSis[i + ', ' + k] = db[1]

                } else if (k == 2) {
                    dSis[i + ', ' + k] = dc[1]

                }
            }
        }
    }
}

function multiplication(a, b, c) {
    return a * b * c;
}

function calculateDsis() {
    createDsis();
    const dsis = document.getElementById('dSis');
    let a = multiplication(dSis['0, 0'], dSis['1, 1'], dSis['2, 2']);
    let b = multiplication(dSis['1, 0'], dSis['2, 1'], dSis['3, 2']);
    let c = multiplication(dSis['2, 0'], dSis['3, 1'], dSis['4, 2']);

    let d = multiplication(dSis['4, 0'], dSis['3, 1'], dSis['2, 2']);
    let e = multiplication(dSis['3, 0'], dSis['2, 1'], dSis['1, 2']);
    let f = multiplication(dSis['2, 0'], dSis['1, 1'], dSis['0, 2']);

    let res = (a + b + c) - (d + e + f);
    vars.detSist = res;
    dsis.innerHTML = "Determinante del sistema: " + res;
}

function calculateDa() {
    const dA = document.getElementById('da');
    const resA = document.getElementById('resA');
    let a = multiplication(di[0], dSis['1, 1'], dSis['2, 2']);
    let b = multiplication(di[1], dSis['2, 1'], dSis['3, 2']);
    let c = multiplication(di[2], dSis['3, 1'], dSis['4, 2']);

    let d = multiplication(di[1], dSis['3, 1'], dSis['2, 2']);
    let e = multiplication(di[0], dSis['2, 1'], dSis['1, 2']);
    let f = multiplication(di[2], dSis['1, 1'], dSis['0, 2']);

    let det = (a + b + c) - (d + e + f);
    vars.detA = det;
    let val = vars.detA / vars.detSist;

    dA.innerHTML = "Determinante de A: " + det;
    resA.innerHTML = "Valor de A: " + val;
}


function calculateDb() {
    const dB = document.getElementById('db');
    const resB = document.getElementById('resB');
    let a = multiplication(dSis['0, 0'], di[1], dSis['2, 2']);
    let b = multiplication(dSis['1, 0'], di[2], dSis['3, 2']);
    let c = multiplication(dSis['2, 0'], di[0], dSis['4, 2']);

    let d = multiplication(dSis['4, 0'], di[0], dSis['2, 2']);
    let e = multiplication(dSis['3, 0'], di[2], dSis['1, 2']);
    let f = multiplication(dSis['2, 0'], di[1], dSis['0, 2']);

    let det = (a + b + c) - (d + e + f);
    vars.detB = det;
    let val = vars.detB / vars.detSist;

    dB.innerHTML = "Determinante de B: " + det;
    resB.innerHTML = "Valor de B: " + val;
}

function calculateDc() {
    const dC = document.getElementById('dc');
    const resC = document.getElementById('resC');
    let a = multiplication(dSis['0, 0'], dSis['1, 1'], di[2]);
    let b = multiplication(dSis['1, 0'], dSis['2, 1'], di[0]);
    let c = multiplication(dSis['2, 0'], dSis['3, 1'], di[1]);

    let d = multiplication(dSis['4, 0'], dSis['3, 1'], di[2]);
    let e = multiplication(dSis['3, 0'], dSis['2, 1'], di[1]);
    let f = multiplication(dSis['2, 0'], dSis['1, 1'], di[0]);

    let det = (a + b + c) - (d + e + f);
    vars.detC = det;
    let val = vars.detC / vars.detSist;

    dC.innerHTML = "Determinante de C: " + det;
    resC.innerHTML = "Valor de C: " + val;
}

function calculate() {
    getA();
    getB();
    getC();
    getInde();
    parseArrays();
    calculateDsis();
    calculateDa();
    calculateDb();
    calculateDc();
}

function pageListener() {
    const calcular = document.getElementById("calcular");
    const nuevo = document.getElementById("limpiar");

    calcular.addEventListener('click', function (e) {
        calculate();
    });

    nuevo.addEventListener('click', function(e){
        location.reload(true);
    });
}

function execute() {
    pageListener();
}

execute();
