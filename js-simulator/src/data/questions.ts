import type { Question } from "../types/Question";

export const questions: Question[] = [
  {
  id: 1,

  type: "multiple_choice",

  question: "Which code should you use at lines 09 and 10?",

  description:
    "You are writing a program that includes an update() function. The function must update a paragraph element with input from the user and then hide the input box.",

  code: `<html>
<body>

<p id="para">Enter your name</p>

<input type="text" id="box" onchange="update()" value="">

<script>

var output = document.getElementById("para");
var input = document.getElementById("box");

function update() {

  // Line 09

  // Line 10

}

</script>

</body>
</html>`,

  options: [
    {
      id: 1,
      text: `output.innerHTML = input.innerHTML;
input.style.visibility = false;`,
    },
    {
      id: 2,
      text: `output.value = input.innerHTML;
output.hidden = true;`,
    },
    {
      id: 3,
      text: `output = input;
input.hidden = true;`,
    },
    {
      id: 4,
      text: `output.innerHTML = input.value;
input.hidden = true;`,
    },
  ],

  correctOptionId: 4,
},
{
  id: 2,

  type: "trueFalseGroup",

  question:
    "For each statement, select True or False. Note: You will receive partial credit for each correct selection.",

  statements: [
    {
      id: 1,
      text: "Form POST requests are cached.",
      correct: false,
    },
    {
      id: 2,
      text: "The data length of form GET requests is restricted.",
      correct: true,
    },
    {
      id: 3,
      text: "Form POST requests are stored in the browser history.",
      correct: false,
    },
    {
      id: 4,
      text: "You should use only GET requests when handling sensitive form data.",
      correct: false,
    },
  ],
},
{
  id: 3,

  type: "single",

  question:
    "You need to use JavaScript to access the section1 element in the following code segment. Which method should you use?",

  code: `<div id="sectionA">

<div id="section1">`,

  options: [
    {
      id: 1,
      text: "getElementById",
    },
    {
      id: 2,
      text: "getElementsByClassName",
    },
    {
      id: 3,
      text: "getElementsByName",
    },
    {
      id: 4,
      text: "getElementsByTagName",
    },
  ],

  correctOptionId: 1,
},
{
  id: 4,

  type: "dropdown",

  question:
    "Analyze the DOM Tree in the image. You need to insert an img element that will be the first element in the body. Complete the code by selecting the correct option from each drop-down list.",

  code: `<script>

var newImgElement = ________________________;

newImgElement.________________________ = "_images/photo.jpg";

var divElement = document.________________________;

document.body.________________________;

</script>`,

  dropdowns: [
    {
      id: 1,
      options: [
        { id: 1, text: 'document.appendChild("img")' },
        { id: 2, text: 'document.createElement("img")' },
        { id: 3, text: 'document.querySelector("img")' },
        { id: 4, text: 'window.appendChild("img")' },
        { id: 5, text: 'window.createElement("img")' },
      ],
      correctOptionId: 2,
    },

    {
      id: 2,
      options: [
        { id: 1, text: "href" },
        { id: 2, text: "querySelector" },
        { id: 3, text: "src" },
        { id: 4, text: "textContent" },
      ],
      correctOptionId: 3,
    },

    {
      id: 3,
      options: [
        { id: 1, text: 'querySelector("div")' },
        { id: 2, text: 'querySelector("body")' },
        { id: 3, text: 'createElement("body")' },
        { id: 4, text: 'appendChild("div")' },
      ],
      correctOptionId: 1,
    },

    {
      id: 4,
      options: [
        { id: 1, text: "append(newImgElement)" },
        { id: 2, text: "appendChild(newImgElement)" },
        { id: 3, text: "createElement(newImgElement)" },
        {
          id: 4,
          text: "insertBefore(newImgElement)",
        },
        {
          id: 5,
          text: "insertBefore(newImgElement, divElement)",
        },
      ],
      correctOptionId: 5,
    },
  ],
},
{
  id: 5,

  type: "single",

  question:
    "Review the following JavaScript code. When the code runs, what is the value of x?",

  code: `var x = 15;

x %= 5;`,

  options: [
    {
      id: 1,
      text: "0",
    },
    {
      id: 2,
      text: "3",
    },
    {
      id: 3,
      text: "5",
    },
    {
      id: 4,
      text: "Undefined",
    },
  ],

  correctOptionId: 1,
},
{
  id: 6,

  type: "dropdown",

  question:
    "In the first drop-down list, select the code that changes the button color when the page loads. In the second drop-down list, select the code that changes the button color when the user clicks the button.",

  code: `<button id="btn">Change</button>

<script>

________________________________________________

________________________________________________

function changeColor() {

    var colors = ["blue", "green", "pink", "orange"];

    var sub = Math.floor(Math.random() * 4);

    document.getElementById("btn").style.background = colors[sub];

}

</script>`,

  dropdowns: [
    {
      id: 1,
      options: [
        {
          id: 1,
          text: "document.body.onload = changeColor();",
        },
        {
          id: 2,
          text: 'document.body.setAttribute("button", changeColor);',
        },
        {
          id: 3,
          text: 'document.getElementById("btn").onload = changeColor();',
        },
        {
          id: 4,
          text: 'document.getElementsByTagName("BUTTON").changeColor();',
        },
      ],
      correctOptionId: 1,
    },

    {
      id: 2,
      options: [
        {
          id: 1,
          text: 'document.getElementsByTagName("BUTTON").addEventListener("onclick", changeColor);',
        },
        {
          id: 2,
          text: 'document.getElementById("btn").onclick = changeColor();',
        },
        {
          id: 3,
          text: 'document.getElementsByTagName("BUTTON").click = changeColor();',
        },
        {
          id: 4,
          text: 'document.getElementById("btn").addEventListener("click", changeColor);',
        },
      ],
      correctOptionId: 4,
    },
  ],
},
{
  id: 7,

  type: "trueFalseGroup",

  question:
    "You are unit testing the following JavaScript function. For each statement about the function, select True or False. Note: You will receive partial credit for each correct selection.",

  code: `function validateCode(code)
{
    var validated = !isNaN(code) &&
                    code.toString().length == 6;

    return validated;
}`,

  statements: [
    {
      id: 1,
      text: 'If the code parameter is set to 111111, the function returns true.',
      correct: true,
    },
    {
      id: 2,
      text: 'If the code parameter is set to "012345", the function returns true.',
      correct: true,
    },
    {
      id: 3,
      text: 'If the code parameter is set to "XYZXYZ", the function returns true.',
      correct: false,
    },
    {
      id: 4,
      text: 'If the code parameter is set to 2080 * 300, the function returns true.',
      correct: true,
    },
  ],
},
{
  id: 8,

  type: "dropdown",

  question: `You are creating a script that will assign a category based on the user's age.

The script must implement the following rules:

• Assign users who are at least 24 years old but less than 36 years old to CAT1.
• Assign users who are at least 36 years old but less than 46 years old to CAT2.
• Assign all other users to CAT3.

Instructions: Complete the code by selecting the correct option from each drop-down list.

Note: There is more than one correct order. You will receive partial credit for each response. You will receive credit for any correct order.`,

  code: `var category;

________________________
{
    category = "CAT1";
}

________________________
{
    category = "CAT2";
}

________________________
{
    category = "CAT3";
}`,

  dropdowns: [
    {
      id: 1,
      label: "Dropdown 1",
      options: [
        { id: 1, text: "else" },
        { id: 2, text: "else if (age >= 24 && age <= 35)" },
        { id: 3, text: "else if (age >= 36 && age <= 45)" },
        { id: 4, text: "else if (age > 45)" },
        { id: 5, text: "if (age >= 24 && age <= 35)" },
        { id: 6, text: "if (age >= 36 && age <= 45)" },
        { id: 7, text: "if (age > 45)" }
      ],
      correctOptionId: 5
    },

    {
      id: 2,
      label: "Dropdown 2",
      options: [
        { id: 1, text: "else" },
        { id: 2, text: "else if (age >= 24 && age <= 35)" },
        { id: 3, text: "else if (age >= 36 && age <= 45)" },
        { id: 4, text: "else if (age > 45)" },
        { id: 5, text: "if (age >= 24 && age <= 35)" },
        { id: 6, text: "if (age >= 36 && age <= 45)" },
        { id: 7, text: "if (age > 45)" }
      ],
      correctOptionId: 3
    },

    {
      id: 3,
      label: "Dropdown 3",
      options: [
        { id: 1, text: "else" },
        { id: 2, text: "else if (age >= 24 && age <= 35)" },
        { id: 3, text: "else if (age >= 36 && age <= 45)" },
        { id: 4, text: "else if (age > 45)" },
        { id: 5, text: "if (age >= 24 && age <= 35)" },
        { id: 6, text: "if (age >= 36 && age <= 45)" },
        { id: 7, text: "if (age > 45)" }
      ],
      correctOptionId: 1
    }
  ]
},
{
  id: 9,

  type: "dropdown",

  question:
    "You work as a JavaScript developer. You are writing a simple script that performs the following actions: Declares and initializes an array, fills the array with 10 random integers, and adds every other number starting with the first element.",

  code: `var numbers = [________________________;

for (var i = 0; i < 10; i++) {

    numbers.________________________(Math.round(Math.abs(Math.random() * 10)));

}

var sum = 0;

for (var j = 0; j < 10; j = j + 2) {

    sum += ________________________;

}

console.log(sum);`,

  dropdowns: [
    {
      id: 1,
      options: [
        { id: 1, text: "()" },
        { id: 2, text: "{}" },
        { id: 3, text: "[]" },
        { id: 4, text: '""' },
      ],
      correctOptionId: 3,
    },

    {
      id: 2,
      options: [
        { id: 1, text: "pop" },
        { id: 2, text: "push" },
        { id: 3, text: "sort" },
        { id: 4, text: "splice" },
      ],
      correctOptionId: 2,
    },

    {
      id: 3,
      options: [
        { id: 1, text: "sum[j]" },
        { id: 2, text: "numbers[j]" },
        { id: 3, text: "numbers(j)" },
        { id: 4, text: "array[j]" },
      ],
      correctOptionId: 2,
    },
  ],
},
{
  id: 10,

  type: "single",

  question: "What is the console output?",

  code: `var x = 10;

function multiplyNumber(x) {

    try {

        const y = 15;

        y = (2 * x);

        console.log(y);

    }

    catch {

        console.log(3 * x);

    }

    finally {

        console.log(4 * x);

    }

}

x = multiplyNumber(x);`,

  options: [
    {
      id: 1,
      text: "20",
    },
    {
      id: 2,
      text: "30",
    },
    {
      id: 3,
      text: "20 40",
    },
    {
      id: 4,
      text: "30 40",
    },
  ],

  correctOptionId: 4,
},
{
  id: 11,

  type: "dropdown",

  question:
    "Evaluate the following code. Complete the following based on the state of the variables after the function executes.",

  code: `function change(student, course) {

    student = "JavaScript Student";

    course.name = "JavaScript";

    course.grade = 100;

}

var sampleCourse = {
    name: "HTML",
    grade: 90
};

var sampleStudent = "HTML Student";

change(sampleStudent, sampleCourse);


sampleStudent = ________________________

sampleCourse.name = ________________________

sampleCourse.grade = ________________________`,

  dropdowns: [
    {
      id: 1,
      options: [
        { id: 1, text: '"HTML Student"' },
        { id: 2, text: '"JavaScript Student"' },
      ],
      correctOptionId: 1,
    },

    {
      id: 2,
      options: [
        { id: 1, text: '"HTML"' },
        { id: 2, text: '"JavaScript"' },
      ],
      correctOptionId: 2,
    },

    {
      id: 3,
      options: [
        { id: 1, text: "90" },
        { id: 2, text: "100" },
      ],
      correctOptionId: 2,
    },
  ],
},
{
  id: 12,

  type: "single",

  question:
    "Analyze the following code. What happens when calculateSum runs?",

  code: `function calculateSum(x, y) {

    const sum = 0;

    try {

        x = x * 2;

        y = y + 5;

        sum = x + y;

        return sum;

    }

    catch (error) {

        console.log("Error");

    }

}

const result = calculateSum(5, 7);`,

  options: [
    {
      id: 1,
      text: "An exception is thrown and caught.",
    },
    {
      id: 2,
      text: "A syntax error occurs.",
    },
    {
      id: 3,
      text: "The function returns 22.",
    },
    {
      id: 4,
      text: "The function returns 0.",
    },
  ],

  correctOptionId: 1,
},
{
  id: 13,

  type: "single",

  question:
    "You are creating a dynamic HTML document by using JavaScript. You need to display a popup window that shows additional information when the user clicks a button. Which object should you use?",

  options: [
    {
      id: 1,
      text: "screen",
    },
    {
      id: 2,
      text: "window",
    },
    {
      id: 3,
      text: "document",
    },
    {
      id: 4,
      text: "body",
    },
  ],

  correctOptionId: 2,
},
{
  id: 14,

  type: "dropdown",

  question:
    "You are designing a web page that displays a list of animals. The web page includes a script that outputs animals from a list. You write the following HTML markup to test the script. You need to create a function that will display the list of animals, including any formatting, in the div element. Complete the code by selecting the correct option from each drop-down list. Note: You will receive partial credit for each correct selection.",

  code: `HTML

<p>Animals</p>

<ul>
    <li>Dog</li>
    <li><strong>Cat</strong></li>
    <li>Lion</li>
</ul>

<p>Click the button to display the animals.</p>

<button onclick="showList()">
    Show List
</button>

<div id="list"></div>

JavaScript

function showList() {

    var list = document.________________________;

    for (var i = 0; i < list.length; i++) {

        document.________________________("list").________________________ += list[i].________________________ + "<br />";

    }

}`,

  dropdowns: [
    {
      id: 1,
      label: "Dropdown 1",
      options: [
        { id: 1, text: 'getElementsByTagName("li")' },
        { id: 2, text: 'getElementsByTagName("ul")' },
        { id: 3, text: 'getElementsByClassName("li")' },
        { id: 4, text: 'getElementsByClassName("ul")' }
      ],
      correctOptionId: 1
    },

    {
      id: 2,
      label: "Dropdown 2",
      options: [
        { id: 1, text: "getElementsByTagName" },
        { id: 2, text: "getElementById" },
        { id: 3, text: "getElementsByClassName" },
        { id: 4, text: "getElementByName" }
      ],
      correctOptionId: 2
    },

    {
      id: 3,
      label: "Dropdown 3",
      options: [
        { id: 1, text: "innerText" },
        { id: 2, text: "innerHTML" },
        { id: 3, text: "textContent" }
      ],
      correctOptionId: 2
    },

    {
      id: 4,
      label: "Dropdown 4",
      options: [
        { id: 1, text: "innerText" },
        { id: 2, text: "innerHTML" },
        { id: 3, text: "textContent" }
      ],
      correctOptionId: 2
    }
  ]
},
{
  id: 15,

  type: "single",

  question:
    "You are writing JavaScript within an HTML document. If JavaScript is disabled, the document must display a message informing the user that they need to enable it. You need to choose the correct HTML tag to show content when JavaScript is disabled. Which tag should you use?",

  options: [
    {
      id: 1,
      text: "link",
    },
    {
      id: 2,
      text: "script",
    },
    {
      id: 3,
      text: "noscript",
    },
    {
      id: 4,
      text: "meta",
    },
  ],

  correctOptionId: 3,
},
{
  id: 16,

  type: "single",

  question:
    "Several HTML pages need to reference the same JavaScript code. Where should the JavaScript code live?",

  options: [
    {
      id: 1,
      text: "In a .css file",
    },
    {
      id: 2,
      text: "In a .js file",
    },
    {
      id: 3,
      text: "Within the head tags of each document",
    },
    {
      id: 4,
      text: "Within the body tags of each document",
    },
  ],

  correctOptionId: 2,
},
{
  id: 17,

  type: "dropdown",

  question:
    "You are developing a web page that displays student registration information. You need to test the code to ensure that it retrieves and displays the student information correctly. Complete the code by selecting the correct option from each drop-down list. Note: You will receive partial credit for each correct selection.",

  code: `HTML

<body>

<h2>New Student Registration</h2>

<script>

________________________________________________

    this.firstName = first;
    this.lastName = last;
    this.major = major;
    this.year = year;

    this.info = function () {

        document.write(
            "<p>You are registered as " +
            this.firstName +
            " " +
            this.lastName +
            "</p>" +
            "<p>You are a " +
            this.year +
            " who is majoring in " +
            this.major +
            "</p>"
        );

    };

}

________________________________________________

________________________________________________

</script>

</body>`,

  dropdowns: [

    {
      id: 1,
      label: "Dropdown 1",
      options: [
        {
          id: 1,
          text: "function student(firstName, lastName, major, year) {"
        },
        {
          id: 2,
          text: "class student(first, last, major, year) {"
        },
        {
          id: 3,
          text: "function student(first, last, major, year) {"
        },
        {
          id: 4,
          text: "class student(firstName, lastName, major, year) {"
        }
      ],
      correctOptionId: 3
    },

    {
      id: 2,
      label: "Dropdown 2",
      options: [
        {
          id: 1,
          text: "var newStudent = new student;"
        },
        {
          id: 2,
          text: "var newStudent = new student();"
        },
        {
          id: 3,
          text: 'var newStudent = student("Sherlock", "Sassafrass", "IT", "freshman");'
        },
        {
          id: 4,
          text: 'var newStudent = new student("Sherlock", "Sassafrass", "IT", "freshman");'
        }
      ],
      correctOptionId: 4
    },

    {
      id: 3,
      label: "Dropdown 3",
      options: [
        {
          id: 1,
          text: "info();"
        },
        {
          id: 2,
          text: "newStudent.info();"
        },
        {
          id: 3,
          text: 'info("Sherlock", "Sassafrass", "IT", "freshman");'
        },
        {
          id: 4,
          text: 'newStudent.info("Sherlock", "Sassafrass", "IT", "freshman");'
        }
      ],
      correctOptionId: 2
    }

  ]
},
{
  id: 18,

  type: "dropdown",

  question:
    "You plan to use the Math object in a JavaScript application. You write the following code to evaluate various Math functions. What are the final values for the three variables? Select the correct option from each drop-down list.",

  code: `var ceil = Math.ceil(100.5);
var floor = Math.floor(100.5);
var round = Math.round(100.5);

// Select the correct values:
ceil = ________________________
floor = ________________________
round = ________________________`,

  dropdowns: [
    {
      id: 1,
      options: [
        {
          id: 1,
          text: "101",
        },
        {
          id: 2,
          text: "100",
        },
      ],
      correctOptionId: 1,
    },

    {
      id: 2,
      options: [
        {
          id: 1,
          text: "101",
        },
        {
          id: 2,
          text: "100",
        },
      ],
      correctOptionId: 2,
    },

    {
      id: 3,
      options: [
        {
          id: 1,
          text: "101",
        },
        {
          id: 2,
          text: "100",
        },
      ],
      correctOptionId: 1,
    },
  ],
},
{
  id: 19,

  type: "trueFalseGroup",

  question:
    "You are helping a coworker test the following form. For each statement, select True or False.",

  code: `<!DOCTYPE html>
<html>
<body>

<h1>Contact Information</h1>

<form id="contact" action="processContact.php">
    <p>First name: <input type="text" id="fname"></p>
    <p>Last name: <input type="text" id="lname"></p>
    <p><input id="sub" type="button" value="Submit form"></p>
</form>

<script>
document.getElementById("sub").addEventListener("click", function () {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    if (lname == "" || fname == "")
        alert("You forgot to enter your name");
    else
        document.getElementById("contact").submit();

});
</script>

</body>
</html>`,

  statements: [
    {
      id: 1,
      text: "The form will submit to a script named contact.",
      correct: false,
    },
    {
      id: 2,
      text: "The form will submit only if the first name and last name are entered.",
      correct: true,
    },
    {
      id: 3,
      text: "The form will not submit because it is missing the submission method.",
      correct: false,
    },
  ],
},
{
  id: 20,

  type: "dropdown",

  question:
    "Evaluate the following code. Line numbers are included for reference only. What is the value of each variable at line 06? Move the appropriate values from the list on the left to the correct variables on the right.",

  code: `01  var n = 50;
02  var c = n + 5;
03  var a = n % 2;
04  var d = c / 11;
05  n = d * 2;
06  console.log(n, c, a, d);

// Select the correct value for each variable.`,

  dropdowns: [
    {
      id: 1,
      options: [
        { id: 1, text: "0" },
        { id: 2, text: "1" },
        { id: 3, text: "5" },
        { id: 4, text: "10" },
        { id: 5, text: "25" },
        { id: 6, text: "55" },
        { id: 7, text: "100" },
        { id: 8, text: "110" },
      ],
      correctOptionId: 4,
    },

    {
      id: 2,
      options: [
        { id: 1, text: "0" },
        { id: 2, text: "1" },
        { id: 3, text: "5" },
        { id: 4, text: "10" },
        { id: 5, text: "25" },
        { id: 6, text: "55" },
        { id: 7, text: "100" },
        { id: 8, text: "110" },
      ],
      correctOptionId: 6,
    },

    {
      id: 3,
      options: [
        { id: 1, text: "0" },
        { id: 2, text: "1" },
        { id: 3, text: "5" },
        { id: 4, text: "10" },
        { id: 5, text: "25" },
        { id: 6, text: "55" },
        { id: 7, text: "100" },
        { id: 8, text: "110" },
      ],
      correctOptionId: 1,
    },

    {
      id: 4,
      options: [
        { id: 1, text: "0" },
        { id: 2, text: "1" },
        { id: 3, text: "5" },
        { id: 4, text: "10" },
        { id: 5, text: "25" },
        { id: 6, text: "55" },
        { id: 7, text: "100" },
        { id: 8, text: "110" },
      ],
      correctOptionId: 3,
    },
  ],
},
{
  id: 21,

  type: "dropdown",

  question:
    "You are creating a function named countdown. The function accepts a parameter named start, and displays a countdown from that number to (and including) zero in increments of one. Complete the code by selecting the correct option from each drop-down list.",

  code: `function countdown(start) {
    for (________________________; ________________________; ________________________) {
        console.log(i);
    }
}`,

  dropdowns: [
    {
      id: 1,
      options: [
        { id: 1, text: "var i = start" },
        { id: 2, text: "var i == start" },
        { id: 3, text: "var i <= start" },
        { id: 4, text: "var i < start" }
      ],
      correctOptionId: 1
    },
    {
      id: 2,
      options: [
        { id: 1, text: "i <= 0" },
        { id: 2, text: "i < 0" },
        { id: 3, text: "i > 0" },
        { id: 4, text: "i >= 0" }
      ],
      correctOptionId: 4
    },
    {
      id: 3,
      options: [
        { id: 1, text: "i++" },
        { id: 2, text: "i--" }
      ],
      correctOptionId: 2
    }
  ]
},
{
  id: 22,

  type: "dropdown",

  question:
    "Your company offers a 10 percent discount if the day of the week is Wednesday. You need to write a JavaScript function named getDiscount that accepts the day of the week as a string and returns the appropriate discount. Complete the code by selecting the correct option from each drop-down list.",

  code: `function getDiscount(day) {
    var discount = 0;
    day = day.toLowerCase();

    ________________________ {
        ________________________
            discount = .1;
            break;

        ________________________
            discount = 0
            break;
    }

    return discount;
}`,

  dropdowns: [
    {
      id: 1,
      options: [
        { id: 1, text: "case (day)" },
        { id: 2, text: "default (day)" },
        { id: 3, text: "case (default)" },
        { id: 4, text: "switch (day)" }
      ],
      correctOptionId: 4
    },
    {
      id: 2,
      options: [
        { id: 1, text: 'case "wednesday":' },
        { id: 2, text: "default" },
        { id: 3, text: "case default" },
        { id: 4, text: 'switch "wednesday"' }
      ],
      correctOptionId: 1
    },
    {
      id: 3,
      options: [
        { id: 1, text: 'case "wednesday":' },
        { id: 2, text: "default" },
        { id: 3, text: "case default" },
        { id: 4, text: 'switch "wednesday"' }
      ],
      correctOptionId: 2
    }
  ]
},
{
  id: 23,

  type: "dropdown",

  question:
    "You are creating a web page that contains a script with a function named calculate. The function accepts three parameters: the operation name, the first number, and the second number. Complete the code by selecting the correct option from each drop-down list.",

  code: `function calculate(operation, a, b) {
    switch (operation) {
      case "multiply":
        ________________________

      case "divide":
        ________________________
    }
}

________________________ {
    return x * y;
}

________________________{
    return n / d;
}

console.log(calculate("divide", 4, 3));
console.log(calculate("multiply", 4, 3));`,

  dropdowns: [
    {
      id: 1,
      options: [
        { id: 1, text: "return multiply(a,b);" },
        { id: 2, text: "return multiply(x,y);" },
        { id: 3, text: "return multiply(n,d);" },
        { id: 4, text: "return multiply();" }
      ],
      correctOptionId: 1
    },
    {
      id: 2,
      options: [
        { id: 1, text: "return divide(a,b) {" },
        { id: 2, text: "return divide(x,y) {" },
        { id: 3, text: "return divide(n,d) {" },
        { id: 4, text: "return divide() {" }
      ],
      correctOptionId: 1
    },
    {
      id: 3,
      options: [
        { id: 1, text: "function multiply(a,b);" },
        { id: 2, text: "function multiply(x,y);" },
        { id: 3, text: "function multiply(n,d);" },
        { id: 4, text: "function multiply();" }
      ],
      correctOptionId: 2
    },
    {
      id: 4,
      options: [
        { id: 1, text: "function divide(a,b) {" },
        { id: 2, text: "function divide(x,y) {" },
        { id: 3, text: "function divide(n,d) {" },
        { id: 4, text: "function divide() {" }
      ],
      correctOptionId: 3
    }
  ]
},
{
  id: 24,

  type: "multiple_choice",

  question:
    "You are creating a dynamic HTML page by using JavaScript. The page displays an image of the sun. When the user moves the mouse pointer across the image, the image should change from the sun to the moon. When the user moves the mouse pointer away from the image, the image should revert to the sun. You need to write the code for the image swap. Which two events should you program for? (Choose 2.)",

  options: [
    {
      id: 1,
      text: "onmouseenter",
    },
    {
      id: 2,
      text: "onmouseover",
    },
    {
      id: 3,
      text: "onmouseout",
    },
    {
      id: 4,
      text: "onmouseup",
    },
    {
      id: 5,
      text: "onmousedown",
    },
  ],

  correctOptionIds: [2, 3],
},
{
  id: 25,

  type: "dropdown",
  question:
    "You are creating an application that requires a title and a numbered list. The title will not include any HTML markup. Complete the code by selecting the correct option from each drop-down list.",

  code: `document.getElementById("wish").addEventListener("click", function () {

    // Dropdown 1
    ________________________________________________

    for (var sub = 0; sub < list.length; sub++) {
        text += "<li>" + list[sub] + "</li>";
    }

    text += "</ol>";

    // Dropdown 2
    ________________________________________________

});`,

  dropdowns: [
    {
      id: 1,
      options: [
        {
          id: 1,
          text: 'document.getElementById("title").value = "Wish List";'
        },
        {
          id: 2,
          text: 'document.getElementById("title").HTML = "Wish List";'
        },
        {
          id: 3,
          text: 'document.getElementById("title").heading1 = "Wish List";'
        },
        {
          id: 4,
          text: 'document.getElementById("title").textContent = "Wish List";'
        }
      ],
      correctOptionId: 4
    },
    {
      id: 2,
      options: [
        {
          id: 1,
          text: 'document.getElementById("showList").value = text;'
        },
        {
          id: 2,
          text: 'document.getElementById("showList").textContent = text;'
        },
        {
          id: 3,
          text: 'document.getElementById("showList").innerHTML = text;'
        },
        {
          id: 4,
          text: 'document.getElementById("showList").HTML = text;'
        }
      ],
      correctOptionId: 3
    }
  ]
},
{
  id: 26,

  type: "single",

  question:
    "You are working on an application for a hotel. The application should display each type of room on a new line within a paragraph. Which line of code should you use at line 09?",

  code: `var rooms = ["Single", "Double", "Suite"];

for (var i = 0; i < rooms.length; i++) {

    // Line 09

}`,

  options: [
    {
      id: 1,
      text: 'document.getElementById("para").innerHTML += rooms[i] + "<br/>";'
    },
    {
      id: 2,
      text: 'document.getElementById("para").innerHTML += rooms[i];'
    },
    {
      id: 3,
      text: 'document.getElementById("para").innerHTML = rooms[i] + "<br/>";'
    },
    {
      id: 4,
      text: 'document.getElementById("para").innerHTML += rooms[i] + <br/>;'
    }
  ],

  correctOptionId: 1
},
{
  id: 27,

  type: "multiple_choice",

  question:
    "You are creating a form that allows customers to choose the spice level of their food. If they choose Spicy, the page should display a warning. What should you do?",

  code: `<!DOCTYPE html>
<html>
<body>

<form name="orderForm" action="#" method="post">
    <select name="heatIndex" required>
        <option>Mild</option>
        <option>Medium</option>
        <option>Spicy</option>
    </select>

    <!-- Line 07 --> <button onclick="checkWarning()"> Order </button>
</form>

<script>
function checkWarning() {

    <!-- Line 10 --> var option = document.forms.orderForm["heatIndex"];

    if (option == "Spicy") {
        alert("Spicy food: Good Luck!");
    }
}
</script>

</body>
</html>`,

  options: [
    {
      id: 1,
      text: 'Change line 07 to <button onchange="checkWarning();">Order</button>'
    },
    {
      id: 2,
      text: 'Change line 07 to <button onclick="checkWarning;">Order</button>'
    },
    {
      id: 3,
      text: 'Change line 10 to var option = document.forms.orderForm["heatIndex"].value;'
    },
    {
      id: 4,
      text: 'Change line 10 to var option.value = document.forms.orderForm["heatIndex"];'
    }
  ],

  correctOptionId: 3
},
{
  id: 28,

  type: "dropdown",

  question:
    "Your instructor asks you to write a program that uses simple rules to help determine whether a person should take the train (Take Train), drive their car (Drive your car), or ride their bike (Ride Bike), depending on the weather conditions and the amount of gas in their car's tank.\n\nThe program must implement the following rules:\n\n• When the temperature is above 65 degrees and it is not raining, the person should ride their bike.\n• When it is raining, the person should drive their car.\n• If the fuel tank has half a tank of gas or less, the person should take the train.\n\nComplete the code by selecting the correct option from each drop-down list.\n\nNote: You will receive partial credit for each correct selection.",

  code: `let advice = "";

if (temperature > 65 [Dropdown 1] !raining) {
    advice = "Ride Bike";
}
else if (fuelTank [Dropdown 2] .5) {
    advice = "Take Train";
}
else {
    advice = "Drive your car";
}`,

  dropdowns: [
    {
      id: 1,
      label: "Dropdown 1",
      options: [
        { id: 1, text: "&&" },
        { id: 2, text: "==" },
        { id: 3, text: "||" },
        { id: 4, text: ">" }
      ],
      correctOptionId: 1
    },
    {
      id: 2,
      label: "Dropdown 2",
      options: [
        { id: 1, text: "<=" },
        { id: 2, text: "&&" },
        { id: 3, text: ">" }
      ],
      correctOptionId: 1
    }
  ]
},
{
  id:29,

  type: "dropdown",

  question:
    "You are writing a JavaScript program. The validGraphic function checks whether the height of a graphic is equal to or greater than 50 pixels, but less than 100 pixels. Complete the code by selecting the correct option from each drop-down list.",

  code: `var valid = false;
var minHeight = 50;
var maxHeight = 100;

function validGraphic(height, width) {
    if (height ___________ minHeight ___________ height ___________ maxHeight) {
        valid = true;
    }
}`,


  dropdowns: [
    {
      id: 1,
      options: [
        { id: 1, text: "<" },
        { id: 2, text: ">" },
        { id: 3, text: "<=" },
        { id: 4, text: ">=" }
      ],
      correctOptionId: 4
    },
    {
      id: 2,
      options: [
        { id: 1, text: "||" },
        { id: 2, text: "&&" }
      ],
      correctOptionId: 2
    },
    {
      id: 3,
      options: [
        { id: 1, text: "<" },
        { id: 2, text: ">" },
        { id: 3, text: "<=" },
        { id: 4, text: ">=" }
      ],
      correctOptionId: 1
    }
  ]
},
{
  id: 30,

  type: "drag_drop",

  question:
    "A JavaScript array is initialized as follows: var array = [20, 40, 60, 80]; You write the following code to manipulate the array. Determine the contents of the array after the code runs.",

  code: `var array = [20, 40, 60, 80];

array.shift();
array.pop();
array.push(10);
array.unshift(100);`,

  dragDropItems: [
    { id: 1, text: "10" },
    { id: 2, text: "20" },
    { id: 3, text: "40" },
    { id: 4, text: "60" },
    { id: 5, text: "80" },
    { id: 6, text: "100" }
  ],

  dropZones: [
    {
      id: 1,
      correctItemId: 6
    },
    {
      id: 2,
      correctItemId: 3
    },
    {
      id: 3,
      correctItemId: 4
    },
    {
      id: 4,
      correctItemId: 1
    }
  ]
},
{
  id: 31,

  type: "single",

  question:
    "You are designing a web page with a script that must dynamically change the content of a paragraph element to display the value returned by the function randomQuote(). Which code segment should you use at line 08?",

  code: `<p id="tester" onclick="changeText()">Click to change the content.</p>

<input
  type="button"
  value="Change Text"
  onclick="changeText()"
/>
 function changeText() {
    // Line 08
    ____________________________________________
}`,

  options: [
    {
      id: 1,
      text: 'document.getElementById("tester").title = randomQuote();'
    },
    {
      id: 2,
      text: 'document.getElementById("tester").value = randomQuote();'
    },
    {
      id: 3,
      text: 'document.getElementById("tester").innerHTML = randomQuote();'
    },
    {
      id: 4,
      text: 'document.getElementById("tester").script = randomQuote();'
    }
  ],

  correctOptionId: 3
},
{
  id: 32,

  type: "single",

  question:
    "You need to create an external JavaScript file that contains a function named showArea. The function displays the area of a rectangle. Which code segment correctly implements this requirement?",

  options: [
    {
      id: 1,
      text: `<body>
<script>
function showArea(length, width) {
    alert(length * width);
}
</script>
</body>`
    },
    {
      id: 2,
      text: `<script>
function showArea(length, width) {
    alert(length * width);
}
</script>`
    },
    {
      id: 3,
      text: `<head>
<script>
function showArea(length, width) {
    alert(length * width);
}
</script>
</head>`
    },
    {
      id: 4,
      text: `function showArea(length, width) {
    alert(length * width);
}`
    }
  ],

  correctOptionId: 4
},
{
  id: 33,

  type: "single",

  question:
    "You need to determine whether a string named str is empty. What is the correct syntax?",

  options: [
    {
      id: 1,
      text: 'str == "empty"'
    },
    {
      id: 2,
      text: 'str == ""'
    },
    {
      id: 3,
      text: 'str == "null"'
    },
    {
      id: 4,
      text: 'str == null'
    }
  ],

  correctOptionId: 2
},
{
  id: 34,

  type: "trueFalseGroup",

  question:
    "You test the validatePin function by passing different arguments to it. For each argument, select True if the function returns true, or False if it does not.",

  code: `function validatePin(pin) {
    var validated = !isNaN(pin) && pin.toString().length == 4;

    return validated;
}`,

  statements: [
    {
      id: 1,
      text: '"ABCD"',
      correct: false
    },
    {
      id: 2,
      text: '1234',
      correct: true
    },
    {
      id: 3,
      text: '20 * 50',
      correct: true
    }
  ]
},
{
  id: 35,

  type: "single",

  question:
    "You review the following JavaScript code. When the code runs, what is the value of y?",

  code: `var x = "10";

var y = x + 10;`,

  options: [
    {
      id: 1,
      text: "20"
    },
    {
      id: 2,
      text: "1010"
    },
    {
      id: 3,
      text: "NaN"
    },
    {
      id: 4,
      text: "The value of y is undefined."
    }
  ],

  correctOptionId: 2
},
{
  id: 36,

  type: "trueFalseGroup",

  question:
    "For each statement, select True or False.",

  statements: [
    {
      id: 1,
      text: "The alert() method displays a popup box with Yes and No buttons.",
      correct: false
    },
    {
      id: 2,
      text: "The window.prompt() method can be written without referencing the window object.",
      correct: true
    },
    {
      id: 3,
      text: "The window.document.getElementById(elementName) method returns the element that has the name attribute with the value specified in the elementName parameter.",
      correct: false
    }
  ]
},
{
  id: 37,

  type: "trueFalseGroup",

  question:
    "Variable x has a value of 5. Variable y has a value of 7. For each expression, select True if the expression evaluates to true, or False if it does not.",

  statements: [
    {
      id: 1,
      text: "x < 7 && y > 6",
      correct: true
    },
    {
      id: 2,
      text: "x == 6 || y == 6",
      correct: false
    },
    {
      id: 3,
      text: "x !== 7",
      correct: true
    },
    {
      id: 4,
      text: "!(x == y)",
      correct: true
    }
  ]
},
{
  id: 38,

  type: "dropdown",

  question:
    "You are creating a web page that tests a user's ability to accurately type text. Validation must be case-insensitive. Complete the code by selecting the correct option for each drop-down list.",

  code: `function validate() {
    var input = document.getElementById("tester").______________________;

    var text = document.getElementById("userText").______________________;

    if (input.______________________ == text.______________________) {
        alert("Success");
    }
}`,

  dropdowns: [
    {
      id: 1,
      options: [
        { id: 1, text: "value" },
        { id: 2, text: "innerHTML" },
        { id: 3, text: "toLowerCase()" }
      ],
      correctOptionId: 1
    },
    {
      id: 2,
      options: [
        { id: 1, text: "value" },
        { id: 2, text: "innerHTML" },
        { id: 3, text: "toLowerCase()" }
      ],
      correctOptionId: 2
    },
    {
      id: 3,
      options: [
        { id: 1, text: "value" },
        { id: 2, text: "innerHTML" },
        { id: 3, text: "toLowerCase()" }
      ],
      correctOptionId: 3
    },
    {
      id: 4,
      options: [
        { id: 1, text: "value" },
        { id: 2, text: "innerHTML" },
        { id: 3, text: "toLowerCase()" }
      ],
      correctOptionId: 3
    }
  ]
},
{
  id: 39,

  type: "dropdown",

  question:
    "You are writing a JavaScript program that collects employee data and stores it in a database. Your program handles a wide variety of data, including text and different types of numbers.\n\nYou need to ensure that the program handles the data so that it can be stored in the database with the correct data type.\n\nFor each code segment, determine the data type that is being handled.\n\nComplete the code by selecting the correct option from each drop-down list.\n\nNote: You will receive partial credit for each correct selection.",

  code: `var age = 23;               [Dropdown 1]

var exempt = false;      [Dropdown 2]

var initial = 'D';       [Dropdown 3]

var salary = 123.5;      [Dropdown 4]

var zip = "81000";       [Dropdown 5]`,

  dropdowns: [

    {
      id: 1,
      options: [
        { id: 1, text: "Boolean" },
        { id: 2, text: "Number" },
        { id: 3, text: "Object" },
        { id: 4, text: "String" },
        { id: 5, text: "Undefined" },
      ],
      correctOptionId: 2,
    },

    {
      id: 2,
      options: [
        { id: 1, text: "Boolean" },
        { id: 2, text: "Number" },
        { id: 3, text: "Object" },
        { id: 4, text: "String" },
        { id: 5, text: "Undefined" },
      ],
      correctOptionId: 1,
    },

    {
      id: 3,
      options: [
        { id: 1, text: "Boolean" },
        { id: 2, text: "Number" },
        { id: 3, text: "Object" },
        { id: 4, text: "String" },
        { id: 5, text: "Undefined" },
      ],
      correctOptionId: 4,
    },

    {
      id: 4,
      options: [
        { id: 1, text: "Boolean" },
        { id: 2, text: "Number" },
        { id: 3, text: "Object" },
        { id: 4, text: "String" },
        { id: 5, text: "Undefined" },
      ],
      correctOptionId: 2,
    },

    {
      id: 5,
      options: [
        { id: 1, text: "Boolean" },
        { id: 2, text: "Number" },
        { id: 3, text: "Object" },
        { id: 4, text: "String" },
        { id: 5, text: "Undefined" },
      ],
      correctOptionId: 4,
    }

  ]
},
{
  id: 40,

  type: "dropdown",

  question:
    "You are designing a web page that displays a blue button. When the user clicks the button, the button should call a function that displays the message 'Welcome!'. When the user hovers over the button, the button should turn red. When the user points away from the button, the button should revert back to its original color blue. Complete the markup by selecting the correct option for each drop-down list.",

  code: `<!DOCTYPE html>
<html>
<head>
<script>
function showRed() {
    var changer = document.getElementById("changer");
    changer.style.backgroundColor = "red";
}

function showBlue() {
    var changer = document.getElementById("changer");
    changer.style.backgroundColor = "blue";
}

function notify() {
    alert("Welcome!");
}
</script>
</head>

<body>

<input id="changer" type="button"
       ______________________="notify();"
       ______________________="showRed();"
       ______________________="showBlue();"
       value="Click Me"
       style="background-color:blue; color:white;" />

</body>
</html>`,

  dropdowns: [
    {
      id: 1,
      options: [
        { id: 1, text: "onchange" },
        { id: 2, text: "onmouseover" },
        { id: 3, text: "onmouseout" },
        { id: 4, text: "onclick" }
      ],
      correctOptionId: 4
    },
    {
      id: 2,
      options: [
        { id: 1, text: "onmouseover" },
        { id: 2, text: "onmousedown" },
        { id: 3, text: "onmouseout" },
        { id: 4, text: "onclick" }
      ],
      correctOptionId: 1
    },
    {
      id: 3,
      options: [
        { id: 1, text: "onmouseover" },
        { id: 2, text: "onmousedown" },
        { id: 3, text: "onmouseout" },
        { id: 4, text: "onkeydown" }
      ],
      correctOptionId: 3
    }
  ]
},
{
  id: 41,

  type: "dropdown",

  question:
    "You are creating a web page that dynamically creates input fields when a user clicks an Add button. Each input field must be numeric and specify 'Enter Score' as its placeholder text. Complete the code by selecting the correct option from each drop-down list.",

  code: `<!DOCTYPE html>
<html>
<head>
<script>
function addScoreField() {

    var field = document.________________________("input");

    field.________________________("type", "number");
    field.________________________("placeholder", "Enter Score");

    var container = document.getElementById("container");
    container.________________________(field);
}
</script>
</head>

<body>

<div id="container" style="display:flex">
    <input type="number" placeholder="Enter Score">
    <input type="number" placeholder="Enter Score">
    <input type="number" placeholder="Enter Score">
</div>

<button onclick="addScoreField()">Add</button>

</body>
</html>`,

  dropdowns: [
    {
      id: 1,
      options: [
        { id: 1, text: "appendChild" },
        { id: 2, text: "createAttribute" },
        { id: 3, text: "createElement" },
        { id: 4, text: "createTextNode" }
      ],
      correctOptionId: 3
    },
    {
      id: 2,
      options: [
        { id: 1, text: "appendChild" },
        { id: 2, text: "createAttribute" },
        { id: 3, text: "setAttribute" }
      ],
      correctOptionId: 3
    },
    {
      id: 3,
      options: [
        { id: 1, text: "appendChild" },
        { id: 2, text: "createAttribute" },
        { id: 3, text: "setAttribute" }
      ],
      correctOptionId: 3
    },
    {
      id: 4,
      options: [
        { id: 1, text: "appendChild" },
        { id: 2, text: "insertAdjacentElement" },
        { id: 3, text: "createElement" }
      ],
      correctOptionId: 1
    }
  ]
},
{
  id: 42,

  type: "single",

  question:
    "Which JavaScript code fragment will store only the number in the variable iNum as a number?",

  code: `// A
var iNum = parseInt("42fred");

// B
var iNum = "42fred";

// C
var iNum = "42fred";
iNum = iNum.substr(1, 2);

// D
var iNum = "42fred";
iNum = iNum.substr(2, 2);`,

  options: [
    {
      id: 1,
      text: `A`
    },
    {
      id: 2,
      text: `B`
    },
    {
      id: 3,
      text: `C`
    },
    {
      id: 4,
      text: `D`
    }
  ],

  correctOptionId: 1
},
{
  id: 43,

  type: "single",

  question:
    "You run the following code. What value is stored in the variable chain after the code runs?",

  code: `var chain = "";

var j;

for (j = 0; j < 8; j++) {
    if (j == 2) {
        continue;
    }

    chain += j + " ";
}`,

  options: [
    {
      id: 1,
      text: "0 1 2 3 4 5 6 7 8"
    },
    {
      id: 2,
      text: "1 3 4 5 6 7 8"
    },
    {
      id: 3,
      text: "0 1 3 4 5 6 7"
    },
    {
      id: 4,
      text: "3 4 5 6 7"
    },
    {
      id: 5,
      text: "0 1"
    }
  ],

  correctOptionId: 3
},
{
  id: 44,

  type: "multiple_choice",

  question:
    "You are using JavaScript to create a function that calculates admission price (ticketPrice). The function must accept the age of the customer (age) as a parameter and implement the following rules: Customers younger than 5 years old get in free. Customers who are 65 years old or older get in free. Customers from 5 to 17 years old pay $10. All other customers pay $20. Complete the code by selecting the correct option from each drop-down list.",

  code: `function ticketPrice(age) {
    var price = 20;

    // Drop-down 1
    ______________________{
        price = 0;
    }

    // Drop-down 2
    ______________________{
        price = 10;
    }

    return price;
}`,

  options: [
    {
      id: 1,
      text: "Drop-down 1: if (age <= 5 && age > 65)"
    },
    {
      id: 2,
      text: "Drop-down 1: if (age < 5 && age >= 65)"
    },
    {
      id: 3,
      text: "Drop-down 1: if (age <= 5 || age > 65)"
    },
    {
      id: 4,
      text: "Drop-down 1: if (age < 5 || age >= 65)"
    },
    {
      id: 5,
      text: "Drop-down 2: if (age >= 5 && age < 18)"
    },
    {
      id: 6,
      text: "Drop-down 2: if (age > 5 && age <= 18)"
    },
    {
      id: 7,
      text: "Drop-down 2: if (age >= 5 && age <= 17)"
    },
    {
      id: 8,
      text: "Drop-down 2: if (age > 5 && age <= 17)"
    }
  ],

  correctOptionIds: [4, 7]
},
{
  id: 45,

  type: "multiple_choice",

  question:
    "You are creating a JavaScript program for an accounting system. You evaluate the code to ensure that it follows JavaScript best practices. Which two lines of code contain reserved words? (Choose 2.)",

  code: `01  name = "Becca";
02  address = "123 Olive St.";
03  while = Date.now();
04  color = "Red";
05  break = "No";`,

  options: [
    {
      id: 1,
      text: "01"
    },
    {
      id: 2,
      text: "02"
    },
    {
      id: 3,
      text: "03"
    },
    {
      id: 4,
      text: "04"
    },
    {
      id: 5,
      text: "05"
    }
  ],

  correctOptionIds: [3, 5]
},
{
  id: 46,

  type: "dropdown",

  question:
    "You are creating a calendar application. You need to ensure that the code works correctly for all months of the year. Complete the code by selecting the correct option from each drop-down list.",

  code: `var daysInMonth;
var month;

month = new Date().getMonth();

______________________

    case 1:
        daysInMonth = 28; // For February, ignore leap years
        ______________________

    case 3:
    case 5:
    case 8:
    case 10:
        daysInMonth = 30;
        ______________________

    default:
        daysInMonth = 31;
}`,

  dropdowns: [
    {
      id: 1,
      label: "Dropdown 1",
      options: [
        { id: 1, text: "switch (month) {" },
        { id: 2, text: "case (month) {" },
        { id: 3, text: "break {" }
      ],
      correctOptionId: 1
    },
    {
      id: 2,
      label: "Dropdown 2",
      options: [
        { id: 4, text: "break;" },
        { id: 5, text: "continue;" },
        { id: 6, text: "while (month)" }
      ],
      correctOptionId: 4
    },
    {
      id: 3,
      label: "Dropdown 3",
      options: [
        { id: 4, text: "break;" },
        { id: 5, text: "continue;" },
        { id: 6, text: "while (month)" }
      ],
      correctOptionId: 4
    }
  ]
},
{
  id: 47,

  type: "trueFalseGroup",

  question:
    "Analyze the following code. For each statement, select True or False.",

  code: `"use strict";

var val1 = 25;
var val2 = 4;

function multiply() {
    return val1 * val2;
}

console.log("Global multiply returns(): " + multiply());
multiply();

function getProduct() {
    var val1 = 2;
    var val2 = 3;

    function multiply() {
        return val1 * val2;
    }

    return multiply();
}`,

  statements: [
    {
      id: 1,
      text: "The call to the multiply function on line 09 returns 100.",
      correct: true
    },
    {
      id: 2,
      text: "The call to the multiply function inside getProduct() returns 100.",
      correct: false
    }
  ]
},
{
  id: 48,

  type: "dropdown",

  question:
    "You are using JavaScript to write a safe root Math utility. Given the function safeRoot(a, b), the function must perform the following tasks:\n\n• If the radicand (a) is non-negative, return Math.pow(a, 1 / b).\n• If the radicand (a) is negative:\n   - If the index (b) is divisible by 2, return the text \"Result is an imaginary number\".\n   - Otherwise, return -Math.pow(-a, 1 / b).\n\nComplete the code by selecting the correct option from each drop-down list.",

  code: `function safeRoot(a, b) {

    ______________________

        return Math.pow(a, 1 / b);

    ______________________
        ______________________

        return "Result is an imaginary number";

    ______________________

        return -Math.pow(-a, 1 / b);

}`,

  dropdowns: [

    {
      id: 1,
      label: "Dropdown 1",
      options: [
        { id: 1, text: "if (a >= 0) {" },
        { id: 2, text: "if (b % 2 == 0) {" },
        { id: 3, text: "else if (a >= 0) {" },
        { id: 4, text: "else {" }
      ],
      correctOptionId: 1
    },

    {
      id: 2,
      label: "Dropdown 2",
      options: [
        { id: 1, text: "else if (a<0) {" },
        { id: 2, text: "if (b % 2 == 0) {" },
        { id: 3, text: "else if (b<0) {" },
        { id: 4, text: "else {" }
      ],
      correctOptionId: 1
    },

    {
      id: 3,
      label: "Dropdown 3",
      options: [
        { id: 1, text: "if (b % 2 == 0) {" },
        { id: 2, text: "else if (b % 2 == 0) {" },
        { id: 3, text: "if (a >= 0) {" },
        { id: 4, text: "else {" }
      ],
      correctOptionId: 1
    },

    {
      id: 4,
      label: "Dropdown 4",
      options: [
        { id: 1, text: "if (a >= 0) {" },
        { id: 2, text: "if (b % 2 == 0) {" },
        { id: 3, text: "else if (a >= 0) {" },
        { id: 4, text: "else {" }
      ],
      correctOptionId: 4
    }

  ]
},
{
  id: 49,

  type: "fill_in_order",

  question:
    "You are using JavaScript to create a calculator. You create the following HTML. Complete the add() function by placing the correct code segments into the empty slots. Not all code segments will be used.",

  code: `HTML

<form id="calculator">
    <input type="text" id="a" />
    <input type="text" id="b" />
    <input type="text" id="result" />
    <input type="button" onclick="add()" value="+" />
</form>

JavaScript

function add() {

    ____________________________________________

    ____________________________________________

    ____________________________________________

}`,

  slots: 3,

  orderItems: [
    {
      id: 1,
      text: 'var a = eval(document.getElementById("a").value);'
    },
    {
      id: 2,
      text: 'var b = eval(document.getElementById("b").value);'
    },
    {
      id: 3,
      text: 'document.getElementById("result").value = a + b;'
    },
    {
      id: 4,
      text: 'var b = eval(document.getElementById("b"));'
    },
    {
      id: 5,
      text: 'var result = eval(document.getElementById("result"));'
    },
    {
      id: 6,
      text: 'var result = a + b;'
    }
  ],

  correctOrder: [1, 2, 3]
},
{
  id: 50,

  type: "fill_in_order",

  question:
    "You need to create a function named add() that adds the values entered in the a and b input elements and displays the result in the result input element. Drag the correct code segments into the three empty slots. Not all code segments will be used.",

  code: `

function add() {

    [Slot 1]

    [Slot 2]

    [Slot 3]

}`,

  slots: 3,

  orderItems: [
    {
      id: 1,
      text: 'var a = eval(document.getElementById("a").value);'
    },
    {
      id: 2,
      text: 'var b = eval(document.getElementById("b").value);'
    },
    {
      id: 3,
      text: 'document.getElementById("result").value = a + b;'
    },
    {
      id: 4,
      text: 'var b = eval(document.getElementById("b"));'
    },
    {
      id: 5,
      text: 'var result = eval(document.getElementById("result"));'
    },
    {
      id: 6,
      text: 'var result = a + b;'
    }
  ],

  correctOrder: [1, 2, 3]
},
{
  id: 51,

  type: "dropdown",

  question:
    "You are using JavaScript to develop a Tic-Tac-Toe program. Evaluate the code segment and answer the questions by selecting the correct option from each drop-down list.",

  code: `var grid = new Array();

grid[0] = ['-', '-', 'X'];
grid[1] = ['-', '-', '-'];
grid[2] = ['-', 'O', '-'];`,

  dropdowns: [
    {
      id: 1,
      options: [
        {
          id: 1,
          text: "grid[0][2]"
        },
        {
          id: 2,
          text: "grid[1][3]"
        },
        {
          id: 3,
          text: "grid[2][0]"
        },
        {
          id: 4,
          text: "grid[3][1]"
        }
      ],
      correctOptionId: 1
    },
    {
      id: 2,
      options: [
        {
          id: 5,
          text: "grid[1][2]"
        },
        {
          id: 6,
          text: "grid[2][3]"
        },
        {
          id: 7,
          text: "grid[2][1]"
        },
        {
          id: 8,
          text: "grid[3][2]"
        }
      ],
      correctOptionId: 7
    }
  ]
},
{
  id: 52,

  type: "dropdown",

  question:
    "You are writing JavaScript code that manipulates dates. You need to initialize a Date object with the date January 1, 2021 by using the year, month, and date parameters. Complete the code by selecting the correct option from each drop-down list.",

  code: `var date = new Date( ______________________, ______________________, ______________________);`,

  dropdowns: [
    {
      id: 1,
      label: "Dropdown 1",
      options: [
        {
          id: 1,
          text: "21"
        },
        {
          id: 2,
          text: "2021"
        }
      ],
      correctOptionId: 2
    },
    {
      id: 2,
      label: "Dropdown 2",
      options: [
        {
          id: 3,
          text: "0"
        },
        {
          id: 4,
          text: "1"
        },
        {
          id: 5,
          text: "Jan"
        },
        {
          id: 6,
          text: "January"
        }
      ],
      correctOptionId: 3
    },
    {
      id: 3,
      label: "Dropdown 3",
      options: [
        {
          id: 7,
          text: "0"
        },
        {
          id: 8,
          text: "1"
        }
      ],
      correctOptionId: 8
    }
  ]
},
{
  id: 53,

  type: "trueFalseGroup",

  question:
    "For each statement, select True or False. Note: You will receive partial credit for each correct selection.",

  statements: [
    {
      id: 1,
      text: "Internal JavaScript can be placed within the <head> tags.",
      correct: true
    },
    {
      id: 2,
      text: "Placing your scripts at the bottom of the page body lets the browser load the other elements of the page first.",
      correct: true
    },
    {
      id: 3,
      text: 'Internal JavaScript is linked using the tag <script src="internal" type="text/javascript">.',
      correct: false
    }
  ]
},
{
  id: 54,

  type: "multiple_choice",

  question:
    "You are writing a JavaScript application for an accounting system. You create the following code. What is displayed in the info element?",

  code: `<!DOCTYPE html>
<html>
<body>

<p id="info"></p>

<script>
var firstName = "Dusty";
var lastName = "Luna";
var fullName = firstName + " " + lastName;
var fullNameSalary = fullName + " " + salary;

document.getElementById("info").innerHTML = fullNameSalary;

var salary = 48000;
</script>

</body>
</html>`,

  options: [
    {
      id: 1,
      text: '"Dusty Luna 48000"'
    },
    {
      id: 2,
      text: '"Dusty Luna undefined"'
    },
    {
      id: 3,
      text: "undefined"
    },
    {
      id: 4,
      text: '""'
    }
  ],

  correctOptionId: 2
},
{
  id: 55,

  type: "dropdown",

  question:
    "Your instructor has the following exception handling requirements: The displayInfo() function must use exception handling. The display() function must always run, regardless of whether an exception occurs. If there is an exception, the script must call the logDisplayInfoError() and correctDisplayInfo() functions. Complete the code by selecting the correct option from each drop-down list.",

  code: `[Dropdown 1] {
    displayInfo();
}
[Dropdown 2] {
    logDisplayInfoError();
    correctDisplayInfo();
}
[Dropdown 3] {
    display();
}`,

  dropdowns: [
    {
      id: 1,
      options: [
        { id: 1, text: "try" },
        { id: 2, text: "try(msg)" },
        { id: 3, text: "catch" },
        { id: 4, text: "finally" }
      ],
      correctOptionId: 1
    },
    {
      id: 2,
      options: [
        { id: 1, text: "catch(msg)" },
        { id: 2, text: "catch" },
        { id: 3, text: "try" },
        { id: 4, text: "finally" }
      ],
      correctOptionId: 1
    },
    {
      id: 3,
      options: [
        { id: 1, text: "finally" },
        { id: 2, text: "catch(msg)" },
        { id: 3, text: "try" },
        { id: 4, text: "finally(msg)" }
      ],
      correctOptionId: 1
    }
  ]
},
{
  id: 56,

  type: "multiple_choice",

  question:
    "You are creating a JavaScript program for an accounting system. You write the following code. Line numbers are included for reference only. You need to ensure that the function returns true only if the amount is equal to or less than the currentBalance. How should you complete the code at line 02?",

  code: `function canWithdraw(amount, currentBalance) {

    // Line 02

        return true;
    }
    else {
        return false;
    }
}`,

  options: [
    {
      id: 1,
      text: "if (amount < currentBalance) {"
    },
    {
      id: 2,
      text: "if (amount >= currentBalance) {"
    },
    {
      id: 3,
      text: "if (amount <= currentBalance) {"
    },
    {
      id: 4,
      text: "if (amount > currentBalance) {"
    }
  ],

  correctOptionId: 3
},
{
  id: 57,

  type: "multiple_choice",

  question:
    "Review the following web page markup. The page allows users to create a problem ticket and send an email to help@societyrugby.com. The email contains a problem description, the user's name, and the user's phone number. You need to perform custom validation of the user's phone number (yourPhoneNumber) when the page attempts to send the problem ticket (problemTicket). Which property, method, or event of the form object should you use?",

  code: `<form name="problemTicket" action="mailto:help@societyrugby.com" method="post">
    <input name="problemDescription" type="text" />
    <input name="yourName" type="text" />
    <input name="yourPhoneNumber" type="tel" />
    <button>Create Problem Ticket</button>
</form>`,

  options: [
    {
      id: 1,
      text: "setCustomValidity"
    },
    {
      id: 2,
      text: "target"
    },
    {
      id: 3,
      text: "onsubmit"
    },
    {
      id: 4,
      text: "onclick"
    }
  ],

  correctOptionId: 3
},
{
  id: 58,

  type: "dropdown",

  question:
    "You are writing a JavaScript function for a scientific research company. The setTotal function counts the total number of scientists allocated to all projects. The projects array contains the number of scientists assigned to each project. Complete the code by selecting the correct option from each drop-down list.",

  code: `var projects = [3, 5, 6, 7];
var i = 0;
var totalAllocated = 0;
var count = ______________________;

function setTotal() {
    ______________________ {
        totalAllocated += projects[i];
        i++;
    }
}`,

  dropdowns: [
    {
      id: 1,
      label: "Dropdown 1",
      options: [
        {
          id: 1,
          text: "projects.length"
        },
        {
          id: 2,
          text: "projects[4]"
        }
      ],
      correctOptionId: 1
    },
    {
      id: 2,
      label: "Dropdown 2",
      options: [
        {
          id: 1,
          text: "while (i < count)"
        },
        {
          id: 2,
          text: "while (i > count)"
        },
        {
          id: 3,
          text: "for (i <= count)"
        },
        {
          id: 4,
          text: "for (i = count)"
        }
      ],
      correctOptionId: 1
    }
  ]
},
{
  id: 59,

  type: "multiple_choice",

  question:
    "You are developing the following web page for rock music zone. The script is in an infinite loop. What is the problem?",

  code: `<!doctype html>
<html>
<head>
<title>rock music zone</title>
<script>
var sales;
var totalsales = 0;
var count = 0;
</script>
</head>

<body>
<h2>rock music zone</h2>
<p id="sales"></p>

<script>
sales = Math.round(prompt("enter today's sales (-1 to end): "));

while (sales != -1) {
    totalsales += sales;
    count++;
    sales += Math.round(prompt("enter today's sales (-1 to end): "));
}

document.getElementById("sales").innerHTML =
    "transactions=" + count + " total=" + totalsales;
</script>
</body>
</html>`,

  options: [
    {
      id: 1,
      text: "In line 17, the totalsales value will be undefined because sales is not a valid number."
    },
    {
      id: 2,
      text: "In line 06, the sales variable is not initialized to 0."
    },
    {
      id: 3,
      text: "In line 16, the condition should be changed to while (sales)."
    },
    {
      id: 4,
      text: "In line 19, the sales variable should use the = operator instead of the += operator."
    }
  ],

  correctOptionId: 4
},
{
  id: 60,

  type: "multiple_choice",

  question:
    "The remainder function calculates the remainder for integer division. The function receives two parameters, a and b, and must return the remainder that is left over when the integer a is divided by the integer b. Which two sets of code segments could you use? (Choose 2)",

  code: `function remainder(a, b) {

    // Line 02

    // Line 03

}`,

  options: [
    {
      id: 1,
      text: `a = a / b - a;
return a;`
    },
    {
      id: 2,
      text: `b = b % a;
return b;`
    },
    {
      id: 3,
      text: `b %= a;
return b;`
    },
    {
      id: 4,
      text: `a %= b;
return a;`
    },
    {
      id: 5,
      text: `b = b / a - b;
return b;`
    },
    {
      id: 6,
      text: `a = a % b;
return a;`
    }
  ],

  correctOptionIds: [4, 6]
},
{
  id: 61,

  type: "single",

  question:
    "A page displays the following element. When the user moves the mouse over the image (hover), the page must call the displayText function. Which code correctly does this?",

  code: `<img
    src="images/cottage.jpg"
    id="cottage"
    alt="Vacation Cottage"
    style="width:150px; height:100px;"
/>`,

  options: [
    {
      id: 1,
      text: 'document.getElementById("cottage").addEventListener("mouseover", displayText);'
    },
    {
      id: 2,
      text: 'document.getElementById("cottage").addEventListener("mouseover", displayText());'
    },
    {
      id: 3,
      text: 'document.getElementById("cottage").addEventListener("onmouseover", displayText);'
    },
    {
      id: 4,
      text: 'document.getElementById("cottage").onmouseover = displayText();'
    }
  ],

  correctOptionId: 1
},
{
  id: 62,

  type: "dropdown",

  question:
    "You need to determine the data type for lines 01, 03, 04, and 05 based on their initialization and assignment.",

  code: `var flightDestination = "Denver";
var flight = 5;
var roundTrip = 2489.58;
var onTime = true;
var id = flight + flightDestination;`,

  dropdowns: [
    {
      id: 1,
      label: "Line 01",
      options: [
        { id: 1, text: "Number" },
        { id: 2, text: "String" },
        { id: 3, text: "Boolean" },
        { id: 4, text: "Null" },
        { id: 5, text: "Undefined" }
      ],
      correctOptionId: 2
    },
    {
      id: 2,
      label: "Line 03",
      options: [
        { id: 1, text: "Number" },
        { id: 2, text: "String" },
        { id: 3, text: "Boolean" },
        { id: 4, text: "Null" },
        { id: 5, text: "Undefined" }
      ],
      correctOptionId: 1
    },
    {
      id: 3,
      label: "Line 04",
      options: [
        { id: 1, text: "Number" },
        { id: 2, text: "String" },
        { id: 3, text: "Boolean" },
        { id: 4, text: "Null" },
        { id: 5, text: "Undefined" }
      ],
      correctOptionId: 3
    },
    {
      id: 4,
      label: "Line 05",
      options: [
        { id: 1, text: "Number" },
        { id: 2, text: "String" },
        { id: 3, text: "Boolean" },
        { id: 4, text: "Null" },
        { id: 5, text: "Undefined" }
      ],
      correctOptionId: 2
    }
  ]
},
{
  id: 63,

  type: "dropdown",

  question:
    "The script must modify the following variables: round the resting heart rate (rhr) to the nearest integer, round the adjusted low heart rate down, and round the adjusted high heart rate up.",

  code: `function heartRate() {

    var age = parseInt(document.getElementById("age").value);
    var rhr = parseInt(document.getElementById("restingHR").value);

    ____________________________________________

    var message;
    var lowHR = (220 - age - rhr) * .50;

    ____________________________________________

    var highHR = (220 - age - rhr) * .85;

    ____________________________________________

    message = "Your training heart rate is between:<br>" +
              adjusted_low + " and " + adjusted_high;

    document.getElementById("feedback").innerHTML = message;

}`,

  dropdowns: [
    {
      id: 1,
      label: "Dropdown 1",
      options: [
        {
          id: 1,
          text: "rhr = Math.round(0)"
        },
        {
          id: 2,
          text: "rhr = Math.round(rhr)"
        },
        {
          id: 3,
          text: "rhr = Math.min(rhr)"
        },
        {
          id: 4,
          text: "rhr = Math.abs(rhr, 0)"
        }
      ],
      correctOptionId: 2
    },
    {
      id: 2,
      label: "Dropdown 2",
      options: [
        {
          id: 1,
          text: "var adjusted_low = Math.ceil(lowHR + rhr)"
        },
        {
          id: 2,
          text: "var adjusted_low = Math.floor(lowHR + rhr)"
        },
        {
          id: 3,
          text: "var adjusted_low = Math.round(lowHR + rhr)"
        },
        {
          id: 4,
          text: "var adjusted_low = Math.trunc(lowHR + rhr)"
        }
      ],
      correctOptionId: 2
    },
    {
      id: 3,
      label: "Dropdown 3",
      options: [
        {
          id: 1,
          text: "var adjusted_high = Math.ceil(highHR + rhr)"
        },
        {
          id: 2,
          text: "var adjusted_high = Math.floor(highHR + rhr)"
        },
        {
          id: 3,
          text: "var adjusted_high = Math.round(highHR + rhr)"
        },
        {
          id: 4,
          text: "var adjusted_high = Math.trunc(highHR + rhr)"
        }
      ],
      correctOptionId: 1
    }
  ]
},
{
  id: 64,

  type: "single",

  question: "What is the correct syntax?",

  options: [
    {
      id: 1,
      text: "x = null"
    },
    {
      id: 2,
      text: 'x == "null"'
    },
    {
      id: 3,
      text: "x typeof null"
    },
    {
      id: 4,
      text: "x == null"
    }
  ],

  correctOptionId: 4
},
{
  id: 65,

  type: "drag_drop",

  question:
    "You need to write a loop that performs the following tasks:\n\n" +
    "• Traverse the length of an array to find the value 'orange'.\n" +
    "• If an array element value is null, immediately go to the next element.\n" +
    "• When the value is found, exit the loop.\n\n" +
    "Complete the code by moving the appropriate keywords from the list on the left to the correct positions on the right.\n\n" +
    "You may use each keyword once, more than once, or not at all.",

  code: `function doWork() {

    var list = ['apple', 'pear', null, 'orange', 'banana'];

    __________________ (i = 0; i < list.length; i++) {

        if (list[i] == null)
            __________________;

        if (list[i] == 'orange') {
            alert('found');
            __________________;
        }

        console.log(list[i]);
    }

}`,

  orderItems: [
    {
      id: 1,
      text: "break"
    },
    {
      id: 2,
      text: "continue"
    },
    {
      id: 3,
      text: "do"
    },
    {
      id: 4,
      text: "for"
    },
    {
      id: 5,
      text: "while"
    }
  ],

  dropZones: [
    {
      id: 1,
      correctItemId: 4
    },
    {
      id: 2,
      correctItemId: 2
    },
    {
      id: 3,
      correctItemId: 1
    }
  ]
},
{
  id: 66,

  type: "dropdown",

  question:
    "Each Customer object has the properties customerName, lastOrderDate, and orderAmount. Complete the code to identify customers who placed orders in the last 3 years.",

  code: `for (var i = 0; i < customers.length; i++) {

    var customer = customers[i];
    var currentDate = new Date();
    var orderDate = new Date(customer.lastOrderDate);

    if ( ______________________ - ______________________ < 3 ) {

        console.log(
            "Customer " +
            customers[i].customerName +
            " placed order " +
            dateDiff(currentDate, orderDate)
        );
    }
}`,

  dropdowns: [
    {
      id: 1,
      label: "Dropdown 1",
      options: [
        {
          id: 1,
          text: "Date(currentDate).getFullYear()"
        },
        {
          id: 2,
          text: "currentDate.getFullYear()"
        },
        {
          id: 3,
          text: "getFullYear"
        },
        {
          id: 4,
          text: "getDate()"
        }
      ],
      correctOptionId: 2
    },
    {
      id: 2,
      label: "Dropdown 2",
      options: [
        {
          id: 1,
          text: "Date(orderDate).getFullYear()"
        },
        {
          id: 2,
          text: "orderDate.getFullYear()"
        },
        {
          id: 3,
          text: "getFullYear"
        },
        {
          id: 4,
          text: "getDate()"
        }
      ],
      correctOptionId: 2
    }
  ]
},
{
  id: 67,

  type: "dropdown",

  question:
    "You need to change a paragraph element to 'Can place a call' when the user moves the mouse inside the paragraph.",

  code: `<p id="para"
   ______________________="hover('Can')"
   ______________________="hover('Cannot')">
   Cannot place a call
</p>

<script>
function hover(canCall) {
    document.getElementById("para").innerHTML =
        canCall + " place a call.";
}
</script>`,

  dropdowns: [
    {
      id: 1,
      label: "First dropdown",
      options: [
        {
          id: 1,
          text: "onmouseover"
        },
        {
          id: 2,
          text: "onmouseout"
        },
        {
          id: 3,
          text: "onclick"
        },
        {
          id: 4,
          text: "onchange"
        }
      ],
      correctOptionId: 1
    },
    {
      id: 2,
      label: "Second dropdown",
      options: [
        {
          id: 1,
          text: "onmouseover"
        },
        {
          id: 2,
          text: "onmouseout"
        },
        {
          id: 3,
          text: "onclick"
        },
        {
          id: 4,
          text: "onchange"
        }
      ],
      correctOptionId: 2
    }
  ]
},
{
  id: 68,

  type: "dropdown",

  question:
    "The script must implement the following rules:\n• If the pay_type is h or H and the number of hours is greater than 40, the employee receives overtime pay.\n• Otherwise, the employee receives their regular pay.",

  code: `document.getElementById("submit").addEventListener("click", function() {

    if ((pay_type == "h" _____ pay_type == "H") _____ hours _____ 40) {
        overtime(hours);
    } else {
        regular(hours);
    }

});`,

  dropdowns: [
    {
      id: 1,
      label: "Operator between h and H",
      options: [
        {
          id: 1,
          text: "<>"
        },
        {
          id: 2,
          text: "||"
        },
        {
          id: 3,
          text: "&&"
        }
      ],
      correctOptionId: 2
    },
    {
      id: 2,
      label: "Operator before hours condition",
      options: [
        {
          id: 1,
          text: "<>"
        },
        {
          id: 2,
          text: "||"
        },
        {
          id: 3,
          text: "&&"
        }
      ],
      correctOptionId: 3
    },
    {
      id: 3,
      label: "Hours comparison",
      options: [
        {
          id: 1,
          text: "<"
        },
        {
          id: 2,
          text: "<="
        },
        {
          id: 3,
          text: ">"
        },
        {
          id: 4,
          text: ">="
        }
      ],
      correctOptionId: 3
    }
  ]
}

];