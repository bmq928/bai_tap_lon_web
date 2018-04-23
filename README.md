# bai_tap_lon_web

schema:  student lecturer partner admin internship internship-rating news


#api

student: 
    + getInfo: 0 cần tham số
    + updateInfo: cần tất cả tham số  sau (lúc đầu khi khởi tạo form thì gọi getInfo để  lấy giá trị mặc định từ server để tránh người dùng nhập quá nhiều tham só) : {
            avatar : string,
            privateEmail : string,
            skypeID : string,
            facebook : string,
            phoneNumber : string,
            EnglishSkill : string,
            diploma : string,
            expreneced: number,
            wantToBe: string,
            note: string,

            // là kĩ năng của sinh viên như html, php
            skills: array
    }