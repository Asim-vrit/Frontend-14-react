let name = "hello i am someone";
function giveName() {
  return "Asim";
}
let names = ["name1", "name2", "name3", "name4"];
let student = { name: "ram", class: "skillshikshya" };
let students = [
  { name: "ram", class: "frontend" },
  { name: "shyam", class: "python" },
  { name: "hari", class: "DM" },
  { name: "hari", class: "DM" },
  { name: "hari", class: "DM" },
  { name: "hari", class: "DM" },
  { name: "hari", class: "DM" },
  { name: "hari", class: "DM" },
  { name: "hari", class: "DM" },
];
let modifiedStudents = students.map((item) => (
  <li className="card">
    <span className="bold">{item.class}</span>
    <span>
      <i>{item.name}</i>
    </span>
  </li>
));
console.log(modifiedStudents);

function Sub2() {
  return (
    <section className="highlight">
      <div>From Variable: {name}</div>
      <div>From function: {giveName()}</div>
      <div>From Array: {names.join(" ")}</div>
      <div>
        From Object: {student.name}, {student.class}
      </div>
      <div>
        From array of objects: <ul>{modifiedStudents}</ul>
      </div>
    </section>
  );
}
export default Sub2;
