document.getElementById('resume-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generate the resume
    const resume = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display the generated resume
    const resumeOutput = document.getElementById('resume-output')!;
    const resumeDiv = document.getElementById('resume')!;
    resumeDiv.innerHTML = resume;
    resumeOutput.classList.remove('hidden');

    // Create a shareable link
    const shareableLink = `${username}.vercel.app/resume`;
    document.getElementById('shareable-link')!.textContent = `Shareable Link: ${shareableLink}`;

    // Add functionality to download the resume as a PDF
    document.getElementById('download-btn')!.onclick = () => {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();
        pdf.text(resume, 10, 10);
        pdf.save(`${name}_resume.pdf`);
    };

    // Add functionality to copy the link to clipboard
    document.getElementById('copy-link-btn')!.onclick = () => {
        navigator.clipboard.writeText(shareableLink).then(() => {
            alert('Link copied to clipboard!');
        });
    };
});

