import { useSearchParams } from "react-router";
const data = [
  { song: "hello", artist: "adele" },
  { song: "shape of you", artist: "ed sheeran" },
  { song: "blinding lights", artist: "the weeknd" },
  { song: "watermelon sugar", artist: "harry styles" },
  { song: "levitating", artist: "dua lipa" },
  { song: "good 4 u", artist: "olivia rodrigo" },
  { song: "stay", artist: "the kid laroi" },
  { song: "peaches", artist: "justin bieber" },
  { song: "drivers license", artist: "olivia rodrigo" },
  { song: "bad habits", artist: "ed sheeran" },
];

function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const a = parseInt(searchParams.get("a"));
  const b = parseInt(searchParams.get("b"));
  const isNotNumber = isNaN(a) || isNaN(b);

  return (
    <>
      {/* {q && (
        <>
          {data
            .filter((item) => item.song === q)
            .map((item) => (
              <div className="bg-amber-600 text-white p-5 text-3xl rounded-xl">
                {item.artist}
              </div>
            ))}
        </>
      )} */}
      {/* <button
        onClick={() => {
          setSearchParams("a=12&b=24");
        }}
      >
        Change Params
      </button>
      <div className="bg-purple-700 text-white">
        sum of searchParams= {isNotNumber ? "Your input is incorrect" : a + b}
      </div> */}
    </>
  );
}

export default About;
