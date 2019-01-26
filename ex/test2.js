var a = 0;
var b = 0;

function aa(value) {
    a = value;
    $('.a-group').hide();
    $('.b-group').show();
}

function bb(value) {
    b = value;
    $('.b-group').hide();
    $('#ccc').show();
    $('#ccc').html(a + b);
}

var a1 = 0; // <- Number

a1 = ''; // <- String

a1 = null; // <- a1 값도 없고 주소도 없다.

a1 = undefined; // <- a1 주소는 있지만 아무런 값이 없다.

a1 = {
    a: '123',
    b: 1234553,
    c: {
        a: 3333
    },
    d: []
}; // json type 키 벨류로 되어있다.

a1.a; // '123'

var b = 'a';
a1[b]; // '123'

a1.a = 123;

// 예제
function a111(value) {
    console.log(value);
    /*
    {
        a: '123',
        b: 1234553,
        c: {
            a:3333
        },
        d: []
    }
     */
}

a111(a1);

a1 = [
    '1',
    2,
    {a: 123},
    [],
]; // 배열

a1[0] // '1'

a1.push('111');

a1[4] // '111';

a1.unshift('111');

a1[0] // '111';

a1[1] // '1';
