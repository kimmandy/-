const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('점수를 입력하세요. : ', function(score){
    if (score >= 4.0 && score <= 4.5){
        console.log('A학점');
    }
    else if(score >= 3.0 && score <= 3.9){
        console.log('B학점');
    }
    else if(score >= 2.0 && score <= 2.9){
        console.log('C학점');
    }
    else if(score >= 1.0 && score <= 1.9){
        console.log('D학점');
    }
    else if(score >= 0 && score <= 0.9){
        console.log('F학점');
    }
    else{
        console.log('범위를 벗어났습니다.');
    }
    rl.close();
});