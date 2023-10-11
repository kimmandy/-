let readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let wrongCount = 0;

// Account 클래스 생성
class Account {
    constructor(id, pw) {
        this.id = id;
        this.pw = pw;
    }

    // Account 클래스의 checkAccount 메소드
    checkAccount() {
        if (this.id === savedAccount.id && this.pw === savedAccount.pw) {
            console.log('반갑습니다. ' + this.id + '님');
            rl.close();
        } else {
            console.log( '맞지 않습니다. 다시 입력해주세요.');
            wrongCount++;
            login();
        }
    }
}

// DB 계정 예시
const savedAccount = new Account('test', '123');
// const savedUserID = 'test';
// const savedUserPW = '123';

// 로그인 계정
let loginAccount;


// ID 확인
const checkID = (id) => {
    if (id === '') {
        console.log('아이디가 빈칸입니다.');
        login();
    } else {
        // 로그인 계정 초기화
        loginAccount = new Account(id, '');
        rl.question('패스워드를 입력해주세요: ', checkPW);
    }
}

// PW 확인
const checkPW = (pw) => {
    if (pw === '') {
        console.log('비밀번호가 빈칸입니다.');
        login();
    } else {
        loginAccount.pw = pw;
        // 계정 확인
        loginAccount.checkAccount();
    }
}

// 로그인
function login() {

    if (wrongCount == 5) {
        console.log('30분동안 잠금상태입니다.');
        rl.close();
        wrongCount++;
    } else if ( wrongCount > 5 ) {      // login 실패 최대 횟수
        return;
    } else {
        rl.question('ID를 입력해주세요: ', checkID);
    }

};

login();