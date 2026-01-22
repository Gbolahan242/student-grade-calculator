function calculateResult() {

    let subject1Marks = Number(document.getElementById("subject1").value);
    let subject2Marks = Number(document.getElementById("subject2").value);
    let subject3Marks = Number(document.getElementById("subject3").value);

    let totalMarks = subject1Marks + subject2Marks + subject3Marks;
    let averageMarks = totalMarks / 3;

    document.getElementById("totalMarks").innerText =
        "Total Marks: " + totalMarks;

    document.getElementById("averageMarks").innerText =
        "Average Marks: " + averageMarks;

    if (averageMarks >= 40) {
        document.getElementById("resultStatus").innerText = "Result: PASS";
    } else {
        document.getElementById("resultStatus").innerText = "Result: FAIL";
    }
}
