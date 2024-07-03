using Microsoft.EntityFrameworkCore;

namespace ReactASP.Models
{
    public class StudentDBContext : DbContext
    {
        public StudentDBContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Student> Student { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=LAPTOP-6822EHF5; Initial Catalog=lbs;Integrated Security=true;TrustServerCertificate=true");
        }
    }
}
