using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactASP.Models;

namespace ReactASP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly StudentDBContext _studentDBContext;
        public StudentController(StudentDBContext studentDBContext)
        {
            _studentDBContext = studentDBContext;
        }

        //get All students
        [HttpGet]
        [Route("GeStudent")]
        public async Task<IEnumerable<Student>> GetStudents()
        {
            return await _studentDBContext.Student.ToListAsync();
        }

        //Add the student
        [HttpPost]
        [Route("AddStudent")]
        public async Task<Student> AddStudent(Student objStudent)
        {
            _studentDBContext.Student.Add(objStudent);
            await _studentDBContext.SaveChangesAsync(); 
            return objStudent;
        }

        //Update Student
        [HttpPatch]
        [Route("UpdateStudent/{id}")]
        public async Task<Student> UpdateStudent(Student objStudent)
        {
            _studentDBContext.Entry(objStudent).State = EntityState.Modified;
            await _studentDBContext.SaveChangesAsync();
            return objStudent;
        }

        [HttpDelete]
        [Route("DeleteStudent/{id}")]
        public bool DeleteStudent(int id)
        {
            bool a= false;
            var student = _studentDBContext.Student.Find(id);
            if (student != null)
            {
                a = true;
                _studentDBContext.Entry(student).State = EntityState.Deleted;
                _studentDBContext.SaveChanges();    
            }
            else
            {
                a = false;
            }
            return a;
        
        
        }


    }
}
