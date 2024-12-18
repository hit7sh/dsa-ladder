import CodeEditor from "./CodeEditor";
import CodingProblem from "./CodingProblem";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./components/ui/button";
import RingLoader from "react-spinners/RingLoader";
import CodingProblemsMock from '../mocks/CodingProblemsMock.json'
import { useEffect, useState } from "react";
import { Problem } from "./types/problemsType";
import { BACKEND_BASE_URL } from "./constants";
import { FcGoogle } from "react-icons/fc";

import axios from "axios";

function App() {

  const {
    user,
    loginWithRedirect,
    isAuthenticated,
    logout,
    isLoading,
  } = useAuth0();
  const [problemsLoading, setProblemsLoading] = useState(true);
  const [problems, setProblems] = useState<Problem[] | undefined | any>(CodingProblemsMock);
  const [currentProblem, setCurrentProblem] = useState<Problem | any>(CodingProblemsMock[0]);
  const [solvedProblems, setSolvedProblems] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      setProblemsLoading(true);
      const res = await axios.get(`${BACKEND_BASE_URL}/problems`);
      setProblems(res?.data);
      setProblemsLoading(false);
      setCurrentProblem(res?.data?.[0]);
    })();
  }, [])
  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        await axios.post(`${BACKEND_BASE_URL}/log-user`, {
          userEmail: user?.email,
        });
        const { data } = await axios.post(`${BACKEND_BASE_URL}/get-solved-problems`, {
          userEmail: user?.email,
        });
        if (data?.length)
          setSolvedProblems(data);
      })();
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <RingLoader
          color="green"
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  }
  // {
  //   "given_name": "Hitesh",
  //     "nickname": "hit7sh",
  //       "name": "Hitesh",
  //         "picture": "https://lh3.googleusercontent.com/a/ACg8ocKsEjn8mRitZl90cej2GgXJnZQm_jCH9Plhu9LNm2Mzbc_z=s96-c",
  //           "updated_at": "2024-11-14T15:03:00.879Z",
  //             "email": "hit7sh@gmail.com",
  // }

  return (
    <>
      <SidebarProvider defaultOpen={false} >
        <AppSidebar
          problems={problems}
          currentProblem={currentProblem}
          setCurrentProblem={setCurrentProblem}
          solvedProblems={solvedProblems}
        />
        <main className="w-screen h-screen overflow-hidden">
          <div className="flex justify-between bg-blue-500 font-bold">

            <SidebarTrigger />
            {problemsLoading && <div className="text-red-500">Backend is loading</div>}
            <div className="font-serif flex items-center justify-center">Dsa Ladder </div>
            {
              isAuthenticated ? (
                <div className="pr-5">{user?.given_name || user?.name || user?.email}
                  <img className="ml-1 inline-flex bottom-5 right-5 w-6 h-6 rounded-full object-cover"
                    src={user?.picture} height="10px" width="10px" />
                  <Button className="rounded h-6 ml-2 bg-white" onClick={() => logout()} variant="secondary">
                    Log Out
                  </Button>
                </div>
              ) : (
                <button
                  className="rounded mr-2 text-sm flex bg-gray-200 pr-1 pl-1 justify-center items-center font-medium"
                  onClick={() => loginWithRedirect({
                    authorizationParams: {
                      connection: 'google-oauth2'
                    }
                  })} > Sign in with <span className="mt-1 ml-1"><FcGoogle /></span>oogle </button>
              )
            }
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CodeEditor
              isAuthenticated={isAuthenticated}
              problemTitle={currentProblem?.title}
              userEmail={user?.email}
              solvedProblems={solvedProblems}
              setSolvedProblems={setSolvedProblems}
            />
            <CodingProblem problem={currentProblem} />
          </div>
        </main>
      </SidebarProvider>
    </>
  )
}

export default App;
