const age = 20;
let bonus_salary;

if (age <= 18)
{
    bonus_salary = 0;
}
else if ((age < 18) && (age < 40))
{
    bonus_salary = 10000;
}
else if ((age > 40) && (age <= 60))
{
    bonus_salary = 20000;
}
else if (age > 60)
{
    bonus_salary = 40000;
}
console.log (bonus_salary);

// Ternary Operator
const age_1 = 30;
const canVote_1 = age_1 >= 18 ? "Yes" : "No";
console.log (canVote_1);

// Longer form equivalent
let canVote_2;
if (age_1 >= 18)
{
    canVote_2 = true;
}
else
{
    canVote_2 = false;
}

// Switch statement
let date;
switch (date)
{
    case "Monday":
        console.log("at the beginning of the week");
        break;
    case "Friday":
        console.log("almost weekend");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
    Default:
        console.log("at the midweek");
}

