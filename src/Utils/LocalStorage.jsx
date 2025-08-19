const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Fix UI bugs",
        description: "Resolve header and footer UI issues on landing page.",
        date: "2025-07-14",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Update dependencies",
        description: "Upgrade React and Tailwind to latest versions.",
        date: "2025-07-12",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Write unit tests",
        description: "Add tests for login and signup modules.",
        date: "2025-07-10",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Aditya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        title: "Create database schema",
        description: "Design schema for user management system.",
        date: "2025-07-15",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Add notification API",
        description: "Integrate push notifications for mobile app.",
        date: "2025-07-13",
        category: "API Integration",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Optimize database queries",
        description: "Reduce query execution time for reports.",
        date: "2025-07-11",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    firstName: "Akshay",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 0,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Redesign homepage",
        description: "Update homepage layout for better UX.",
        date: "2025-07-16",
        category: "UI/UX",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix broken links",
        description: "Resolve 404 errors across the site.",
        date: "2025-07-14",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Conduct accessibility audit",
        description: "Ensure compliance with WCAG standards.",
        date: "2025-07-12",
        category: "Compliance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Design onboarding flow",
        description: "Create user-friendly onboarding experience.",
        date: "2025-07-15",
        category: "Product Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Research market trends",
        description: "Analyze competitor features for product roadmap.",
        date: "2025-07-13",
        category: "Market Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Create email templates",
        description: "Design transactional email templates.",
        date: "2025-07-11",
        category: "Email Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Anika",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        title: "Build notification system",
        description: "Implement in-app notification system.",
        date: "2025-07-16",
        category: "Feature Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Refactor authentication",
        description: "Simplify OAuth logic for better maintainability.",
        date: "2025-07-14",
        category: "Code Refactoring",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Create feedback form",
        description: "Design and integrate feedback form.",
        date: "2025-07-12",
        category: "Forms",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  // Employees 6 to 100
  ...Array.from({ length: 95 }, (_, i) => {
    const id = i + 6;
    const firstName = [
      "Arjun", "Aryan", "Avani", "Bhavna", "Chetan", "Deepak", "Diya", "Esha", "Gaurav", "Harsh",
      "Ishaan", "Jaya", "Kabir", "Kavya", "Kiran", "Krishna", "Lakshmi", "Manish", "Meera", "Mohit",
      "Neha", "Nikhil", "Nisha", "Omkar", "Pooja", "Pranav", "Priya", "Rahul", "Rani", "Ria",
      "Rohan", "Riya", "Sahil", "Samir", "Sanjay", "Sara", "Shalini", "Shantanu", "Shiv", "Shruti",
      "Siddharth", "Simran", "Sneha", "Sonia", "Suman", "Sunil", "Tanvi", "Tara", "Umesh", "Vaishali",
      "Varun", "Ved", "Veena", "Vikram", "Vinod", "Yash", "Aarti", "Abhishek", "Aditi", "Alok",
      "Amrita", "Anil", "Anjali", "Ankit", "Arnav", "Ashok", "Bharti", "Darshan", "Dev", "Divya",
      "Gautam", "Geeta", "Gopal", "Hema", "Indira", "Jai", "Jatin", "Komal", "Lalit", "Leela",
      "Madhav", "Maya", "Naveen", "Nidhi", "Nitin", "Pankaj", "Parth", "Preeti", "Rajesh", "Rakesh",
      "Rekha", "Rishi", "Seema", "Shyam", "Tushar"
    ][i];
    const categories = ["Frontend", "Backend", "DevOps", "Testing", "UI/UX", "Compliance", "Maintenance", "Product Design", "Market Research", "Email Marketing", "API Integration", "Feature Development", "Code Refactoring", "Forms", "Database"];
    const randomCategory = () => categories[Math.floor(Math.random() * categories.length)];
    const randomStatus = () => {
      const statuses = [
        { active: true, newTask: false, completed: false, failed: false },
        { active: false, newTask: true, completed: false, failed: false },
        { active: false, newTask: false, completed: true, failed: false },
        { active: false, newTask: false, completed: false, failed: true }
      ];
      return statuses[Math.floor(Math.random() * statuses.length)];
    };
    const taskTitles = {
      Frontend: ["Fix UI bugs", "Implement responsive design", "Enhance form validation"],
      Backend: ["Create API endpoints", "Optimize server performance", "Secure user data"],
      DevOps: ["Set up CI/CD pipeline", "Configure cloud servers", "Update dependencies"],
      Testing: ["Write unit tests", "Perform load testing", "Automate regression tests"],
      "UI/UX": ["Redesign dashboard", "Create wireframes", "Improve navigation flow"],
      Compliance: ["Conduct accessibility audit", "Ensure GDPR compliance", "Review security policies"],
      Maintenance: ["Fix broken links", "Update content", "Patch vulnerabilities"],
      "Product Design": ["Design onboarding flow", "Create prototypes", "Improve user journey"],
      "Market Research": ["Analyze competitors", "Conduct user surveys", "Study market trends"],
      "Email Marketing": ["Create email templates", "Set up drip campaigns", "Track email metrics"],
      "API Integration": ["Integrate payment gateway", "Connect third-party APIs", "Sync data with CRM"],
      "Feature Development": ["Build notification system", "Add search functionality", "Implement chat feature"],
      "Code Refactoring": ["Refactor authentication", "Optimize database queries", "Simplify state management"],
      Forms: ["Create feedback form", "Design survey form", "Build contact form"],
      Database: ["Optimize SQL queries", "Design database schema", "Migrate database"]
    };
    const taskDescriptions = {
      Frontend: ["Resolve layout issues on landing page", "Ensure cross-browser compatibility", "Enhance UI animations"],
      Backend: ["Develop RESTful APIs for app", "Improve server response time", "Implement authentication system"],
      DevOps: ["Automate deployment with GitHub Actions", "Set up AWS infrastructure", "Monitor server uptime"],
      Testing: ["Test login functionality", "Run performance tests", "Validate API responses"],
      "UI/UX": ["Modernize dashboard UI", "Create intuitive navigation", "Design mobile-friendly layouts"],
      Compliance: ["Meet WCAG standards", "Ensure data privacy compliance", "Audit third-party integrations"],
      Maintenance: ["Resolve 404 errors", "Update outdated content", "Fix security vulnerabilities"],
      "Product Design": ["Streamline user onboarding", "Prototype new features", "Enhance product visuals"],
      "Market Research": ["Compare competitor features", "Gather user feedback", "Analyze industry reports"],
      "Email Marketing": ["Design welcome emails", "Set up automated campaigns", "Monitor email open rates"],
      "API Integration": ["Integrate Stripe for payments", "Connect to Google APIs", "Sync with Salesforce"],
      "Feature Development": ["Add push notifications", "Implement search filters", "Build real-time chat"],
      "Code Refactoring": ["Clean up Redux store", "Optimize API calls", "Simplify component logic"],
      Forms: ["Integrate feedback with backend", "Design multi-step forms", "Validate form inputs"],
      Database: ["Reduce query latency", "Document schema changes", "Perform database migration"]
    };
    const tasks = Array.from({ length: 3 }, (_, taskIndex) => {
      const category = randomCategory();
      const status = randomStatus();
      return {
        title: taskTitles[category][taskIndex % taskTitles[category].length],
        description: taskDescriptions[category][taskIndex % taskDescriptions[category].length],
        date: `2025-07-${10 + taskIndex + i}`,
        category,
        ...status
      };
    });
    const taskCount = tasks.reduce(
      (acc, task) => ({
        active: acc.active + (task.active ? 1 : 0),
        newTask: acc.newTask + (task.newTask ? 1 : 0),
        completed: acc.completed + (task.completed ? 1 : 0),
        failed: acc.failed + (task.failed ? 1 : 0)
      }),
      { active: 0, newTask: 0, completed: 0, failed: 0 }
    );

    return {
      id,
      firstName,
      email: `employee${id}@example.com`,
      password: "123",
      taskCount,
      tasks
    };
  })
];

const admin = {
  id: 1,
  firstName: "Bablu Kumar",
  email: "admin@example.com",
  password: "123",
};

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const storedEmployees = localStorage.getItem("employees");
  const storedAdmin = localStorage.getItem("admin");

  const employees = storedEmployees ? JSON.parse(storedEmployees) : [];
  const admin = storedAdmin ? JSON.parse(storedAdmin) : null;

  return { employees, admin };
};