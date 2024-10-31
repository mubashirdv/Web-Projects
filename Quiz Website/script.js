// Detect if the user is logged in or a guest
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// List of courses
const courses = {
    Mathematics: {
        description: "Algebra, Geometry, Calculus, and more.",
        image: "./Img/mathematics.jpg",
        questions: [
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                answer: "4"
            },
            {
                question: "What is the square root of 16?",
                options: ["2", "3", "4", "5"],
                answer: "4"
            },
            {
                question: "What is the value of π (pi) approximately?",
                options: ["2.14", "3.14", "3.41", "3.00"],
                answer: "3.14"
            },
            {
                question: "What is the next prime number after 7?",
                options: ["8", "9", "10", "11"],
                answer: "11"
            },
            {
                question: "What is the formula for the area of a circle?",
                options: ["πr²", "2πr", "πd", "2r"],
                answer: "πr²"
            },
            {
                question: "What is 5^2?",
                options: ["10", "20", "25", "30"],
                answer: "25"
            }
        ],
    },
    Science: {
        description: "Physics, Chemistry, Biology, and more.",
        image: "./Img/science.jpg",
        questions: [
            {
                question: "What is H2O commonly known as?",
                options: ["Oxygen", "Hydrogen", "Water", "Carbon Dioxide"],
                answer: "Water"
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Au", "Ag", "Fe", "Pb"],
                answer: "Au"
            },
            {
                question: "What gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
                answer: "Carbon Dioxide"
            },
            {
                question: "What part of the cell is responsible for producing energy?",
                options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
                answer: "Mitochondria"
            },
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Mitochondria", "Chloroplast", "Endoplasmic reticulum"],
                answer: "Mitochondria"
            },
            {
                question: "What is the most abundant gas in the Earth's atmosphere?",
                options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
                answer: "Nitrogen"
            }
        ],
    },
    History: {
        description: "World History, American History, and more.",
        image: "./Img/history.jpg",
        questions: [
            {
                question: "Who was the first President of the United States?",
                options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
                answer: "George Washington"
            },
            {
                question: "What year did World War II begin?",
                options: ["1939", "1941", "1945", "1914"],
                answer: "1939"
            },
            {
                question: "Who wrote the Declaration of Independence?",
                options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
                answer: "Thomas Jefferson"
            },
            {
                question: "What ancient civilization built the pyramids?",
                options: ["Romans", "Greeks", "Egyptians", "Mayans"],
                answer: "Egyptians"
            },
            {
                question: "Who was known as the Maid of Orléans?",
                options: ["Cleopatra", "Marie Antoinette", "Joan of Arc", "Elizabeth I"],
                answer: "Joan of Arc"
            },
            {
                question: "What was the first written code of laws called?",
                options: ["The Ten Commandments", "Hammurabi's Code", "Magna Carta", "The Bible"],
                answer: "Hammurabi's Code"
            }
        ],
    },
    ComputerScience: {
        description: "Programming, Data Structures, Algorithms, and more.",
        image: "./Img/computer_science.jpg",
        questions: [
            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "High Text Markup Language",
                    "Hyperlinks and Text Markup Language",
                    "None of the above"
                ],
                answer: "Hyper Text Markup Language"
            },
            {
                question: "What is the main function of a CPU?",
                options: ["Storage", "Processing", "Input", "Output"],
                answer: "Processing"
            },
            {
                question: "Which of the following is a programming language?",
                options: ["HTML", "CSS", "JavaScript", "All of the above"],
                answer: "All of the above"
            },
            {
                question: "What does RAM stand for?",
                options: ["Read Access Memory", "Random Access Memory", "Rapid Access Memory", "None of the above"],
                answer: "Random Access Memory"
            },
            {
                question: "What is an algorithm?",
                options: ["A type of software", "A step-by-step procedure for solving a problem", "A computer virus", "None of the above"],
                answer: "A step-by-step procedure for solving a problem"
            },
            {
                question: "What is the purpose of an operating system?",
                options: ["Manage hardware resources", "Run applications", "Provide a user interface", "All of the above"],
                answer: "All of the above"
            }
        ],
    },
    Literature: {
        description: "Poetry, Drama, Novels, and more.",
        image: "./Img/literature.jpg",
        questions: [
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
                answer: "William Shakespeare"
            },
            {
                question: "What is the main theme of '1984' by George Orwell?",
                options: ["Love", "Totalitarianism", "Adventure", "Science"],
                answer: "Totalitarianism"
            },
            {
                question: "Which novel begins with the line 'Call me Ishmael'?",
                options: ["Moby Dick", "The Great Gatsby", "1984", "Pride and Prejudice"],
                answer: "Moby Dick"
            },
            {
                question: "Who is the author of 'Pride and Prejudice'?",
                options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Charles Dickens"],
                answer: "Jane Austen"
            },
            {
                question: "What is the literary term for a reference to another work of literature?",
                options: ["Metaphor", "Allusion", "Simile", "Personification"],
                answer: "Allusion"
            },
            {
                question: "What is a poem with 14 lines called?",
                options: ["Haiku", "Sonnet", "Ballad", "Ode"],
                answer: "Sonnet"
            }
        ],
    },
};


// Function to display courses in cards
function displayCourses(courseList) {
    const courseContainer = document.getElementById("quizCategories");
    courseContainer.innerHTML = ""; // Clear previous content

    const row = document.createElement("div"); // Create a row for Bootstrap grid
    row.classList.add("row");

    for (const courseName in courseList) {
        const course = courseList[courseName];
        const courseCard = document.createElement("div");
        courseCard.classList.add("col-md-4", "quiz-card");

        courseCard.innerHTML = `
            <div class="card">
                <img src="${course.image}" class="card-img-top" alt="${courseName}">
                <div class="card-body">
                    <h5 class="card-title">${courseName}</h5>
                    <p class="card-text">${course.description}</p>
                    <button class="btn btn-primary start-quiz-btn" data-course="${courseName}">Start Quiz</button>
                </div>
            </div>
        `;

        row.appendChild(courseCard); // Append the course card to the row
    }

    courseContainer.appendChild(row); // Append the row to the course container

    // Event listeners for start quiz buttons
    document.querySelectorAll(".start-quiz-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            if (!currentUser) {
                alert("Guest access: Quiz progress will not be saved.");
            }
            // Redirect to quiz page
            window.location.href = `quiz.html?course=${this.getAttribute('data-course')}`;
        });
    });
}


// Display all courses on page load
window.onload = function () {
    displayCourses(courses);
};

// Search functionality
document.getElementById("searchButton").addEventListener("click", function () {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const filteredCourses = {};
    
    for (const course in courses) {
        if (course.toLowerCase().includes(searchTerm)) {
            filteredCourses[course] = courses[course];
        }
    }
    displayCourses(filteredCourses);
});

// Check if user is logged in or a guest
if (currentUser) {
    document.getElementById('loginStatus').textContent = `Welcome, ${currentUser.name}`;
    document.getElementById('loginStatus').href = '#';
} else {
    document.getElementById('loginStatus').textContent = 'Login/Signup';
}
