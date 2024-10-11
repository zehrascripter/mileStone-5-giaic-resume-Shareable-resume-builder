var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume
    var resume = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display the generated resume
    var resumeOutput = document.getElementById('resume-output');
    var resumeDiv = document.getElementById('resume');
    resumeDiv.innerHTML = resume;
    resumeOutput.classList.remove('hidden');
    // Create a shareable link
    var shareableLink = "".concat(username, ".vercel.app/resume");
    document.getElementById('shareable-link').textContent = "Shareable Link: ".concat(shareableLink);
    // Add functionality to download the resume as a PDF
    document.getElementById('download-btn').onclick = function () {
        var jsPDF = window.jspdf.jsPDF;
        var pdf = new jsPDF();
        pdf.text(resume, 10, 10);
        pdf.save("".concat(name, "_resume.pdf"));
    };
    // Add functionality to copy the link to clipboard
    document.getElementById('copy-link-btn').onclick = function () {
        navigator.clipboard.writeText(shareableLink).then(function () {
            alert('Link copied to clipboard!');
        });
    };
});
