// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// export default function Home() {
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="text-center">
//         <h2>hellooo</h2>
//         <Link href="/dashboard">
//           <Button>Hellooooo</Button>
//         </Link>
//       </div>
//     </div>
//   );
// }


// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold mb-4">Welcome to AI Mock Interview</h1>
//         <p className="text-lg mb-6">
//           Prepare for your interviews with AI-generated questions tailored just for you.
//           Practice anytime, anywhere, and boost your confidence.
//         </p>
//         <Link href="/sign-in">
//           <Button>Start Your Mock Interview</Button>
//         </Link>
//       </div>
//     </div>
//   );
// }







import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 text-black">
      <div className="text-center p-8 rounded-lg shadow-lg bg-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to AI Mock Interview</h1>
        <p className="text-lg mb-6">
          Prepare for your interviews with AI-generated questions tailored just for you. 
          Practice anytime, anywhere, and boost your confidence.
        </p>
        <div className="mb-8">
          <p className="text-left">🌟 <strong>Key Features:</strong></p>
          <ul className="list-disc list-inside text-left mt-2">
            <li>Personalized interview questions</li>
            <li>Real-time feedback on your answers</li>
            <li>Progress tracking to measure your improvement</li>
          </ul>
        </div>
        <Link href={'/dashboard'}>
          <Button className="bg-black text-white hover:bg-gray-700 transition duration-300">
            Start Your Mock Interview
          </Button>
        </Link>
        <p className="mt-4 text-sm">
          Join thousands of users who have aced their interviews!
        </p>
      </div>
    </div>
  );
}
