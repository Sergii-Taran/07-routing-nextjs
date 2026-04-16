# 📝 NoteHub (Next.js App Router)

A modern note-taking web application built with **Next.js App Router**, featuring advanced routing patterns, modal navigation, and a clean UI.

---

## 🚀 Live Features

- 📋 View notes list
- 🔍 Search notes
- 🏷 Filter notes by tag
- ➕ Create new notes
- 🗑 Delete notes
- 📄 View note details
- 🪟 Modal preview with routing (intercepting routes)

---

## 🧠 Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **TanStack Query (React Query)**
- **Axios**
- **CSS Modules**

---

## 🗂 Project Structure

```
app/
  notes/
    layout.tsx

    @sidebar/
      default.tsx

    @modal/
      default.tsx
      (.)[id]/page.tsx

    page.tsx
    [id]/page.tsx

    filter/
      [...slug]/page.tsx

components/
  Modal/
  NotePreview/

lib/
  api.ts
```

---

## 🔥 Key Features Explained

### 1. Advanced Routing

- Catch-all routes: `/notes/filter/[...slug]`
- Parallel routes: `@sidebar`, `@modal`
- Intercepting routes for modal navigation

---

### 2. Modal via Routing

- Clicking a note opens a modal (`/notes/[id]`)
- Page content stays in the background
- Refresh opens full page

---

### 3. Navigation Behavior

- ESC closes modal
- Click outside closes modal
- Browser back button closes modal
- Returns to the previous route (e.g. `/notes/filter/Work`)

---

### 4. Server + Client Data Fetching

- Server-side prefetch with React Query
- Hydration via `HydrationBoundary`
- Client-side cache reuse

---

## 📦 API

Uses external API:

```
https://notehub-public.goit.study/api
```

Authorization via token:

```
NEXT_PUBLIC_NOTEHUB_TOKEN
```

---

## ⚙️ Installation

```bash
npm install
npm run dev
```

---

## 📌 Notes

- Built using Next.js App Router best practices
- Implements production-like UX patterns
- Clean separation of server and client logic

---

## 👨‍💻 Author

Developed as part of a FullStack learning journey.

---

## ✅ Status

✔ Fully functional
✔ Ready for review
✔ Matches technical requirements
