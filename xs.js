var obj = [
    {
        name: "muhammad ari",
        age: 25,
        address: "jl menganti wiyung 1 rt 2 rw 2 no 105 surabaya",
        hobbies: ["bulutsngkid", "sepakbola", "membaca"],
        is_married: false,
        list_school: {
            name: "YPM 1 Taman",
            year_in: 2010,
            year_out: 2013,
            major: "TKJ"
        },
        skills: {
            skill_name: ["php", "Nodejs", "vue", "laravel"],
            level: "Beginner"
        },
        interest_in_coding: true

    }
];
var myJSON = JSON.stringify(obj);
console.log(myJSON);