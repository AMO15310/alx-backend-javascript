export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  function getGrade(student) {
    const gradeObj = newGrades.filter((gradeObj) => student.id === gradeObj.studentId);

    if (gradeObj.length === 0) {
      return 'N/A';
    }
    return gradeObj[0].grade;
  }

  return listStudents
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: getGrade(student),
    }));
}
