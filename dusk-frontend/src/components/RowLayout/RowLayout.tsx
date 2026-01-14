import Link from "next/link";
import { Navbar } from "../Navbar/Navbar";

export const RowLayout = ({
  children,
  active,
}: Readonly<{ children: React.ReactNode; active: string }>) => {
  return (
    <div className="RowLayout">
      <Navbar active={active} row={true} />
      <div className="info">
        <div>
          <h1 className="accent">Create A Dusk Card</h1>
          <p>
            Create your Card <br /> with Dusk right now!
          </p>
        </div>
        <div>
          <div>
            <h3 className="accent">Phone</h3>
            <p>+389 49 123 123</p>
          </div>
          <div>
            <h3 className="accent">Email</h3>
            <p>info@dusk.com</p>
          </div>
          <div>
            <h3 className="accent">Office</h3>
            <p>
              230 Normal office, RandomCQ (Country) county (
              {
                <Link className="accent" href={"https://google.maps"}>
                  See on google maps
                </Link>
              }
              )
            </p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
