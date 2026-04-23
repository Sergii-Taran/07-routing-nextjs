📝 NoteHub

NoteHub is a modern note-taking web application built with Next.js App Router, featuring advanced routing patterns and a smooth user experience.

🚀 Features
📋 Browse notes list
🏷️ Filter notes by tag
🔎 Search notes
📄 Pagination
➕ Create new notes
👁️ View note details:
as a standalone page
as a modal (without losing list context)

🧠 Architecture

This project demonstrates advanced Next.js App Router capabilities:

app/notes/filter/[...slug] — notes list page
app/notes/[id] — note details page
app/@modal/(..)notes/[id] — modal preview (intercepted route)
@sidebar — parallel route for filters

🧩 Tech Stack
Next.js (App Router)
React
TypeScript
@tanstack/react-query
Axios
Formik + Yup
React Paginate

📦 Installation
git clone https://github.com/your-username/notehub.git
cd notehub
npm install

⚙️ Environment Variables

Create a .env.local file:

NEXT_PUBLIC_NOTEHUB_TOKEN=your_token_here

If no token is provided, the app falls back to email-based authentication.

▶️ Run the App
npm run dev

Open in browser:

http://localhost:3000

🧪 Routes Overview
/ — Home page
/notes/filter/all — all notes
/notes/filter/Work — filtered notes
/notes/[id] — note details page
Modal preview opens from the list via intercepted routes

🪟 Modal Preview (Key Feature)
Built with Intercepted Routes
URL updates without full page reload
Preserves background (notes list)
Supports:
browser back navigation
direct URL access

📁 Project Structure
app/
notes/
filter/
[...slug]/
@sidebar/
@modal/
(..)notes/[id]/

components/
lib/
types/
⚠️ Known Issues

Console warning:

We are cleaning up async info...

This is related to React DevTools and does not affect the application.

👨‍💻 Author

Sergii Taran

📄 License

MIT
