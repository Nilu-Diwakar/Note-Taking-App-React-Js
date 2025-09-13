import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from "./layouts/RootLayout"
import NoteLayout from './layouts/NoteLayout'
import AllNotes from './pages/AllNotes'
import ArchivedNotes from "./pages/ArchivedNotes"
import CreateNotes from './components/CreateNotes'
import EditNotes from './components/EditNotes'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children:[
        {
          // in case of Layouts, not path is needed -> they alaways rendered with child if route is matched
          element: <NoteLayout />,
          children:
          [
            {
              index: true,
              element : <AllNotes />,
              // element: <Navigate to="notes" replace />,
            },
            {
              path: "notes",
              element : <AllNotes />,
              children:
              [
                {
                  path: "create",
                  element: <CreateNotes />,
                },
                {
                  path: ":noteId",
                  element: <EditNotes />,
                },
              ],
            },
          ],
        },
        // Archive ROutes:-
        // {
        //   element: <NoteLayout/>,
        //   children:
        //   [
        //     {
        //       path: "archives",
        //       // element : <ArchivedNotes />,
        //       element : <div>working on archive</div>,
        //       children:
        //       [
        //         {
        //           path: ":noteId",
        //           element: <EditNotes />,
        //         },
        //       ],
        //     },
        //   ],
        // },
      ]
    }
  ]
)

function App() {
  return (
    <div className='w-full h-screen overflow-x-hidden relative'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
