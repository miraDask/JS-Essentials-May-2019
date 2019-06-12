function solve(examPoints, homeworkCompleted, totalHomework) {

    const courseMaxPoints = 100;
    const examMaxPoints = 400;
    let grade = 0;

    if (examPoints === examMaxPoints) {
        grade = 6;
    } else {
        let pointsFromExam = (examPoints / examMaxPoints) * 100 * 0.9;
        let pointsFromHomework = (homeworkCompleted / totalHomework) * 100 * 0.1;
        let totalPoints = pointsFromExam + pointsFromHomework;
        grade = 3 + 2 * (totalPoints - (courseMaxPoints / 5)) / (courseMaxPoints / 2);
        grade = grade < 3 ? 2 : grade;
        grade = grade > 6 ? 6 : grade;
    }

    console.log(grade.toFixed(2))
}
solve(200, 5, 5);