// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
    // The ID of the course the assignment group belongs to 
  course_id: 451,
  // The percentage weight of the entire assignment group
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      // the due date for the assignment
      due_at: "2023-01-25",
      // the maximum points possible for the assignment
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, 
      1: 0.94, 
      2: 1.0 
    },
    {
      id: 132,
      avg: 0.82, 
      1: 0.78, 
      2: 0.833 
    }
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

//functions loops
function tasks() {
  for(let i = 0; i < AssignmentGroup.length; i++) {}



}





//Variables
function variable() {
  let info = Object.keys(CourseInfo);
  console.log(info);
  let assignment = Object.keys(AssignmentGroup);
  console.log(assignment);
  let newLearner = Object.keys(LearnerSubmissions);
  console.log(newLearner);
}

// Assignment Group Numbers
let holder = 150;
let holder2 = 50;
let holder3 = 500;

 //LearnerSubmissions
 let newHolder = 47;
 let newHolder2 = 150;
 let newHolder3 = 400;
 let newHolder4 = 39;

let operator = holder + holder2;
let operator2 = newHolder + holder;
let operator3 = operator2 / operator;
let newOperator = newHolder4 + holder;

let operator4 = newOperator / operator;



//  The ID numbers 
let idNumber = 125;
let idNumber2 = 132;


let print = `Hello, the learner with ID number ${idNumber} has the average number of ${operator3} and 
the next learner with the ID number with ${idNumber2} has the average number of ${operator4}`;
console.log(print);






try {
  console.log(result);
  if(AssignmentGroup.id[1] === 50) {
    console.log("correct")
  } else {
    console.log("change the points")
  }

  if(AssignmentGroup.id[2] === 150) {
     console.log("correct point")
  } else {
    console.log("change points")
  }

}
catch(error) {
  console.result(error);
}
console.log("You're all set");