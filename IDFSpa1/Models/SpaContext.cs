using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace IDFSpa.Models
{
    public class SpaContext : DbContext
    {
        public SpaContext(DbContextOptions<SpaContext> options)
            : base(options)
        {
        }

        public DbSet<AccountModel> AcctItems { get; set; }
    }
}
