using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using dias.events.Data.Platform;

namespace dias_events.Data {
    public class DiasContext : DbContext {
        public DiasContext(DbContextOptions<DiasContext> options) : base(options) { }

        public DbSet<Answer> Answers { get; set; }
        public DbSet<Choice> Choices { get; set; }
        public DbSet<ChoiceAnswer> ChoiceAnswers { get; set; }
        public DbSet<Coupon> Coupons { get; set; }
        public DbSet<Dependency> Dependencies { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<FormEntry> FormEntries { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Organisation> Organisations { get; set; }
        public DbSet<Price> Prices { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Static> StaticForms { get; set; }
        public DbSet<Submission> Submissions { get; set; }
        public DbSet<TimeSlot> TimeSlots { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) {
            builder.Entity<ChoiceAnswer>()
                .HasKey(x => new { x.answerid, x.choiceid });
        }

        public string user { get; set; } = "anonymous";

        public override int SaveChanges() {
            var changeSet = ChangeTracker.Entries<Common>();

            if (changeSet != null) {
                foreach (var entry in changeSet.Where(x => x.State != EntityState.Unchanged)) {
                    if (entry.State == EntityState.Added) {
                        entry.Entity.created = DateTime.Now;
                        entry.Entity.createdby = user;
                    }

                    entry.Entity.modified = DateTime.Now;
                    entry.Entity.modifiedby = user;
                }
            }

            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken)) {
            var changeSet = ChangeTracker.Entries<Common>();

            if (changeSet != null) {
                foreach (var entry in changeSet.Where(x => x.State != EntityState.Unchanged)) {
                    if (entry.State == EntityState.Added) {
                        entry.Entity.created = DateTime.Now;
                        entry.Entity.createdby = user;
                    }

                    entry.Entity.modified = DateTime.Now;
                    entry.Entity.modifiedby = user;
                }
            }

            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
