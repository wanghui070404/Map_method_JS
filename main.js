// Thêm từ Khoá học vào trước thuộc tính name
// Thêm coinText vào mỗi element trong array
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 1
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 2
    },
    {
        id: 4,
        name: 'C++',
        coin: 3
    }
]

function courseHandler(course) {
    //    console.log(course);
    return {
        id: course.id,
        name: `Khoa hoc ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`
    };
}

var course = courses.map(courseHandler);
console.log(course);