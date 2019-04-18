// 読み込みテスト
// console.log('test');
////////////////////////////////////////////////////////
// 変数一覧
////////////////////////////////////////////////////////
const hand = ['gu', 'choki', 'pa'];

const win = ['勝ち', 'あいこ', '負け'];


////////////////////////////////////////////////////////
// クリック処理
////////////////////////////////////////////////////////
$(document).on('click', 'li', function(){
    // クリックした手を取得
    let you = $(this).attr('class');
    // 型変換（数値型）
    you = parseInt(you, 10);
    // console.log('you'+you);
    // 選択手を描画
    $('.yourselect').remove();
    $('.you').append('<img src="img/'+you+'.png" class="yourselect">');
    // cpuの手を選択
    let cpu = cupSelect();
    // 型変換（数値型）
    cpu = parseInt(cpu, 10);
    $('.cpuselect').remove();
    $('.cpu').append('<img src="img/'+cpu+'.png" class="cpuselect">');
    // console.log('cpu'+cpu)
    // 勝敗ジャッジ
    let winner = judge(you, cpu);
    // 勝敗結果を描画
    $('.result').empty();
    $('.result').append('<p>勝敗結果：'+win[winner]+'</p>');

})

////////////////////////////////////////////////////////
// 関数処理
////////////////////////////////////////////////////////
// cpuの手を選択
function cupSelect(){
    let ranNum = Math.round(Math.random()*2);
    return ranNum;
}

// 勝敗判定
function judge(you, cpu){
    let sum = you+cpu;
    let result = 0;
    if((you < cpu && sum % 2 !=0) || (you > cpu && sum % 2 ==0)){
        result = 0;
        return result;
    } else if(you == cpu){
        result = 1;
        return result;
    } else {
        result = 2;
        return result;
    }

}






