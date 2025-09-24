// localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount:{
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Submit Report",
        description: "Complete and submit the weekly progress report.",
        date: "2025-07-10",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Attend the meeting with Client A to discuss feedback.",
        date: "2025-07-11",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Login Bug",
        description: "Resolve the login issue in the frontend.",
        date: "2025-07-09",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Homepage",
        description: "Redesign homepage based on latest mockups.",
        date: "2025-07-08",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write Unit Tests",
        description: "Write unit tests for new API endpoints.",
        date: "2025-07-12",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Review",
        description: "Review code from team members and provide feedback.",
        date: "2025-07-10",
        category: "Review",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Deployment",
        description: "Deploy new release to production.",
        date: "2025-07-13",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Kunal",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Write Documentation",
        description: "Update internal documentation for onboarding.",
        date: "2025-07-11",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar",
        description: "Correct layout issue with navigation bar.",
        date: "2025-07-09",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Data Backup",
        description: "Ensure database is backed up before maintenance.",
        date: "2025-07-08",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Riya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "SEO Optimization",
        description: "Improve SEO for landing pages.",
        date: "2025-07-07",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team Sync",
        description: "Attend daily team sync meeting.",
        date: "2025-07-10",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Security Audit",
        description: "Run vulnerability scans on the web app.",
        date: "2025-07-14",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Feedback Session",
        description: "Conduct feedback session with intern team.",
        date: "2025-07-11",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Ishaan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Push Code to GitHub",
        description: "Push completed module to GitHub.",
        date: "2025-07-09",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write Blog Post",
        description: "Draft a blog post on new product features.",
        date: "2025-07-08",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Customer Support",
        description: "Handle customer queries for the day.",
        date: "2025-07-10",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }
  // setLocalStorage()
  export const getLocalStorage=()=>{
   const employees=JSON.parse(localStorage.getItem('employees'))
   const admin=JSON.parse(localStorage.getItem('admin'))
  //  console.log(JSON.parse(Emdata));
  //  console.log(JSON.parse(Addata));
  return {employees,admin};
}