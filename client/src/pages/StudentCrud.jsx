import Layout from "../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";

const StudentCrud = () => {
  const [id, setId] = useState("");
  const [stname, setName] = useState("");
  const [course, setCourse] = useState("");
  const [students, setUsers] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get(
      "https://localhost:7115/api/Student/GeStudent"
    );
    setUsers(result.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7115/api/Student/AddStudent", {
        stname: stname,
        course: course,
      });
      alert("Student Added Successfully");
      setId("");
      setName("");
      setCourse("");

      Load();
    } catch (err) {
      alert(err);
    }
  }

  async function editStudent(students) {
    setName(students.stname);
    setCourse(students.course);

    setId(students.id);
  }

  async function DeleteStudent(id) {
    await axios.delete(
      "https://localhost:7115/api/Student/DeleteStudent/" + id
    );
    alert("Student deleted Successfully !!!");
    setId("");
    setName("");
    setCourse("");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.patch(
        "https://localhost:7115/api/Student/UpdateStudent/" +
          students.find((u) => u.id === id).id || id,
        {
          id: id,
          stname: stname,
          course: course,
        }
      );
      alert("Student Updated Successfully!!!!");
      setId("");
      setName("");
      setCourse("");

      Load();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <Layout>
        <div className="mx-auto bg-teal-400 w-[80%] px-4 py-2 mb-4 text-center rounded-lg shadow-2xl">
          <h1 className="font-bold text-3xl">Student Details</h1>
          <div className="container mt-4">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  hidden
                  value={id}
                  onChange={(event) => {
                    setId(event.target.value);
                  }}
                />

                <input
                  type="text"
                  className="h-10 mt-2 rounded-md px-4 py-2"
                  id="stname"
                  value={stname}
                  placeholder="Enter Student Name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  className="h-10 mt-2 rounded-md px-4 py-2"
                  id="course"
                  value={course}
                  placeholder="Enter Student Course"
                  onChange={(event) => {
                    setCourse(event.target.value);
                  }}
                />
              </div>
              <div className="flex justify-center items-center  gap-2 mt-2 ">
                <button
                  className="px-2 py-1 bg-green-900 text-white hover:ring-2 rounded-lg"
                  onClick={save}
                >
                  ADD
                </button>
                <button
                  className="px-2 py-1 bg-red-400 text-white hover:ring-2 rounded-lg"
                  onClick={update}
                >
                  UPDATE
                </button>
              </div>
            </form>
          </div>
          <br></br>
          <div className="bg-teal-500 text-gray rounded-lg">
            <table align="center">
              <thead>
                <tr className="bg-teal-950 text-white mt-2 rounded-md">
                  <th scope="col" className="lg:px-6 py-2">
                    Student Id
                  </th>
                  <th scope="col" className="lg:px-6 py-2">
                    Student Name
                  </th>
                  <th scope="col" className="lg:px-6 py-2">
                    Course
                  </th>

                  <th scope="col" className="lg:px-6 py-2">
                    Option
                  </th>
                </tr>
              </thead>
              {students.map(function fn(student) {
                return (
                  <tbody>
                    <tr>
                      <td scope="row">{student.id}</td>
                      <td>{student.stname}</td>
                      <td>{student.course}</td>

                      <td>
                        <button
                          type="button"
                          className="px-2 py-1 bg-green-950 text-white rounded-lg hover:ring-2"
                          onClick={() => editStudent(student)}
                        >
                          <BsPencilFill />
                        </button>
                        &nbsp;&nbsp;
                        <button
                          type="button"
                          className="px-2 py-1 bg-red-400 text-white rounded-lg hover:ring-2"
                          onClick={() => DeleteStudent(student.id)}
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default StudentCrud;
