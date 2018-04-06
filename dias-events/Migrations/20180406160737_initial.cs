using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace dias.events.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    address1 = table.Column<string>(nullable: true),
                    address2 = table.Column<string>(nullable: true),
                    city = table.Column<string>(nullable: true),
                    colour = table.Column<string>(nullable: true),
                    country = table.Column<string>(nullable: true),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    name = table.Column<string>(nullable: true),
                    postalcode = table.Column<string>(nullable: true),
                    province = table.Column<string>(nullable: true),
                    showmap = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locations", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Prices",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    late = table.Column<decimal>(nullable: false),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    regular = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Prices", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "StaticForms",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    address1 = table.Column<string>(nullable: true),
                    address2 = table.Column<string>(nullable: true),
                    badgename = table.Column<string>(nullable: true),
                    city = table.Column<string>(nullable: true),
                    cleared = table.Column<DateTime>(nullable: true),
                    country = table.Column<string>(nullable: true),
                    coupon = table.Column<string>(nullable: true),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    firstname = table.Column<string>(nullable: true),
                    intensives = table.Column<string>(nullable: true),
                    lastname = table.Column<string>(nullable: true),
                    manuscriptcritiques = table.Column<int>(nullable: false),
                    member = table.Column<bool>(nullable: false),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    paid = table.Column<DateTime>(nullable: true),
                    phone = table.Column<string>(nullable: true),
                    portfoliocritiques = table.Column<int>(nullable: false),
                    postalcode = table.Column<string>(nullable: true),
                    state = table.Column<string>(nullable: true),
                    submitted = table.Column<DateTime>(nullable: false),
                    subtotal = table.Column<decimal>(nullable: false),
                    total = table.Column<decimal>(nullable: false),
                    workshops = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StaticForms", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "TimeSlots",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    end = table.Column<DateTime>(nullable: false),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    name = table.Column<string>(nullable: true),
                    start = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TimeSlots", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Organisations",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    active = table.Column<bool>(nullable: false),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    displaytitle = table.Column<string>(nullable: true),
                    locationid = table.Column<long>(nullable: true),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Organisations", x => x.id);
                    table.ForeignKey(
                        name: "FK_Organisations_Locations_locationid",
                        column: x => x.locationid,
                        principalTable: "Locations",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    active = table.Column<bool>(nullable: false),
                    activedate = table.Column<DateTime>(nullable: false),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    deactivatedate = table.Column<DateTime>(nullable: false),
                    description = table.Column<string>(nullable: true),
                    enddate = table.Column<DateTime>(nullable: false),
                    latedate = table.Column<DateTime>(nullable: false),
                    locationid = table.Column<long>(nullable: true),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    name = table.Column<string>(nullable: true),
                    organisationid = table.Column<long>(nullable: false),
                    slug = table.Column<string>(nullable: true),
                    startdate = table.Column<DateTime>(nullable: false),
                    title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Events", x => x.id);
                    table.ForeignKey(
                        name: "FK_Events_Locations_locationid",
                        column: x => x.locationid,
                        principalTable: "Locations",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Events_Organisations_organisationid",
                        column: x => x.organisationid,
                        principalTable: "Organisations",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FormEntries",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    defaultstate = table.Column<int>(nullable: false),
                    eventid = table.Column<long>(nullable: false),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    page = table.Column<int>(nullable: false),
                    sortorder = table.Column<int>(nullable: false),
                    type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormEntries", x => x.id);
                    table.ForeignKey(
                        name: "FK_FormEntries_Events_eventid",
                        column: x => x.eventid,
                        principalTable: "Events",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Submissions",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    cleared = table.Column<DateTime>(nullable: true),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    eventid = table.Column<long>(nullable: false),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    paid = table.Column<DateTime>(nullable: true),
                    submitter = table.Column<string>(nullable: true),
                    subtotal = table.Column<decimal>(nullable: false),
                    total = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Submissions", x => x.id);
                    table.ForeignKey(
                        name: "FK_Submissions_Events_eventid",
                        column: x => x.eventid,
                        principalTable: "Events",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Coupons",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Submissionid = table.Column<long>(nullable: true),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    maxuses = table.Column<int>(nullable: false),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    text = table.Column<string>(nullable: true),
                    type = table.Column<int>(nullable: false),
                    value = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Coupons", x => x.id);
                    table.ForeignKey(
                        name: "FK_Coupons_Submissions_Submissionid",
                        column: x => x.Submissionid,
                        principalTable: "Submissions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Questions",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Couponid = table.Column<long>(nullable: true),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    eventid = table.Column<long>(nullable: false),
                    locationid = table.Column<long>(nullable: true),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    paid = table.Column<bool>(nullable: false),
                    priceid = table.Column<long>(nullable: true),
                    required = table.Column<bool>(nullable: false),
                    slotid = table.Column<long>(nullable: false),
                    text = table.Column<string>(nullable: true),
                    timeslotid = table.Column<long>(nullable: true),
                    type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Questions", x => x.id);
                    table.ForeignKey(
                        name: "FK_Questions_Coupons_Couponid",
                        column: x => x.Couponid,
                        principalTable: "Coupons",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Questions_Events_eventid",
                        column: x => x.eventid,
                        principalTable: "Events",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Questions_Locations_locationid",
                        column: x => x.locationid,
                        principalTable: "Locations",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Questions_Prices_priceid",
                        column: x => x.priceid,
                        principalTable: "Prices",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Questions_FormEntries_slotid",
                        column: x => x.slotid,
                        principalTable: "FormEntries",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Questions_TimeSlots_timeslotid",
                        column: x => x.timeslotid,
                        principalTable: "TimeSlots",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Answers",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    paid = table.Column<bool>(nullable: false),
                    priceid = table.Column<long>(nullable: true),
                    questionid = table.Column<long>(nullable: true),
                    sortorder = table.Column<int>(nullable: false),
                    text = table.Column<string>(nullable: true),
                    value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Answers", x => x.id);
                    table.ForeignKey(
                        name: "FK_Answers_Prices_priceid",
                        column: x => x.priceid,
                        principalTable: "Prices",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Answers_Questions_questionid",
                        column: x => x.questionid,
                        principalTable: "Questions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Dependencies",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    behaviour = table.Column<string>(nullable: true),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    questionid = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dependencies", x => x.id);
                    table.ForeignKey(
                        name: "FK_Dependencies_Questions_questionid",
                        column: x => x.questionid,
                        principalTable: "Questions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Choices",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    answerid = table.Column<long>(nullable: true),
                    created = table.Column<DateTime>(nullable: false),
                    createdby = table.Column<string>(nullable: true),
                    modified = table.Column<DateTime>(nullable: false),
                    modifiedby = table.Column<string>(nullable: true),
                    questionid = table.Column<long>(nullable: false),
                    submissionid = table.Column<long>(nullable: false),
                    text = table.Column<string>(nullable: true),
                    type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Choices", x => x.id);
                    table.ForeignKey(
                        name: "FK_Choices_Answers_answerid",
                        column: x => x.answerid,
                        principalTable: "Answers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Choices_Questions_questionid",
                        column: x => x.questionid,
                        principalTable: "Questions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Choices_Submissions_submissionid",
                        column: x => x.submissionid,
                        principalTable: "Submissions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ChoiceAnswers",
                columns: table => new
                {
                    answerid = table.Column<long>(nullable: false),
                    choiceid = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChoiceAnswers", x => new { x.answerid, x.choiceid });
                    table.ForeignKey(
                        name: "FK_ChoiceAnswers_Answers_answerid",
                        column: x => x.answerid,
                        principalTable: "Answers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChoiceAnswers_Choices_choiceid",
                        column: x => x.choiceid,
                        principalTable: "Choices",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Answers_priceid",
                table: "Answers",
                column: "priceid");

            migrationBuilder.CreateIndex(
                name: "IX_Answers_questionid",
                table: "Answers",
                column: "questionid");

            migrationBuilder.CreateIndex(
                name: "IX_ChoiceAnswers_choiceid",
                table: "ChoiceAnswers",
                column: "choiceid");

            migrationBuilder.CreateIndex(
                name: "IX_Choices_answerid",
                table: "Choices",
                column: "answerid");

            migrationBuilder.CreateIndex(
                name: "IX_Choices_questionid",
                table: "Choices",
                column: "questionid");

            migrationBuilder.CreateIndex(
                name: "IX_Choices_submissionid",
                table: "Choices",
                column: "submissionid");

            migrationBuilder.CreateIndex(
                name: "IX_Coupons_Submissionid",
                table: "Coupons",
                column: "Submissionid");

            migrationBuilder.CreateIndex(
                name: "IX_Dependencies_questionid",
                table: "Dependencies",
                column: "questionid");

            migrationBuilder.CreateIndex(
                name: "IX_Events_locationid",
                table: "Events",
                column: "locationid");

            migrationBuilder.CreateIndex(
                name: "IX_Events_organisationid",
                table: "Events",
                column: "organisationid");

            migrationBuilder.CreateIndex(
                name: "IX_FormEntries_eventid",
                table: "FormEntries",
                column: "eventid");

            migrationBuilder.CreateIndex(
                name: "IX_Organisations_locationid",
                table: "Organisations",
                column: "locationid");

            migrationBuilder.CreateIndex(
                name: "IX_Questions_Couponid",
                table: "Questions",
                column: "Couponid");

            migrationBuilder.CreateIndex(
                name: "IX_Questions_eventid",
                table: "Questions",
                column: "eventid");

            migrationBuilder.CreateIndex(
                name: "IX_Questions_locationid",
                table: "Questions",
                column: "locationid");

            migrationBuilder.CreateIndex(
                name: "IX_Questions_priceid",
                table: "Questions",
                column: "priceid");

            migrationBuilder.CreateIndex(
                name: "IX_Questions_slotid",
                table: "Questions",
                column: "slotid",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Questions_timeslotid",
                table: "Questions",
                column: "timeslotid");

            migrationBuilder.CreateIndex(
                name: "IX_Submissions_eventid",
                table: "Submissions",
                column: "eventid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ChoiceAnswers");

            migrationBuilder.DropTable(
                name: "Dependencies");

            migrationBuilder.DropTable(
                name: "StaticForms");

            migrationBuilder.DropTable(
                name: "Choices");

            migrationBuilder.DropTable(
                name: "Answers");

            migrationBuilder.DropTable(
                name: "Questions");

            migrationBuilder.DropTable(
                name: "Coupons");

            migrationBuilder.DropTable(
                name: "Prices");

            migrationBuilder.DropTable(
                name: "FormEntries");

            migrationBuilder.DropTable(
                name: "TimeSlots");

            migrationBuilder.DropTable(
                name: "Submissions");

            migrationBuilder.DropTable(
                name: "Events");

            migrationBuilder.DropTable(
                name: "Organisations");

            migrationBuilder.DropTable(
                name: "Locations");
        }
    }
}
