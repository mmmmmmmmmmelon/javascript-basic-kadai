const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = String(today.getMonth() + 1)
const day = String(today.getDate())       

// 希望の形式で日付を表示
const formattedDate = `${year}年${month}月${day}日`;

console.log(formattedDate);