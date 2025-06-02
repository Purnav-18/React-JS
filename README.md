echo "# React Todo App with Vite and Simple CSS

A simple Todo App built with React using Vite as the build tool and styled with plain CSS.

---

## Features

- Add tasks
- Edit tasks inline
- Mark tasks as completed (strike-through)
- Delete tasks
- Filter tasks: All, Completed, Pending
- Tasks persist in localStorage

---

## Technologies Used

- React 18+
- Vite
- React Hooks (\`useState\`, \`useEffect\`, \`useRef\`)
- Plain CSS
- Browser \`localStorage\`

---

## Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- npm (comes with Node.js)

### Steps

1. **Clone the repo**

\`\`\`bash
git clone https://github.com/yourusername/react-todo-vite-css.git
cd ReactJs
\`\`\`

2. **Install dependencies**

\`\`\`bash
npm install
\`\`\`

3. **Start the dev server**

\`\`\`bash
npm run dev
\`\`\`

4. **Open the app**

Open your browser and navigate to:

\`\`\`
http://localhost:5173
\`\`\`

---

## Usage

- Type a task and click **Add** or press **Enter** to add it.
- Click the **edit** icon/button next to a task to edit it inline, then save.
- Click the checkbox to mark a task completed or pending.
- Click the **delete** icon/button to remove a task.
- Use the filter buttons to view All, Completed, or Pending tasks.
- Your tasks are saved automatically in localStorage and will persist after page reload.

## Key React Concepts Covered

- JSX syntax and rendering
- Functional components with hooks (\`useState\`, \`useEffect\`, \`useRef\`)
- Controlled components and form handling
- List rendering with \`.map()\` and keys
- Conditional rendering
- Prop drilling and state lifting
- State persistence with \`localStorage\`
