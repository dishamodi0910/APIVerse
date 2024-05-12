function searchLecture() {
    const lectureName = document.getElementById('lectureInput').value.trim();
    if (!lectureName) {
        alert('Please enter a lecture name.');
        return;
    }
    fetch(`http://localhost:3000/lectures?title=${lectureName}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Lecture not found');
        }
        return response.json();
    })
    .then(lectures => {
        const foundLecture = lectures.find(lecture => lecture.title.toLowerCase() === lectureName.toLowerCase());
        if (!foundLecture) {
            throw new Error('Lecture not found');
        }
        const lectureContent = `
            <h2>Lecture Information</h2>
            <p><strong>Title:</strong> ${foundLecture.title}</p>
            <p><strong>Instructor:</strong> ${foundLecture.instructor}</p>
            <p><strong>Time:</strong> ${foundLecture.time}</p>
            <p><strong>Room:</strong> ${foundLecture.room}</p>
        `;
        document.getElementById('lectureContent').innerHTML = lectureContent;
    })
    .catch(error => {
        document.getElementById('lectureContent').innerHTML = `
            <p class="lecture-not-found">${error.message}</p>
        `;
    });
}