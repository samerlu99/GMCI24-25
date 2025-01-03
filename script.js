document.addEventListener("DOMContentLoaded", () => {
  function login() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
  }

  function renewData() {
    alert("Login data renewed!");
  }

  function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
  }

  function showSubmissions() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('submissions').style.display = 'block';
  }
function showCourses() {
  const coursesContent = `
    <div id="courses-section" style="text-align: center; margin: 20px; font-family: Arial, sans-serif;">
      <h3 style="color: #2c3e50; font-size: 24px; margin-bottom: 20px;">My Courses</h3>
      <ul style="list-style-type: none; padding: 0; max-width: 600px; margin: 0 auto;">
        <li style="background-color: #f7f9fa; padding: 15px; margin: 10px 0; border-radius: 5px;">
          <strong>1: Mathematics 1</strong><br>
          <span style="color: #555;">Date: 01/02/2024</span><br>
          <span style="color: #555;">Place: Room 101</span>
        </li>
        <li style="background-color: #f7f9fa; padding: 15px; margin: 10px 0; border-radius: 5px;">
          <strong>2: Data Structures</strong><br>
          <span style="color: #555;">Date: 15/02/2024</span><br>
          <span style="color: #555;">Place: Room 202</span>
        </li>
        <li style="background-color: #f7f9fa; padding: 15px; margin: 10px 0; border-radius: 5px;">
          <strong>3: Database Systems</strong><br>
          <span style="color: #555;">Date: 01/03/2024</span><br>
          <span style="color: #555;">Place: Lab A</span>
        </li>
        <li style="background-color: #f7f9fa; padding: 15px; margin: 10px 0; border-radius: 5px;">
          <strong>4: Cloud Computing</strong><br>
          <span style="color: #555;">Date: 10/03/2024</span><br>
          <span style="color: #555;">Place: Room 305</span>
        </li>
        <li style="background-color: #f7f9fa; padding: 15px; margin: 10px 0; border-radius: 5px;">
          <strong>5: Machine Learning</strong><br>
          <span style="color: #555;">Date: 20/03/2024</span><br>
          <span style="color: #555;">Place: Lab B</span>
        </li>
      </ul>
      <button 
        onclick="backToDashboard()" 
        style="padding: 10px 20px; margin-top: 20px; background-color: #2c3e50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">
        Back
      </button>
    </div>
  `;

  const coursesSection = document.createElement('div');
  coursesSection.id = 'courses';
  coursesSection.innerHTML = coursesContent;

  // Clear the current view and show courses
  document.body.innerHTML = '';
  document.body.appendChild(coursesSection);
}

  function showStudentGrades() {
    const gradesTable = `
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <th style="border: 1px solid #ddd; padding: 8px;">Name</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Student Number</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Comment</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Grade</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Sasha</td>
          <td style="border: 1px solid #ddd; padding: 8px;">132131</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Excellent performance</td>
          <td style="border: 1px solid #ddd; padding: 8px;">9/10</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">David</td>
          <td style="border: 1px solid #ddd; padding: 8px;">132132</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Good effort</td>
          <td style="border: 1px solid #ddd; padding: 8px;">8/10</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Alice</td>
          <td style="border: 1px solid #ddd; padding: 8px;">132133</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Outstanding achievement</td>
          <td style="border: 1px solid #ddd; padding: 8px;">10/10</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">John</td>
          <td style="border: 1px solid #ddd; padding: 8px;">132134</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Needs improvement</td>
          <td style="border: 1px solid #ddd; padding: 8px;">6/10</td>
        </tr>
      </table>
    `;

    const gradesSection = document.createElement('div');
    gradesSection.id = 'grades-section';
    gradesSection.style.textAlign = 'center';
    gradesSection.style.margin = '50px auto';
    gradesSection.style.padding = '20px';
    gradesSection.style.border = '1px solid #ddd';
    gradesSection.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    gradesSection.innerHTML = `
      <h3>Student Grades</h3>
      ${gradesTable}
      <button id="back-to-next-page-btn">Back to Next Page</button>
    `;
    document.body.innerHTML = '';
    document.body.appendChild(gradesSection);

    document.getElementById('back-to-next-page-btn').addEventListener('click', () => {
      goToNextPage();
    });
  }

  function backToDashboard() {
    document.querySelectorAll('.dashboard-section').forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById('dashboard').style.display = 'block';
  }

  function addGrade(assignmentId) {
    const grade = prompt(`Enter grade for ${assignmentId}:`);
    if (grade !== null) {
      const gradeCell = document.getElementById(`${assignmentId}-grade`);
      gradeCell.textContent = grade;
      alert(`Grade for ${assignmentId} successfully added: ${grade}`);
    }
  }

  function addFeedback(assignmentId) {
    const feedback = prompt(`Enter feedback for ${assignmentId}:`);
    if (feedback !== null) {
      alert(`Feedback for ${assignmentId}: "${feedback}" has been saved.`);
      alert(`Feedback and grade for ${assignmentId} successfully processed.`);
      goToNextPage();
    }
  }

  function addGradeAndFeedback(assignmentId) {
    addGrade(assignmentId);
    addFeedback(assignmentId);
  }

  function downloadFile(fileName) {
    const link = document.createElement('a');
    link.href = `files/${fileName}`;
    link.download = fileName;
    link.click();
  }

  function goToNextPage() {
    const nextPage = document.createElement('div');
    nextPage.id = 'next-page';
    nextPage.style.textAlign = 'center';
    nextPage.style.margin = '50px auto';
    nextPage.style.padding = '20px';
    nextPage.style.border = '1px solid #ddd';
    nextPage.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    nextPage.innerHTML = `
      <p>All done! Your data has been successfully added for student with MATRIK- number: 132131<br>17.12.24 - 18:06</p>
      <button onclick="closePage()">Close Page</button>
      <button onclick="addAnotherComment()">Add Another Comment</button>
      <button
  onclick="showStudentGrades()">Check the Student Grades</button>
    `;
    document.body.innerHTML = '';
    document.body.appendChild(nextPage);
  }

  function closePage() {
    document.body.innerHTML = ''; // Clear current page content
    document.getElementById('login-container').style.display = 'block'; // Show login container
  }

  function addAnotherComment() {
    alert("Redirecting to add another comment.");
    backToDashboard();
  }

  // Attach functions to the global window object
  window.login = login;
  window.renewData = renewData;
  window.logout = logout;
  window.showSubmissions = showSubmissions;
  window.showStudentGrades = showStudentGrades;
  window.backToDashboard = backToDashboard;
  window.addGrade = addGrade;
  window.addFeedback = addFeedback;
  window.addGradeAndFeedback = addGradeAndFeedback;
  window.downloadFile = downloadFile;
  window.closePage = closePage;
  window.addAnotherComment = addAnotherComment;
  window.goToNextPage = goToNextPage;
    window.showCourses = showCourses; 
});