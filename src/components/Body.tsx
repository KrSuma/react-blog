import {Container} from "react-bootstrap";
import {Stack} from "react-bootstrap";
import Sidebar from "./Sidebar";
import React, {ReactNode} from "react";

// export default function Body({sidebar, children}) {
//   return (
//     <Container>
//       <Stack direction="horizontal" className="Body">
//         {sidebar && <Sidebar />}
//         <Container className="Content">
//           {children}
//         </Container>
//       </Stack>
//     </Container>
//   )
// }

interface BodyProps {
  sidebar: boolean;
  children: ReactNode;
}

const Body: React.FC<BodyProps> = ({sidebar, children}) => {
  return (
    <Container>
      <Stack direction="horizontal" className="Body">
        {sidebar && <Sidebar />}
        <Container className="Content">
          {children}
        </Container>
      </Stack>
    </Container>
  )
}

export default Body;